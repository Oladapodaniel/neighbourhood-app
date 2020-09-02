<template>
 <div class="landing-page">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">neighbourHood</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item">
                          About
                      </li>
                     
                      <li class="nav-item active">
                          Sign In
                      </li>
                      <li class="nav-item">
                          Sign Up
                      </li>
                  </ul>
              </div>
              </div>
         </nav>
        <div class="row">
             <div class="col-sm-7">
                 <div class="adjust-card neighbour-background">
                     <div>Welcome to</div>
                     <div class="neighbour">The Neighbourhood</div>
                    <div class="neighbour-text">The private social network for your neighbourhood</div>
                 </div>
             </div>
             <div class="col-sm-5">
                <div class="card adjust-card">
                    
                    <div class="card-body">
                        <form>
                             <div>LOG IN</div>
                            <div class="form-group">
                            <input type="text" class="form-control" v-model="username" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Email">
                            </div>
                            <div class="form-group">
                               
                                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" @click="login" class="btn btn-info">Sign In</button>
                            <div> forgot password?</div>
                            <div>Dont have an account? 
                                <router-link :to="{ name: 'SignUp'}">SignUp</router-link>
                            </div>
                    </form>
                    </div>
                </div>
             </div>
         </div>
   
         
         <img src="../assets/florian-van-duyn-yqsRxqKKKXM-unsplash.jpg" width="100%" height="700">
        
        
             
             
  </div>
</template>


<script>
import { bus } from '../main'
export default {
  name: 'LandingPage',
  data () {
    return {
        username: '',
        password: '',
        getDetails: []
    }
  },
  methods: {
      login () {
        // if (this.username === 'Oladapo' && this.password === 'oladapo') {
//     this.$router.push({ name: 'Timeline', params: { user: this.username } })
        // } 
        
        let getDetails = JSON.parse(localStorage.getItem('signUp'))
        for (let i = 0; i < getDetails.length; i++) {
            // console.log(getDetails[i])
            if (!this.username && !this.password) {
                console.log('Please Enter Your Details')
            }   else if (this.username === getDetails[i].name && this.password === getDetails[i].password) {
                this.$router.push({ name: 'Timeline', params: { user: this.username } })
            }   else {
                console.log('Please Enter A Valid Details')
            }
        }
        // this.getDetails = JSON.parse(get)
        // console.log(this.getDetails)
      }
  },
//   created () {
//       bus.$on('updateArr', (data) => {
//           let ind = []
//           ind.push(data)
//           this.array = ind
//       })
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav {
    /* background-color: #98A9DC; */
    
     /* background-image: -webkit-linear-gradient(to bottom right, red, yellow); */
}
    img[height="700"] {
  -webkit-filter: blur(3px); 
  filter: blur(3px);

}

 img {
    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%); */
}
.card {
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

input {
    background: transparent;
}
.adjust-card {
    z-index: 1;
    position: absolute;
    top: 10em;
}

.neighbour {
    font-weight: 800;
    font-size: 2.6em
}

.neighbour-background {
   
    padding: 20px;
    width: 100%
    
}



</style>
