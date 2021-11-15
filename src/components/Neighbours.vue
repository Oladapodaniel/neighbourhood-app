<template>
    <div class="neighbours" id="container">
        <div class="blur-bg" v-if="blurLoad"></div>
        <div class="loader-10 loader" v-if="loader"></div>
     <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="form-inline my-2 my-lg-0 ml-5">
                      
                     
                  </form>
                
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
         </nav> -->
         <Nav />
        <div v-for="neighbour in neighbours" :key="neighbour.id">
            <div>{{ neighbour.userId }}</div>
            <!-- <div>{{ neighbour.id }}</div> -->
        </div>
        
        <div  v-if="neighbours.length >= 1" class="container">
            <div class="row">
                <div class="col-sm-12 mt-5">
                        <div class="col-12 text-center display-4 pt-5">
                            Meet Your Neighbours
                        </div>
                        <div class="card-body card-bg">
                            <div v-for="neighbour in neighbours" :key="neighbour.userId" class="neighbourNames">
                                <div class="row">
                                    <div v-if="!neighbour.imageKey" class="col-2 col-sm-2 col-lg-1"><img src="../assets/avatar-female.png" width="100%" height="auto"></div>
                                    <div v-else class="col-2 col-sm-2 col-lg-1"><img :src="neighbour.imageKey" class="image" width="100%"></div>
                                    <div class="col-6">
                                        <div>{{ neighbour.name }}</div>
                                        <div class="text-small">active</div>
                                    </div>
                                    <div class="col-2 col-lg-1 offset-lg-2 align-self-center"><img src="../assets/call.svg" @click="call(neighbour.phoneNumber)" class="pointer"></div>
                                    <div class="col-2 col-lg-1 align-self-center"><img src="../assets/whatsapp.svg" @click="whatsapp(neighbour.phoneNumber)" class="pointer"></div>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center text-center"><div class="push-down"><div>Whoops! You have no neigbours yet</div><div class="btn btn-invite mt-3" data-toggle="modal" data-target="#exampleModal">Invite</div></div></div>

        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-4 mt-2">
                    <a href="whatsapp://send?text=Connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood.%20Click%20https://neighbourhood-app-f42b1.web.app%20now!">
                        <img src="../assets/icons/png/whatsapp.svg" width="63px">
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="http://www.facebook.com/sharer.php?u=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                     <a href="mailto:?Subject=Connect%20With%20Your%20Neighbours&amp;Body=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood%20https://neighbourhood-app-f42b1.web.app">
                        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="https://plus.google.com/share?url=https://neighbourhood-app-f42b1.web.app" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="https://twitter.com/share?url=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-invite">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
    </div>
</template>

<script>
import db from '../firebase/init'
import SearchNeighbour from './SearchNeighbour'
import disCheck from '../distanceCheck/distanceCheck'
import Nav from "./Nav"
import  { auth } from "firebase/app";
export default {
    name: 'Neighbours',
    components: {
     SearchNeighbour,
     Nav
  },
    data () {
        return {
            neighbours: [],
            profileName: null,
            loader: true,
            blurLoad: true,
            user: auth().currentUser
        }
    },
    methods: {
        call (number) {
        //    window.open(`tel:${number}`)
           window.location.href = `tel:${number}`
        },
        whatsapp (number) {
            window.location.href = `https://wa.me/+234${number}`
        },
        getProfile () {
            const uid = this.$store.getters.currentUser.uid ? this.$store.getters.currentUser.uid : this.user.uid
                db.collection("signUp").where('uid', '==', uid).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => { 
                        // console.log(doc.data())
                        this.profileName = doc.data().name
                    })
                })
        }
    },
    created() {
        this.getProfile()

        navigator.geolocation.getCurrentPosition( (position) => {
      var currentLocation = position.coords
      var userLocation = { lat: currentLocation.latitude, long: currentLocation.longitude }

      db.collection('signUp').get()
          .then(snapshot => {
              snapshot.forEach((doc) => {
      
                      // The target longitude and latitude
                  var targetlong = doc.data().userLocation.long;                         
                  var targetlat = doc.data().userLocation.lat;
                  let distance = disCheck(targetlat, targetlong, userLocation.lat, userLocation.long)
                  if (distance <= 1 && distance >= 0) {
                      if (doc.data().name !== this.profileName) {
                          this.neighbours.push(doc.data()) 
                          this.blurLoad = false
                          this.loader = false 
                      }
                      
                      // this.$store.dispatch('neighbours', doc.data())
                      // this.$store.dispatch('addNeighbours', doc.data())
                      // console.log(this.neighbourArr)
                  }

                  
              })
    
          })
        //   console.log(this.neighbourArr)
        //   this.$store.dispatch('neighbours', this.neighbourArr)
          
     })

        
        // Get my profile and check if im in the neighbour array
        // db.collection('signUp').get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             if (this.$route.params.userId === doc.id) {
        //                 this.profileName = doc.data().name
        //                 this.blurLoad = false
        //                 this.loader = false
        //                 // this.profile.userId = doc.id
                        
        //                     // console.log(this.$route.params.userId)
        //             }
        //         })
        //            // Store each from in the array excluding myself
        //                 // this.$store.getters.neighbours.forEach (neighbour => {
                            
        //                 // })
        //     })

            

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
    mounted () {
        console.log(this.neighbours)
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
        /* width: 60px; */
        /* height: 100%; */
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

    .btn-invite {
        border-radius: 35px;
        background: #BB4B01 0% 0% no-repeat padding-box;
        box-shadow: 5px 15px 45px #00000042;
        color: rgba(255, 255, 255, 0.918);
    }

    .modal-content {
         border-radius: 0;
         background: rgba(15, 15, 15, 0.87);
         color: white;
     }

     .modal-content .container .row div img{
        width: 50px;
        padding: 10px;
        border: 0;
    }

    .push-down {
        margin-top: 80px;
    }

    .loader {
       position: absolute;
       top: 50%;
       left:50%;
       z-index: 2;
       
     }

     .blur-bg {
      
       width: 100%;
       height: 100vh;
       position: absolute;
       z-index: 1;
       background-color: black;
       opacity: 0.9;
       /* filter: blur(5px) brightness(30%); */
     }
</style>