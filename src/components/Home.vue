<template>
  <section class="home-slider">
    <div class="bd-example">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators" hidden>
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/bg_1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/bg_2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src="./images/bg_3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" hidden></div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev" hidden
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" >Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next" hidden
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only" >Next</span>
        </a>
      </div>
    </div>
  </section>
 
	  <section id="sec" class="ftco-booking">
    	<div class="container">
    		<div class="row">
    			<div class="col-lg-12">
    				<form action="#" class="booking-form">
	        		<div class="row">
	        			<div class="col-md-3 d-flex ">
	        				<div  id="date" class="form-group p-6 align-self-stretch align-items-end">
	        					<div  class="wrap"  >
				    					<label id="label">Date d'arriver</label>
				    					<input id="ee"  v-model="fetch.start" type="date" @change="changedate()" :min="dateNow" class="form-control checkin_date" >
			    					</div>
			    				</div>
	        			</div>
	        			<div class="col-md-3 d-flex"> 
	        				<div  id="date" class="form-group align-self-stretch  align-items-end">
	        					<div class="wrap">
				    					<label  id="label" for="#">Date de départ</label>
				    					<input id="ee" v-model="fetch.end" type="date" :min="fetch.start"   class="form-control checkout_date" >
			    				</div>
			    				</div>
	        			</div>
	        			<div class="col-md-2 d-flex "> 
	        				<div  id="date" class="form-group align-self-stretch  align-items-end">
			      					<div class="form-field">
			                    <span id="dp" class="nav-link  dropdown-toggle" data-bs-toggle="dropdown"> <label id="tt">Chambre</label></span>
                        <div  id="item" class="dropdown-menu ">
            <form  class=" p-5 ">
              <div class ="row">
                  <div class="col-md-3">
                <span >Adulte : </span>
              </div>
              	<div class="col-md-3">
			              <input type="button" value="-" @click="clickMoinsAdult()" class="btn btn-primary align-self-stretch" :style=" nbadult=='0' ? 'cursor: not-allowed; pointer-events: none; ' :'background-color: #7b6233;' ">
			            </div>
              <div class="col-md-3">
                <input  id="col" v-model="nbadult" type="text" disabled >
              </div>
              	<div class="col-md-3">
			              <input type="button" value="+" @click="clickPlussAdult()" class="btn btn-primary align-self-stretch" :style=" nbenfant=='6' ? 'cursor: not-allowed; pointer-events: none; ' :'background-color: #7b6233;' ">
			            </div>
              
              </div>
                <div class ="row py-4">
                  <div class="col-md-3">
                <span >Enfant : </span>
              </div>
              	<div class="col-md-3">
			              <input type="button" value="-" @click="clickMoinsEnfant()" class="btn btn-primary align-self-stretch" :style=" nbenfant=='0' ? 'cursor: not-allowed;  pointer-events: none; ' :'background-color: #7b6233;'">
			            </div>
              <div class="col-md-3">
                <input  id="col" v-model="nbenfant" type="text" disabled >
              </div>
              	<div class="col-md-3">
			              <input type="button" value="+" @click="clickPlussEnfant()" class="btn btn-primary align-self-stretch" :style=" nbenfant=='8' ? 'cursor: not-allowed;  pointer-events: none; ' :'background-color: #7b6233;' ">
			            </div>
              
              </div>
                <div class ="row">
                 <div v-if="enfant1" class="col-md-4"> 
           <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age1"  id="sel" >
	                   	<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
              <div v-if="enfant2==true" class="col-md-4"> 
                <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age2"  id="sel" >
	                    		<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
             
              <div v-if="enfant3" class="col-md-4"> 
                <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age3"  id="sel" >
	                  	<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
               <div v-if="enfant4" class="col-md-4"> 
               <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
                      <select>
	                 	<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
               <div v-if="enfant5" class="col-md-4"> 
                <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age5"  id="sel" >
	                    	<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
               <div v-if="enfant6" class="col-md-4"> 
                <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age6"  id="sel" >
	                    		<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
               <div v-if="enfant7" class="col-md-4"> 
               <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age7"  id="sel">
	                    		<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
               <div v-if="enfant8" class="col-md-4"> 
                <p >  Age <span style="color:red;">*</span></p>
		                <div class="select-wrap one-third">
	                    <select v-model="age8"  id="sel" >
	                    		<option value="1" >1 </option >
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
                      	<option value="7" >7 </option >
	                      <option value="8">8 </option>
	                      <option value="9">9 </option>
	                      <option value="10">10 </option>
	                      <option value="11">11</option>
	                      <option value="12">12 </option>
                        	<option value="13" >13 </option >
	                      <option value="14">14 </option>
	                      <option value="15">15 </option>
	                      <option value="16">16 </option>
	                      <option value="17">17</option>
	                    </select>
	                  </div>
              </div>
              
              </div>
              
            </form>
			                  </div>
				            </div>
		              </div>
	        			</div>
               
	        			<div class="col-md-3 d-flex">
	        				<div class="form-group d-flex align-self-stretch">
			              <input type="button" value="Vérifier les disponibilités" @click="getfetch()" class="btn btn-primary py-3 px-4 align-self-stretch">
			            </div>
	        			</div>
	        		</div>
	        	</form>
	    		</div>
    		</div>
    	</div>
    </section>
    <section  class="slide-top ftc-no-pb ftc-no-pt">
			<div class="container">
				<div class="row">
			<div  class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" id="bg3" style="background-image;">
						<a id="b" href="https://youtu.be/OtJVufo3IrA" class="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span  class="icon-play"></span>
						</a>
					</div>
					
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
	          	<div class="ml-md-0">
		          	<span class="subheading">BienVenu Au Deluxe</span>
		            <h2 class="mb-4">Bienvenue dans DELUXE</h2>
	            </div>
	          </div>
	          <div class="pb-md-5">
							<p>Situé au coeur de Tunisie, Deluxe est un point de départ idéal pour toutes les activités plein air, artistiques et culturelles : VTT sous toutes ses formes, balades, randonnées ou trail, ou encore, yoga, pic-nique et visites de petits villages qui vous feront voyager dans le temps.</p>
							<p>Deluxe réunit tous les ingrédients pour passer un séjour inoubliable en Tunisie en famille ou entre amis. Nous avons pensé le Deluxe comme un lieu typique et rafraîchissant aux couleurs accidulées proposant de multiples options pour un séjour qui vous ressemble : déjeuner ou goûter gourmand au soleil sur la toute nouvelle terrasse du Savoy, moment détente au spa ou cocktails...à vous de concocter votre journée parfaite avant de passer au Resto, le restaurant du Deluxe, où vous vous régalerez de plats traditionnels et raffinés dans une ambiance chaleureuse.</p>
							<ul class="ftco-social d-flex">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
						</div>
					</div>
				</div>
			</div>
		</section>

     

  <section clas="ftco-section">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-2"></div>
        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-reception-bell"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">24/7 Réception</h3>
              <p> A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-serving-dish"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">Restaurant & Cafée</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-spa"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">Spa Suites</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--get les chambres-->
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center">
          <h2 class="mb-4">Notres Chambres</h2>
        </div>
      </div>
      <div class="row">
        <template v-for="room in rooms" :key="room.id">
          <div
            class="col-sm col-md-6 col-lg-4 py-4"
            v-if="room.avaibility == 1"
          >
            <div class="card" >
              <img :src="'http://localhost:8000/storage' + room.images.name" />
              <div class="card-body">
                <div v-for="type in types" :key="type.id">
                  <div v-if="type.id == room.type_id">
                    <h5 class="card-title text-center">{{ type.nom_type }}</h5>
                      <p class="card-text text-center"> {{room.description.substr(0 , 110)+',...' }}</p>
                    <div class="text p-3 text-center">
                      
                            <p class="box">
                              {{ room.price_booking }} DT
                              <span class="box1"> par nuit </span>
                            </p>
                      
                      <router-link :to="'RoomSingle' + room.id"
                        ><a href="#" 
                          >plus details</a
                        ></router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!--get spa  -->
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center">
          <h2 class="mb-4">Autres</h2>
        </div>
      </div>
      <div class="row">
     <!--spa-->
          <div class="col-sm col-md-6 col-lg-4 py-4">
            <div class="card" >
              <img :src="'http://localhost:8000/storage'+ph"/>
              <div class="card-body">
    
                <h5 class="card-title text-center">{{ record.title }}</h5>
                      <p class="card-text text-center"> {{record.description }}  </p>
                    <div class="text p-3 text-center">
                      <p class="box">  {{ record.prix_reservation }} DT </p>
                      <router-link :to="'spa'+id1" center>Details</router-link>
                    </div>
               
                
              </div>
            </div>
          </div>
       
      <!--pool-->
     
          <div class="col-sm col-md-6 col-lg-4 py-4">
            <div class="card" >
              <img :src="'http://localhost:8000/storage'+ph1"/>
              <div class="card-body">
    
                <h5 class="card-title text-center">{{ record1.title }}</h5>
                      <p class="card-text text-center"> {{record1.description }}</p>
                    <div class="text p-3 text-center">
                      <p class="box">  {{ record1.prix_reservation }} DT </p>
                      <router-link :to="'pool'+id2" center>Details</router-link>
                    </div>
                
                
              </div>
            </div>
          </div>
          <!--roof-->
           <div class="col-sm col-md-6 col-lg-4 py-4" >
            <div class="card" >
              <img :src="'http://localhost:8000/storage'+ph2"/>
              <div class="card-body">
    
                <h5 class="card-title text-center">{{ record2.intitule }}</h5>
                      <p class="card-text text-center"> {{record1.description }}</p>
                    <div class="text p-3 text-center">
                      <p class="box">  {{ record2.prix }} DT </p>
                      <router-link :to="'roof-top'+id3" center>Details</router-link>
                    </div>
                
              
              </div>
            </div>
          </div>
           <!--salle conference--> 
              <div class="col-sm col-md-6 col-lg-4 py-4"  >
            <div class="card" >
              <img :src="'http://localhost:8000/storage'+photo"/>
              <div class="card-body">
    
                <h5 class="card-title text-center">{{ record3.decoration }}</h5>
                      <p class="card-text text-center"> {{record3.description }}</p>
                    <div class="text p-3 text-center">
                      <p class="box">  {{ record3.prix }} DT </p>
                      <router-link :to="'conferenceroom'+id4" center>Details</router-link>
                    </div>
                
                
              </div>
            </div>
          </div>
       <!--restaurant-->

        <div class="col-sm col-md-6 col-lg-4 py-4">
            <div class="card" >
              <img :src="'http://localhost:8000/storage'+photo1"/>
              <div class="card-body">
    
                <h5 class="card-title text-center">{{ recorde.nom}}</h5>
                      <p class="card-text text-center"> {{recorde.description }}</p>
                    <div class="text p-3 text-center">
                      <p class="box">  {{ recorde.prix_reservation }} DT </p>
                      <router-link :to="'restaurant'+id5" center>Details</router-link>
                    </div>
                
                
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>


