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
<i class="icon-circle-arrow-right"></i>  <label id="label"> Nombres de tables :</label>
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
<div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label"> Choisir une offre :</label>
<select v-model="monChoix" @change="onChang($event)" class="form-control">
<option></option>
<option v-for="offre in this.offtop" :value="offre.id"  :key="offre.id" >{{ offre.titre }}{{ offre.pourcentage }}</option>
</select></div>
<div class="col-md-4"> 
<ul class="list-group py-4" >
<table>
<tr><td >Totale:</td></tr>
<tr><div v-if="offre" ><td >
<input v-model="prix1" disabled > </td></div>
<div v-if="offre==false">
<td ><input :v-model="prix1"  :value="this.prix1=(( this.prix_reservation*this.booking.nombre))" disabled></td></div>
</tr></table>
</ul>
</div>

</div>
</div>
</form>
</div>
</div>

<!--spa-->
<div v-if="isSpa" >
<div  class="row">
  <form class="bg-light p-5 ">
<div class="form-group" >
<div class="row">
<div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label"> Choisir une offre :</label>
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
<div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label"> Choisir une offre :</label>
<select v-model="monChoix" @change="onChange($event)" class="form-control">
<option></option><option v-for="offre in this.offspa" :value="offre.id "  :key="offre.id" >{{ offre.titre }}{{ offre.pourcentage }}</option></select>
</div>
<div class="col-md-4"> 
<ul class="list-group py-4">
<table>
<tr><td >Totale:</td></tr>
<tr><div v-if="offre" >
<td><input v-model="prix" disabled> </td></div>
<div v-if="offre==false">
<td><input :v-model="prix" :value=" this.prix=(( this.prix_reservation*this.booking.nombre))" disabled></td></div>
</tr></table>
</ul>
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
<i class="icon-circle-arrow-right"></i>  <label id="label"> Nombres de tables :</label>
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
<div class="col-md-4"> 
<div > Choisir votre offre : </div>
<select v-model="monChoix" @change="onchange1($event)" class="form-control">
<option></option>
<option v-for="offre in offpool" :value="offre.id" :key="offre.id" >{{ offre.titre }}{{ offre.pourcentage }}</option>
</select></div>
<div class="col-md-4"> 
<ul class="list-group">
<table >
<tr>
<td >Totale:</td>
</tr>
<tr><div v-if="offre">
<td :v-model="prix"><input disabled> </td></div>
<div v-if="offre==false">
<td><input :v-model="prix" :value="this.prix=(( this.prix_reservation*this.booking.nombre))" ></td></div>
</tr>
</table> 
</ul>
</div>
</div>
</div>
</form>
</div></div>
<!--isConferenceRoom-->
<div v-if="isConferenceRoom" >
<div  class="row">
<form class="bg-light p-5 ">
<div class="form-group" >
<div class="row">
    <div class="col-md-4"> 
      
<i class="icon-circle-arrow-right"></i>  <label id="label"> Choisir equipements :</label>
<div  v-for="p in salle" :key="p.id">
<input type="checkbox" :v-model="somme" :value="somme=p.prix" @change="check($event)"  />
{{p.label}}
</div></div>
<div class="col-md-4">                
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   capacite :</label>
                      <input :placeholder="capacite" type="number" min="4"  id="example" class="form-control" v-model="capacite" >
                    </div>
 
<div class="col-md-4"> 
<i class="icon-circle-arrow-right"></i>  <label id="label"> Choisir une offre :</label>
<select v-model="monChoix" @change="onChange3($event)" class="form-control">
<option></option>
<option v-for="offre in offsall" :value="offre.id"  :key="offre.id" >{{ offre.titre }}{{ offre.pourcentage }}</option>
</select></div>
<div class="col-md-4"> 
<ul class="list-group py-4" >
<table>
<tr><td >Totale:</td></tr>
<tr><div v-if="offre" ><td >
<input v-model="prix1" disabled > </td></div>
<div v-if="offre==false">
<td ><input :v-model="prix1"  :value="this.prix1=this.prix_reservation" disabled></td></div>
</tr></table>
</ul>
</div>

</div>
</div>
</form>
</div>
</div>
<!--restaurent-->
<div v-if=" isrestaurant" >
<div  class="row">
<form class="bg-light p-5 ">
<div class="form-group" >
<div class="row">
  <div class="col-md-2"> 
