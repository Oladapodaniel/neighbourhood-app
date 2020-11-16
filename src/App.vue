<template>
  <div id="app">
    <!-- <SearchNeighbour></SearchNeighbour> -->
    <router-view/>
  </div>
</template>

<script> 
import db from './firebase/init'
import disCheck from './distanceCheck/distanceCheck'
// import SearchNeighbour from './components/SearchNeighbour'
export default {
  name: 'App',
  // components: {
  //    SearchNeighbour
  // },
  data () {
    return {
   neighbourArr: []
    }
  },
  created () {
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
                      this.neighbourArr.push(doc.data())
                      // this.$store.dispatch('neighbours', doc.data())
                      // this.$store.dispatch('addNeighbours', doc.data())
                      // console.log(this.neighbourArr)
                  }

                  
              })
    
          })
          console.log(this.neighbourArr)
          this.$store.dispatch('neighbours', this.neighbourArr)
          
     })
          
  }
 
}
</script>

<style>
/* @import '../css/styles.css'; */
/* body, html { 
  background: rgba(224, 227, 231, 0.541); 
height: 100%; 
overflow-x: hidden;
 position: relative; 
 } */
#app {
  font-family: 'Poppins Regular','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

/* body {
    font-family: 'Poppins';
         background-color: rgb(250, 252, 255);
        /* background-color: rgb(224, 224, 224) */
        /* background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%); */
     /*   background-color: #ffeaa7;
background-image: linear-gradient(315deg, #ffeaa7 0%,rgb(197, 197, 197) 74%);
    
} */




</style>
