<template>
    <div class="product-description" id="container">
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
        <!-- <div>Product descrition page</div> -->
        
                    <div v-for="detail in product" :key="detail.id">
                       <div><img class="bg-image" :src="detail.imageKey"></div>
                        <div class="image-p"><img class="image" :src="detail.imageKey"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-10 offset-1 mb-5">
                                        <div class="card">
                                            <div class="row">
                                                <div class="col-sm-12 des-header">Product Info</div>
                                                <div class="col-3 des-text">Name:</div> <div class="col-9">{{ detail.name }}</div>
                                                <div class="col-3 des-text">Price:</div> <div class="col-9">N{{ detail.price }}.00</div>
                                                <div class="col-3 des-text">Description:</div> <div class="col-9">{{ detail.description }}</div>
                                                <div class="col-3 des-text">Sale-Type:</div> <div class="col-9">{{ detail.saleType }}</div>
                                                <div class="col-3 des-text">Negotiable:</div> <div class="col-9" v-if="detail.negotiable">Negotiable</div> <div class="col-9" v-else>Non-Negotiable</div>                                         
                                                <div class="col-sm-12 des-header">Seller Info</div>
                                                <div class="col-3 des-text">Name:</div> <div class="col-9">{{ detail.personName }}</div>
                                                <div class="col-3 des-text">Email:</div> <div class="col-9">{{ detail.email }}</div>
                                                <div class="col-3 des-text">Phone Number:</div> <div class="col-9">{{ detail.phoneNumber }}</div>
                                            </div>
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
import db from '../firebase/init'
export default {
    name: 'product-description',
    data () {
        return {
            product: [],
            loader: true,
            blurLoad: true
        }
    },
    created () {
        // Get products
        db.collection('products').get()
            .then(snapshot=> {
                snapshot.forEach(doc => {
                    if (this.$route.params.productDescription == doc.id) {
                        let productDescription = doc.data()
                        productDescription.id = doc.id
                        this.product.push(productDescription)
                        this.blurLoad = false
                        this.loader = false
                        // console.log(this.product)
                    }
                })
            })

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
.product-description {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100vh
    }

    .background {
        background-color: rgba(224, 227, 231, 0.541);
        height: 100%
    }
.image {
    width: 60%;
    position: absolute;
    top: 80px;
    /* left:27%; */
    margin: 0 auto;
    z-index: 1;
    transform: translateX(30%)
}
nav {
    z-index: 10;
    position: absolute;
    width: 100%;
}

    .bg-image {
        /* border: 30px solid black; */
        width: 100%;
        height: 60vh;
        /* position: absolute; */
        /* top: 0 */
        /* z-index: 0 */
      
  /* -webkit-filter: blur(5px); */
  filter: blur(5px) brightness(30%) sepia(50%); 
  /* filter: brightness(50%); */
  /* -webkit-filter:  grayscale(100%) sepia(100%); */
        
    /* filter: ; */
/* filter: grayscale(100%) sepia(100%); */
        
    }

    .card{
        margin-top: 80px;
        padding: 30px;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(146, 144, 144, 0.932);
    }

    .des-header {
        font-size: 1.8em;
        margin-top: 20px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(212, 212, 212)
    }

     .des-text {
         font-size: 0.7em;
         font-weight: 700
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

     .footer-pane {
         /* margin-top: 30px; */
         padding: 20px
     }

    .footer-pane .container .row  .footer-text > div{
        font-size: 0.8em;
        font-weight: 100;
        padding: 3px;
    }

/* 
    @media (max-width: 354px) {
         .image {
            width: 250px;
            left: 20%;
         }
     }

    @media (min-width: 355px) and (max-width: 539px) {
         .image {
            width: 250px;
            left: 20%;
         }
     }

     @media (min-width: 540px) and (max-width: 649px) {
         .image {
            width: 300px;
            left: 25%;
         }
     }

     @media (min-width: 650px) and (max-width: 700px) {
         .image {
            left: 21%;
         }
     }

     @media (min-width: 701px) and (max-width: 800px) {
         .image {
            left: 25%;
         }
     }
*/
     @media (min-width: 700px)  {
         .image {
            width: 40%;
            transform: translateX(70%);
         }
     } 


    .goal {
        border: 2px solid pink
    }
</style>