<i class="icon-circle-arrow-right"></i>  <label id="label">   Nombres de tables :</label>
<select name="" id="" class="form-control"   v-model="table" >
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
<i class="icon-circle-arrow-right"></i><label id="label">   Nombres de personne :</label>
<select name="" id="" class="form-control"   v-model="personne"  >
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
  <i class="icon-circle-arrow-right"></i><label id="label"> Choisir le menu :</label>
<div class="form-check"  v-for="p in m.plats" :key="p">
<input class="form-check-input" type="checkbox"  v-model="plat"  :value="p.prix_plat" id="flexCheckDefault">
<label class="form-check-label" @change="onChange($ev)" for="flexCheckDefault">
 {{ p.nom }}
</label>
</div></div>
<div class="col-md-4"> 
<div > Choisir votre offre : </div>
<select v-model="monChoix" @change="onChange($event)" class="form-control">
<option></option>
<option v-for="offre in offres" :value="offre.id" :key="offre.id" > {{ offre.titre }}{{ offre.pourcentage }}</option>
</select>
</div>
<div class="col-md-4"> 
<div class="col-md-4"> 
<ul class="list-group">
<table >
<tr><td >Totale:</td></tr>
<tr><div v-if="offre" >
 <td><input :v-model="prix"  disabled> </td></div>
 <td v-else-if="offre==false"><input v-model="prix" ></td>
</tr></table>
</ul>
</div>
</div>
</div></div>
</form>
</div></div>
           
 <!--information personnels -->  
 <div  class="row py-4">
