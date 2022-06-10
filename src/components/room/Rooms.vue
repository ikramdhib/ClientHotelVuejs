<template>
  <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Acceuil</a></span> <span>A propos</span></p>
	            <h1 class="mb-4 bread">Chambres</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
<section class="ftco-section bg-light">
    	<div class="container">
			<div class="row justify-content-center mb-5 pb-3">
                <div class="col-lg-9">
				  <div class="row">
						<template v-for="room in rooms" :key="room.id">
				            <div class="col-sm col-md-6 col-lg-4 ftco-animate py-4"   v-if="room.avaibility == 1" >
							  <div class="card-deck">
		    				<div class="card" style="width: 18rem;">
                              <img :src="'http://localhost:8000/storage'+room.images.name"/>
							  <div class="card-body">
                              <div v-for="type in types" :key="type.id">
                             <div v-if="type.id == room.type_id">
                              <h5 class="card-title text-center">{{type.nom_type}}</h5>
							     <p class="card-text text-center"> {{room.description.substr(0 ,100)+',...' }}</p>
						    
                              <div class=" card-text text-center" >
    							<p class="bo">{{room.price_booking}} DT <span class="b1">par nuit </span></p>
    						</div>
							 
						<div class="box">
						<div v-if="room.nbAdult>0">
                        <p class="card-text"><i class="icon-group " > :</i>{{room.nbAdult}} Adult</p></div>
				        <p class="card-text"><i class="icon-bed " > :</i>{{room.nbBed}} Lits</p>
						   </div>
						   </div>
						   </div>
                            <hr>
		    			<p class="pt-1"> 
						 <router-link :to="'RoomSingle'+ room.id " class="btn-custom ">plus details <span class="icon-long-arrow-right"></span> </router-link>
							</p>
                          </div>	
						</div>
						</div>
						</div>
						</template>
                            </div>
			                   </div>
		               <div class="col-lg-3 sidebar">
	      		<div class="sidebar-wrap bg-light ftco-animate">
	      			<h3 class="heading mb-4">Chercher les Disponibilite</h3>
	      			<form action="#">
	      				<div class="fields">
		              <div class="form-group">
		              
                      <input placeholder="" type="date" id="example" class="form-control" :min="dateNow"  >
                    </div>
		             
		              <div class="form-group">
		                <input type="date" id="exemple" class="form-control " placeholder="" :min="dateNow" >
		              </div>
		              <div class="form-group">
		                <div class="select-wrap one-third">
	                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                   
	                  </div>
		              </div>
		              <div class="form-group" >
		                <div class="select-wrap one-third">
	                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                   <select name="" id="" class="form-control">
	                    	<option value="0">0 Adult</option>
	                    	<option value="1">1 Adult</option>
							<option value="2">2 Adult</option>
							<option value="3">3 Adult</option>
	                  </select>
	                  </div>
		              </div>
		              <div class="form-group">
		                <div class="select-wrap one-third">
	                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                   <select name="" id="" class="form-control">
	                    	<option value="0">0 Enfant</option>
	                    	<option value="1">1 Enfant</option>
							<option value="2">2 Enfant</option>
							<option value="3">3 Enfant</option>
	                  </select>
	                  </div>
		              </div>
					    <div class="form-group">
		                <div class="select-wrap one-third">
	                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                   <select name="" id="" class="form-control">
	                    	<option value="0">0 Bebe</option>
	                    	<option value="1">1 Bebe</option>
							<option value="2">2 Bebe</option>
							<option value="3">3 Bebe</option>
	                  </select>
	                  </div>
		              </div>
		          
		              <div class="form-group">
		                <input type="submit" value="chercher" v-on:click="searchInput" class="btn btn-primary py-3 px-5">
		              </div>
		            </div>
	            </form>
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
      rooms: [],
	  types:[],
	room_id:[],
	     id:0,
		 image:"",
    };
  },
  
   
  mounted(){
   this.getRoom();
   // this.getType();
// this.getPrice();

  },

   
	  
  methods: {       
  async getRoom(){
 await axios
  .get("http://localhost:8000/api/getRoom", 
       
      )
      .then((res) => {
		   
			   this.rooms = res.data.rooms;
			   this.image=res.data.rooms.images.name;

           console.log(this.table);
		   
   } 
	) .then(this.getType())
       

	  },
          
		  
	 
	  async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/type", 

      )
      .then((res) => {
     
 
      this.types = res.data.type;
	  

        console.log(this.types);
      })
	
    
      },
	  
	
	  
  }}
	  </script>
	  <style >
	div.box{
	 font-size: 15px;
	 color: black;

	  }
	  #c{
		  color:#bb9245;
	  }
	  	.bo{
	
	 color:#bb9245;
		font-size: 20px;
    font-weight: bold;
	  }
	  	.b1{
	font-size: 15px;
	 color:grey;
font-weight: lighter;

	  }

	  </style>