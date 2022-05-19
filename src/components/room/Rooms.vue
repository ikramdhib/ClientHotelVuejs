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
						      <div v-for="price in prices" :key="price.id">
                               <div v-if="price.id == room.price_id">
						   	<div class="text p-3 text-center">
    							<p class="bo">{{price.price_hotel}} DT  <span class="b1"> par nuit </span> 

          
          </p>
    						</div>
							 </div>
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
	      			<h3 class="heading mb-4">Advanced Search</h3>
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
	                    <select name="t" id="" class="form-control">
	                    	<option v-for="type in types" :key="type.id">{{type.nom_type}}</option>
	                    	
	                    </select>
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
		              	<div class="range-slider">
		              		<span>
						<input type="number" value="25000" min="0" max="120000"/>	-
						<input type="number" value="50000" min="0" max="120000"/>
						</span>
						<input value="1000" min="0" max="120000" step="500" type="range"/>
						<input value="50000" min="0" max="120000" step="500" type="range"/>
						</div> 
		              </div>
		              <div class="form-group">
		                <input type="submit" value="Search" v-on:click="searchInput" class="btn btn-primary py-3 px-5">
		              </div>
		            </div>
	            </form>
	      		</div>
	      		<div class="sidebar-wrap bg-light ftco-animate">
	      			<h3 class="heading mb-4">Star Rating</h3>
	      			<form method="post" class="star-rating">
							  <div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1">
									<label class="form-check-label" for="exampleCheck1">
										<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span></p>
									</label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						    	   <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i></span></p>
						      </label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
						     </label>
							  </div>
							  <div class="form-check">
							    <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
						      </label>
							  </div>
							  <div class="form-check">
						      <input type="checkbox" class="form-check-input" id="exampleCheck1">
						      <label class="form-check-label" for="exampleCheck1">
						      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
							    </label>
							  </div>
							</form>
	      		            </div>
	                      </div>
		                </div>
			          </div>
			      </section>
				  <section class="instagram pt-5">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Instagram</span></h2>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-1.jpg" class="insta-img image-popup" id="insta1" style="background-image">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-2.jpg" class="insta-img image-popup" id="insta2" style="background-image">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-3.jpg" class="insta-img image-popup" id="insta3" style="background-image">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-4.jpg" class="insta-img image-popup" id="insta4" style="background-image">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-5.jpg" class="insta-img image-popup" id="insta5" style="background-image">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
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
    this.getType();
 this.getPrice();

  },

   
	  
  methods: {       
  async getRoom(){
 await axios
  .get("http://localhost:8000/api/getRoom", 
       
      )
      .then((res) => {
		   
			   this.rooms = res.data.rooms;
			   this.image=res.data.rooms.images.name;

           console.log(this.table)
		   
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
      })
	
    
      },
	  
	  async getPrice(){
 await axios
  .get("http://127.0.0.1:8000/api/price", 

      )
      .then((res) => {
     
 
      this.prices= res.data.price;
	  

        console.log(this.prices);
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