<form class="bg-light p-5 contact-form">           
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
                     
               
                   
                     <div class="col-md-8"> 
                       <i class="icon-circle-arrow-right"></i>  <label id="label">   Information Complimentaire:</label>

                        <textarea name="" id="" cols="30" rows="7"  :placeholder="Message" class="form-control" v-model="booking.infoComplimentaire"/>
                    
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
     p:"",
     prixeq:null,
     salle:"",
     off:null,
     offpool:[],
     offtop:[],
     offsall:[],
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
monChoix1:"",
resultat:"",
prix:null,
equi:"",
capacite:null,
prix1:null,
  pour:0
    };
  },
  

   	mounted(){
     
	   const id = this.$route.params.id
       const catg =this.$route.params.catg
   if(catg=="spa"){
       axios.get('http://localhost:8000/api/spaimg/'+id).then(res=>{
				this.spa=res.data.rooftop.id
				localStorage.setItem("spa",this.spa)
			console.log("si spa",this.spa);
       this.prix_reservation=res.data.rooftop.prix_reservation
	});
      this.isSpa=true;}


     else if (catg=="restaurant"){
		 axios.get('http://localhost:8000/api/getrestaurant/'+id).then(res=>{
		      	this.restaurent=res.data.restaurant
					this.restaurant=res.data.restaurant.id;
       this.prix_reservation=res.data.restaurant.prix_reservation
      
		
   
				
			});
        this.isrestaurant=true;}
      
	else if(catg=="pool"){
     axios.get('http://localhost:8000/api/alloffimg/'+id).then(res=>{
			
					this.pool=res.data.rooftop.id
           this.prix_reservation=res.data.rooftop.prix_reservation
			localStorage.setItem("pool",this.pool)
      console.log(this.prix_reservation)
});
      this.isPool=true;}
    else if(catg=="roof"){
       axios.get('http://localhost:8000/api/getroof/'+id).then(res=>{
				if(res!=null){
					this.rooftop=res.data.rooftop.id
          
           this.prix_reservation=res.data.rooftop.prix
           	localStorage.setItem("Roof",this.rooftop)}
       });  
      this.isRooftop=true;
			}
       else if(catg=="salleConference"){
       axios.get('http://127.0.0.1:8000/api/getconf/'+id).then(res=>{
				if(res!=null){
					this.ConferenceRoom=res.data.cf.id
          this.salle=res.data.cf.equipement
          this.capacite=res.data.cf.typeconferencerooms.capacite
           this.prix_reservation=res.data.cf.prix
           localStorage.setItem("salle",this.ConferenceRoom)
           console.log("zzzz",this.capacite)}
       });  
      this.isConferenceRoom=true;
			}
   
this.offresres();

  this.isLogin=true;
      if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
                }
     },
	  
  methods: { 
         
  async Addbooking(){
     
     if(this.isRooftop){
      if(this.monChoix==""){
         this.monChoix="0"
      }
      if(this.booking.infoComplimentaire==""){
        this.booking.infoComplimentaire="AUCUN COMMENTAIRE"
      }
 await axios
 
  .post("http://localhost:8000/api/Booking", {
           
              infoComplimentaire:this.booking.infoComplimentaire,
               nombre:this.booking.nombre,
                phone:this.user.phone,
                  email:this.user.email,
                 nom:this.user.lastname,
                 offres:this.monChoix,
             prenom:this.user.firstname,
                user_id:this.user.id,
                 prix:this.prix1,
              rooftop_id:localStorage.getItem("Roof")



  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
       

      )
      .then((res) => {
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
          else if(this.isrestaurant){
              if(this.monChoix==""){
      this.monChoix="0"
   
      }
       if(this.booking.infoComplimentaire==""){
        this.booking.infoComplimentaire="AUCUN COMMENTAIRE"
      }
           
    await axios.post("http://localhost:8000/api/Booking", {
          
              infoComplimentaire:this.booking.infoComplimentaire,
             nombre:this.booking.nombre,
                 phone:this.user.phone,
                  email:this.user.email,
                    offre:this.monChoix,
                 nom:this.user.lastname,
                prenom:this.user.firstname,
                   user_id:this.user.id,
                     prix:this.prix,
                 restaurant_id:localStorage.getItem("restaurant"),

  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
        	
		
	   	this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.isPool){
              if(this.monChoix==""){
      this.monChoix="0"
   
      }
       if(this.booking.infoComplimentaire==""){
        this.booking.infoComplimentaire="AUCUN COMMENTAIRE"
      }
    await axios.post("http://localhost:8000/api/Booking", {
            
              infoComplimentaire:this.booking.infoComplimentaire,
                 nombre:this.booking.nombre,
                 phone:this.user.phone,
                  email:this.user.email,
                    offre:this.monChoix,
                 nom:this.user.lastname,
                  prenom:this.user.firstname,
                user_id:this.user.id,
                   prix:this.prix,
                pool_id:localStorage.getItem("pool")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
		this.response=res.data.booking;
	     console.log(res);
          })}
            
          else if(this.isConferenceRoom){
              if(this.monChoix==""){
      this.monChoix="0"
   
      }
       if(this.booking.infoComplimentaire==""){
        this.booking.infoComplimentaire="AUCUN COMMENTAIRE"
      }
    await axios.post("http://localhost:8000/api/Booking", {
            
               infoComplimentaire:this.booking.infoComplimentaire,
                 nombre:this.capacite,
                  phone:this.user.phone,
                  email:this.user.email,
                    offre:this.monChoix,
                 nom:this.user.lastname,
                 prenom:this.user.firstname,
                   prix:this.prix1,
                user_id:this.user.id,
         
                conference_id:localStorage.getItem("salle")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
        
			this.response=res.data.booking;
	     console.log(res);
	   
          })}
             
          else if(this.isSpa){
        if(this.monChoix==""){
      this.monChoix="0"
   
      }
       if(this.booking.infoComplimentaire==""){
        this.booking.infoComplimentaire="AUCUN COMMENTAIRE"
      }
     
    await axios.post("http://localhost:8000/api/Booking", {
         
                offres:this.monChoix,
                infoComplimentaire:this.booking.infoComplimentaire,
                nombre:this.booking.nombre,
                phone:this.user.phone,
                  email:this.user.email,
                  nom:this.user.lastname,
                 prenom:this.user.firstname,
                   prix:this.prix,
                user_id:this.user.id,
                spa_id:localStorage.getItem("spa")


  }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
   )
      .then((res) => {
			this.response=res.data.booking;
      if(res.data.booking.offres==null)
      {this.offres==0}
	     console.log(res);
	   
          })}},
          async offresres(){
             const id = this.$route.params.id
       const catg =this.$route.params.catg
  if(catg=="restaurant"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffrestaurent/"+id, 

 ).then(res=>{

       this.offres= res.data.offres;
     
     
			console.log(this.off);} )}
    else if(catg=="roof"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffRoofTop/"+id,).then(res=>{
this.offtop= res.data.offres;
console.log(this.offtop);
 })}

 else if(catg=="pool"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffpool/"+id,).then(res=>{
this.offpool= res.data.offres;
console.log(this.offpool);})}


  else if(catg=="spa"){
 await axios
  .get("http://127.0.0.1:8000/api/soldde/"+id, ).then(res=>{
this.offspa= res.data.offres;
for( let i=0;i<this.offspa.lengeth;i++){
  this.table.push(this.offspa[i].pourcentage);
      if (this.monChoix==this.offspa[i].pourcentage)

    this.off=this.offspa[i].id}
			console.log(this.offspa);
      console.log(this.table);
 }) }


 else if(catg=="salleConference"){
 await axios
  .get("http://127.0.0.1:8000/api/getoffsall/"+id, ).then(res=>{

this.offsall= res.data.offres;
			 
console.log(this.offsall); })


}},
 //onchange spa
 onChange(event) {
  
   let pr=event.target.value;
   this.offre=true;
   for(let i=0; i<this.offspa.length ; i++){
      if(this.offspa[i].id==this.monChoix){
        this.pour=this.offspa[i].pourcentage
        console.log("eeeeeeeeeh",this.pour);
      }
   }
   if(pr!=null){
 console.log("eeer",this.offre);
 
   }
   else if(pr ==null){
    
 
     console.log("eeer",this.offre);
   
    }
      
 
 this.prix =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)*this.booking.nombre  )))
 
 

  

 },


  
