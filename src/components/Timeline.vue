<template>
    <div class="timeline">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                  <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" width="30px">neighbourHood</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
                  <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item">
                        Timeline   
                      </li>
                      <li class="nav-item">
                        Meeting   
                      </li>
                     
                      <li class="nav-item active">
                          Shop
                      </li>
                      <li class="nav-item">
                        Emergency   
                      </li>
                      <li class="nav-item">
                          Profile
                      </li>
                  </ul>
                  

             </div>
              </div>
         </nav>
        <div class="container">
            <div class="row">
                <div class="col-sm-7">
                    <div class="form-group row">
                        <textarea class="form-control" id="feedback" v-model="text" name="feedback" :placeholder="placeholder" rows="6"></textarea>
                    </div>
                </div>
                 <div class="form-group row">
                        <div class="offset-sm-2 col-sm-5">
                            <button type="submit" @click="post" class="btn btn-info">
                                Post
                            </button>
                        </div>
                    </div>
            </div>
         
 
            <div class="row row-content">
                <div v-for="(text, index) in textArr" :key="index" class="col-7">
                    <div class="card">{{ text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    data () {
        return {
            text: '',
            textArr: [],
            placeholder: `Welcome ${this.$route.params.user}`
        }
    },
    methods: {
        post () {
            this.textArr.push(this.text)
            console.log(this.textArr)
        }
    }
}
</script>

<style>

</style>