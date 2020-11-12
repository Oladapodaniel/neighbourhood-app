<template>
  <div class="nearbyPlaces">
    
  
    <!-- <div id="map"></div>
    <div>It worked Thank you Jesus</div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map> -->
<div class="blur-bg" v-if="blurLoad"></div>
    <div class="loader-10 loader" v-if="loader"></div>

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
      <div class="body-bg">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-6 text-right mt-3">
            <div><img src="../assets/icons/svg/placeholder-4.svg"></div>
            <div v-address class="grey-text">{{ address }}</div>
          </div>
          <div class="col-12 offset-1 offset-sm-0 mt-1 grey-text">Let's see what's &nbsp;&nbsp; <span class="display-4 nearby">nearby</span></div>
          <!-- <div class="col-sm-12 text-center">Let us know where you are</div> -->
          <!-- <div class="col-sm-12 btn btn-dark">Get Location</div> -->
          <!-- <div class="col-sm-12">{{ address }}</div> -->
        </div>
      </div>
  </div>
  <div class="container">
    <div class="row">
          <div class="card col-10 offset-1 offset-sm-0 col-sm-5 col-lg-4 mt-4 p-4">
            <form>
              <div class="form-row">
                <div class="search-header col-sm-12 mb-3">Search Nearby Places</div>
                <div class="col-sm-12">
                  <select class="form-control sel-loc" v-model="type">
                    <option value="">Select Type</option>
                    <option value="accounting">Accounting</option>
                    <option value="airport">Airport</option>
                    <option value="amusement_park">Amusement Park</option>
                    <option value="aquarium">Aquarium</option>
                    <option value="art_gallery">Art Gallery</option>
                    <option value="atm">Atm</option>
                    <option value="bakery">Bakery</option>
                    <option value="bank">Bank</option>
                    <option value="bar">Bar</option>
                    <option value="beauty_salon">Beauty Salon</option>
                    <option value="bicycle_store">Bicycle Store</option>
                    <option value="book_store">Book Store</option>
                    <option value="bowling_alley">Bowling Alley</option>
                    <option value="bus_station">Bus Station</option>
                    <option value="cafe">Cafe</option>
                    <option value="campground">Campground</option>
                    <option value="car_dealer">Car Dealer</option>
                    <option value="car_rental">Car Rental</option>
                    <option value="car_repair">Car Repair</option>
                    <option value="car_wash">Car Wash</option>
                    <option value="casino">Casino</option>
                    <option value="cemetery">Cemetery</option>
                    <option value="church">Church</option>
                    <option value="city_hall">City Hall</option>
                    <option value="clothing_store">clothing_store</option>
                    <option value="convenience_store">convenience_store</option>
                    <option value="courthouse">courthouse</option>
                    <option value="dentist">dentist</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
                <!-- <div class="col-sm-6"></div> -->
                <div class="col-sm-12 mt-2">
                  <select class="form-control sel-loc" v-model="radius">
                    <option value="">Select Distance</option>
                    <option value="1">1KM</option>
                    <option value="2">2KM</option>
                    <option value="5">5KM</option>
                    <option value="10">10KM</option>
                    <option value="15">15KM</option>
                    <option value="20">20KM</option>
                  </select>
                </div>
              </div>
              <div class="btn mt-3 col-sm-12 col-md-8" @click="findNearbyButtonPressed">Search Nearby</div>
            </form>
          </div>
          <div class="card col-10 offset-1 col-sm-5 offset-sm-2 col-lg-4 offset-lg-4 mt-4 p-4">
            <div class="form-row mt-3">
              <div class="col-sm-12 search-header mb-3">Get Directions</div>
              <!-- <label for="yourLocation" class="col-sm-12">Your Location</label> -->
                <input type="text" v-model="address" ref="autocomplete" class="form-control des-loc col-sm-12" id="yourLocation" placeholder="Your Location">
                <!-- <label for="destination" class="col-sm-12 mt-3">Destination</label> -->
                <input type="text" ref="autocomplete" v-model="desPlaceName" class="form-control des-loc col-sm-7 mt-2" id="destination" placeholder="Destination">
                <select class="form-control col-12 col-sm-4 sel-loc mt-1 offset-sm-1" v-model="mode">
                  <option value="">Select mode</option>
                  <option value="DRIVING">Driving</option>
                  <option value="BICYCLING">Bicycling</option>
                  <option value="TRANSIT">Transit</option>
                  <option value="WALKING">Walking</option>
                </select>
                <!-- <div class="col-sm-4"></div> -->
                <div class="btn col-sm-12 col-md-6 mt-3" @click="getDirections">Get Direction</div>
            </div>
          </div>
        </div>
  <!-- </div>
  </div>
  <div class="container"> -->
        <div class="row" v-show="showIt">
              <div class="col-10 offset-1 offset-sm-0 col-sm-6 col card mt-5 overflow">
                <div class="col-sm-12 search-header pt-4 pl-4 mb-3">Places</div>
                    <div v-for="place in places" :key="place.place_id" class="p-3">
                      <div @click="placeId">
                        <div :id="place.place_id" class="header">{{ place.name }}</div>
                        <div v-vicinity class="meta">{{ place.vicinity }}</div>
                      <div id="desCoord" v-show="false">{{ place.geometry.location }}</div>
                      </div>
                    </div>
              </div>
              <div class="col-10 offset-1 offset-sm-0 col-sm-6 card p-4 overflow mt-5">
                <div class="col-sm-12 search-header mb-3">Directions</div>
                <div id="directionsPanel"></div>
              </div>
            <div class="col-12 card mt-5 map" id="map" style="height: 500px; overflow: auto" ref="map"></div>
            <!-- <div >
              <div class="card p-4 mt-5  col-sm-6 offset-sm-3 d-none d-sm-block" id="directionsPanel"></div>
            </div> -->
            </div>
            <!-- <div class="row d-block d-sm-none">
              <div class="col-6 card mt-5">
                    <div v-for="place in places" :key="place.place_id" class="p-3">
                      <div @click="placeId">
                        <div :id="place.place_id" class="header">{{ place.name }}</div>
                        <div v-vicinity class="meta">{{ place.vicinity }}</div>
                      <div id="desCoord" v-show="false">{{ place.geometry.location }}</div>
                      </div>
                    </div>
              </div>
              <div class="card p-4 mt-5 col-6">
                <div id="directionsPanel"></div>
              </div>
              <div class="col-sm-10 card mt-5" ref="map"></div>
            </div> -->
      </div>
  
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