</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
     res:[],
     recorde:{},
     photo1:{},
      record:{},
      record2:{},
      ph2:{},
     ph:{},
     id1:"",
     id2:"",
     id3:"",
     id4:"",
     id5:"",
     record3:{},
     photo:{},
     record1:{},ph1:{},
      rooms: [],
      dateNow:null,
      id: 0,
	     types:[],
    	room_id:[],
      nbadult:"2",
      nbenfant:"0",
		
     fetch:{
       end:"",
       start:"",
       nbadult:0,
       nbenfant:0,
       nbbebe:0,
      
     },
    isFetch:false,
    dateNoww:null,
    enfant1:false,
    enfant2:false,
    enfant3:false,
    enfant4:false,
    enfant5:false,
    enfant6:false,
    enfant7:false,
    enfant8:false,
    age1:"6",
    age2:"6",
    age3:"6",
    age4:"6",
    age5:"6",
    age6:"6",
    age7:"6",
    age8:"6",
    };
  },

  mounted() {
    this.getRoom();
    this.getspa();
    this.getROOF();
    this.getpool();
    this.getsalle();
    this.getResto();
    /********************************** */
    let d = new Date();
    let day =(d.getDate()+1)
    let month =(d.getMonth()+1)
    let year = d.getFullYear()
    if(month<10){
      month="0"+ month
    }
    if(day<10){
      day="0"+ day
    }
    this.dateNow= year+"-"+month+"-"+day;
        this.getType();
     
        /************************ */
  this.fetch.start=this.dateNow;
    /********************************** */
    
  },


  methods: {
    changedate(){
    let d=parseInt(this.fetch.start.slice(8, 10));
    let m=parseInt(this.fetch.start.slice(5, 7));
    let y =parseInt(this.fetch.start.slice(0, 4));
    let date ="";
    if(d<10){
    d=d+1
    d='0'+d
    }
    if(m==1){
     if(d==31){
       d='0'+1;
       m=m+1;
       m
     }
    }
    if(m==3){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==5){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==7){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==8){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==10){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==12){
     if(d==31){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==2){
      if(d==28){
      if((y%4)==0){
        d=29;
      }else{
        d='0'+1;
        m=m+1;
      }
      }
    }
    if(m==4){
     if(d==30){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==6){
     if(d==30){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==9){
     if(d==30){
       d='0'+1;
       m=m+1;
     }
    }
    if(m==11){
     if(d==30){
       d='0'+1;
       m=m+1;
     }
    }
    if(m<10){
      m='0'+m
    }
    date=y+'-'+m+'-'+d; 
    this.fetch.end=date;
    console.log(date);
    
    },
    clickPlussAdult(){
      this.nbadult++;
    },
    clickMoinsAdult(){
      this.nbadult--;
    },
     clickPlussEnfant(){
      this.nbenfant++;
      if(this.nbenfant==1){
        this.enfant1=true;
      }
      if(this.nbenfant==2){
        this.enfant2=true;
      }
      if(this.nbenfant==3){
        this.enfant3=true;
      }
      if(this.nbenfant==4){
        this.enfant4=true;
      }
      if(this.nbenfant==5){
        this.enfant5=true;
      }
      if(this.nbenfant==6){
        this.enfant6=true;
      }
      if(this.nbenfant==7){
        this.enfant7=true;
      }
      if(this.nbenfant==8){
        this.enfant8=true;
      }
    },
    clickMoinsEnfant(){
      this.nbenfant--;
       if(this.nbenfant==0){
        this.enfant1=false;
      }
      if(this.nbenfant==1){
        this.enfant2=false;
      }
      if(this.nbenfant==2){
        this.enfant3=false;
      }
      if(this.nbenfant==3){
        this.enfant4=false;
      }
      if(this.nbenfant==4){
        this.enfant5==false;
      }
      if(this.nbenfant==5){
        this.enfant6=false;
      }
      if(this.nbenfant==6){
        this.enfant7=false;
      }
      if(this.nbenfant==7){
        this.enfant8=false;
      }
    },
    async getRoom() {
      await axios
        .get("http://localhost:8000/api/getRoom")
        .then((res) => {
          this.rooms = res.data.rooms;
        
          console.log("ii",this.image);
          console.log("rooms",this.table);
        })
        .then(this.getType())
      
    },

		  getfetch(){
        if(this.enfant1){
        if(this.age1>=6){
          this.fetch.nbenfant=(parseInt(this.fetch.nbenfant)+1)
        }
        else if(this.age1<6){
          this.fetch.nbbebe=(parseInt(this.fetch.nbbebe)+1);
        }
        }
        if(this.enfant2){
        if(this.age2>=6){
          this.fetch.nbenfant=parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age2<6){
          this.fetch.nbbebe=parseInt(this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant3){
        if(this.age3>=6){
          this.fetch.nbenfant=parseInt( this.fetch.nbenfant)+1
        }
        else if(this.age3<6){
          this.fetch.nbbebe=parseInt( this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant4){
        if(this.age4>=6){
          this.fetch.nbenfant= parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age4<6){
          this.fetch.nbbebe= parseInt(this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant5){
        if(this.age5>=6){
          this.fetch.nbenfant=parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age5<6){
          this.fetch.nbbebe=parseInt(this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant6){
        if(this.age6>=6){
          this.fetch.nbenfant=parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age6<6){
          this.fetch.nbbebe=parseInt(this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant7){
        if(this.age7>=6){
          this.fetch.nbenfant=parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age7<6){
          this.fetch.nbbebe=parseInt(this.fetch.nbbebe)+1;
        }
        }
        if(this.enfant8){
        if(this.age8>=6){
          this.fetch.nbenfant=parseInt(this.fetch.nbenfant)+1
        }
        else if(this.age8<6){
          this.fetch.nbbebe=parseInt(this.fetch.nbbebe)+1;
        }
        }
        this.fetch.nbadult=this.nbadult;
        console.log("eeeeeeeeeeeee***"+this.fetch.nbbebe);
        if(this.fetch!=null){
          this.isFetch=true,
          localStorage.setItem('fetch',JSON.stringify(this.fetch));
          localStorage.setItem('isFetch',this.isFetch)
          this.$router.push('findroom')
        }
        else{
          this.isFetch=false
        }
       
      },
      async getspa(){
await axios.get('http://127.0.0.1:8000/api/seul').then(res=>{
				this.record = res.data.roofs;
        this.ph=res.data.roofs.images.name;
        this.id1=res.data.roofs.id;

      console.log("rooms",this.record);
         
					
				}
			)
      },
        async getpool(){
await axios.get('http://localhost:8000/api/seulPool').then(res=>{
				this.record1 = res.data.roofs;
        this.ph1=res.data.roofs.images.name;
        this.id2=res.data.roofs.id;

      console.log("rooms",this.id2);
         
					
				}
			)
      },
         async getROOF(){
await axios.get('http://localhost:8000/api/seuleroof').then(res=>{
				this.record2 = res.data.roofs;
        this.ph2=res.data.roofs.images.name;
this.id3=res.data.roofs.id;
      console.log("rooms",this.ph2);
         
					
				}
			)
      },
          async getsalle(){
await axios.get('http://localhost:8000/api/seulsalle').then(res=>{
				this.record3 = res.data.salle;
        this.photo=res.data.salle.images.name;
this.id4=res.data.salle.id
      console.log("rooms",this.photo);
         
					
				}
			)
      },
            async getResto(){
await axios.get('http://localhost:8000/api/seulle').then(res=>{
				this.recorde= res.data.restaurants;
        this.photo1=res.data.restaurants.images.name;
        this.id5=res.data.restaurants.id
      console.log("rooms",this.photo1);
         
					
				}
			)
      },
	 
	  async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/type", 

      )
      .then((res) => {
     
 
      this.types = res.data.type;
	  

        console.log(this.types);
      });
    },

   
  }
};
</script>
	  <style >
.box {
  color: #bb9245;
  font-size: 20px;
  font-weight: bold;
}
.box1 {
  font-size: 15px;
  color: grey;
  font-weight: lighter;
}
#titre {
  margin-bottom: 300px;
  color: white;
}
#b {
  background-color: transparent;
}
#date{
  margin: 2px;
  padding: 6px;
 font-size: 15px;
 color: grey;
 height: 82px;
}
#r{
  float: left;
   margin: 2px;
}
#dp{
color:rgba(255,255,255,1) ;
}
#tt{
  margin-top: 8%;
}
#label{
  padding-left: 4%;
}
#ee{
  font-size: 18px;
 
}
#item{
  width: 250%;
}
#col{
  width: 50px;
  margin-left: 12px;
  border-radius: 20%;
  border-color: grid-row;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center !important ; 
}
#sel{
  border-color:grid-row ;
  width: 60%;
    border-radius: 2%;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center !important ;
}
</style>
