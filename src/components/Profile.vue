<template>
    <div class="profile" id="container">
        
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <!-- <div><SearchNeighbour></SearchNeighbour></div> -->
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item mr-4 text-white">
                          <div><img src="../assets/icons/material icons/home.svg"></div>
                        <router-link :to="{ name: 'Timeline' }" class="text-white">Timeline</router-link>   
                      </li>
                      <li class="nav-item mr-4 text-white">
                          <div><img src="../assets/icons/material icons/neighbour.svg"></div>
                        <router-link :to="{ name: 'Neighbours' }" class="text-white">Neighbours</router-link>   
                      </li>
                      <li class="nav-item dropdown">
                            <!-- <div><img src="../assets/icons/material icons/user.svg"></div> -->
                            <a class="mt-3 nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ profile.name.split(' ')[0] }}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link  :to="{name: 'EditProfile'}"><div class="dropdown-item">Edit Proflie</div></router-link>
                                <div class="dropdown-divider"></div>
                                <router-link :to="{name: 'LandingPage'}"><div class="dropdown-item">Logout</div></router-link>
                            </div>
                        </li>
                  </ul>
                  

             </div>
              </div>
         </nav>


        

        

        <div class="container-fluid first-pane">
            <div class="row">
                <div class="display-picture push-down col-10 offset-1 col-sm-5">
                    <img :src="profile.imageKey" class="dp">
                </div>
                <div class="col-sm-6 push-down bg-profile">
                    <div class="name">{{ profile.name }}</div>
                    <div class="email">{{ profile.email }}</div>
                    <div class="phoneNumber">{{ profile.phoneNumber }}</div>
                    <div class="address">{{ profile.address }}</div>
                    <div class="date-of-birth">{{ profile.dateOfBirth }}</div>
                    <div class="password">{{ profile.password }}</div>                       
                </div>
            </div>
        </div>
        <!-- <div class="footer-pane bg-dark text-white">
            <div class="container">
                <div class="row">
                    <div class="align-self-center col-12 col-md-4">
                        <div class="navbar-brand" ><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></div>
                    </div>
                    <div class="footer-text col-6 col-md-4 mt-3">
                        <div>Timeline</div>
                        <div>Neighbours</div>
                        <div>Market</div>
                        <div>Nearby</div>
                    </div>
                    <div class="footer-text col-6 col-md-4 mt-3">
                        <div>Sign In</div>
                        <div>Sign Up</div>
                        <div>Contact Us</div>
                        <div>Logout</div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div>{{ imageKey1 }}</div> -->
        <div><img :src="imageKey1"></div>
        <input type="file" @change="image">
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    data () {
        name: 'profile'
        return {
            profile: null,
            imageKey1: null
        }
    },
    created () {
        db.collection('signUp').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (this.$route.params.userId === doc.id) {
                        this.profile = doc.data()
                        this.profile.userId = doc.id
                        // console.log(this.profile)
                            // console.log(this.$route.params.userId)
                    }
                })
            })

            // console.log(this.userId)
    },
    mounted () {
  
       let tl = gsap.timeline()
    //    let bgProfile = document.querySelector('.bg-profile')

    //    if (bgProfile) {
           tl.from('.bg-profile', { duration: 1, opacity: 0, y: -100 })
    //    } else {
    //        console.log('doesnot exist')
    //    }  
    },
    updated () {
        let container = document.querySelector('#container')
        window.addEventListener('scroll', function() {
            // console.log(window.pageYOffset + 'px', con)
            container.classList.remove('timeline')
            container.classList.add('background')
            });
    },
    methods: {
        image (e) {
            console.log(e.target.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (e) => {
                this.imageKey1 = e.target.result
            }
        }
    }
}
</script>

<style scoped>
    .profile {
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

    .push-down {
        margin-top: 80px;
    }

    .display-picture {
        width: 100%;
        /* height: auto;
        position: absolute;
        top: 50%;
        left:43%; */
        
    }
    .dp {
        margin: 50px 0;
        width: 100%;
        height: auto;
        /* border-radius: 50%; */
        box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2), 0 6px 6px rgba(0,0,0,0.23);
    }


    .first-pane {
        /* margin-top: 70px; */
    }

    .name {
        color: rgba(255, 255, 255, 0.945);
        font-size: 2.5em;
        font-weight: 700;
        padding: 14px 0 10px 0
    }

    .email {
        font-size: 0.8em;
        color: rgba(156, 156, 156, 0.733)
    }

    .phoneNumber {
        font-style: italic;
        color: rgb(238, 115, 0);
        /* font-size: 0.8em; */
    }

    .address {
        color: rgba(255, 255, 255, 0.726);
        font-size: 0.8em;
        margin-top: 20px
    }

    .date-of-birth, .password {
        color: rgba(255, 255, 255, 0.726);
        font-size: 0.8em
    }

    .footer-pane {
         /* margin-top: 30px; */
         padding: 20px
     }
    .footer-pane .container .row  .footer-text > div{
        font-size: 0.8em;
        font-weight: 100;
        padding: 3px;
    }

    .bg-profile {
        background-color: rgb(37, 37, 37);
        padding: 20px;
    }
</style>