//onchange pool
 onChange1(event) {
  
   let pr=event.target.value;
   this.offre=true;
   for(let i=0; i<this.offpool.length ; i++){
      if(this.offpool[i].id==this.monChoix){
        this.pour=this.offpool[i].pourcentage
        console.log("eeeeeeeeeh",this.pour);
      }
   }
   if(pr!=null){
     console.log('hi', this.monChoix);
   }
   else if(pr ==null){
     console.log("eeer");
   
    }
      

 this.prix =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)*this.booking.nombre  )))

 
 
 


    },
    //onchange roof
 onChang(event) {
  
   let pr=event.target.value;
   this.offre=true;
   for(let i=0; i<this.offtop.length ; i++){
      if(this.offtop[i].id==this.monChoix){
        this.pour=this.offtop[i].pourcentage
        console.log("eeeeeeeeeh",this.pour);
      }
   }
   if(pr!=null){
     console.log('hi', this.monChoix);
   }
   else if(pr ==null){
     console.log("eeer");
   
    }
      

 this.prix1 =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)*this.booking.nombre  )))
   
 
    },
    //onchange salle
 onChange3(event) {
  
   let pr=event.target.value;
   this.offre=true;
   for(let i=0; i<this.offsall.length ; i++){
      if(this.offsall[i].id==this.monChoix){
        this.pour=this.offsall[i].pourcentage
        console.log("eeeeeeeeeh",this.pour);
      }
   }
   if(pr!=null){
     console.log('hi', this.monChoix);
   }
   else if(pr ==null){
     console.log("eeer");
   
    }
      
if(this.equi){
 this.prix1 =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)+this.equi )))
 console.log("eeer",this.prix1);
}
else if
(this.equi==""){
   this.prix1 =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)+this.equi )))
    console.log("eeer",this.prix1);
}
 
  
    },
  
//onchange restaurent
    onChange4(event) {
     let pr=event.target.value;
   this.offre=true;
   for(let i=0; i<this.offres.length ; i++){
      if(this.offres[i].id==this.monChoix){
        this.pour=this.offres[i].pourcentage
        console.log("eeeeeeeeeh",this.pour);
      }
   }
   if(pr!=null){
     console.log('hi', this.monChoix);
   }
   else if(pr ==null){
     console.log("eeer");
   
    }
      

 this.prix =((( this.prix_reservation -(( this.prix_reservation*this.pour)/100)*this.table  )))
 
 if(this.monChoix==null){
 this.prix=(( this.prix_reservation*this.booking.nombre))

 } console.log("eeer",this.prix);
    },



   
}}

</script>
<style>
div.p{
  color:red;
}
</style>