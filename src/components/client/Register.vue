<template>


    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/"> accueil</router-link></span> <span>Register</span></p>
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
            <h2 class="mb-4">S'inscrire </h2>
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
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Nom" v-model="user.firstname"></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="prenom" v-model="user.lastname"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Téléphone" v-model="user.phone"></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="CIN" v-model="user.cin"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Adresse" v-model="user.country"></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="Code Postal" v-model="user.zipcode"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="email" class="form-control" placeholder="Email" v-model="user.email"></div>
                <div class="col-md-6"> <input type="password" class="form-control" placeholder="Mot de Passe" v-model="user.password"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2">
          <div class="col-md-10 heading-section text-center">
                <input type="button" value="Connecter" v-on:click="addUser()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
                  </div>
              </div>
              <hr/>
              <div class="form-group">
                 <div class="row justify-content-center mb-9 pb-2">
          <div class="col-md-10 heading-section text-center">
           <span>  Vous-avez déja un Compte ? <router-link to="login" > Se Connecter</router-link></span>
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
	data(){
		return {
			user:{
				firstname:"",
				lastname:"",
				phone:"",
				country:"",
        zipcode:"",
        cin:"",
        img:"",
				role:"",
				email:"",
				password:""
			}
		}
	},
	methods:{
	async  addUser(){
		 await axios.post("http://localhost:8000/api/user/register",{
				firstname:this.user.firstname,
				lastname:this.user.lastname,
				phone:this.user.phone,
				country:this.user.country,
				zipcode:this.user.zipcode,
				cin:this.user.cin,
        email:this.user.email, 
         role:"user",
         img:"images/bg1.png",
				password:this.user.password
		}).then((response)=>{
			let res = response.data;
				this.$router.push("login")
				console.log(res)
		})
	}}
}
</script>