</template>

<script>
// import * as GMaps from 'gmap-vue'
// import GMaps from '../../gmaps.js'
import axios from 'axios'

export default {
  name: "GoogleMap",
  data() {
    return {
      // // default to Montreal to keep it simple
      // // change this to whatever makes sense
      // center: { lat: 45.508, lng: -73.587 },
      // markers: [],
      // places: [],
      // currentPlace: null

    address: "",
    type: "",
    mode: "",
    radius: "",
    lat: 0,
    lng: 0,
    places: [],
    id: null,
    originPlaceId: null,
    desPlaceId: null,
    desPlaceName: null,
    showIt: false,
    loader: true,
    blurLoad: true

    };
  },
  methods: {
   
  findNearbyButtonPressed  () {
    this.blurLoad = true
    this.loader = true
    let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.type}&radius=${this.radius * 1000}&key=AIzaSyDVYGCCOjpjJz1LYedKOTe4S9h59yBVGZ8`

    axios.get(url).then(response => {
      this.places = response.data.results
      this.addLocationsToGoogleMaps()
      this.loader = false
      this.blurLoad = false
      this.showIt = true
    }).catch (error => {
      console.log(error.message)
      swal('Not Found', "location not found, try another search", "error")
      this.loader = false
      this.blurLoad = false
    })
  },
    addLocationsToGoogleMaps () {
    var map = new google.maps.Map(this.$refs["map"], {
      zoom: 15,
      center: new google.maps.LatLng(this.lat, this.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    var infowindow = new google.maps.InfoWindow()

       this.places.forEach(place => {
        const lat = place.geometry.location.lat;
        const lng = place.geometry.location.lng;

        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        })

        google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(
            `<div class="">${place.name}</div>
              <p>${place.vicinity}</p>`
          )
          infowindow.open(map, marker)
        })
      })
            
  },
    async getStreetAddressFrom (lat, long) {
      try {
        var { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=AIzaSyDVYGCCOjpjJz1LYedKOTe4S9h59yBVGZ8`)
        if (data.error_message) {
          console.log(data.error_message)
        } else {
          this.address = data.results[0].formatted_address
          // console.log(data)
          this.originPlaceId = data.results[0].place_id
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    getDirections () {
      this.blurLoad = true
      this.loader =true
      axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${this.originPlaceId}&destination=place_id:${this.desPlaceId}&mode=${this.mode}&key=AIzaSyDVYGCCOjpjJz1LYedKOTe4S9h59yBVGZ8`)
        .then(response => {
          let desCoord = document.querySelector('#desCoord');
          let directionsPanel = document.getElementById('directionsPanel');
          // prevent directions panel from appending
          directionsPanel.innerHTML = "";
          let desCoords = JSON.parse(desCoord.innerHTML)
          let start = new google.maps.LatLng(this.lat, this.lng);
          let end = new google.maps.LatLng(desCoords.lat, desCoords.lng);
          let map = new google.maps.Map(this.$refs["map"], {
            zoom: 15,
            center: new google.maps.LatLng(this.lat, this.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          })
      
       // For Directions
      let directionsService = new google.maps.DirectionsService();
      let directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(directionsPanel);
      this.displayRoutes(directionsService, directionsDisplay, start, end);

      this.blurLoad = false;
      this.loader = false;
      console.log(this.desPlaceId)
      // console.log(this.$refs.map)
        })
        .catch(err => console.log(err))
    },
    placeId (e) {
      
      let input = document.querySelector('#destination')

      this.desPlaceId = e.target.id
      this.desPlaceName = e.target.innerHTML
      input.focus()
         console.log(this.desPlaceId)

    },
    displayRoutes (directionsService, directionsDisplay,start,end) {
       directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
            directionsDisplay.setDirections(response);
            } else {
            swal(status, `Problem in showing direction due to ${status}`, 'error');
            this.blurLoad = false;
            this.loader = false
            }
        });
    }
},
  computed: {
    // coordinates () {
    //   return `${this.lat}, ${this.lng}`;
    // }
  },
  directives: {
    vicinity: {
            bind (el, binding, vnode) {
           return el.style.fontSize = '0.8em'
            
        }
      },
      address: {
            bind (el, binding, vnode) {
           return el.style.fontSize = '0.8em'
        //    console.log(el.innerText.split(''))
            
        }
      }
  },

  mounted() {
      new google.maps.places.Autocomplete(
        this.$refs["autocomplete"]
      );



    // this.geolocate();
 


//             GMaps.geolocate({
//         success: function(position) {
//          var mapObj = new GMaps({
//         el: '#map',
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//         click: function(e) {
//             alert('You clicked on the map');
//         },
//         zoom_changed: function(e) {
//             alert('You zoomed the map');
//         }
//         });


//     mapObj.setCenter(position.coords.latitude, position.coords.longitude);
//     var m = mapObj.addMarker({
//   lat: position.coords.latitude,
//   lng: position.coords.longitude,
//   title: 'Eiffel Tower',
//   infoWindow: {
//     content: '<h4>Eiffel Tower</h4><div>Paris, France</div>',
//     maxWidth: 100
//   }
//     })

//     var c = mapObj.drawCircle({
//   lat: position.coords.latitude,
//   lng: position.coords.longitude,
//   radius: 200,
//   fillColor: 'yellow',
//   fillOpacity: 0.5,
//   strokeWeight: 0,
//   click: function(e){
//     alert('You are inside 300m radius of Stonehenge')
//   }
// });
// console.log(c.radius)
//   },
//   error: function(error) {
//     alert('Geolocation failed: ' + error.message);
//   },
//   not_supported: function() {
//     alert("Your browser does not support geolocation");
//   },
//   always: function() {
//     alert("Always");
//   }
// });

  },
  created() {

    //  locatorButtonPressed () {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
          console.log(this.lat, this.lng)

          this.blurLoad = false
          this.loader = false
        },
        error => {
          console.log("Error getting Location")
          this.blurLoad = false
          this.loader = false
        }
      )
    // }
//     GMaps.geolocate({
//   success: function(position) {
//     mapObj.setCenter(position.coords.latitude, position.coords.longitude);
//   },
//   error: function(error) {
//     alert('Geolocation failed: ' + error.message);
//   },
//   not_supported: function() {
//     alert("Your browser does not support geolocation");
//   },
//   always: function() {
//     alert("Always");
//   }
// });
  },

  // methods: {
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  // }
};
</script>
<style scoped>

/* #map {
        width: 500px;
        height: 400px;
        margin: 0 auto
      } */
      .body-bg {
        background-image: linear-gradient(to bottom, rgba(15, 15, 15, 0.918) 0%,rgba(168, 168, 168, 0.52) 140%), url('../assets/location-bg.jpg');
        height: 40vh;
        /* width: 100%; */
        /* background-repeat: no-repeat; */
        background-size: 150mm; 
      }
      .nearbyPlaces {
        background-color: rgb(228, 228, 228);
      }

      .search-header {
        font-size: 1.5em;
      }

      .btn {
        border-radius: 35px;
        background-color: rgb(197, 197, 197);
        box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
      }

      .card {
        border-radius: 0; 
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: relative;
        top: -100px;
      }

      .header {
        padding: 5px 0;
      }


      .header:hover {
        background-color: rgba(153, 149, 149, 0.137);
        padding: 5px 0;
        cursor: pointer;
      }

      .meta {
        color: rgb(126, 123, 123)
      }

      .grey-text {
        color: rgb(238, 238, 238);
      }

      .nearby {
        color: #ddd
         /* text-decoration: underline; */
      }

      .des-loc {
        border: none;
        border-bottom: 1px solid #ddd;
        padding: 5px;
        font-size: 0.85em;
      }

      .destination {
        border: 2px solid red;
      }

      .sel-loc {
        font-size: 0.85em;
      }

      .overflow {
        max-height: 500px;
        overflow: auto;
      }

       .footer-pane {
         margin-top: 30px;
         padding: 20px
     }
     .footer-pane .container .row  .footer-text > div{
         font-size: 0.8em;
         font-weight: 100;
         padding: 3px;
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

      .goal {
        border: 2px solid red;
      }

      /* @media (max-width: 575px) {
        .map {
          width: 50%;
          max-height: 500px;
          border: 2px solid green;
        }
      } */

</style>