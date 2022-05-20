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


<!--rooftop-->
    <div v-if="isRooftop" >
               <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
    <div class="col-md-4"> 
     <div > Choisir votre offre : </div>

   <select v-model="selected" class="form-control">
     <option></option>
    <option v-for="offre in offres" :value="pourcentage" :key="offre.id">
      {{ offre.titre }}{{ offre.pourcentage }}
    </option>
  </select>
    </div>
   
    <div class="col-md-4"> 


 <div class="col-md-4"> 



 <div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label"> Totale:</label>
<ul class="list-group">
  

 <div v-for="offre in offres" :key="offre.id" >
    
            <td>{{ prix_reservation -(( prix_reservation*offre.pourcentage)/100)*booking.nombre }}</td></div>
             <td  >{{ prix_reservation*booking.nombre }}</td>
</ul>
  </div>

  </div>

  </div>
       </div>
      </div>
            </form>
              </div></div>

<!--spa-->
                  <div v-if="isSpa" >
                       <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
    <div class="col-md-4"> 
     <div > Choisir votre offre : </div>

   <select v-model="monChoix" @change="onChange($event)" class="form-control">
     <option></option>
    <option v-for="offre in this.offspa" :value="offre.pourcentage"  :key="offre.id" >
      {{ offre.titre }}{{ offre.pourcentage }}
    </option>
  </select>
   
 <div class="col-md-4"> 
<ul class="list-group">
<table>
  <tr>
<td >Totale:</td>
    </tr>
<tr><div v-if="offre" >
<td><input v-model="booking.prix" :placeholder="(( prix_reservation -(( prix_reservation*monChoix)/100)*booking.nombre  ))" disabled> </td></div>
<td v-else-if="offre==false"><input v-model="booking.prix" :placeholder="(( prix_reservation*booking.nombre))"></td>
           </tr></table>
   
  
   
</ul>
  </div>
 </div>
  </div>
       </div>
   
            </form>
              </div></div>
              <!--pool-->
                 <div v-if="isPool" >
               <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
    <div class="col-md-4"> 
     <div > Choisir votre offre : </div>

   <select v-model="monChoix" @change="onChange($event)" class="form-control">
     <option></option>
    <option v-for="offre in offres" :value="offre.pourcentage" :key="offre.id" >
      {{ offre.titre }}{{ offre.pourcentage }}
    </option>
  </select>
   
 <div class="col-md-4"> 

<ul class="list-group">

   <table >
  
          <tr>
            <td >Totale:</td>
           </tr>
         
    <tr><div v-if="offre" >

            <td><input v-model="booking.prix" :placeholder="(( prix_reservation -(( prix_reservation*monChoix)/100)*booking.nombre  ))" disabled> </td></div>
             <td v-else-if="offre==false"><input v-model="booking.prix" :placeholder="(( prix_reservation*booking.nombre))"></td>
           </tr></table>
   
  
   
</ul>
  </div>
 </div>
  </div>
       </div>
   
            </form>
              </div></div>
              <!--restaurent-->
              <div v-if=" isrestaurant" >
               <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
    <div class="col-md-4"> 
     <div > Choisir votre offre : </div>

   <select v-model="monChoix" @change="onChange($event)" class="form-control">
     <option></option>
    <option v-for="offre in offres" :value="offre.pourcentage" :key="offre.id" >
      {{ offre.titre }}{{ offre.pourcentage }}
    </option>
  </select>
    </div>
   
    <div class="col-md-4"> 
  
   
<div class="col-md-4"> 
<ul class="list-group">

   <table >
  
          <tr>
            <td >Totale:</td>
           </tr>
         
    <tr><div v-if="offre" >

            <td><input v-model="booking.prix" :placeholder="(( prix_reservation -(( prix_reservation*monChoix)/100)*booking.nombre + booking.nombre ))" disabled> </td></div>
             <td v-else-if="offre==false"><input v-model="booking.prix" :placeholder="(( prix_reservation*booking.nombre))"></td>
           </tr></table>
   
  
   
