<template>
    
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	     <router-link to="/" class="navbar-brand">Deluxe</router-link>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto"> 
				 <li>
				   <ul class="nav navbar-nav ms-auto">
                    <li v-if="isTokenLogReg" id="compte" class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
                        <div class="dropdown-menu dropdown-menu-end">
                         <!--   <a class="dropdown-item" @click="goToProfile()" >profile</a>-->
						 <router-link class="dropdown-item" to="login" >Login</router-link>
                           <router-link class="dropdown-item" to="register" >Register</router-link>
                        </div>
                    </li>
					
                </ul>
			  </li>
	          <li class="nav-item "><router-link class="nav-link" to="/"> Accueil</router-link></li>
			  
	          <li class="nav-item"><router-link class="nav-link" to="rooms"> Chambres </router-link></li>
			   <ul class="nav navbar-nav ms-auto">
                    <li  class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Restaurant & Cofée</a>
                        <div class="dropdown-menu dropdown-menu-end">
                         <!--   <a class="dropdown-item" @click="goToProfile()" >profile</a>-->
						 <router-link class="dropdown-item" to="restaurant1" >Restaurant</router-link>
                           <router-link class="dropdown-item" to="rooftop" >Roof-Top</router-link>
                        </div>
                    </li>
					
                </ul>
	          <li class="nav-item"><router-link class="nav-link" to="contact"> Contact</router-link></li>
			
				 <ul class="nav navbar-nav ms-auto">
                    <li  class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Plus </a>
                        <div class="dropdown-menu dropdown-menu-end">
                         <!--   <a class="dropdown-item" @click="goToProfile()" >profile</a>-->
						 <router-link class="dropdown-item" to="restaurants" >Salle de Conference</router-link>
                           <router-link class="dropdown-item" to="rooftop" >Pool</router-link>
                           <router-link class="dropdown-item" to="rooftop" >SPA</router-link>
                        </div>
                    </li>
					
                </ul>
				 <li>
				   <ul class="nav navbar-nav ms-auto">
                    <li v-if="isTokenAccount" id="compte" class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="icon-user"></i> {{ user.firstname }}  {{ user.lastname }}</a>
                        <div class="dropdown-menu dropdown-menu-end">
                         <!--   <a class="dropdown-item" @click="goToProfile()" >profile</a>-->
						 <router-link class="dropdown-item" to="profile" >Profile</router-link>
                            <a href="#" class="dropdown-item" @click="logout()">Quiter</a>
                        </div>
                    </li>
					
                </ul>
			  </li>
	        </ul>
	      </div>
	    </div>
	  </nav>
</template>
<script>
import axios from'axios'
export default {
	data(){
		return{
			user:{},
			isTokenAccount:false,
			isTokenLogReg:true,
		}
	},
	mounted(){
		if(localStorage.getItem('token_client')){
			this.isTokenAccount=true;
			this.isTokenLogReg=false;
			this.user=JSON.parse(localStorage.getItem('client'))
		}
		console.log(this.isToken);
		console.log(this.user);
	},
	methods:{
		  async logout(){
			  console.log(localStorage.getItem('token_client'));
			if(localStorage.getItem('token_client')){
			await axios.get('http://localhost:8000/api/user/logout',
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client')}})
				.then(Response=>{
					localStorage.removeItem('token_client')
					localStorage.removeItem('client')
					this.$router.push("login")
					
					console.log(Response) 
				}).catch(e=>{
					console.warn(e)
				})
			}
		},
		goToProfile(){
			this.$router.push('profile')
		}
	}
}
</script>