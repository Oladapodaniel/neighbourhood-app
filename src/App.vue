<template>
  <div id="app">
    <!-- <SearchNeighbour></SearchNeighbour> -->
    <router-view/>
  </div>
</template>

<script> 
import db from './firebase/init'

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
