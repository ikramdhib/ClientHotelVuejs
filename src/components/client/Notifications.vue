<template>
   
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="profile"> Profile</router-link></span> <span>Notifications</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
<section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-3 d-flex">
            	
          </div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
        <div class="row block-9  py-4">
          <div class="col-md-12 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
              <div  class="row">
                <form class="p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                    <div class="list-group">
                      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">Notifications :</h5>
                        </div>
                      </a>
                      <hr/>
                      <div v-for="notif in notifis" :key="notif">
                      <a  class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1"> {{ notif.data.categorie.titre }} </h5>
                          <small class="text-muted">{{ $moment(notif.created_at).locale('fr').fromNow() }}</small>
                        </div>
                        <p class="mb-1"> {{ notif.data.categorie.description }}  Avec un <span id="p"> REDUCTION de {{ notif.data.categorie.pourcentage }}%</span>.</p>  
                        <small class="text-muted">Administration de l'Hotel .</small>
                      </a>
                      <hr>
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
      notifis:[],
    }
  },
  mounted(){
    this.getUnReadNotifications()
    console.log("hh",this.notifis);
    console.log(localStorage.getItem('token_client'));
    },
   
   methods : {
     getUnReadNotifications(){
       axios.get('http://localhost:8000/api/unreadNotifications',
        { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
          ).then(res=>{
         this.notifis=res.data.notifs
         console.log("rrr",this.notifis);
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
 color:red;
 font-size: 22px;
}
</style>
