<template>
  <div class="map">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div>
      <h1>Your Coordinates:</h1>
      <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
    </div>

     <div>
      <h1>Map Coordinates:</h1>
      <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
    </div>
    </div>
    <GmapMap :center="myCoordinates"
            :zoom="zoom"
            style="width: 640px; height: 360px; margin: 32px auto"
            ref="mapRef" 
            @dragend="handleDrag"
            strokeColor="#FF0000"
            strokeOpacity=0.8
            strokeWeight=2
            fillColor= "#FF0000"
            fillOpacity=0.35
            map
            mapMaker=true
            :setRadius="radius"
            >   
            </GmapMap>
  </div>
</template>

<script>
// import gmapsInit from '../utils/gmaps';
// import GMaps from '../../gmaps.js'
// import * as GMaps from 'gmap-vue'

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng:0
      },
      zoom: 7,
      radius: 100
    }
  },
  created () {
    
      // does the user have a saved center? use it as default
      if (localStorage.center) {
        this.myCoordinates = JSON.parse(localStorage.center)
      } else {
            this.$getLocation({})
            .then(coordinates => {
            this.myCoordinates = coordinates
          }).catch(error => alert(error))

      }

      // does the user have a saved zoom level?use it also
      if (localStorage.zoom) {
        this.zoom = parseInt(localStorage.zoom)
      }
  },
  mounted () {
    //Add the msp to a data object
    this.$refs.mapRef.$mapPromise
      .then(map => {
        this.map = map
        console.log(map)
      })
  },
  methods: {
    handleDrag () {
      // Get center and zoomlevel,store in local storage
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      }
      let zoom = this.map.getZoom();

      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom
    }
  
  },
  computed: {
    mapCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        }
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    }
  }
      
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>





// export default {
//     data (){
//         return {

//         }
//     },
    created() {
//     // Get User location
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(showPosition);
//     } else { 
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }


//     navigator.geolocation.getCurrentPosition(function success (pos) {
//         var currentLocation = pos.coords
//         var userLocation = { lat: currentLocation.latitude, lng: currentLocation.longitude }


   
  



// // console.log(success());
// // Create circular geofence around user location
// const citymap = {
//     chicago: {
//       center: { lat: userLocation.lat, lng: userLocation.lng },
//       population: 2714856,
//     }
// }


//     // Create the map.
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 7,
//     //   center: { lat: userLocation.lat, lng: userLocation.lng },
//     center: { lat: userLocation.lat, lng: userLocation.lng },
//       mapTypeId: "roadmap",
      
//     });
  
//     // Construct the circle for each value in citymap.
//     // Note: We scale the area of the circle based on the population.
//     for (const city in citymap) {
//       // Add the circle for this city to the map.
//       const cityCircle = new google.maps.Circle({
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35,
//         map,
//         mapMaker: true,
//         center: citymap[city].center,
//         // radius: Math.sqrt(citymap[city].population) * 100,
//         radius: 80.68
//       });
//     }
// })
//   }

// }
// </script>