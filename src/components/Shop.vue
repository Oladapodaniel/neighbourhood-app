<template>
    <div class="shop" id="container">
        <div class="blur-bg" v-if="blurLoad"></div>
        <div class="loader-10 loader" v-if="loader"></div>
         <Nav />
         <div class="body-bg">
             <div class="container">
                 <div class="col-12 col-md-10 push-down">
                     <div class="welcome-text">Welcome to Neighbourhood Market</div>
                     <div class="welcome-description">Here you can buy, sell or rent anything you wish to.<div>Get your immediate and dire needs met, sell an item or property to people you can easily get in touch with.</div></div>
                 </div>
        </div>
         </div> <!-- End of bodyimage backgrpound -->
         <div class="container">
             <div class="row">
                 <div class="btn btn-dark btn-product col-4 offset-7 offset-sm-9 mt-4 col-sm-3 col-lg-2 offset-lg-10" data-toggle="modal" data-target="#modalLoginForm"><span><img src="../assets/icons/material icons/add.svg"></span>&nbsp; Sell An Item</div>
                <div class="col-sm-12 display-4 text-center mt-3 available-text">Available Items</div>
            </div>
         </div>



<div class="container">
            <div class="row">
                <div class="card-columns">
                    <div v-for="product in products" class="offset-3 offset-sm-0 card mt-4" :key="product.id">
                    <!-- <div class=""> -->
                        <div class="row">
                            <div class="col-3 col-md-4">
                                <img :src="product.personImage" class="personImage" width="100%" height="80%">
                            </div>
                            <div class="col-7 col-sm-7 nameTime">
                                <div class="name">{{ product.personName }}</div>
                                <div class="time">{{ product.time }}</div>
                            </div>
                            <!-- <div class="col-sm-2">
                                <div class="three-dot" @click="threeDot"><img src="../assets/icons/material icons/more.svg"></div> 
                                <div id="threeDot"></div> 
                            </div> -->
                            <router-link :to="{ name: 'ProductDescription', params: { productDescription: product.id } }">
                            <div class="image_container col-sm-12">
                                <img :src="product.imageKey" width="100%" class="image-bg">
                            </div>
                            </router-link>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-8 price"><img src="../assets/icons/material icons/naira.svg">{{ product.price }}.00</div>
                                <div class="col-4 text-right sale-type">{{ product.saleType }}</div>
                                <div class="col-sm-9 negotiable" v-if="product.negotiable" >Negotiable</div>
                                <div class="col-sm-
                                9 negotiable" v-else>Non-Negotiable</div>
                                 <!-- <div class="col-sm-3 goal" id="favIcon"><div class="goal"><img src="../assets/icons/png/star folder/star.png" @click="favourite" id="imgFav" width="20px"></div></div> -->
                            </div>
                           
                            </div>
                    <!-- </div> -->
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




            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <form class="col-sm-10 offset-sm-1 mt-4">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">What do you want to sell?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                        <div class="from-group">
                            <label>Product Name</label>
                            <input type="text" v-model="product.name" class="form-control" placeholder="Product Name">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" v-model="product.description" placeholder="Product Description"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input type="number" v-model="product.price" class="form-control" placeholder="Price">
                        </div>
                        <select class="form-control" v-model="product.saleType">
                                            <option value="" disabled selected>Choose Your Sale Type</option>
                                            <option value="Sale">Sale</option>
                                            <option value="Rent">Rent</option>
                                        </select>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="product.negotiable"> Negotiable
                            </label>
                        </div>
                        <div class="form-group">
                            <label>Add Images</label>
                            <input type="file" @change="image" class="form-control" placeholder="Add an image of your product here">
                        </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" @click="addProduct" class="btn btn-info">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/init';
