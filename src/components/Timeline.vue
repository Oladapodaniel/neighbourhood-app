<template>
    <div class="timeline" id="timeline">
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
                   <div><SearchNeighbour></SearchNeighbour></div>
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item ml-4 text-white">
                          <div><img src="../assets/icons/material icons/home.svg"></div>
                        <router-link :to="{ name: 'Timeline' }" class="text-white">Timeline</router-link>   
                      </li>
                      <li class="nav-item ml-4 text-white">
                          <div><img src="../assets/icons/material icons/neighbour.svg"></div>
                        <router-link :to="{ name: 'Neighbours' }" class="text-white">Neighbours</router-link>   
                      </li>
                      <li class="nav-item ml-4 d-block d-md-none">
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
                        <router-link :to="{name: 'LandingPage'}" class="text-white">Logout</router-link>   
                      </li>
                  </ul>
                  

             </div>
              </div>
         </nav>
        <div class="first-pane">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 push-down text-center">
                    <div class="welcome-text">Welcome {{ profile.name }}</div>
                    <div>Meet and connect with your neighbours here</div>
                    <!-- <div>Here are updates in {{ profile.address.split(' ')[3] }}</div> -->
                </div>
                <div class="d-none d-md-block col-md-4 col-lg-3 side-nav mt-5">
                    <div class="card chat p-2">
                            <div>Timeline</div>
                            <!-- <div>Private Messages</div> -->
                            <router-link :to="{ name: 'Neighbours' }" class="text-dark">
                                <div><span><img src="../assets/icons/material icons/neighbour-filled.svg"></span><span class="offset-sm-1">Neighbours</span></div>
                            </router-link>
                            <router-link :to="{ name: 'Location' }" class="text-dark">
                                <div><span><img src="../assets/icons/material icons/location.svg"></span><span class="offset-sm-1">Nearby</span></div>
                            </router-link>
                            <router-link :to="{ name: 'Shop' }" class="text-dark">
                                <div><span><img src="../assets/icons/material icons/shop.svg"></span><span class="offset-sm-1">Shop</span></div>
                            </router-link>
                            <router-link :to="{ name: 'Profile' }" class="text-dark">
                                <div><span><img src="../assets/icons/material icons/profile-filled.svg"></span><span class="offset-sm-1">Profile</span></div>    
                            </router-link>
                    </div>

                    <!-- <div class="card mt-3">
                            <div>Local</div>
                            <div>Haiti</div>
                            <div>  Local News</div>
                            <div>New Request</div>
                    </div>
                    <div class="card mt-3">
                       <div>Groups</div>
                       <div> Camon Youth Board</div>
                       <div>Community Dev. Assoc.</div>
                       <div>Join or Create Group</div>
                    </div>
                    <div class="card mt-3">
                        <div>Categories</div>
                        <router-link :to="{ name: 'Shop' }" class="text-dark"><div>Shop</div></router-link>
                        <div>Emergency</div>
                        <div>Crime and Safety</div>
                        <div>Schedule a visit with a neighbour</div>
                    </div> -->
                </div>

                <!-- <div><a href="whatsapp://send?text=Hello%20World!">Hello, world!</a></div> -->
                <div class="col-10 offset-1 offset-sm-0 col-sm-12 col-md-6 col-lg-7 mt-5" v-if="neighbours.length >= 1">
                    <div class="form-group">
                        <textarea class="textarea form-control" id="feedback" placeholder="Write to your neighbours" v-model="text" name="feedback" rows="3"></textarea>
                    </div>

                    <div class="row">
                        <div class="col-12 col-sm-6 offset-sm-3 d-block d-md-none mb-5">
                        <div class="btn btn-info col-12" @click="post">Post</div>
                    </div>
                    <!-- <div class="col-6 d-block d-md-none mb-5">
                        <div class="btn btn-info col-12" @click="post">Add Image</div>
                    </div> -->
                    </div>

                    <!-- Cards For Messages -->
                        <div v-for="(text, index) in textArr" :key="index" class="col-sm-12">
                        <div class="card chat mt-3">
                        <div class="row head-bg">
                            <!-- <div class="col-3 col-sm-2 col-md-3 col-lg-2"><img src="../assets/avatar-male.jpg" class="img" width="100%" height="40px"></div> -->
                            <div class="col-3 col-sm-2 col-md-3 col-lg-2" ><img :src="text.imageKey" class="img" width="100%"></div>
                            <div class="col-7">
                                <div class="name">{{ text.name }}</div>
                                <div class="time">{{ text.time }}</div>
                            </div>
                        </div>
                        <div class="text">{{ text.text }}</div>
                        <div>
                            <!-- <span class="like" @click="like($event, text.id)"><img src="../assets/icons/svg/like3.svg"></span> -->
                            <!-- <span class="like" @click="like($event, text.id)" ><img :src="text.like"></span> -->
                            <!-- <span class="comment">comment</span> -->
                        </div>
                    
                    </div> 
              
                    </div>
                    
                </div>
                <div v-else class="mt-5 offset-3 offset-md-2 offset-lg-3 text-center"><div>Whoops! You have no neigbours yet</div><div class="btn btn-invite mt-3" data-toggle="modal" data-target="#exampleModal">Invite</div></div>

                    <div class="d-none d-md-block col-md-2 mt-5" v-if="neighbours.length >= 1">
                        <button type="submit" @click="post" class="btn btn-info">
                            Post
                        </button>
                    </div>

            </div>
        </div>
        
         </div>
         <div id="map"></div>
         

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-4 mt-2">
                    <a href="whatsapp://send?text=Connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood.%20Click%20https://neighbourhood-app-f42b1.web.app%20now!">
                        <img src="../assets/icons/png/whatsapp.svg" width="63px">
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="http://www.facebook.com/sharer.php?u=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                     <a href="mailto:?Subject=Connect%20With%20Your%20Neighbours&amp;Body=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood%20https://neighbourhood-app-f42b1.web.app">
                        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="https://plus.google.com/share?url=https://neighbourhood-app-f42b1.web.app" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="https://twitter.com/share?url=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                    </a>
                </div>
                <div class="col-6 col-sm-4 mt-2">
                    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://neighbourhood-app-f42b1.web.app&amp;text=Meet%20and%20connect%20with%20your%20neighbours.%20Join%20The%20Neighbourhood" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-invite">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import { bus } from '../main'
