<template>
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/">Home</router-link></span> <span>Modifier mot de passe</span></p>
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
            <h2 class="mb-4">Réinitialiser votre mot de passe</h2>
          </div>
        </div>
          <div class="w-100"></div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
        <div class="row block-9 slide-top">
          <div class="col-md-6 order-md-last d-flex">
            <form class="bg-white p-5 contact-form">
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Nouveau Mot de Passe" v-model="password">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirmer votre Mot de Passe" v-model="password_confirmation">
              </div>
               <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> 
                 <input type="submit" value="Envoyer" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5" v-on:click="updatepass()">
                      </div>
                <div class="col-md-6"> 
                   <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5" value="Annuler" style="background-color: #D3D3D3;">
                    </div>
              </div>
              </div>
            </form>
          
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
       return{
           email:"",
           password:"",
           password_confirmation:"",
           token:"",
       }
    },
    methods:{
        async updatepass(){
          await axios.post('http://localhost:8000/api/user/update-password',
         {
             email:(localStorage.getItem("email_client")),
             password:this.password,
             password_confirmation:this.password_confirmation,
             token:this.$route.query.token,
         } ).then(response=>{
             let res = response.data;
            console.log(res)
            this.$router.push("login")
		})
        },
        
    }
}
</script>