import Nav from "./Nav"
export default {
    name: 'Shop',
    components: {
        Nav
    },
    data() {
        return {
            product: {
                name: null,
                description: null,
                price: null,
                negotiable: null,
                selectedImage: null,
                saleType: null
            },
            products: [],
            profile: null,
            id: null,
            loader: true,
            blurLoad: true
        }
    },
    methods: {
        image (e) {
            this.selectedImage = e.target.files[0]
        },
        addProduct () {
            // this.blurLoad = true
            // this.loader = true

             if (this.selectedImage.type == 'image/jpeg' || this.selectedImage.type == 'image/jpg' || this.selectedImage.type == 'image/png') {
                    let reader = new FileReader();
                    reader.readAsDataURL(this.selectedImage)
                    reader.onload = (e) => {
                        let product = {
                            personName: this.profile.name,
                            personImage: this.profile.imageKey,
                            name: this.product.name,
                            description: this.product.description,
                            price: this.product.price,
                            negotiable: this.product.negotiable,
                            imageKey: e.target.result,
                            saleType: this.product.saleType,
                            time: new Date().toLocaleTimeString()
                        };
                    db.collection('products').add(product)
                        .then(response => {
                            console.log('Upload Successful')
                            swal("Uploaded Sucessfully", "Product already added to shop", "success")
                            javascript:location.reload(true)
                                                        
                        })
                        .catch(err => console.log(err))
                    }
             }
        },
    
    },
    created () {
        db.collection('products').get()
            .then(snapshot=> {
                snapshot.forEach(doc => {
                    let productItems = doc.data()
                    productItems.id = doc.id
                    this.products.push(productItems)
                    this.blurLoad = false
                    this.loader = false
                })
            })

            // Get Profile
            db.collection('signUp').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (this.$route.params.userId === doc.id) {
                        this.profile = doc.data()
                        this.profile.userId = doc.id
                        this.blurLoad = false
                        this.loader = false

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
    .shop {
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
        margin-top: 60px;
    }

    .btn-product {
        border-radius: 500px;
        font-size: 0.8em;
        padding: 7px 10px;
        width: 100%;
        /* margin-top: 50px; */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(146, 144, 144, 0.932);
    }
    .body-bg {
    background-image:
    linear-gradient(to bottom, rgba(15, 15, 15, 0.808) 0%,rgba(124, 124, 124, 0.52) 500%),
    url('../assets/buy-sell.jpg');
    width: 100%;
    height: 40vh;
    background-size: 90mm;
    color: white;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0;
}
    .welcome-text {
        font-size: 2em
    }
    .welcome-description {
        font-size: 0.9em;
        margin-top: 10px
    }
    .available-text {
        font-size: 2.5em;
        margin-bottom: 10px;
    }

    .goal{
        border: 2px solid red;
    }
    .card {
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(160, 37, 37, 0.19);
        /* height: 400px;  */
    }
    .personImage {
        margin-top: 15px ;
        margin-left: 10px;
        border-radius: 50%
    }
    .nameTime {
        margin-top: 15px;
        margin-bottom: 30px;
    }
    .name {
        font-weight: 700;
        font-size: 0.8em;
    }
    .time {
        font-size: 0.7em;
    }
    .three-dot {
        margin-top: 15px;
        margin-left: -25px;
    }
    .price {
        /* margin-left: 10px; */
        margin-top: 10px; 
    }
    .sale-type {
        margin-top: 10px;
        /* margin-left:40px */
    }
    .negotiable {
        font-size: 13px;
        padding-bottom: 10px;
        padding-top: 2px
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

    @media (max-width: 467px) {
        .body-bg {
            background-image:
            linear-gradient(to bottom, rgba(15, 15, 15, 0.808) 0%,rgba(124, 124, 124, 0.52) 500%),
            url('../assets/buy-sell.jpg');
            width: 100%;
            height: 60vh;
            background-size: 90mm;
            color: white;
            padding: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0;
        }
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (max-width: 575px) {
        .card-columns {
            column-count: 1;
            width: 80%
        }
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .card-columns {
            column-count: 2;
        }
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .card-columns {
            column-count: 3;
        }
    }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        .card-columns {
            column-count: 4;
        }
    }




  /* header {
    height: 600px;
    width: 100vw;
    background: black;
    overflow: hidden;
    background: #C33764;  fallback colour. Make sure this is just one solid colour.
    background: -webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi");
    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi"); /* The least supported option. 
} */
/* 
img {
   object-fit: cover;
} */

/* img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(.4);
}


section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: 'Roboto', sans-serif;
} */
/* .image_container {
	padding: 0;
}
 .image_container:hover
.image_container:before {
	content: '\A';
	position: absolute;
	width: 100%;
	height: 30%;
	top: 243px;
	left: 0;
	background: rgba(0,0,0,0.6);
	opacity: 0.6;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
} */
 
/* .image_container:hover {
	background: rgba(0,0,0,0.0);
	opacity: 0.9;
} */
 
/* .image_container img {
	width: 100%;
	height: 300px;
}
 
.image_container .img_text {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%,-40%);
	transform: translate(-50%,-40%);
	z-index: 1;
}
.image_container h1 {
	font-size: 32px;
	line-height: 36px;
	font-weight: 700;
	color: #fff;
	margin-top: 10px;
	margin-bottom: 0px;
	text-align: center;
	text-shadow: 0px 2px 4px #333;
} */


@import url(https://fonts.googleapis.com/css?family=Raleway:400,200,300,800);
figure.snip0015 {
  font-family: 'Raleway', Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  max-height: 220px;
  width: 100%;
  background: #000000;
  text-align: center;
}
figure.snip0015 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip0015 img {
  opacity: 1;
  width: 100%;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
figure.snip0015 figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3em 3em;
  width: 100%;
  height: 100%;
}
figure.snip0015 figcaption::before {
  position: absolute;
  top: 50%;
  right: 30px;
  bottom: 50%;
  left: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  content: '';
  opacity: 0;
  background-color: #ffffff;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0015 h2,
figure.snip0015 p {
  margin: 0 0 5px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s,-webkit-transform 0.35s,-moz-transform 0.35s,-o-transform 0.35s,transform 0.35s;
}
figure.snip0015 h2 {
  word-spacing: -0.15em;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-transform: translate3d(0%, 50%, 0);
  transform: translate3d(0%, 50%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
figure.snip0015 h2 span {
  font-weight: 800;
}
figure.snip0015 p {
  font-weight: 200	;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.snip0015 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  color: #ffffff;
}
figure.snip0015:hover img {
  opacity: 0.35;
}
figure.snip0015:hover figcaption h2 {
  opacity: 1;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
figure.snip0015:hover figcaption p {
  opacity: 0.9;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0015:hover figcaption::before {
  background: rgba(255, 255, 255, 0);
  top: 30px;
  bottom: 30px;
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}


/* Demo purposes only */
html {
  height: 100%;
}
body {
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100%;
}




</style>