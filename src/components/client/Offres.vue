<template>
   
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/"> Home</router-link></span> <span>Login</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
<section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Offres : </h2>
          </div>
          
        </div>
          <div class="col-md-3 d-flex">
            	
          </div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
        <div class="row block-9 slide-top py-4">
          <div class="col-md-12 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
              <div  class="row">
                <form class="p-5 contact-form">
              <div class="form-group">
                  <div class="row">

                  <div class="col-md-4 py-4" v-for="offre in offres" :key="offre.id"> 
                    <div class="card"  id="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title"> {{ offre.titre}} </h5>
                      <p class="card-text"> {{ offre.description }} </p>
                      <p class="card-text" id="p"> {{ offre.pourcentage }} % </p>
                      <span class="card-text bg-light" style="transform: rotate(0);">
                        <div v-if="offre.offreable_type.substr(11)=='Room'"> 
                     <router-link to="rooms" class="stretched-link" >Les chambre</router-link>
                        </div>
                         <div v-if="offre.offreable_type.substr(11)=='Pool'"> 
                     <router-link to="pools" class="stretched-link" >Les Pools</router-link>
                        </div>
                         <div v-if="offre.offreable_type.substr(11)=='Spa'"> 
                     <router-link to="spas" class="stretched-link" >Les Spa</router-link>
                        </div>
                         <div v-if="offre.offreable_type.substr(11)=='RoofTop'"> 
                     <router-link to="roof-tops" class="stretched-link" >Les Roof-Top</router-link>
                        </div>
                         <div v-if="offre.offreable_type.substr(11)=='Restaurant'"> 
                     <router-link to="restaurants" class="stretched-link" >Les Resaturants</router-link>
                        </div>
                         <div v-if="offre.offreable_type.substr(11)=='ConferenceRoom'"> 
                     <router-link to="conferencerooms" class="stretched-link" >Les Salle de conference</router-link>
                        </div>
                      </span>
                    </div>
                  </div>
                    </div>
                   
                 </div>
              </div>
            </form>
              </div>
              </div>
              </div>
            </div>
          
          </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  data (){
    return{
      offres:[],
    }
  },
  mounted(){
    this.getAllOffres()
    },
   
   methods : {
     getAllOffres(){
       axios.get('http://localhost:8000/api/getoffres').then(res=>{
         this.offres=res.data.offres
       })
     }
     
    }
}
</script>





<style scoped>
#title{
  margin-top:25px ;
  margin-left: 10px;
}
#form{
  background-color: gray;
}
#nuit{
  margin-top: 45px;
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
#label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 20px;

}
#sous-titre{
  font-family: 'Times New Roman', Times, serif;
  color:#8d703b;
  font-size: 20px;
  font-weight: bold;
}
#card{
box-shadow: 10px 5px 5px #8d703b;}
#p{
 color: #d1a44f;
 font-size: 22px;
}
</style>
