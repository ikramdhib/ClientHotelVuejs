<template>


    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="profile"> Profile</router-link></span> <span>Editer Profile</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="w-100"></div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
               <div class="row block-9 " v-if="isMot>0">
          <div class="col-md-6 order-md-last d-flex">
            <form class="bg-white p-5 contact-form">
              <div class="row justify-content-center ">
          <div class="col-md-10 heading-section text-center">
            <h3 class="mb-4">Changer votre mot de passe</h3>
            <span>Merci de verifer vos information avant de les envoyer</span>
          </div>
        </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md"> <input type="password" class="form-control" placeholder="Nouveau mot de passe" v-model="password"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md"> <input type="password" class="form-control" placeholder="Recréé votre nouveu mot de passe" v-model="passwordconf"></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row justify-content-center ">
          <div class="col-md-6 heading-section text-center">
                <input type="button" value="Modifier" v-on:click="updatePassword()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
              <div class="col-md-6 heading-section text-center">
                <input type="button" id="btn" value="Annuler" v-on:click="goBackInfo()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
                  </div>
              </div>
            </form>
          
          </div>

          <div class="col-md-3 d-flex">
             
          </div>
        </div>
        <div class="row block-9 " v-if="isMot==0">
          <div class="col-md-6 order-md-last d-flex">
            <form class="bg-white p-5 contact-form">
               <div class="row justify-content-center ">
          <div class="col-md-10 heading-section text-center">
            <h3 class="mb-4">Editer vos Informations Personnelles </h3>
            <span>Merci de verifer vos information avant de les envoyer</span>
          </div>
        </div>
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
                <div class="col-md-6">   <input type="submit" id="btnn" value="Modifier Mot de passe !" v-on:click="goPass()" class="btn btn-primary btn-md   py-3 "></div>
              </div> 
              </div>
              <div class="form-group">
                  <div class="row justify-content-center ">
          <div class="col-md-6 heading-section text-center">
                <input type="button" value="Modifier" v-on:click="updateProfile()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
              <div class="col-md-6 heading-section text-center">
                <input type="button" id="btn" value="Annuler" v-on:click="goBack()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
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
      isMot:0,
      password:"",
      passwordconf:"",
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
      } , 

		}
  },
  
mounted (){
   if(localStorage.getItem('client')){
        try{
          this.user = JSON.parse(localStorage.getItem('client'));
           }catch(e){
             localStorage.removeItem('client');
               }
                }
},

	methods:{
    goPass(){
      this.isMot++;
    },

    goBack(){
      this.$router.push('profile')
    },
    goBackInfo(){
      this.isMot--;
    },
 async updateProfile(){
                  if(this.user.firstname){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  firstname:this.user.firstname,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data;
                   localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
                this.$router.push('profile')
              })
                  }

                   if(this.user.lastname){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  lastname:this.user.lastname,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data;
                   localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
              })
              }

               if(this.user.phone){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  phone:this.user.phone,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data;
                  localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
              })
               }
                if(this.user.country){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  country:this.user.country,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data;
                  localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
              })
                }
                 if(this.user.zipcode){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  zipcode:this.user.zipcode,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data;
                   localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
              })
                 }
                  if(this.user.firstname && this.user.lastname && this.user.phone &&
                  this.user.country && this.user.zipcode){
               await axios.post('http://localhost:8000/api/user/update-profile',{
                  firstname:this.user.firstname,
                  lastname:this.user.lastname,
                  phone:this.user.phone,
                  country:this.user.country,
                  zipcode:this.user.zipcode,
                  email:this.user.email,
               },
               { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }
               }).then((response)=>{
                let res = response.data.user;
                localStorage.removeItem('client');
                localStorage.setItem("client",JSON.stringify(res));
              })
                  }
                   if (!this.user.firstname && !this.user.lastname && !this.user.phone && !this.user.country
                   && !this.user.zipcode ){
			           	this.$toast.add({severity:'error', summary: 'Erreur', detail:'Tous les champs sont vides !', life: 3000});
			
                 }
                },
                updatePassword(){
                  axios.put('http://localhost:8000/api/user/updatPass/'+this.user.id,
                  {
                    password:this.password,
                    password_confirmation:this.passwordconf
                  },
                  { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
                  ).then(res=>{
                    console.log(res.data);
                  })
                }

}
}
</script>
<style scoped>
#btnn{
 background-color: transparent;
 color:#8d703b;
 border-color: transparent;
}
#btn{
 background-color: grey;
 border-color: transparent;
}
</style>