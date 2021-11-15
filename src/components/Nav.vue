<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">/< neighbourHood ></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="form-inline my-2 my-lg-0 ml-5">
                      
                      <!-- <input class="form-control search mr-sm-2" type="text" placeholder="Search your neighbours" arialabel="Search"> -->
                      <!-- <button class="btn btn-outline-info my-2 my-sm-0" type="submit" v-on:click.prevent="searchDoctor()">Search</button> -->
                  </form>
                   <div><SearchNeighbour /></div>
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
                          <div><img src="../assets/icons/material icons/location-white.svg"></div>
                          <router-link :to="{ name: 'Location' }" class="text-white">Nearby</router-link>
                      </li>
                      <li class="nav-item ml-4 d-block d-md-none">
                          <div><img src="../assets/icons/material icons/shop-white.svg"></div>
                          <router-link :to="{ name: 'Shop' }" class="text-white">Shop</router-link>
                      </li>
                      <li class="nav-item ml-4">
                          <div><img src="../assets/icons/material icons/user.svg"></div>
                        <router-link  :to="{name: 'Profile'}" class="text-white">Profile</router-link>
                      </li>
                      <li class="nav-item ml-4">
                          <div><img src="../assets/icons/material icons/logout.svg"></div>
                        <div  class="text-white" @click="logout">Logout</div>   
                      </li>
                  </ul>
                  

             </div>
              </div>
         </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
import SearchNeighbour from './SearchNeighbour'
export default {
    components: {
        SearchNeighbour
    },
    data () {
        return {
            
        }
    },
    methods: {
        logout () {
            firebase.auth().signOut()
                .then(() => {
                    alert('Successfully logged out');
                    localStorage.removeItem('token')
                    this.$router.push({name: 'LandingPage'});
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
            });
        }
    }
}
</script>
<style scoped>
nav {
    z-index: 10;
    position: absolute;
    width: 100%;
}

</style>