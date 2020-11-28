<template>
    <div class="splash">
        <div class="search">
            <i class="fa fa-search icon" aria-hidden="true"></i>
            <input type="text" @input="searchQuery" placeholder="Search for a photo" class="input"  v-model="searchText">
        </div>
        <div v-if="searchText">
            <div class="parent">
                <div v-for="search in searchPhoto" :key="search.id" class="grid">
                    <div class="grid">
                        <div>{{ search.cover_photo.user.first_name }}</div>
                        <img :src="search.cover_photo.urls.regular">
                    </div>
            </div>
            </div>
        </div>
        <div v-else>
            <div class="parent">
                <div v-for="photo in photos" :key="photo.id">
                    <div class="grid">
                        <img :src="photo.urls.regular">
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="grid">
            <div>Oladapo</div>
            <div>Daniel</div>
            <div>Ayodeji</div>
        </div> -->
        <!-- <div class="container">
            <figure>
                <img src="https://assets.codepen.io/12005/windmill.jpg" alt="A windmill" />
                <figcaption><a href="#">1</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/suspension-bridge.jpg" alt="The Clifton Suspension Bridge" />
                <figcaption><a href="#">2</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/sunset.jpg" alt="Sunset and boats" />
                <figcaption><a href="#">3</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/snowy.jpg" alt="a river in the snow" />
                <figcaption><a href="#">4</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" alt="a single checked balloon" />
                <figcaption><a href="#">5</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/dog-balloon.jpg" alt="a hot air balloon shaped like a dog" />
                <figcaption><a href="#">6</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/abq-balloons.jpg" alt="View from a hot air balloon of other balloons" />
                <figcaption><a href="#">7</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/disney-balloon.jpg" alt="a balloon fairground ride" />
                <figcaption><a href="#">8</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/bristol-harbor.jpg" alt="sunrise over a harbor" />
                <figcaption><a href="#">9</a></figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/12005/bristol-balloons2.jpg" alt="three hot air balloons in a blue sky" />
                <figcaption><a href="#">10</a></figcaption>
            </figure>
            <figure>
            <img src="https://assets.codepen.io/12005/toronto.jpg" alt="the Toronto light up sign at night" />
                <figcaption><a href="#">11</a></figcaption>
            </figure>
</div> -->
    </div>
  
</template>


<script>
import axios from 'axios'
export default {
    data () {
        return {
            photos: null,
            searchText: '',
            searchPhoto: null
        }
    },
    methods: {
        searchQuery () {
            axios.get(`https://api.unsplash.com/search/collections/?client_id=YcVBb5VZgUaFtCSVeOV-0d1-JBshgL_UwbpS13uzif0&query=${this.searchText}`)
                .then(response => {
                    this.searchPhoto = response.data.results
                    console.log(response.data.results)
                })
                .catch (err => console.log(err))
        }
    },
    computed: {
        searchPhotos () {
            if (this.searchText !== '' && this.searchText > 0) {
                
            }
        }
    },
    created () {
        axios.get('https://api.unsplash.com/photos/?client_id=YcVBb5VZgUaFtCSVeOV-0d1-JBshgL_UwbpS13uzif0')
            .then((response) => {
                this.photos = response.data
                // console.log(response.data)
            })
            .catch(err => console.log(err))
    }
}
</script>

<style scoped>
    .splash {
        /* font-family: 'Nunito' */
    }
    .search {
        background-color: #DDE2E9;
        padding: 100px;
        display: grid;
    }

    .input {
        padding: 10px 50px;
        border: none;
        border-radius: 5px;
    }

    .input:focus {
        outline: 2px solid #479de4d2;
        /* -moz-outline-radius: 5px */
    }

    .search i {
        position: absolute;
    }

    .icon {
            padding: 12px; 
        } 

        .grid {
            /* display: grid;
            grid-template-columns: 1fr 1fr 1fr;
       
            break-inside: avoid;
            margin: 0;
            column-gap: 10px; */
            margin: 0;
            display: grid;
            grid-template-rows: 1fr auto;
            margin-bottom: 20px;
            break-inside: avoid;
        }

        div img {
            width: 100%;
            grid-row: 1 / -1;
            grid-column: 1
        }

        /* body {
  background-color: #000;
  font: 1.1em Arial, Helvetica, sans-serif;
} */

/* img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255,255,255,.5);
  padding: .2em .5em;
  justify-self: start;
} */

.parent {
  column-count: 3;
  column-gap: 20px;
}
</style>