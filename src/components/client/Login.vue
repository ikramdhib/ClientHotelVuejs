<template>
   
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/"> Accueil</router-link></span> <span>Login</span></p>
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
            <h2 class="mb-4">Connexion </h2>
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
        <div class="row block-9 slide-top" >
          <div class="col-md-6 order-md-last d-flex">
            <form  class="bg-white p-5 contact-form">
                <ul style="list-style-type-center:none" >
                      <li class="li" style="color:red" v-for="error in errors" :key="error"><InlineMessage>{{ error }}</InlineMessage> </li>
                      </ul>
                       <div class="li" v-if="auth">
                        <li class="li" style="color:red"><InlineMessage>{{ auth }}</InlineMessage> </li>
                        </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Adresse E-mail" v-model="user.email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Mots de Passe" v-model="user.password">
              </div>
              <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2">
          <div class="col-md-10 heading-section text-center">
                <input type="button" value="Connecter" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5" v-on:click="login()">
              </div>
                  </div>
              </div>
              <hr/>
            
              <div class="form-group">
                       <div class="row justify-content-center mb-9 pb-2">
          <div class="col-md-10 heading-section text-center">
           <span><router-link to="forgetpassword"> Mot de Passe Oublier  ?</router-link></span>
          </div>
        </div>
              </div>
                <div class="form-group">
                 <div class="row justify-content-center  pb-2">
          <div class="col-md-10 heading-section text-center">
           <span>N'avez-vous un Compte ? <router-link to="register">'inscrire</router-link> </span>
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
           user:{
               email:"",
               password:""
           },
           errors:[],
           auth:"",
       }
    },
    methods:{
     async login(){

         if(this.user.email==""){
				this.errors.push(" il doit saisir votre email")
	               }
            if(this.user.password==""){
				this.errors.push(" il doit saisir votre mot de passe")
	               }       
          await axios.post('http://localhost:8000/api/user/login',{
             email:this.user.email,
             password:this.user.password
         } ).then(response=>{
             let res =response.data.error;
              if(res=="UnAuthorised Access"){
                 this.auth="Email ou Mot de Passe est incorrect, Ressez! "
             }else{
             localStorage.setItem('token_client', response.data.token);
            console.log(res)
			this.profile()}

		})
   
                 
        },
          async profile(){
            await axios.get('http://localhost:8000/api/user/user-profile',
            { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
        }).then(res=>{
            let response = res.data;
            if(response.role=='user'){
            localStorage.setItem("client",JSON.stringify(response));
                this.$router.push("/")
                console.log(response)
            }else{
                this.$router.push("login")
            }
        })        
    }
    }
}
</script>