<template>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Résérvez maintement : </h2>
          </div>

          <!-- Button trigger modal 
     
<button type="button" class="btn btn-primary"   data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>
      


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" v-if="isLogin==true">
        <h5 class="modal-title" id="exampleModalLongTitle" >Login</h5>
        <h5 class="modal-title" id="exampleModalLongTitle" >Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div v-if="isRegister==true">
            <form class="bg-white p-5 contact-form" >
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Nom" ></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="prenom" ></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Téléphone" ></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="CIN" ></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="text" class="form-control" placeholder="Adresse"></div>
                <div class="col-md-6"> <input type="text" class="form-control" placeholder="Code Postal" ></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-6"> <input type="email" class="form-control" placeholder="Email" ></div>
                <div class="col-md-6"> <input type="password" class="form-control" placeholder="Mot de Passe" ></div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2">
          <div class="col-md-10 heading-section text-center">
                <input type="submit" value="Connecter" v-on:click="addUser()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
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
          <div v-if="isLogin==true">
           <form  class="bg-white p-5 contact-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Adresse E-mail">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Mots de Passe" >
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
      </div>
    </div>
  </div>
</div>-tttt-->
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
                 <h3 id="title" class="mb-4">3. Réserver !</h3>
            </div>
                 </div>
              
	            </div>
               <div class="row">
                  <div class="ml-md-0">
                 <div class="col-md-6 d-flex align-self-stretch ">
            <div class="media block-6 services px-4  text-center">
              <!--	<div class="icon d-flex align-items-center justify-content-center">
              		<span class="flaticon-airplane49" ></span> 
              	</div>-->
                 <h6 id="titre" class="mb-4">Information personnelles </h6>
            </div>
                 </div>
              
	            </div>
              </div>
              </div>
                   <div  class="row">
                <form class="bg-light p-5 ">
              <div class="form-group" >
                  <div class="row">
                         <table  class="table table-borderless ">
                  
                  <tbody>
                      <tr>
                      <td colspan="2" id="tit"> Récapitulatif  <hr/></td>
                      <td ><p id="la"> {{ nuits }} Nuits </p></td>
                    </tr>
                    <tr v-for="room in rooms" :key="room">            
                       <td ><p id="tit"> {{ room.type }} </p> </td>
                       <td ><p id="la"> <span v-for="i in room.nbadult" :key="i"><i id="icone" class="icon icon-user"> </i> </span> <br> {{ room.option }} </p>  </td>
                       <td ><p id="la"> {{ room.totale }} DT</p>  </td>
                       
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
		                <input id="btn" type="button" value="Modifier mon résérvation"  class="btn btn-primary" @click="back()">
		             </td>
                    </tr>
                  </tbody>
                </table>
                 </div>
              </div>
            </form>
              </div>
              <div  class="row py-4">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-2"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Titre : </label><span>*</span>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control">
	                    	<option value="">M. </option>
	                      <option value="">Mme. </option>
	                      <option value="">Mlle. </option>
	                    </select>
	                  </div>
                    </div>
                    <div class="col-md-4"> 
                   <label id="label" >   Prénom :</label><span>*</span>
                   <input type="text" class="form-control" v-model="user.firstname">

                    </div>
                     <div class="col-md-4"> 
                 <label id="label" > Nom :</label> <span>*</span>
                   <input type="text" class="form-control" v-model="user.lastname" >

                    </div>
                 </div>
              </div>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-4"> 
                  <label id="label" >   Email :</label><span>*</span>
                 <input type="email" class="form-control"  v-model="user.email">
                    </div>
                    <div class="col-md-4"> 
                 <label id="label" >   Téléphone :</label><span>*</span>
                 <input type="text" class="form-control" v-model="user.phone" >
                    </div>
                    <div class="col-md-4"> 
                       <label id="label" >   Pays de résidance :</label><span>*</span>
                      <input type="text" class="form-control" v-model="user.country">
                    </div>
                  </div>
              </div>
                    <div class="form-group">
                      <div class="row">
                    <div class="col-md-4"> 
                       <label id="label" > CIN / Passport :</label><span>*</span>
                      <input type="text" class="form-control" v-model="user.cin">
                    </div>
                    <div class="col-md-4 py-4"> 
                      <div class="form-check">
                        <input class="form-check-input" type="radio" value="1" name="flexRadioDefault" id="rd"  v-model="isEnLigne"  checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                         Payement en ligne 
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" value="0" name="flexRadioDefault" id="rd"  v-model="isEnLigne" >
                        <label class="form-check-label" for="flexRadioDefault2">
                          Payement à l'Hotel
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4 py-4"> 
                      <div class="form-group">
		                <input id="btn" type="button" value="RESERVEZ"  class="btn btn-primary  py-2 px-5" @click="BookNow()">
		               </div>
                    </div>
                    </div>
                    </div>
            </form>
              </div>
               <div class="form-group">
                  <div class="row justify-content-center">
          <div class="col-md-2"  >
                <input type="button" value="Accueil" id="bb" v-on:click="goAcc()" class="btn btn-primary btn-md btn-block waves-effect text-center">
              </div>
               <div class="col-md-2" >
                <input type="button" id="bb" value="Vos reservation" v-on:click="goProfile" class="btn btn-primary btn-md btn-block waves-effect text-center ">
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
      },
       isLogin:false,
      isRegister:true,
      bookingDate:null,
      nuits:null,
      rooms:null,
     isEnLigne:null,
     booking:null,
     nb:0,
		}
    },
     mounted(){
    this.isLogin=true;
      if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
                }
                 this.bookingDate = JSON.parse(localStorage.getItem('bookingdate'))
                  let nuit = (Date.parse(this.bookingDate.end)-Date.parse(this.bookingDate.start))/86400000;
                  this.nuits =nuit
                  this.rooms=JSON.parse(localStorage.getItem('roomBooked'));

  },
  methods :{

    back(){
      this.$router.push('selectroom')
    },

   BookNow(){
     if( localStorage.getItem('token_client')!=null){
       if(this.isEnLigne==0){
     for(let i=0 ; i< this.rooms.length ; i++){
     axios.post('http://localhost:8000/api/booking-room',
     {
                  start:this.bookingDate.start,
                  end:this.bookingDate.end,
                  confirmation:false,
                  bookingprice:this.rooms[i].totale,
                  nom:this.user.firstname,
                  prenom:this.user.lastname,
                  cin:this.user.cin,
                  telephone:this.user.phone,
                  email:this.user.email,
                  pay_residence:this.user.country,
                  user_id:this.user.id,
                  room_id:this.rooms[i].id_room,
                  offre_id:this.rooms[i].offre_id
     },
     { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
     ).then(res=>{
      if(res!=null){
         this.booking=res.data.Booking
        console.log("eeeeggg",res.data.Booking.room_id);
        axios.put('http://localhost:8000/api/room/'+res.data.Booking.room_id,
        {
          avaibility:false,
        },
         { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
        ).then(res=>{
          console.log(res.data);
        })
      }
     })
   }
   }else if(this.isEnLigne==1){
         for(let j=0 ; j< this.rooms.length ; j++){
     axios.post('http://localhost:8000/api/booking-room',
     {
                  start:this.bookingDate.start,
                  end:this.bookingDate.end,
                  confirmation:false,
                  bookingprice:this.rooms[j].totale,
                  nom:this.user.firstname,
                  prenom:this.user.lastname,
                  cin:this.user.cin,
                  telephone:this.user.phone,
                  email:this.user.email,
                  pay_residence:this.user.country,
                  user_id:this.user.id,
                  room_id:this.rooms[j].id_room,
                  offre_id:this.rooms[j].offre_id
     },
     { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
     ).then(res=>{
      
      if(res!=null){
         this.booking=res.data.Booking
        console.log("eeeeggg",res.data.Booking.room_id);
        axios.put('http://localhost:8000/api/room/'+res.data.Booking.room_id,
        {
          avaibility:false,
        },
         { headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client') }}
        ).then(res=>{
          if(res!=null){
            this.isTermineted=true
            this.nb=this.nb+1;
             console.log("t1",this.nb);
           console.log("rre",res.data);
                if(this.booking!=null){
    console.log("ccc",this.rooms.length);
      let totaux=parseFloat(localStorage.getItem('totale'))
       console.log("zzz",this.nb);
          console.log("toto",totaux);
      axios.defaults.headers.common['x-api-key'] = '6284fff6e09cf7432239133a:ZgFs0PSDYj7r09CVgFwLITz0';
            axios.post('https://api.preprod.konnect.network/api/v2/payments/init-payment',
            {
              receiverWalletId:"6284fff6e09cf7432239133b",
              amount:(totaux*1000),
              token: "TND",
              firstName: this.booking.nom,
              lastName: this.booking.prenom,
              phoneNumber: this.booking.telephone,
              email: this.booking.email,
              orderId: this.booking.id,
              link: "https://api.dev.konnect.network/WSlQUtBF8",
              webhook: "http://localhost:8081/#/bookingpayement",
              successUrl: "https://dev.konnect.network/gateway/payment-success",
              failUrl: "https://dev.konnect.network/gateway/payment-failure",
              acceptedPaymentMethods: [
              "bank_card",
              "wallet",
              "e-DINAR"
              ]
            }
            ).then(res=>{
              window.open(res.data.payUrl);
              console.log("book",res.data.payUrl);
            })
      }
          }
        })
      }
     })
       
   }
   
    
   }
     }
   
   },
   payNow(){

   }
   }
  }
  
 

</script>
<style scoped>
#title{
  margin-top:25px ;
  margin-left: 10px;
}
#form{
  background-color: gray;
}
#nuit{
  margin-top: 45px;
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
#label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 15px;

}
#titre{
  margin-top: 50px;
  margin-bottom: 0.2px;
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 20px;
}
#sous-titre{
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
#span{
  font-size: 11px;
}
#rd :checked{
color: crimson;
}
#title{
  margin-top:25px ;
  margin-left: 10px;
}
#form{
  background-color: gray;
}
#nuit{
  margin-top: 45px;
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
#label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 20px;

}
#img{
  width: 150px;
}
#dropdown{
margin: 20px;
}
#ctn{
  margin-top: 1px;
}
#tit{
  font-weight: bold;
}
#icone{
  padding-top: 112px;
  font-size:25px;
  color:#8d703b;
}
#sp{
  font-weight: bold;
  color: lightslategrey;
  font-size: 12px;
}
#bb{
  background-color: transparent;
  border-color: transparent;
  color: grey;

}
</style>
