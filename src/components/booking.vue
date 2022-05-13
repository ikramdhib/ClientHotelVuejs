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
                 <h3 id="title" class="mb-4">Saisie  </h3>
            </div>
                 </div>
                  </div>
	            </div>
              </div>
              <div  class="row">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-5"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de personnes :</label>
                      <input :placeholder="nombresPersonnes" type="number" id="example" class="form-control" :min="1" v-model="booking.nbpersonne">
                    </div>
                    <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >  Offres :</label>
                      <input :placeholder="Offres" type="text" id="example"   class="form-control" v-model="booking.offres" >
                    </div>
                     <div class="col-md-10"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Information Complimentaire:</label>

                        <textarea name="" id="" cols="30" rows="7"  :placeholder="Message" class="form-control" v-model="booking.infoComplimentaire"/>
                    </div>
                 </div>
              </div>
              
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-4">  <h2 >Nombre de chambre : </h2>
                   
		                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nom :</label>
                      <input :placeholder="Nom" type="text" id="example" class="form-control" v-model="booking.nom"  >
                    </div>
                     <div class="col-md-4"> 
                  
		                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Prenom :</label>
                      <input :placeholder="Prenom" type="text" id="example" class="form-control" v-model="booking.prenom" >
                    </div>
                     <div class="col-md-4"> 
                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   phone:</label>
                      <input :placeholder="Phone" type="text" id="example" class="form-control"  v-model="booking.phone" >
                    </div>
                     <div class="col-md-4"> 
                  
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   email :</label>
                      <input :placeholder="Email" type="text" id="example" class="form-control" v-model="booking.email" >
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
            </div></div></div>
            
              </div>
             
          
    </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
          user_id:0,
      booking:{
          nom:"",
          infocomplimentaire:"",
          email:"",
          offres:"",
        prenom:"",
          phone:"",
          nbpersonne:"",
         

      }
	 
    };
  },
  
   	mounted(){
			this.user=JSON.parse(localStorage.getItem('user'))
		},
  
   
	  
  methods: { 
      categorieClick(){
				 if(this.categorie=="POOL"){
						this.isPool=true
					}
					else if(this.categorie=="RESTAURANT"){
						this.isRestaurant=true
					}
					else if(this.categorie=="SALLE DE CONFERENCE"){
						this.isConferenceRoom=true
					}
					else if (this.categorie=="SPA"){
						this.isSpa=true
					}
					else if(this.categorie=="ROOF-TOP"){
						this.isRooftop=true
					}},      
  async Addbooking(){
      if(this.idRooftop!=null){
 await axios
 
  .post("http://localhost:8000/api/Booking", {
             name:this.booking.name,
               infocomplimentaire:this.booking.infocomplimenaire,
                email:this.booking.email,
                 nom:this.booking.nom,
                 offres :this.booking.offres,
                 nbpersonne :this.booking.nbpersonne,
                phone:this.booking.phone,
             prenom:this.booking.prenom,
                user_id:this.booking.user_id,
                rooftop_id:this.booking.rooftop_id



  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
       

      )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
          else if(this.idRestaurant!=null){
    await axios.post("http://localhost:8000/api/Booking", {
             name:this.booking.name,
               infocomplimentaire:this.booking.infocomplimenaire,
                email:this.booking.email,
                 nom :this.booking.nom,
                 offres :this.booking.offres,
                 nbpersonne :this.booking.nbpersonne,
                phone:this.booking.phone,
                  prenom:this.booking.prenom,
                user_id:this.booking.user_id,
                 restaurant_id:this.booking.restaurant_id


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
		
	   	this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.idPool!=null){
    await axios.post("http://localhost:8000/api/Booking", {
             name:this.booking.name,
               infocomplimentaire:this.booking.infocomplimenaire,
                email:this.booking.email,
                 nom :this.booking.nom,
                 offres :this.booking.offres,
                 nbpersonne :this.booking.nbpersonne,
                phone:this.booking.phone,
                  prenom:this.booking.prenom,
                user_id:this.booking.user_id,
                pool_id:this.booking.pool_id


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
		this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.idConferenceRoom!=null){
    await axios.post("http://localhost:8000/api/Booking", {
             name:this.booking.name,
               infocomplimentaire:this.booking.infocomplimenaire,
                email:this.booking.email,
                 nom :this.booking.nom,
                 offres :this.booking.offres,
                 nbpersonne :this.booking.nbpersonne,
                phone:this.booking.phone,
                  prenom:this.booking.prenom,
                user_id:this.booking.user_id,
                ConferenceRoom_id:this.booking.ConferenceRoom_id


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
             
          else if(this.idSpa!=null){
    await axios.post("http://localhost:8000/api/Booking", {
             name:this.booking.name,
               infocomplimentaire:this.booking.infocomplimenaire,
                email:this.booking.email,
                 nom :this.booking.nom,
                 offres :this.booking.offres,
                 nbpersonne :this.booking.nbpersonne,
                phone:this.booking.phone,
                  prenom:this.booking.prenom,
                user_id:this.booking.user_id,
                spa_id:this.booking.spa_id


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}}}}

</script>
