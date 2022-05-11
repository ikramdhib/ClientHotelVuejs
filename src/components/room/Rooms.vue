<template>
  <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
	            <h1 class="mb-4 bread">Rooms</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="ftco-section bg-light">
    	<div class="container">
				
    		<div class="row">
			
	           <div class="col-lg-9">
				   
		    		<div class="row">
						 
						<template v-for="room in rooms" :key="room.id">
		    			<div class="col-sm col-md-6 col-lg-4 ftco-animate" v-if="room.avaibility == 'OUI'" >
							 
		    				<div class="room">
		    					<a  class="img d-flex justify-content-center align-items-center" id="room1" style="background-image">
		    						<div class="icon d-flex justify-content-center align-items-center">
		    							<span class="icon-search2"></span>
		    						</div>
		    					</a>
							<div class="text p-3 text-center">
								<div v-for="type in types" :key="type.id">
                                        <div v-if="type.id == room.type_id">
		    						<h3 class="mb-3"><a href="">{{type.nom_type}}</a></h3></div></div>
		    					
		    						<ul class="list">
		    							<li><span>nombre adult:</span>{{room.nbAdult}}</li>
		    							<li><span>nombre enfant : </span>{{room.nbEnfant}}</li>
		    							
		    							<li><span>nombre lit :</span> {{room.nbBed}}</li>
		    						</ul>
		    						<hr>
		    						<p class="pt-1"> 
										 <router-link :to="'RoomSingle'+ room.id " class="btn-custom">plus details <span class="icon-long-arrow-right"></span> </router-link>
										</p>
		    					</div>
		    			
		    			</div></div></template>
				
		 
    	</div>
			</div>
		 <div class="col-lg-3 sidebar">
	      		<div class="sidebar-wrap bg-light ftco-animate">
	      			<h3 class="heading mb-4">Advanced Search</h3>
	      			<form action="#">
	      				<div class="fields">
		              <div class="form-group">
		                <input type="text" id="checkin_date" class="form-control checkin_date" placeholder="Check In Date">
		              </div>
		              <div class="form-group">
		                <input type="text" id="checkin_date" class="form-control checkout_date" placeholder="Check Out Date">
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
    };
  },
   computed: {
    FilteredList() {
      return this.rooms.filter((room) => {
       return room.adult.tolowerCase().includes(this.nbAdultselect.tolowerCase())
            });}
   },
   
  mounted(){
   this.getRoom();
    this.getType();
 
	
  },

   
	  
  methods: {       
  async getRoom(){
 await axios
  .get("http://127.0.0.1:8000/api/room", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token_client") },
      })
      .then((res) => {
		   
			   this.rooms = res.data.room;

           console.log(this.rooms.length)
         
	  })

	  },
          
		  
	 
	  async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/type", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token_client") },
      })
      .then((res) => {
     
 
      this.types = res.data.data;
	  

        console.log(res.data);
      })
	
    
      }}}
	  </script>