</ul>
  </div>
       </div>
      </div></div>
            </form>
              </div></div>
             <div  class="row py-4">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row" v-if="isPool || isSpa"  >
                  <div class="col-md-2"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de personnes :</label>
                       <select name="" id="" class="form-control"   v-model="booking.nombre"  >
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
                     
                       <select name="" id="" class="form-control"   v-model="booking.nombre" >
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
                      <div class="col-md-2"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de personne :</label>
                     
                       <select name="" id="" class="form-control"    >
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
                  
                     <div class="col-md-2" v-for="m in restaurent.menus" :key="m"> 
                       
                         
                   <div class="form-check"  v-for="p in m.plats" :key="p">
                    <input class="form-check-input" type="checkbox"  v-model="p.prix_plat"  id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                            {{ p.nom }}
                   </label>
                   </div></div>
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
     monChoix:"",
        pourcentage:"",
        isOffreExist:false,
    	restaurent:{ },
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
         offres:"",
        prenom:"",
          phone:"",
          prix:"",
         nombre:""},
     spa:"",
     
     selected:false,
     plat:"",
    isrestaurant:false,
     isRooftop:false ,
     ispool:false,
     isConferenceRoom:false,
     isSpa:false,
     offre:false,
	 offres:[],
 offspa:[],
    };
  },
  

   	mounted(){
     
	   const id = this.$route.params.id
       const categorie =this.$route.params.categorie
   if(categorie=="spa"){
       axios.get('http://localhost:8000/api/spaimg/'+id).then(res=>{
				this.spa=res.data.rooftop.id
				localStorage.setItem("spa",this.spa)
			console.log("si spa",this.spa);
       this.prix_reservation=res.data.rooftop.prix_reservation
	});
      this.isSpa=true;}


     else if (categorie=="restaurant"){
		 axios.get('http://localhost:8000/api/getrestaurant/'+id).then(res=>{
		      	this.restaurent=res.data.restaurant
					this.restaurant=res.data.restaurant.id;
       this.prix_reservation=res.data.restaurant.prix_reservation
      
		
   
				
			});
        this.isrestaurant=true;}
      
	else if(categorie=="pool"){
     axios.get('http://localhost:8000/api/alloffimg/'+id).then(res=>{
			
					this.pool=res.data.rooftop.id
           this.prix_reservation=res.data.rooftop.prix_reservation
			localStorage.setItem("pool",this.pool)
      console.log(this.prix_reservation)
});
      this.isPool=true;}
    else if(categorie=="roof"){
       axios.get('http://localhost:8000/api/getroof/'+id).then(res=>{
				if(res!=null){
					this.rooftop=res.data.rooftop.id
           this.prix_reservation=res.data.rooftop.prix_reservation}
       });  
      this.isRooftop=true;
			}
       else if(categorie=="salleConference"){
       axios.get('http://127.0.0.1:8000/api/getconf/'+id).then(res=>{
				if(res!=null){
					this.ConferenceRoom=res.data.room.id
           this.prix_reservation=res.data.room.prix_reservation}
       });  
      this.isConferenceRoom=true;
			}
   
this.offresres();

  if(localStorage.getItem('client')){
                    try{
                        this.user = JSON.parse(localStorage.getItem('client'));
                    }catch(e){
                        console.log(e);
                    }
                }
     },
	  
  methods: { 
         
  async Addbooking(){
      if(this.isRooftop!=null){
 await axios
 
  .post("http://localhost:8000/api/Booking", {
           
              infoComplimentaire:this.booking.infoComplimentaire,
               nombre:this.booking.nombre,
                phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
                 offres:this.booking.offres,
             prenom:this.user.firstname,
                user_id:this.user.user_id,
                prix:this.booking.prix,
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
             nombre:this.booking.nombre,
                 phone:this.user.phone,
                  email:this.user.email,
                    offre:this.booking.offre,
                 nom:this.user.lastname,
                prenom:this.user.firstname,
                   user_id:this.user.id,
                     prix:this.booking.prix,
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
                 nombre:this.booking.nombre,
                 phone:this.user.phone,
                  email:this.user.email,
                    offre:this.booking.offre,
                 nom:this.user.lastname,
                  prenom:this.user.firstname,
                user_id:this.user.user_id,
                  prix:this.booking.prix,
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
                 nombre:this.booking.nombre,
                  phone:this.user.phone,
                  email:this.user.email,
                    offre:this.booking.offre,
                 nom:this.user.lastname,
                 prenom:this.user.firstname,
                   prix:this.booking.prix,
                user_id:this.user.user_id,
         
                conference_id:localStorage.getItem("conference_id")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
        
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
             
          else if(this.isSpa){
            
    await axios.post("http://localhost:8000/api/Booking", {
           
               infoComplimentaire:this.booking.infoComplimentaire,
                nombre:this.booking.nombre,
                phone:this.user.phone,
                  email:this.user.email,
                    offre:this.booking.offre,
                 nom:this.user.lastname,
             prenom:this.user.firstname,
               prix:this.booking.prix,
                user_id:this.user.user_id,
                spa_id:localStorage.getItem("spa")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}},
          async offresres(){
             const id = this.$route.params.id
       const categorie =this.$route.params.categorie
  if(categorie=="restaurant"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffrestaurent/"+id, 

 ).then(res=>{

       this.offres= res.data.offres;
			console.log(this.offres); })}
    else if(categorie=="roof"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffRoofTop/"+id,  ).then(res=>{
this.offres= res.data.offres;
console.log(this.Offres);
 })}

 else if(categorie=="pool"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffpool/"+id, ).then(res=>{
this.offres= res.data.offres;
console.log(this.offres);})}


  else if(categorie=="spa"){
 await axios
  .get("http://127.0.0.1:8000/api/soldde/"+id, ).then(res=>{
this.offspa= res.data.offres;
for( let i=0;i<this.offspa.lengeth;i++){
console.log(this.offspa[i]);} }) }


 else if(categorie=="salleConference"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffsall/"+id, ).then(res=>{
console.log( this.offres= res.data.offres);
this.offres= res.data.offres;
			 
console.log(this.offres); })


}},
 
 onChange(event) {
   let pr=event.target.value;
   this.offre=true;
   if(pr!=null){
     console.log('hi');
   }
   else if(pr ==null){
     console.log("eeer");
   }
      console.log("ooo",this.monChoix);
    },
}}

</script>
<style>
div.p{
  color:red;
}
</style>