import SearchNeighbour from './SearchNeighbour'
import GMaps from '../../gmaps.js'
import disCheck from '../distanceCheck/distanceCheck'
export default {
    name: 'Timeline',
    components: {
     SearchNeighbour
  },
    data () {
        return {
            text: null,
            textArr: [],
            profile: {},
            lat: null,
            lng: null,
            neighbours: [],
            profileName: null,
            loader: true,
            blurLoad: true,
            // showLike1: true,
            // showLike2: false
        }
    },
    methods: {
        post () {

            let chat = {
                name: this.profile.name,
                time: new Date().toLocaleTimeString(),
                text: this.text,
                imageKey: this.profile.imageKey,
                timestamp: new Date().getTime()/1000
            }
            if (this.profile.imageKey == undefined) {
                // chat.imageKey = `<img src="../assets/avatar-male.jpg" class="img" width="100%" height="40px">`
                swal('Upload Your Picture', "Let your neighbours see who they are chatting with", 'error')
            }
            

// iF chat.name is equal to one of the neighbours passed in, send the message
// I pray it works in Jeus name Amen
            if (this.text) {
                db.collection('chat').add(chat)
                .then(success => console.log(success))
                .catch(err => console.log(err))
            }   else {
                swal('Post Empty', 'Type something to your neighbours', 'error')
            }

           this.text = null

    
        // if youre not prt of this neighbourrs youcant send chat here
  
        //    var data = [{ transportnumber: '45', time: '10:28:00', date:"2017-01-16"}, { transportnumber: '45', time: '10:38:00', date:"2017-01-16" },{ transportnumber: '45', time: '10:48:00', date:"2017-01-16" }, { transportnumber: '14', time: '10:12:00', date:"2017-01-16" }, { transportnumber: '14', time: '10:24:00', date:"2017-01-16" }, { transportnumber: '14', time: '10:52:00', date:"2017-01-16"}];
//     let data = [{
//                 date: new Date('Fri Nov 06 2020 05:50:09 GMT+0100')
//                 },
//                 {
//                 date: new Date('Sun Nov 08 2020 02:30:09 GMT+0100')
//                 }]
        
//            let sorted = data.sort(function (a, b) {
//             return b.date - a.date;
// });
// console.log(data, sorted)

// console.log(this.neighbours)
// console.log(this.profile)
// console.log(this.$store.state.neighbours)
    // this.$store.commit('changeName');
//  this.$store.dispatch('changeName')

console.log(this.textArr)
        },
        like (e, id) {
            // this.showLike1 = false;
            // this.showLike2 = true;
                
            let like3 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHdpZHRoPSIxNHB4IiBoZWlnaHQ9IjE0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMzAxODsiIGQ9Ik0yNTYsNDgyLjE2NGMtMy41MjYsMC03LjA1Mi0xLjIzOC05Ljg4LTMuNzEzbC0wLjY1NS0wLjU3NA0KCWMtMjEuODEzLTE5LjA4NS00Mi4zMDItMzYuNTQ0LTYyLjExNS01My40MjljLTUzLjE3MS00NS4zMDktOTkuMDg4LTg0LjQzNy0xMzEuMDA1LTEyMi4zOTdDMTYuNjMzLDI1OS41NzgsMCwyMTkuOTU0LDAsMTc3LjM1MQ0KCWMwLTM5LjEzOCwxMy4yNjctNzUuNzQ2LDM3LjM1NS0xMDMuMDhDNjIuNjA5LDQ1LjYxNiw5Ny42NDIsMjkuODM2LDEzNiwyOS44MzZjNTMuOTQ4LDAsODguMTAzLDMyLjIyLDEwNy4yNTUsNTkuMjUNCgljNC45Nyw3LjAxNCw5LjE5NiwxNC4wNDcsMTIuNzQ1LDIwLjY2NWMzLjU0OS02LjYxOCw3Ljc3Ni0xMy42NTEsMTIuNzQ1LTIwLjY2NWMxOS4xNTItMjcuMDI5LDUzLjMwNy01OS4yNSwxMDcuMjU1LTU5LjI1DQoJYzM4LjM1OCwwLDczLjM5MSwxNS43ODEsOTguNjQ0LDQ0LjQzNUM0OTguNzMzLDEwMS42MDUsNTEyLDEzOC4yMTMsNTEyLDE3Ny4zNTFjMCw0Mi42MDMtMTYuNjMzLDgyLjIyOC01Mi4zNDUsMTI0LjcNCgljLTMxLjkxNywzNy45Ni03Ny44MzQsNzcuMDg4LTEzMS4wMDIsMTIyLjM5NWMtMTkuODE2LDE2Ljg4Ny00MC4zMDUsMzQuMzQ2LTYyLjExOCw1My40MzFsLTAuNjU1LDAuNTc0DQoJQzI2My4wNTIsNDgwLjkyNywyNTkuNTI2LDQ4Mi4xNjQsMjU2LDQ4Mi4xNjR6IE0xMzYsNTkuODM2Yy0yOS42MjEsMC01Ni42NiwxMi4xNzEtNzYuMTM4LDM0LjI3MQ0KCUM0MC42MDUsMTE1Ljk1NywzMCwxNDUuNTIxLDMwLDE3Ny4zNTFjMCw3Ny4wMDcsNjguNzQ1LDEzNS41ODgsMTcyLjgwNCwyMjQuMjYxYzE3LjA4MywxNC41NTcsMzQuNjYyLDI5LjUzNyw1My4xOTYsNDUuNjQ4DQoJYzE4LjUzNS0xNi4xMTIsMzYuMTEzLTMxLjA5MSw1My4xOTMtNDUuNjQ2QzQxMy4yNTUsMzEyLjkzOSw0ODIsMjU0LjM1OCw0ODIsMTc3LjM1MWMwLTMxLjgzLTEwLjYwNS02MS4zOTQtMjkuODYzLTgzLjI0NQ0KCUM0MzIuNjYsNzIuMDA3LDQwNS42MjEsNTkuODM2LDM3Niw1OS44MzZjLTQxLjEyOSwwLTY3LjcxNiwyNS4zMzgtODIuNzc2LDQ2LjU5NGMtMTMuNTA5LDE5LjA2NS0yMC41NTgsMzguMjgyLTIyLjk2Miw0NS42Ng0KCWMtMi4wMTEsNi4xNzUtNy43NjgsMTAuMzU0LTE0LjI2MiwxMC4zNTRzLTEyLjI1MS00LjE3OS0xNC4yNjItMTAuMzU0Yy0yLjQwNC03LjM3Ny05LjQ1My0yNi41OTUtMjIuOTYyLTQ1LjY1OQ0KCUMyMDMuNzE2LDg1LjE3NCwxNzcuMTI5LDU5LjgzNiwxMzYsNTkuODM2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            let like4 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNHB4IiBoZWlnaHQ9IjE0cHgiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMzAxODsiIGQ9Ik0yNTYsNDgxYy0zLjUzLDAtNy4wNDYtMS4yMy05Ljg3My0zLjcwNmMtMjEuODI2LTE5LjA4Ny00Mi41ODMtMzYuNzgyLTYyLjEwOS01My40MjMNCglDNzMuODE3LDMyOS45NiwwLDI2Ny45MDksMCwxNzcuNTE0QzAsOTMuOTg4LDU5LjAzNywzMSwxMzYsMzFjNjAuNjU5LDAsOTkuNTk1LDQyLjM3OCwxMjAsODAuNTM3QzI3Ni40MDUsNzMuMzc4LDMxNS4zNDEsMzEsMzc2LDMxDQoJYzc2Ljk2MywwLDEzNiw2Mi45ODgsMTM2LDE0Ni41MTRjMCw5MC4zOTYtNzMuODE3LDE1Mi40NDYtMTg0LjAxOCwyNDYuMzU3Yy0xOS41MjYsMTYuNjQxLTQwLjI4MywzNC4zMzYtNjIuMTA5LDUzLjQyMw0KCUMyNjMuMDQ2LDQ3OS43NywyNTkuNTMsNDgxLDI1Niw0ODF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTYxRTE0OyIgZD0iTTI2NS44NzMsNDc3LjI5NGMyMS44MjYtMTkuMDg3LDQyLjU4My0zNi43ODIsNjIuMTA5LTUzLjQyM0M0MzguMTgzLDMyOS45Niw1MTIsMjY3LjkwOSw1MTIsMTc3LjUxNA0KCUM1MTIsOTMuOTg4LDQ1Mi45NjMsMzEsMzc2LDMxYy02MC42NTksMC05OS41OTUsNDIuMzc4LTEyMCw4MC41MzdWNDgxQzI1OS41Myw0ODEsMjYzLjA0Niw0NzkuNzcsMjY1Ljg3Myw0NzcuMjk0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            if (e.target.src == like3) {
                e.target.src = like4
         
                // this.textArr.forEach(text => {
                //     if (text.id === id) {
                //         db.collection('chat').doc(id).update({
                //             like: like4
                //         })
                //     }
                // })

          
            }   else {
                e.target.src = like3
                this.textArr.forEach(text => {
                    // if (text.id === id) {
                    //     db.collection('chat').doc(id).update({
                    //         like: like3
                    //     })
                    // }
                })
            }
            
            
        }
    },
    computed: {
        family () {
            // return this.$store.state.neighbours
            // this.$store.commit('changeName')
             return this.$store.getters.changeHobby
        }
    },
    created () {

      
        // Get the data in the database signUp collection match it with the id passed in to get the whole user profile
        // db.collection('signUp').get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
                    
        //         })

                      navigator.geolocation.getCurrentPosition( (position) => {
      var currentLocation = position.coords
      var userLocation = { lat: currentLocation.latitude, long: currentLocation.longitude }

      db.collection('signUp').get()
          .then(snapshot => {
              snapshot.forEach((doc) => {
                  if (this.$route.params.userId === doc.id) {
                        this.profileName = doc.data().name
                    }
                    
                    if (this.$route.params.userId === doc.id) {
                        this.profile = doc.data();
                        this.blurLoad = false
                        this.loader = false
                    }
                      // The target longitude and latitude
                  var targetlong = doc.data().userLocation.long;                         
                  var targetlat = doc.data().userLocation.lat;
                  let distance = disCheck(targetlat, targetlong, userLocation.lat, userLocation.long)
               if (distance <= 1 && distance >= 0) {
                      if (doc.data().name !== this.profileName) {
                          this.neighbours.push(doc.data())
                      }
                      
                //       // this.$store.dispatch('neighbours', doc.data())
                //       // this.$store.dispatch('addNeighbours', doc.data())
                //       // console.log(this.neighbourArr)
               }

                  
              })
    
          })
        //   console.log(this.neighbourArr)
        //   this.$store.dispatch('neighbours', this.neighbourArr)
          
     })

                // Store each from in the array excluding myself
                    // this.$store.getters.neighbours.forEach (neighbour => {
                    //     if (neighbour.name !== this.profile.name) {
                    //         this.neighbours.push(neighbour)
                    //     }
                    // })
            // })
        //  Listen for events or changes that occur in the database chat collection, receive the data and push it to the array that will display it
        db.collection('chat').onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    let doc = change.doc
                    this.textArr.push({
                        name: doc.data().name,
                        time: doc.data().time,
                        text: doc.data().text,
                        imageKey: doc.data().imageKey,
                        id: doc.id,
                        timestamp: doc.data().timestamp
                        
                        // like: doc.data().like
                    })
                })
                // Rearrange how its display from bottom to top by sorting by time
                this.textArr.sort(function (a, b) {
                // return b.timestamp.localeCompare(a.timestamp);
                return b.timestamp - a.timestamp
            })

        })
     
    },
    updated () {
        let container = document.querySelector('#timeline')
        window.addEventListener('scroll', function() {
            // console.log(window.pageYOffset + 'px', con)
            container.classList.remove('timeline')
            container.classList.add('background')
            });
    }
}
</script>

