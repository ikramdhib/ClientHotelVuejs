<template>
   
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/">Accueil</router-link></span> <span class="mr-2">Compte</span></p>
                <h1 class="mb-4 bread">Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div>
    <input type="button" @click="makeToast(true)" value="click" class="mb-2">
  </div>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
            <h1 class="mb-4"><p>Bonjour {{ user.firstname }}  {{ user.lastname }} </p></h1>
          </div>
        </div>
   

                        <div class="row block-9">
             <div class="row block-9 slide-top">
          <div class="col-md-5 ">
            <div class="bg-white p-5 contact-form" id="sc">
                <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Mes Réservations  </h2>
          </div>
        </div>
        
                 <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Duré</th>
                    <th scope="col">Chambre</th>
                    <th scope="col">prix</th>
                    </tr>
                </thead>
                <tbody v-for="book in bookings" :key="book">
                 
                    <tr  v-if="user.id== book.user_id">
                    <td> Du {{ book.start }}  <br> Au {{ book.end }} </td>
                    <td> {{ book.rooms.type }} </td>
                    <td> {{ book.bookingprice}} </td>
                    </tr>
                </tbody>
                </table>
                            </div>
                        
                        </div>
                        
                        <div class="col-md-7">
                            <div class="bg-white  contact-form">
                                <div class="bg-white p-5 contact-form">
                                  <div class="row justify-content-center mb-9 pb-5">
                            <div class="col-md-10 heading-section text-center">
                              <h2 class="mb-4">Mes Information personnel  </h2>
                            </div>
                            <div class="py-4 ">
                   <table  class="table table-borderless ">
                  
                  <tbody>
                      <tr>
                      <td > <i id="icone" class="icon-user"></i> Nom & Prénom</td>
                      <td> {{ user.firstname }} {{ user.lastname }} </td>
                    </tr>
                    <tr>
                      <td ><i id="icone" class="icon-phone"></i> Téléphone </td>
                      <td>{{ user.phone }} </td>
                    </tr>
                    <tr>
                      <td > <i id="icone" class="icon-map-marker"></i> Adresse </td>
                      <td>{{ user.country }} </td>
                    </tr>
                      <td ><i id="icone" class="icon-envelope"></i> Code Postal</td>
                      <td>{{ user.zipcode }} </td>
                    <tr>
                      <td ><i id="icone" class="icon-credit-card"></i> Carte d'identité </td>
                      <td>{{ user.cin }} </td>
                    </tr>
                    <tr>
                      <td > <i id="icone" class="icon-envelope"></i> email </td>
                      <td style="width : 2px"> {{ user.email }} </td>
                      
                    </tr>
                    <tr>
                      <td >
		                <input id="btnn" type="button" value="Consulter vos Notifications"  class="btn btn-primary px-4" @click="goNotifications()">
		             </td>
                    </tr>
                    <tr>
                      <td >
		                <input id="btnn" type="button" value="Consulter notre Offres"  class="btn btn-primary px-4" @click="gOffres()">
		             </td>
                    </tr>
                    
                    <tr>
                      <td>
                      </td>
                      <td>
		                <input id="btn" type="button" value="Editer"  class="btn btn-primary px-4" @click="goEditer()">
		             </td>
                    </tr>
                  </tbody>
                </table>
                       </div>
                        </div>
                       </div>
                     </div>
                        </div>
                        </div>

        </div>
      </div>
    </section>
</template>
<script>
import axios from 'axios';
export default {
	data(){
		return{
			user:{},
      isToken:false,
      bookings:[],
		}
	},
	mounted(){
		if(localStorage.getItem('token_client')){
			this.isToken=true;
			this.user=JSON.parse(localStorage.getItem('client'))
    }
    this.getBookings();
    

    },
    methods : {
       makeToast(append = false) {
        this.toastCount++
        this.bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          appendToast: append
        })
      },/************************************tyytytytytytty */
      gOffres(){
        this.$router.push('offres')
      },
      getBookings(){
        axios.get('http://localhost:8000/api/bookings',
         { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
        ).then(res=>{
          this.bookings=res.data.bookings 
          console.log(this.bookings);
        })
      },
      goEditer(){
        this.$router.push({name:'profileedite' , params:{id:this.user.id}})
      },
      goNotifications(){
        this.$router.push('notifications')
      }
    }
}
</script>
<style scoped>
#icone{
  font-size:15px;
  color:#8d703b;
}
#btn{
  border-radius: 0%;
}
#btnn{
 background-color: transparent;
 color:#8d703b;
 border-color: transparent;
}
#sc{
overflow-y: auto;
height: 750px;
}
</style>