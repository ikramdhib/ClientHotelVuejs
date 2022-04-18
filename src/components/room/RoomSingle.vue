<template>
  <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
	            <h1 class="mb-4 bread">single Room</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
          	<div class="row">
           
          		<div class="col-md-12 ftco-animate" >
                <template v-for="type in types" :key="type.id">
                 <div v-if="room.type_id==type.id">
          			<h2 class="mb-4">{{type.nom_type}}</h2>
          			</div>
          		</template>
          		<div class="col-md-12 room-single mt-4 mb-5 ftco-animate">
           
    						<p>Description:{{room.description}}</p>
    						<div class="d-md-flex mt-5 mb-5">
    							<ul class="list">
                   

	    							<li ><span >nombre adult:</span >{{room.nbAdult}}</li>
                    <li><span>nombre enfant :</span>{{room.nbEnfant}}</li>
	    					  	<li><span>nombre de lit :</span>{{room.nbBed}}</li>
	    						</ul>
                </div></div>
			             <div class="form-group">
		                <input id="btn" type="submit" value="RESERVEZ"  class="btn btn-primary  py-2 px-5" @click="goToBooking">
		              </div>
          		<div class="col-md-12 room-single ftco-animate mb-5 mt-5">
          			<h4 class="mb-4">Available Room</h4>
          			<div class="row">
          				<div class="col-sm col-md-6 ftco-animate">
				    				<div class="room">
				    					<a href="rooms.html" class="img img-2 d-flex justify-content-center align-items-center" id="room1" style="background-image: ">
				    						<div class="icon d-flex justify-content-center align-items-center">
				    							<span class="icon-search2"></span>
				    						</div>
				    					</a>
				    					<div class="text p-3 text-center">
				    						<h3 class="mb-3"><a href="rooms.html">Suite Room</a></h3>
				    						<p><span class="price mr-2">$120.00</span> <span class="per">per night</span></p>
				    						<hr>
				    						<p class="pt-1"><a href="room-single.html" class="btn-custom">View Room Details <span class="icon-long-arrow-right"></span></a></p>
				    					</div>
				    				</div>
				    			</div>
				    			<div class="col-sm col-md-6 ftco-animate">
				    				<div class="room">
				    					<a href="rooms.html" class="img img-2 d-flex justify-content-center align-items-center" id="room2" style="background-image:">
				    						<div class="icon d-flex justify-content-center align-items-center">
				    							<span class="icon-search2"></span>
				    						</div>
				    					</a>
				    					<div class="text p-3 text-center">
				    						<h3 class="mb-3"><a href="rooms.html">Family Room</a></h3>
				    						<p><span class="price mr-2">$20.00</span> <span class="per">per night</span></p>
				    						<hr>
				    						<p class="pt-1"><a href="room-single.html" class="btn-custom">View Room Details <span class="icon-long-arrow-right"></span></a></p>
				    					</div>
				    				</div>
				    			</div>
          			</div>
          		</div>
             </div>
          	</div>
          </div> <!-- .col-md-8 -->
         <div class="col-lg-3 sidebar">
	      		<div class="sidebar-wrap bg-light ftco-animate">
              <div class="categories">
                   <template v-for="option in options" :key="option.id">
                        <div v-if="option.room_id==room.id">
                <li><a href="#">option <span>{{option.nom_option}}</span></a></li>
                        </div> </template>
                <li><a href="#">prix <span>(22)</span></a></li>
               
              </div>
              
            </div>
              <div class="col-lg-4 sidebar ftco-animate">
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
      
    </section> <!-- .section -->


    <section class="instagram pt-5">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Instagram</span></h2>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-1.jpg" class="insta-img image-popup"  id="insta1" style="background-image:">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-2.jpg" class="insta-img image-popup" id="insta2" style="background-image: ">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-3.jpg" class="insta-img image-popup"   id="insta3" style="background-image: ">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-4.jpg" class="insta-img image-popup"  id="insta4" style="background-image: ">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="images/insta-5.jpg" class="insta-img image-popup"  id="insta5" style="background-image:">
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
       
     
room:{ 
					nbBed:0,
			   description:"",
			    nbAdult:0,
         nbEnfant: 0,
		      type_id:0
               
              
				},
        option:{
          room_id:0,
          nom_option:""
        },
        types:[],
	 options:[],
    };
  },
  
   
  mounted(){
   this.getRoom();
     this.getType();
	this.getOption();
  },
 
	  
  methods: {       
  async getRoom(){
  const id=this.$route.params.id;
 await axios
 .get("http://127.0.0.1:8000/api/user/room/"+id, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token_client") },
      })
      .then((res) => {
		  
			    this.room=res.data.room;
         
           console.log(res.data)
         
	  })

	  },
    async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/user/type", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token_client") },
      })
      .then((res) => {
     
 
      this.types = res.data.data;
	  

        console.log(res.data);
      })
	
    
      },
       async getOption(){
 await axios
  .get("http://127.0.0.1:8000/api/user/option", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token_client") },
      })
      .then((res) => {
     
 
      this.options = res.data.data;
	  

        console.log(res.data);
      })
	
    
      },
      goToBooking(){
        this.$router.push('bookingroom')
      }
          
  },

  

			}
  


</script>
<style scoped>
#btn{
  margin-left: 10px;
}
</style>