<style scoped>
    /* .search {
        color: white;
        background-color: rgba(243, 243, 243, 0.137);
        border: none;
        border-radius: 500px;
        outline: none;
    } */
    
    .timeline {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100vh;
    }

    .background {
       background-color: rgba(224, 227, 231, 0.541);
       height: 100%;
    }

    nav {
        z-index: 10;
        position: absolute;
        width: 100%;
    }

    .push-down {
        margin-top: 80px;
    }

    /* nav ul li {
       padding: 4px;
       border: 1px solid rgb(43, 43, 43)
    }
    nav ul li:hover {
       border: 1px solid white;
    } */

    .welcome-text {
        font-size: 2em;
    }

    .side-nav .card div{
        padding: 10px 15px;
    }

      .side-nav .card div span:nth-child(2){
        padding: 10px 15px;
        transition: all 0.1s ease-in;
        font-weight: 300
    }


    .side-nav .card div span:nth-child(2):hover{
        background-color: rgb(43, 43, 43);
        color: white;
        padding: 10px 15px;
    }

    .side-nav .card div:nth-child(1){
        font-weight: bold;
    }

    .textarea {
        /* border: 1px solid rgb(173, 173, 173); */
        border-radius: 0;
    }
    .btn-info {
        background-color: rgb(43, 43, 43);
        /* background-image: radial-gradient(circle at 80% -50%, rgb(249, 181, 35), rgba(0, 0, 0, 0)); */
        outline: none;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 10px 20px;
        border-radius: 0;
    }
    .btn-info:hover {
        background-color: rgb(88, 88, 88);
        color: white;
     
    }
    .card.chat {
        padding: 10px;
        border: none;
        border-radius: 0px;
        box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  /* 0 6px 6px rgba(0,0,0,0.23); */
    /* box-shadow: rgba(91, 124, 196, 0.2) 0px 10px 30px 0px; */
}


    .head-bg div:nth-child(2) {
        padding-left: 0;
    }

    .goal {
        border: 2px solid red;
        /* padding: 0; */
    }

    .img {
        /* width: 60%;
        height:40%; */
        border-radius: 50%
    }

    .name {
        font-size: 13px;
        font-weight: bold;
    }
    .time {
        font-size: 10px;
        /* padding-left: 10px; */
        
    }
    .text {
        font-size: 15px;
        padding: 20px;
        /* padding-left: 50px;
        padding-right: 30px; */
    }
    .bi-three-dots-vertical {
        position: absolute;
        right: 7px;
        top: 12px;
        cursor: pointer;

    }

    .like {
        /* margin-left: 70px; */
        /* position: absolute;
        top: 0;
        right: 0 */
        /* display: inline-block; */
    }

    .btn-invite {
        border-radius: 35px;
        background: #BB4B01 0% 0% no-repeat padding-box;
        box-shadow: 5px 15px 45px #00000042;
        color: rgba(255, 255, 255, 0.918);
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

     .modal-content {
         border-radius: 0;
         background: rgba(15, 15, 15, 0.87);
         color: white;
     }

     .modal-content .container .row div img{
        width: 50px;
        padding: 10px;
        border: 0;
       
        /* border: 2px solid red; */
    }
    
</style>