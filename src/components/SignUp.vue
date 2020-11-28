<template>
    <div class="sign-up">
        <div class="blur-bg" v-if="blurLoad"></div>
        <div class="loader-10 loader" v-if="loader"></div>
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
                        <router-link :to="{ name: 'LandingPage' }" class="router-link"> Sign In</router-link>
                      </li>
                  </ul>
              </div>
              </div>
         </nav>
  <div class="image-background">
      <div class="container">
          <div class="row row-content">
              <div class="col-10 offset-1 offset-sm-0 col-sm-12 col-md-5 col-lg-5 neighbour-text align-self-center">
                  <div class="neighbour-text1"><sup><img src="../assets/icons/material icons/quote.svg"></sup>When neighbours meet good things happen.<sup><img src="../assets/icons/material icons/quote.svg"></sup></div>
                  <div class="neighbour-text2">Build a longlasting network and relationship with your neighbours.</div>
              </div>
             <div class="col-10 offset-1 offset-sm-0 col-sm-12 col-md-6 offset-md-1 col-lg-5 offset-lg-2 mt-5">
                <div class="card adjust-card">
                    
                    <div class="card-body">
                        <form>
                            <div class="signup-title">SIGN UP</div>

                            
                            <div class="row">
                                <div class="form-group col-12">
                                    <input type="text" class="form-control" v-model="name" id="name" ariadescribedby="name" placeholder="Name">
                                </div>

                                <div class="form-group col-12 col-sm-6">
                                    <input type="text" class="form-control" v-model="email" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Email">
                                </div>

                                <div class="form-group col-12 col-sm-6">
                                    <input type="number" class="form-control" v-model="phoneNumber" id="phoneNumber" ariadescribedby="phoneNumber" placeholder="Phone Number">
                                </div>
                            </div>
                            
                            <div class="row">


                                <div class="form-group col-12 col-sm-6">
                                    <input type="text" class="form-control" v-model="address" id="address" ariadescribedby="address" placeholder="Address">
                                </div>
                                <div class="form-group col-12 col-sm-6">
                                    <input type="date" class="form-control" v-model="dateOfBirth" id="dateOfBirth" ariadescribedby="dateOfBirth">
                                </div>

                                <div class="form-group col-12">
                                    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group col-12 form-check">
                                <input type="checkbox" v-model="check" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">By clicking on this, you verify that all details above are true, and you hav read and agree by the Terms and Conditions stated.</label>
                            </div>
                            <button type="submit" @click.prevent="signup" class="btn btn-info col-12">Sign Up</button>
                            <div class="mt-1 text-small text-danger" v-if="feedback">{{ feedback }}</div>
                     
                    </form>
                    </div>
                </div>
             </div>
        </div>
      </div>
  </div>
      
    </div>

</template>

