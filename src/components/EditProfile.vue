<template>
    <div class="edit-profile" id="container">
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
         
           <div class="container">
               <div class="row align-content-center">
                   <div class="col-10 offset-1 mt-5">
                       <div class="card">
                           <div class="container">
                               <form class="col-sm-10 offset-sm-1">
                                <h1 class="text-center mt-5">Edit Your Info</h1>        
                                <div class="form-group row">
                                        <label for="name" class="col-12 col-md-3 col-form-label">Name</label>
                                        <div class="col-12 col-md-9">
                                            <input type="text" class="form-control" v-model="name"  placeholder="Name">
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="telnum" class="col-12 col-md-3 col-form-label">Phone Number</label>
                                    
                                    <div class="col-12 col-md-9">
                                        <input type="tel" class="form-control" v-model="phoneNumber" placeholder="Phone Number">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-12 col-md-3 col-form-label">Email</label>
                                    <div class="col-12 col-md-9">
                                        <input type="email" class="form-control" v-model="email" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-12 col-md-3 col-form-label">Address</label>
                                    <div class="col-12 col-md-9">
                                        <input type="text" class="form-control" v-model="address" placeholder="Address">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12 col-md-3">
                                        <label class="form-label" for="approve">Gender</label>
                                    </div>
                                    <div class="col-5 col-md-4">
                                        <select class="form-control" v-model="gender">
                                            <option value="" disabled selected>Choose Your Option</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div class="custom-file col-7 col-md-5">
                                        <input type="file" class="custom-file-input"  @change="image" id="customFile">
                                        <label class="custom-file-label" for="customFile">Choose Image</label>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-12 col-md-3 col-form-label">Date Of Birth</label>
                                    <div class="col-12 col-md-9">
                                        <input type="date" class="form-control" v-model="dateOfBirth" placeholder="Date Of Birth">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-12 col-md-3 col-form-label">password</label>
                                    <div class="col-12 col-md-9">
                                        <input type="password" v-model="password" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class=" offset-md-3 col-12 col-md-10" text-center v-on:click.prevent="updateProfile">
                                        <button type="submit" class="btn btn-dark" >
                                            Update Profile
                                        </button> 
                                    
                                        <br>
                                        <!-- <div class="alert alert-success" v-show="alert" role="alert">Doctor Added Successf.ully!</div> -->
                        <img src="" id="imageKey">
                                    </div>
                                </div>
                            </form>
                           </div>
                        </div>
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
        </div>
</template>

<script>
import db from '@/firebase/init'
import  { auth } from "firebase/app";
export default {
    name: 'edit-profile',
    data () {
        return {
            name: null,
            phoneNumber: null,
            email: null,
            address:null,
            gender: null,
            dateOfBirth: null,
            selectedFile: null,
            password: null,
            userId: null
        }
    },
    methods: {
        image (e)  {
              this.selectedFile = e.target.files[0];
         
                    // console.log(this.imageKey)
                    // img.src = imageKey
                    // reader.readAsDataURL(file)
                // let img = document.querySelector('#imageKey')
                
//   reader.onerror = function() {
//     console.log(reader.error);

//   };
        },
        updateProfile () {
        //     db.collection('dapoCollection').delete()
        //         .then(data => console.log(data))
        //   console.log(this.$route.params.userId)
        // console.log(this.name,this.phoneNumber, this.email, this.address, this.imageKey, this.gender, this.dateOfBirth, this.password)
            if (this.selectedFile.type == 'image/jpeg' || this.selectedFile.type == 'image/jpg' || this.selectedFile.type == 'image/png') {
                    // let fd = new FormData();
                    // fd.append('image', this.selectedFile, this.selectedFile.name)
                         let reader = new FileReader();
                        reader.readAsDataURL(this.selectedFile)
                        reader.onload = (e) => {
                        
// console.log(this.name)
                        db.collection('signUp').doc(this.userId).update({
                            name: this.name,
                            phoneNumber: this.phoneNumber,
                            email: this.email,
                            address: this.address,
                            gender: this.gender,
                            dateOfBirth: this.dateOfBirth,
                            password: this.password,
                            imageKey: e.target.result
                        }).then(() => {
                            console.log('succesfully Uploaded')
                            this.$router.push({name: 'Profile'})
                        }).catch(err => console.log(err))
                        }
                    // Post Update to firebase
                    
                }   else {
                    alert('Hey yo upload the eright image')
                }
            // console.log(this.gender)
        }
      
    },
    created () {
         auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid)
                this.user = user
                // User is signed in.

                //  Get the user profile
                db.collection("signUp").where('uid', '==', this.user.uid).get()
                .then(snapshot => {  
                    snapshot.forEach((doc) => {
                        this.userId = doc.id
                        console.log(doc.data())
                        this.name = doc.data().name
                        this.phoneNumber = doc.data().phoneNumber
                        this.email = doc.data().email
                        this.address = doc.data().address
                        this.gender = doc.data().gender
                        this.dateOfBirth = doc.data().dateOfBirth
                        this.password = doc.data().password                 
                    })
                })
            } else {
                console.log('No user is signed in.')
            }
            })
        // db.collection('signUp').get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             if (this.$route.params.userId == doc.id) {
        //                 this.userId = doc.id
        //                 console.log(doc.data())
        //                 this.name = doc.data().name
        //                 this.phoneNumber = doc.data().phoneNumber
        //                 this.email = doc.data().email
        //                 this.address = doc.data().address
        //                 this.gender = doc.data().gender
        //                 this.dateOfBirth = doc.data().dateOfBirth
        //                 this.password = doc.data().password
        //             }
        //         })
        //     })
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
    .edit-profile {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100vh
    }

    .background {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100%
    }

    nav {
    z-index: 10;
    position: absolute;
    width: 100%;
}

    .btn-dark {
        border-radius: 0;
    }

    .card {
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
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
</style>