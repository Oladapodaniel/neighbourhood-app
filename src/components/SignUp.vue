<template>
    <div class="sign-up">
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
  <div class="image-background">
      <div class="container">
          <div class="row row-content">
         <!-- <img src="../assets/image1.png" width="100%" height="auto"> -->
             <div class="offset-sm-3 col-sm-6">
                <div class="card adjust-card">
                    
                    <div class="card-body">
                        <form>
                            <div>SIGN UP</div>

                            <div class="form-group">
                                <input type="text" class="form-control" v-model="name" id="name" ariadescribedby="name" placeholder="Name">
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <input type="text" class="form-control" v-model="email" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Email">
                                </div>

                                <div class="form-group col-sm-6">
                                    <input type="number" class="form-control" v-model="phoneNumber" id="phoneNumber" ariadescribedby="phoneNumber" placeholder="Phone Number">
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <input type="number" class="form-control" v-model="age" id="age" ariadescribedby="age" placeholder="Age">
                                </div>

                                <div class="form-group col-sm-6">
                                    <input type="text" class="form-control" v-model="address" id="address" ariadescribedby="address" placeholder="Address">
                                </div>
                            </div>
                            

                            <div class="form-group">
                                <input type="date" class="form-control" v-model="dateOfBirth" id="dateOfBirth" ariadescribedby="dateOfBirth">
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" v-model="check" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">By clicking on this, you verify that all details above are true, and you hav read and agree by the Terms and Conditions stated.</label>
                            </div>
                            <button type="submit" @click.prevent="signup" class="btn btn-info">Sign Up</button>
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
import { bus } from '../main'
export default {
    name: 'SignUp',
    data () {
        return {
            name: null,
            email: null,
            phoneNumber: null,
            age: null,
            address: null,
            dateOfBirth: null,
            password: null,
            check: null,
            detailsArr: []
        }
    },
    methods: {
        signup () {
            // console.log(this.name, this.email, this.phoneNumber, this.age, this.address, this.dateOfBirth, this.password, this.check)
            let details = {
                name: this.name,
                email: this.email,
                phoneNumber: this.phoneNumber,
                age: this.age,
                address: this.address,
                dateOfBirth: this.dateOfBirth,
                password: this.password,
                check: this.check
            }
            // bus.$emit('updateArr', details)
            // this.detailsArr.push(details)
            // let store = JSON.stringify(this.detailsArr)
            // localStorage.setItem('signUp', store)

        let localData = localStorage.getItem('signUp')
        // if defined then parse store data or use empty array
        let detail = localData ? JSON.parse(localData) : []
        
        detail.push(details)
        localStorage.setItem('signUp', JSON.stringify(detail))


            // this.$router.push({ name: 'LandingPage' })
        }
    }
}
</script>

<style>
.sign-up {
    /* border: 2px solid red; */
    /* background-color:rgb(218, 218, 218) */

}
    .image-background {
      
        /* background-image: url('../assets/park-dasol-hHdHCfAifHU-unsplash.jpg');
        background-repeat: no-repeat;
        background-size: 100%; */
        width: 100%;
        height: auto;
        display: grid;
        place-items: center;
        color: #414141;
        font: bold 20px sans-serif;
        background-image: linear-gradient(black, black), url('../assets/park-dasol-hHdHCfAifHU-unsplash.jpg');
        background-size: cover;
        background-blend-mode: saturation;
    
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
        margin-top: 5em;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        /*position: absolute;
         top: -50em;
        left: 30%; */
    }
    .form-check-label {
        font-size:11px;
        font-family: 'poppins regular'
    }


</style>