<script>
import db from '../firebase/init'
import { bus } from '../main'
import disCheck  from '../distanceCheck/distanceCheck'
export default {
    name: 'SignUp',
    data () {
        return {
            name: null,
            email: null,
            phoneNumber: null,
            address: null,
            dateOfBirth: null,
            password: null,
            check: null,
            detailsArr: [],
            feedback: null,
            userId: null,
            // neighbourArr: [],
            geocodeLocation: null,
            loader: false,
            blurLoad: false
        }
    },
    methods: {
        signup () {
           this.blurLoad = true
           this.loader = true
            // if (!this.name || !this.email || !this.phoneNumber || !this.age || !this.address || !this.dateOfBirth || !this.password || !this.check) {
            //     this.feedback = 'Please Fill In required Input!'
            // }   else {

                // Get their location
                    // navigator.geolocation.getCurrentPosition( (position) => {
                    // var currentLocation = position.coords
                    // var userLocation = { lat: currentLocation.latitude, long: currentLocation.longitude }
                    // var userLocation = { lat: 22.9998668, long: 33.7345666777 }
                 
                    // Geocode users location
                //     const succesfulLookup = (position) => {
                //     const {latitude, longitude } = position.coords;
                //     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5642481b38ef4618803c56d2c3415008`)
                //     .then(response => response.json())
                //     .then(console.log)
                //     .catch(err => console.log(err))
                // }
                // navigator.geolocation.getCurrentPosition(succesfulLookup, done)

                //     function done (done) {
                //         // console.log(done)
                //         this.geocodeLocation = done
                //         // console.log(this.geocodeLocation)
                //         this.$store.dispatch('geocode', this.geocodeLocation)
                //     }

                    //  Details to send to database
                     let details = {
                    name: this.name,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    address: this.address,
                    dateOfBirth: this.dateOfBirth,
                    password: this.password,
                    check: this.check
                    // userLocation: userLocation
                    }

                    //  Send Details here
                    if (this.name && this.email && this.phoneNumber && this.address && this.dateOfBirth && this.password && this.check) {
                        db.collection('signUp').add(details)
                        .then(success => {
                            console.log('Successfully Uploaded')
                            db.collection('signUp').get()
                                .then(snapshot => {
                                    snapshot.forEach((doc) => {
                           
                        //    Signup success alert
                                    swal({
                                            title: "Welcome To Neighbourhood!",
                                            text: "Say Hi to your neighbours",
                                            icon: "success",
                                            button: "OK",
                                        });
                                      
                                    
                                           // The target longitude and latitude
                                        // var targetlong = doc.data().userLocation.long;                         
                                        // var targetlat = doc.data().userLocation.lat;
                                        // let distance = disCheck(targetlat, targetlong, userLocation.lat, userLocation.long)
                                        // if (distance <= 1 && distance >= 0) {
                                        //     this.neighbourArr.push(doc.data())
                                        // }
                                        if (details.name == doc.data().name && details.password == doc.data().password && doc.data().check){
                                                this.userId = doc.id
                                                details.userId = doc.id
                                                this.$router.push({ name: 'Timeline', params: { userId: this.userId } })
                                                this.blurLoad = false
                                                this.loader = false
                                            }   
                                        // console.log(userLocation.long, userLocation.lat, targetlong, targetlat)
                                    })
                                    // bus.$emit('neighbours', this.neighbourArr)
                                    // this.$store.dispatch('neighbours', this.neighbourArr)
                                    // this.$store.state.arr = this.neighbourArr;
                                })
                        })
                    }   else {
                        swal("Error", "Fill all Input Fields", "error")
                        this.blurLoad = false
                        this.loader = false
                    }
                    // })

                // //  Save their details with location to database
                //     db.collection('signUp').add(details)


        //Save user LOation to firebase
    //      db.collection('userLocation').add(userLocation)
    //             .catch(err => console.log(err))
    // }) 
            
               
               
               // db.collection('userLocation').get()
                //     .then(snapshot => {
                //         snapshot.forEach(doc => {
                //             if (doc.data()) {
                            
                //                 function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
                //                 var R = 6371; // Radius of the earth in km
                //                 var dLat = deg2rad(lat2-lat1);  // deg2rad below
                //                 var dLon = deg2rad(lon2-lon1); 
                //                 var a = 
                //                     Math.sin(dLat/2) * Math.sin(dLat/2) +
                //                     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                //                     Math.sin(dLon/2) * Math.sin(dLon/2)
                //                     ; 
                //                 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                //                 var d = R * c; // Distance in km
                //                 return d;
                //                 }

                //                 function deg2rad(deg) {
                //                 return deg * (Math.PI/180)
                //                 }
                        
                                
                //                 // The target longitude and latitude
                //                 var targetlong = doc.data().long                //                 var targetlat = doc.data().lat;

                //                 // Start an interval every 1s
                //                 // var OurInterval = setInterval(OnInterval, 1000);

                //                 // Call this on an interval
                //                 // function OnInterval() {
                //                 // Get the coordinates they are at
                //                 navigator.geolocation.getCurrentPosition(function success (position) {
                //                         // var currentLocation = pos.coords
                //                         // var userLocation = { lat: currentLocation.latitude,.longcurrentLocation.longitude }

                //                 var lat = position.coords.latitude;
                //                 var long = position.coords.longitude;
                //                 var distance = getDistanceFromLatLonInKm(targetlat, targetlong, lat, long);
                //                 let inMetres = distance/1000
                //                 // console.log(inMetres)
                //                 // console.log(lat, long)
                //                 // console.log(inMetres)
                //                 // Is it in the right distance? (200m)
                //                 if (distance <= 10) {
                //                     console.log('within its radius')
                //                     console.log(inMetres.toFixed(3) + " metres")
                //                     // All those one that falls within thesame proximity, save their details with their coordinates in the same collection here 
                                    
                //                      db.collection('signUp').add(details)
                //                     .catch(err => console.log(err))




                //                      // Redirect to Login Page
                //                     // this.$router.push({ name: 'Timeline', params: { userId:  } })
                                    
                                    
                //                     // Stop the interval
                //                     // stopInterval(OurInterval);

                //                     // Do something here cause they reached their destination
                //                 }
                //                 //  else {
                //                 //     console.log('Not within')
                //                 // }
                //                 })
                //                 // }
                //             } else{
                //                 console.log('No present location')
                //             }
                             
                //         })
                //     }).then(success => {
                //         // this.signUpSuccess = true
                //         //     console.log(this.signUpSuccess)
                //          db.collection('signUp').get()
                //             .then(snapshot => {
                //                 snapshot.forEach(doc => {
                //                     // console.log(doc.data())
                //                     // this.userId = doc.id
                //                     // console.log(this.name)
                //                     // console.log(doc.data().name)
                //                     // console.log(details.name)
                //                     if (details.name == doc.data().name) {
                                        
                //                         this.userId = doc.id
                //                         // console.log(this.userId)
                //                         // this.$router.push({name: 'Timeline', params: {userId: this.userId}})
                //                         console.log(this.userId)
                //                     } 
                                    
                //                 })
                //             })
                        
                //         }).catch(err => console.log(err))

                        
         
            // }
         
        // Save and get from local storage
        // // First get whatever is in local storage that has the 'signUp' key

        // let localData = localStorage.getItem('signUp')
 
        // // if defined then parse store data or use empty array
        
        // let detail = localData ? JSON.parse(localData) : []
        
        // // If there's something there Json dot parse it to display it
        // // If theres nothing pushe the data into an array
        
        // detail.push(details)
        
        // // then send the stringified version of that array to localstorage so that "getItem" can read it and display it :)
        
        // localStorage.setItem('signUp', JSON.stringify(detail))

                        
            // this.$router.push({ name: 'LandingPage' })
        }
    },
    created () {
        // console.log(disCheck)
    }
}
</script>

