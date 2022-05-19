<template><section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Résérvez maintement : </h2>
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
                  <div class="row">
                  <div class="ml-md-0">
                 <div class="col-md-6 d-flex align-self-stretch ">
            <div class="media block-6 services py-6  text-center">
              <!--	<div class="icon d-flex align-items-center justify-content-center">
              		<span class="flaticon-airplane49" ></span> 
              	</div>-->
                 <h3 id="title" class="mb-4">Saisir une reservation </h3>
            </div>
                 </div>
                  </div>
	            </div>
              </div>
               <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
    <div class="col-md-4"> 
     <div v-if="ispool|| isConferenceRoom || isrestaurant ||isRooftop ||isSpa"> Votre Choix : </div>

  <select class="form-select" aria-label="Default select example"   @change="isOffre($event)">
  <option selected>choizir une offre</option>
  <option :value="poucentage"  v-for="offre in offres" :key="offre">{{ offre.titre }}</option></select>
    </div>
   
    <div class="col-md-4"> 
     <i class="icon-circle-arrow-right" ></i>  <label id="label" >  Prix de reservation:</label>
    <ul class="list-group"  >  
       
  <li class="list-group-item"  v-for="offre in offres" :key="offre"  ><div v-if="isOffreExist">{{ prix_reservation -(( prix_reservation*offre.pourcentage)/100) }}</div> DT</li>
    <li class="list-group-item"  v-if="isOffreExist==false" >{{ prix_reservation  }} DT</li>           
</ul>
<div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label">   Totale:</label>
<ul class="list-group">
 <li class="list-group-item" v-if="isOffreExist">{{ (prix_reservation-(( prix_reservation*offre.pourcentage)/100))* booking.nbPersonne}} DT</li>
  <li class="list-group-item"  v-if="isOffreExist==false" >{{ prix_reservation * booking.nbPersonne }} DT</li>     
