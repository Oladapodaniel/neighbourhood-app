<template>
 <div class="landing-page">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
                  <ul class="navbar-nav ml-auto text-center">
                      <!-- <li class="nav-item mr-5">
                          About 
                      </li> -->
                     
                      <!-- <li class="nav-item active mr-5">
                          Sign In
                      </li> -->
                      <li class="nav-item">
                        <router-link :to="{ name: 'SignUp' }" class="router-link1"> Sign Up</router-link>
                      </li>
                  </ul>
              </div>
              </div>
         </nav>
         <div class="first-pane">
             <div class="container">
             <div class="row row-content">
             <div class="col-10 col-md-7 offset-1 offset-md-0">
                 <div class="neighbour-background adjust">
                     <div class="welcome-text anim1">Welcome to</div>
                     <div class="neighbour anim1"><span><img src="../assets/logo.jpg" width="50px"></span> The Neighbourhood</div>
                    <div class="neighbour-text mt-3 anim1">Create an online social community with your neighbours. Strengthens your bond and get dire and spontanous needs met.</div>
                    <div class="neighbour-button mt-4 anim1">
                        <span>
                            <router-link :to="{ name: 'SignUp' }" class="router-link2">Get Started</router-link>
                        </span>
                        <!-- <span class="ml-3">About</span> -->
                    </div>
                 </div>
             </div>
             <div class="col-10 col-md-5 col-xl-4 offset-1 offset-md-0 offset-xl-1">
                <div class="card1 card adjust">
                    <div class="card-body">
                        <form>
                             <div class="login-title">LOG IN</div>
                            <div class="form-group">
                            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Email">
                            </div>
                            <div class="form-group">
                               
                                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <!-- <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div> -->
                            <button type="submit" @click.prevent="login" class="btn btn-info mt-2">Log In</button>
                            <div class="mt-2 text-small text-danger" v-if="feedback">{{ feedback }}</div>
                            <!-- <div class="text-small text-center mt-2"> forgot password?</div> -->
                            <div class="text-small text-center mt-3">Dont have an account? 
                                <router-link :to="{ name: 'SignUp'}">SignUp</router-link>
                            </div>
                    </form>
                    </div>
                </div>
             </div>
             <div class="col-md-7 d-none d-md-block">
                <img src="../assets/svg-5.svg" class="online-friends" width="87%" height="250px">
             </div>
          
         </div>
         </div>
         
         </div>
         <div class="second-pane">
            <div class="container">
                <div class="row row-content">
                    <!-- <div class="adjust-second"> -->
                        <div class="col-12 text-center adjust-second-top anim2">
                            <div>When neighbours start talking, good things happen.</div>
                        </div>
                   
                        
                        <div class="col-4 offset-1 offset-sm-0 col-lg-1 d-sm-none d-lg-block text-top row align-content-center"><img src="../assets/add-friend.svg" width="80%"></div>
                        <div class="col-10 offset-1 offset-sm-0 col-sm-5 text-top row anim3-text">Build a stronger neighbourhood
                            Connect with your neighbours to stay informed and share useful local information</div>
                        <div class="col-sm-6 offset-1 offset-lg-0 d-none d-sm-block anim3 mt-5"><img src="../assets/svg-2.svg" width="100%" height="150px"></div>
                        <div class="col-sm-6 mt-5 d-none d-sm-block anim4"><img src="../assets/svg-3.svg" width="100%" height="150px"></div>
                        <div class="col-4 offset-1 offset-sm-0 col-lg-1 d-sm-none d-lg-block text-top anim4-text row align-content-center"><img src="../assets/notification.svg" width="80%"></div>
                        <div class="col-10 offset-1 offset-sm-0 col-sm-5 text-top anim4-text row">Keep the neighbourhood safe
                            Look out for each other and send updates to keep the neighbourhood safe.
                        </div>
                            <div class="col-4 offset-1 offset-sm-0 col-lg-1 d-sm-none d-lg-block text-top row align-content-center"><img src="../assets/connect.svg" width="80%"></div>
                        <div class="col-10 offset-1 offset-sm-0 col-sm-5 mb-5 text-top row">Share goods and recommendations
                            Find a great babysitter or trusty dentist. Borrow a ladder or sell that old bookcase.</div>
                        <div class="col-sm-5 d-none d-sm-block text-top adjust-second-bottom anim5"><img src="../assets/svg-4.svg" width="100%" height="150px"></div>
                    <!-- </div> -->
                   
                    
                </div>
            </div>
              <!-- <img src="../assets/florian-van-duyn-yqsRxqKKKXM-unsplash.jpg" width="70%" height="700"> -->
         </div>
         <div class="third-pane">
             <div class="container">
                 <div class="row row-content">
                     <div class="col-10 offset-1 offset-sm-0 col-sm-12 adjust-third-top text-center anim2">A private environment designed just for you and your neighbours.</div>
                         <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 mt-5 card-adjust adjust-second-bottom">
                            <div class="card shad card2 h-100">
                            <img src="../assets/secured.jpg" class="card-img-top" alt="secured">
                            <div class="card-body">
                                <p class="card-text ">Password-protected websites
                                Each website is password-protected and not accessible by search engines</p>
                            </div>
                            </div>
                         </div>
                         <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 mt-5 card-adjust adjust-second-bottom">
                              <div class="card card2 shad h-100">
                            <img src="../assets/people.jpg" class="card-img-top" alt="secured">
                            <div class="card-body">
                                <p class="card-text">Only real neighbours allowed
                                Each member must verify their address to join so you know you can trust who you are sharing with.</p>
                            </div>
                            </div>
                         </div>
                         <div class="col-8 offset-2 offset-sm-3 offset-md-0 col-sm-6 col-md-4 mt-5 adjust-second-bottom">
                             <div class="card card2 shad h-100">
                            <img src="../assets/confidential.jpg" class="card-img-top" height="192px" alt="secured">
                            <div class="card-body">
                                <p class="card-text">Your personal information is safe
                                We will never share your information with third parties.</p>
                            </div>
                            </div>

                         </div>
                         <!-- <div class="col-sm-6"><img src="../assets/svg-6.svg" width="100%"></div> -->
                        
                 </div>
             </div>
         </div>
         <div class="fourth-pane">
             <div class="footer-pane bg-dark text-white">
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
                        </div>
         </div>
        
   
         
        
        
        
             
             
  </div>