<style scoped>
.sign-up {
        background-color:rgb(228, 228, 228);
        background-image: linear-gradient(top,rgba(0, 0, 0, 0.514) 0%, rgb(0, 0, 0) 100%), url('../assets/signup-bg.png');
        background-repeat: no-repeat;
        background-size: 50%;
        height: 100vh;
}
    .router-link {
      color: white;
      padding: 5px;
      border: 1px solid white;
      text-decoration: none;
    }

/* 
    .image-background::before {
        content: "fderg";
        display: block;
        position: absolute;
        z-index: -2;
        width: 100%;
        height: inherit;
        top: 0;
        left: 0;
        background-image: -webkit-radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
        opacity: 0.7;
                
    } */

    .card {
     
        width: 100%;
        padding: 20px;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        /* position: absolute;
         top: 50px;
        left: -50%; */
    }
    .form-check-label {
        font-size:11px;
        font-family: 'poppins regular'
    }

    .signup-title {
        font-weight: 500;
        font-size: 1.5em;
        text-align: center;
        padding: 10px;
    }

    input {
        border: none;
        border-radius:0;
        border-bottom: 1px solid rgb(114, 114, 114);
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
    
    .text-small {
        font-size: 12px;
    }

    .neighbour-text1 {
        font-size: 2em;
        font-weight: 400;
        color: rgb(219, 219, 219)
    }

    .neighbour-text2 {
        font-size: 0.9em;
        color: rgba(255, 255, 255, 0.884);
        margin-top: 10px;
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


     @media (max-width: 767px) {
         .sign-up {
        background-color:rgb(228, 228, 228);
        background-image: linear-gradient(top,rgba(0, 0, 0, 0.514) 0%, rgb(0, 0, 0) 100%), url('../assets/signup-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        }
        
        .neighbour-text {
            margin-top: 70px;
        }
}
    

</style>