</ul>
  </div>
       </div>
      </div></div>
            </form>
              </div>
             <div  class="row py-4">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row" v-if="isPool || isSpa"  >
                  <div class="col-md-2"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de personnes :</label>
                       <select name="" id="" class="form-control"   v-model="booking.nbPersonne"  >
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8">8 </option>
                        <option value="9">9 </option>
                        <option value="10">10 </option>
	                    </select>
                    </div>
                   
                     <div class="col-md-8"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Information Complimentaire:</label>

                        <textarea name="" id="" cols="30" rows="7"  :placeholder="Message" class="form-control" v-model="booking.infoComplimentaire"/>
                    </div>
                 </div>
              </div>
                 <div class="form-group" >
                  <div class="row" v-if="isrestaurant || isRooftop" >
                  <div class="col-md-2"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de tables :</label>
                       <select name="" id="" class="form-control"   v-model="booking.nbPersonne" >
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8">8 </option>
                        <option value="9">9 </option>
                        <option value="10">10 </option>
	                    </select>
                    </div>
                   
                     <div class="col-md-8"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Information Complimentaire:</label>

                        <textarea name="" id="" cols="30" rows="7"  :placeholder="Message" class="form-control" v-model="booking.infoComplimentaire"/>
                    </div>
                 </div>
              </div>
              <div class="form-group">
                  <div class="row" v-if=" isConferenceRoom">
                <div class="col-md-8"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Information Complimentaire:</label>

                        <textarea name="" id="" cols="30" rows="7"  :placeholder="Message" class="form-control" v-model="booking.infoComplimentaire"/>
                    </div>
                 </div>
              </div>
              
              <div class="form-group">
                  <div class="row" >
                     <h2 >Information personnels : </h2>
                     <div class="col-md-4"> 
                   
		                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nom :</label>
                      <input :placeholder="Nom" type="text" id="example" class="form-control"  v-model="user.firstname" >
                    </div>
                     <div class="col-md-4"> 
                  
		                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Prenom :</label>
                      <input :placeholder="Prenom" type="text" id="example" class="form-control" v-model="user.lastname" >
                    </div>
                     <div class="col-md-4"> 
                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   phone:</label>
                      <input :placeholder="Phone" type="text" id="example" class="form-control"   v-model="user.phone" >
                    </div>
                     <div class="col-md-4"> 
                  
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   email :</label>
                      <input :placeholder="Email" type="mail" id="example" class="form-control" v-model="user.email" >
                    </div>
                    
              </div>
               <div class="col-md-4 py-4"> 
                      <div class="form-check">
                        <input class="form-check-input" type="radio" value="1" name="flexRadioDefault" id="rd"   checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                         Payement en ligne 
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" value="0" name="flexRadioDefault" id="rd"  >
                        <label class="form-check-label" for="flexRadioDefault2">
                          Payement à l'Hotel
                        </label>
                      </div>
                    </div>
              </div>
              
           
                    
                </form>
             
              <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2 py-4">
          <div class="col-md-5 heading-section text-center">
                <input type="button" value="Reserver"  @click="Addbooking()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
                  </div>
              </div>
          </div>
           
          
             
            </div> </div></div></div>
             
            
           
             
          
    </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
     
        pourcentage:"",
        isOffreExist:false,
    
      prix_reservation:null,
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
      },user_id:0,
      booking:{
          nom:"",
         infoComplimentaire:"",
          email:"",
        
        prenom:"",
          phone:"",
         nbPersonne:""},
       id:1,
    isrestaurant:false,
     isRooftop:false ,
     ispool:false,
     isConferenceRoom:false,
     isSpa:false,
	 offres:[],
    };
  },

   	mounted(){
     if(localStorage.getItem('restaurant')!=null){
       this.isrestaurant=true
       console.log(localStorage.getItem('restaurant'))
       console.log(this.isrestaurant)
     }
    else if(localStorage.getItem('roofTop')!=null){
       this.isRooftop=true;
         }else if(localStorage.getItem('spa')!=null){
           this.isSpa=true;
          }else if(localStorage.getItem('pool')!=null){
         this.ispool=true;
}else if(localStorage.getItem('conferenceRoom')!=null){
  this.isConferenceRoom=true;
}
this.offresres();
this.prix_reservation=localStorage.getItem("prix_reservation");
  if(localStorage.getItem('client')){
                    try{
                        this.user = JSON.parse(localStorage.getItem('client'));
                    }catch(e){
                        console.log(e);
                    }
                } },
	  
  methods: { 
         
  async Addbooking(){
      if(this.isRooftop!=null){
 await axios
 
  .post("http://localhost:8000/api/Booking", {
           
              infoComplimentaire:this.booking.infoComplimentaire,
              
             nbPersonne:this.booking.nbPersonne,
                phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
             prenom:this.user.firstname,
                user_id:this.user.user_id,
              rooftop_id:localStorage.getItem("rooftop_id")



  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
       

      )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
          else if(this.isrestaurant!=null){
           
    await axios.post("http://localhost:8000/api/Booking", {
          
              infoComplimentaire:this.booking.infoComplimentaire,
             nbPersonne :this.booking.nbPersonne,
                 phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
                prenom:this.user.firstname,
                   user_id:this.user.id,
                 restaurant_id:localStorage.getItem("restaurant"),

  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
        	
		
	   	this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.isPool!=null){
    await axios.post("http://localhost:8000/api/Booking", {
            
              infoComplimentaire:this.booking.infoComplimentaire,
                nbPersonne:this.booking.nbPersonne,
                 phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
                  prenom:this.user.firstname,
                user_id:this.user.user_id,
                pool_id:localStorage.getItem("pool_id")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
		this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.isConferenceRoom!=null){
    await axios.post("http://localhost:8000/api/Booking", {
            
               infoComplimentaire:this.booking.infoComplimentaire,
                 nbPersonne:this.booking.nbPersonne,
                  phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
                 prenom:this.user.firstname,
                user_id:this.user.user_id,
         
                conference_id:localStorage.getItem("conference_id")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
        
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
             
          else if(this.isSpa!=null){
    await axios.post("http://localhost:8000/api/Booking", {
           
               infoComplimentaire:this.booking.infoComplimentaire,
                 nbPersonne :this.booking.nbPersonne,
                phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
             prenom:this.user.firstname,
                user_id:this.user.user_id,
                spa_id:localStorage.getItem("spa_id")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}},
          async offresres(){
  if(this.isrestaurant!=null){
 await axios
  .get("http://127.0.0.1:8000/api/getoffrestaurent/"+localStorage.getItem("restaurant"), 

 ).then(res=>{

       this.offres= res.data.offres;
			console.log(this.offres); })}
    else if(this.isRooftop!=null){
 await axios
  .get("http://127.0.0.1:8000/api/getoffRoofTop/"+localStorage.getItem('Roof'),  ).then(res=>{
this.offres= res.data.offres;
console.log(this.Offres);
 })}
 else if(this.ispool!=null){
 await axios
  .get("http://127.0.0.1:8000/api/getoffpool/"+localStorage.getItem("pool"), ).then(res=>{
this.offres= res.data.offres;
console.log(this.offres);})}
  else if(this.isSpa!=null){
 await axios
  .get("http://127.0.0.1:8000/api/getoffspa/"+localStorage.getItem('spa'), ).then(res=>{
this.offres= res.data.offres;
console.log(this.offres); }) }
 else if(this.isConferenceRoom!=null){
 await axios
  .get("http://127.0.0.1:8000/api/getoffsall/"+localStorage.getItem("salleconf"), ).then(res=>{
console.log( this.offres= res.data.offres);
this.offres= res.data.offres;
			 
console.log(this.offres); })
}},
 isOffre(event){
      if(event.target.value !=null){
        this.isOffreExist=true;
      }else{
        this.isOffreExist=false;
      }
      console.log("rrrrrrrrrrrrrrrrr",this.isOffreExist);
    }
}}

</script>
<style>
div.p{
  color:red;
}
</style>