<template>
    <div class="neighbours" id="container">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="form-inline my-2 my-lg-0 ml-5">
                      
                      <!-- <input class="form-control search mr-sm-2" type="text" placeholder="Search your neighbours" arialabel="Search"> -->
                      <!-- <button class="btn btn-outline-info my-2 my-sm-0" type="submit" v-on:click.prevent="searchDoctor()">Search</button> -->
                  </form>
                   <!-- <div><SearchNeighbour></SearchNeighbour></div> -->
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item ml-4 text-white">
                          <div><img src="../assets/icons/material icons/home.svg"></div>
                        <router-link :to="{ name: 'Timeline' }" class="text-white">Timeline</router-link>   
                      </li>
                      <li class="nav-item ml-4 text-white">
                          <div><img src="../assets/icons/material icons/neighbour.svg"></div>
                        <router-link :to="{ name: 'Neighbours' }" class="text-white">Neighbours</router-link>   
                      </li>
                      <li class="nav-item ml-4">
                          <div><img src="../assets/icons/material icons/user.svg"></div>
                        <router-link  :to="{name: 'Profile'}" class="text-white">Profile</router-link>
                      </li>
                      <li class="nav-item ml-4">
                          <div><img src="../assets/icons/material icons/logout.svg"></div>
                        <router-link :to="{name: 'LandingPage'}" class="text-white">Logout</router-link>   
                      </li>
                  </ul>
                  

             </div>
              </div>
         </nav>
        <div v-for="neighbour in neighbours" :key="neighbour.id">
            <div>{{ neighbour.userId }}</div>
            <!-- <div>{{ neighbour.id }}</div> -->
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 mt-5">
                    <!-- <div class="card"> -->
                        <div class="col-12 text-center display-4 pt-5">
                            Meet Your Neighbours
                        </div>
                        <div class="card-body card-bg">
                            <div v-for="neighbour in neighbours" :key="neighbour.userId" class="neighbourNames">
                                <!-- <div v-if="neighbour.name !== profileame"></div> -->
                                <div class="row">
                                    <div class="col-2 col-sm-2 col-lg-1"><img :src="neighbour.imageKey" class="image"></div>
                                    <div class="col-6 offset-1 offset-sm-0">
                                        <div>{{ neighbour.name }}</div>
                                        <div class="text-small">active</div>
                                    </div>
                                    <!-- <div class="col-4 col-sm-3 align-self-center"><a :href="`tel:${neighbour.phoneNumber}`"><img src="../assets/call.svg"></a>&nbsp;&nbsp;&nbsp;<img src="../assets/chat.svg">&nbsp;&nbsp;&nbsp;<img src="../assets/whatsapp.svg"></div> -->
                                    <div class="col-3 col-sm-3 offset-sm-1 offset-lg-2 align-self-center"><img src="../assets/call.svg" @click="call(neighbour.phoneNumber)" class="pointer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/whatsapp.svg" @click="whatsapp(neighbour.phoneNumber)" class="pointer"></div>
                                </div>
                                
                                <!-- <div>{{ neighbour.imageKey }}</div> -->
                            </div>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/init'
import SearchNeighbour from './SearchNeighbour'
export default {
    name: 'Neighbours',
    components: {
     SearchNeighbour
  },
    data () {
        return {
            neighbours: [],
            profileName: null
        }
    },
    methods: {
        call (number) {
        //    window.open(`tel:${number}`)
           window.location.href = `tel:${number}`
        },
        whatsapp (number) {
            window.location.href = `https://wa.me/+234${number}`
        }
    },
    created() {
        

        
        // Get my profile and check if im in the neighbour array
        db.collection('signUp').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (this.$route.params.userId === doc.id) {
                        this.profileName = doc.data().name
                        // this.profile.userId = doc.id
                        
                            // console.log(this.$route.params.userId)
                    }
                })
                   // Store each from in the array excluding myself
                        this.$store.getters.neighbours.forEach (neighbour => {
                            if (neighbour.name !== this.profileName) {
                                this.neighbours.push(neighbour)
                            }
                        })
            })

            // this.neighbours = this.$store.state.neighbours
            // this.neighbours = this.$store.getters.neighbours


         
    
        // this.$store.state.neighbours.forEach(neighbour => {
        // db.collection('userNeighbours').add(neighbour)
        //     .then(success => {
        //         console.log(success)

        //         // Get neighbour for database to display after sending it there
        //         db.collection('userNeighbours').get()
        //             .then(snapshot => {
        //                 snapshot.forEach(doc => {
        //                     console.log(doc.data())
        //                 })
        //             })
        //     })
        // })
   
    },
    updated () {
        let container = document.querySelector('#container')
        window.addEventListener('scroll', function() {
            // console.log(window.pageYOffset + 'px', con)
            container.classList.remove('timeline')
            container.classList.add('background')
            });
    }
}
</script>

<style scoped>
    .neighbours {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100vh;
    }

    .background {
       background-color: rgba(224, 227, 231, 0.541);
       height: 100%;
    }
    nav {
        z-index: 10;
        position: absolute;
        width: 100%;
    }

    .image {
        width: 60px;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    }

    .neighbourNames {
        /* border: 2px solid red; */
        padding: 20px;
        margin: 10px 0;
        border-bottom: 1px solid rgb(196, 196, 196)
        /* background-color: rgb(228, 228, 228); */
         /* box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); */
    }

    .card-body.card-bg {
        /* background-color: #dfdfdf54 */
    }

    .text-small {
        font-size: 0.8em;
        color: rgb(138, 138, 138)
    }

    .pointer {
        cursor: pointer;
    }
</style>