</template>


<script>


import { bus } from '../main'
import db from '../firebase/init'
import disCheck from '../distanceCheck/distanceCheck'
export default {
  name: 'LandingPage',
  data () {
    return {
        email: '',
        password: '',
        getDetails: [],
        IndividualDetail: null,
        feedback: null,
        // neighbourArr: []
        
    }
  },
  methods: {
      login () {
        for (let i = 0; i < this.getDetails.length; i++) {
            
        // Get their location
                // navigator.geolocation.getCurrentPosition( (position, error) => {
                // var currentLocation = position.coords
                // var userLocation = { lat: currentLocation.latitude, long: currentLocation.longitude }
                
                // let distance = disCheck(this.getDetails[i].userLocation.lat, this.getDetails[i].userLocation.long, userLocation.lat, userLocation.long)
                
                // if (distance <= 1 && distance >= 0) {
                //     this.neighbourArr.push(this.getDetails[i])
                // }
                if (this.email === this.getDetails[i].email && this.password === this.getDetails[i].password ) {
                    this.IndividualDetail = this.getDetails[i]

                    // Get users location to update it in firebase
                    navigator.geolocation.getCurrentPosition( (position, error) => {
                    var currentLocation = position.coords
                    var userLocation = { lat: currentLocation.latitude, long: currentLocation.longitude }

                        // Now Update it
                        db.collection('signUp').doc(this.IndividualDetail.id).update({
                            userLocation: {
                                lat: userLocation.lat,
                                long: userLocation.long
                            }
                        })
                    })
                    
                    this.$router.push({ name: 'Timeline', params: { userId: this.IndividualDetail.id } })
                    // console.log(this.IndividualDetail.id)
                } else if (!this.email || !this.password) {
                    this.feedback = 'Please Fill In Your Details'
                    setTimeout(() => {
                        this.feedback = null
                    }, 3000);
                }   else {
                    this.feedback = 'Please Enter Correct Details'
                    setTimeout(() => {
                        this.feedback = null
                    }, 3000);
            }

        //     if (error) {
        //     swal('Geolocation Not Supported', 'Browser does not support Geolation', 'error')
        //     }

        // })
            
        }
        this.$store.dispatch('neighbours', this.neighbourArr)
       

      
      }
  },
  created () {
      db.collection('signUp').get()
        .then((snapshot) => {
            snapshot.forEach(doc => {
                // console.log(doc.data(), doc.id)
                let details = doc.data()
                details.id = doc.id
                this.getDetails.push(details)
            })
        })
    //   bus.$on('updateArr', (data) => {
    //       let ind = []
    //       ind.push(data)
    //       this.array = ind
    //   })
    
  
  },
  mounted () {
        
  
 
      let tl = gsap.timeline()
      tl.from('.anim1',{ duration: 1.5, x: -100, opacity: 0, stagger: 0.5 })
      tl.from('.card1', { duration: 1, opacity: 0, y: -100 })
      gsap.from('.anim3', { duration: 3, opacity: 0, ease: "expo", rotate: 180, scale:0.1, scrollTrigger: {
          trigger: '.anim3',
          start: 'top 60%',
          end: 'bottom 40%',
          toggleAction: 'play pause resume restart'
      } })
      gsap.from('.anim2',{ duration: 1.5, y: -100, opacity: 0, scrollTrigger:{
          trigger: '.anim2',
          start: 'top 60%',
          end: 'bottom 40%'
      } })
      gsap.from('.anim4', { duration: 2, opacity: 0, ease: 'bounce', y: -200, scrollTrigger: {
          trigger: '.anim4',
          start: 'top 60%',
          end: 'bottom 40%'
      }})

      gsap.from('.anim5', { duration: 2, opacity: 0, ease: 'circ', y: -200, scrollTrigger: {
          trigger: '.anim5',
          start: 'top 60%',
          end: 'bottom 40%'
      }})

    tl.from('.card2',{ duration: 1.5, y: -100, opacity: 0, stagger: 0.7 })

    //     tl.to('.animate', 0.4, {
    //   scale: 0.8,
    //   rotation: 16,
    //   ease: Back.easeOut.config(1.7)
    // }) 
    //  tl.to(
    //   '.animate',
    //   0.5, 
    //   {
    //     scale: 0.9,
    //     opacity: 1,
    //   },
    //  '-=0.6' 
    // )
    //   tl.to('.animate', 1.2, {
    //   scale: 1,
    //   rotation: '-=16',
    //   ease: Elastic.easeOut.config(2.5, 0.5),
      
    // })
    // tl.to(
    //   '.animate',
    //   1.1,
    //   {
    //     scale: 3,
    //     opacity: 0,
    //     ease: Expo.easeOut,
    //   },
    //   '-=1.2'
    // )
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav li {
    padding: 5px;
    border: 1px solid white;
}


.first-pane {
    /* font-family: 'Poppins'; */
        background-color: rgb(250, 252, 255);
        /* background-color: rgb(224, 224, 224) */
        /* background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%); */
        background-color: #ffeaa7;
        background-image: linear-gradient(315deg, #ffeaa7 0%,rgb(197, 197, 197) 74%);
    }

    .first-pane .neighbour-button span {
        border: 1px solid rgb(43, 43, 43);
        padding: 7px 12px;
        
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

      .first-pane .neighbour-button span:hover {
        background-color: rgb(43, 43, 43);
    }

.card.adjust{
    border-radius: 0;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgba(255, 255, 255, 0.76);
}

.login-title {
    font-weight: 500;
    font-size: 1.5em;
    text-align: center;
    padding: 10px;
}

input {
    /* outline: none; */
    border: none;
    border-radius:0;
    border-bottom: 1px solid rgb(114, 114, 114);
    background: transparent;
}
input:focus {
    background: transparent;
}

.btn-info {
     background-color: rgb(43, 43, 43);
     outline: none;
     border:none;
     width: 100%;
     border-radius: 0;
        /* background-image: radial-gradient(circle at 80% -50%, rgb(249, 181, 35), rgba(0, 0, 0, 0)); */
}

.welcome-text{
    /* text-align: center; */
    font-size: 20px;
}

.neighbour {
    font-weight: 800;
    font-size: 2.6em;
    color: rgb(43, 43, 43);
    margin: 20px 0
}

.neighbour-background {
    padding: 20px;
    width: 100%
}
 .adjust {
    
    margin-top: 4em;
    margin-bottom: 5em;
}
 .online-friends {
    position: absolute;
    top: -7em;

}

.second-pane {
    color:rgb(255, 255, 255);
    background-color: rgb(43, 43, 43); 
}

.adjust-second-top {
  
    margin-top: 5em;
    font-size: 2em;
    }

.adjust-second-bottom {
  
     /* margin-top: 5em; */
    margin-bottom: 5em;
}

.text-small {
    font-size: 12px
}

.text-top {
    margin-top:5em;
}

.third-pane {
    background-color: rgb(211, 211, 211); 
}
.adjust-third-top {
    margin-top: 3em;
    font-size: 2em;
}

.card.shad {
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
}

.router-link1 {
    color: white;
}

.router-link2 {
    color: black;
}

.router-link1:hover {
    /* color: black; */
    text-decoration: none;
}

.router-link2:hover {
    color: rgba(255, 255, 255, 0.87);
    text-decoration: none;
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

@media (max-width: 767px) {
    .card.adjust {
        margin-top: -10px;
    }

    .card-adjust {
        margin-bottom: 1em
    }
}

@media (max-width: 455px) {
    .neighbour {
        font-size: 1.7em;
    }
}

@media (max-width: 305px) {
    .neighbour {
        font-size: 1.3em
    }
}
</style>
