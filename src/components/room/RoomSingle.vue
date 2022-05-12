<template>
 
<div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Acceuil</a></span> <span>A propos</span></p>
	            <h1 class="mb-4 bread">Details Chambres</h1>
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
          		<div class="col-md-12 ">
                <div class="col-md-10 heading-section text-center py-4">
          			<h2 class="mb-4"> {{ type_nom}} </h2>
                </div> 
      <div class="col-md-8">
               <carousel>
  
 
  
      
                     <img class="img-fluid" v-for="image in images" :src="'http://localhost:8000/storage'+image.name" :key="image.id"/>
               </carousel>
    </div>

 
     
    

              </div>
          		<div class="col-md-12 room-single mt-4 mb-5 ftco-animate">
    						<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.{{room.description}}</p>
    						<div class="d-md-flex mt-5 mb-5">
    							<ul class="list">
                    <div v-if="room.nbAdult>0">
	    							<li><i class="icon-group" id="icon">:</i> {{room.nbAdult}} Adult</li>
                    </div>
                      <div v-if="room.nbEnfant>0">
	    							<li><span id="icon">Enfant</span> : {{room.nbEnfant}} </li>
                      </div>
	    						</ul>
<<<<<<< HEAD
	    						<ul class="list ml-md-5">
                      <div v-if="room.nbbebe>0">
	    							<li><span id="icon">Bebe</span> : {{room.nbbebe}}</li>
                      </div>
	    							<li><i class="icon-bed " id="icon">: </i>{{room.nbBed}}</li>
	    						</ul>
    						</div>
    					
          		</div>
          

          		<div class="col-md-12 properties-single ftco-animate mb-5 mt-4">
          			<h4 class="mb-4">Review &amp; Ratings</h4>
=======
                </div></div>
			             <div class="form-group">
		                <input id="btn" type="submit" value="RESERVEZ"  class="btn btn-primary  py-2 px-5" @click="goToBooking">
		              </div>
          		<div class="col-md-12 room-single ftco-animate mb-5 mt-5">
          			<h4 class="mb-4">Available Room</h4>
>>>>>>> 55aa3a834a0f19199f24366f029f8c27f8ec961e
          			<div class="row">
          				<div class="col-md-6">
          					<form method="post" class="star-rating">
										  <div class="form-check">
												<input type="checkbox" class="form-check-input" id="exampleCheck1">
												<label class="form-check-label" for="exampleCheck1">
													<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i> 100 Ratings</span></p>
												</label>
										  </div>
										  <div class="form-check">
									      <input type="checkbox" class="form-check-input" id="exampleCheck1">
									      <label class="form-check-label" for="exampleCheck1">
									    	   <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i> 30 Ratings</span></p>
									      </label>
										  </div>
										  <div class="form-check">
									      <input type="checkbox" class="form-check-input" id="exampleCheck1">
									      <label class="form-check-label" for="exampleCheck1">
									      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 5 Ratings</span></p>
									     </label>
										  </div>
										  <div class="form-check">
										    <input type="checkbox" class="form-check-input" id="exampleCheck1">
									      <label class="form-check-label" for="exampleCheck1">
									      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 0 Ratings</span></p>
									      </label>
										  </div>
										  <div class="form-check">
									      <input type="checkbox" class="form-check-input" id="exampleCheck1">
									      <label class="form-check-label" for="exampleCheck1">
									      	<p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i> 0 Ratings</span></p>
										    </label>
										  </div>
										</form>
          				</div>
          			</div>
          		</div>
          		<div class="col-md-12 room-single ftco-animate mb-5 mt-5">
                  <div class="row">
          			<h4 class="mb-4">Available Room</h4>
             
          					<div class="col-sm col-md-6 "  v-for="chambre in chambres" :key="chambre.id"  >
                    <div class="c">  
                      
                            
				    		
				    				
				    			<div class="card" style="width: 18rem;" > 
  <img  :src="'http://localhost:8000/storage'+chambre.images.name" alt="Card image cap">

  <div class="card-body">
    <div v-for="objet in objets" :key="objet.id ">
         
       <div v-if="objet.id==type_id && objet.id==chambre.type_id">
      
     <h5 class="card-title text-center">{{objet.nom_type}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.{{chambre.description}}</p>
  </div></div></div>
</div>
                         
				    			</div>
                    </div>
                
                  </div></div>

          	</div>
          </div> <!-- .col-md-8 -->
          <div class="col-lg-4 sidebar ftco-animate">
          
             
                <div class="form-group">
                 <div class="box">
                 
                <input type="button" value="Reserver" id="box" class="btn btn-primary py-3 px-5">
              </div>
                </div>
              
           
            <div class="sidebar-box ftco-animate">
              <div class="categories">
                <h2> les Prix</h2>
               <div  v-if="pric>0">
                 <del id="reduit">{{price}} DT </del>
                   <li id="p1">{{ calcul }} DT</li> 
               </div>
               <div v-else-if="pric==null">
              <li id="p1">{{ price }} DT  </li> 
              </div>
              </div>
            </div>
<<<<<<< HEAD

          
  
            <div class="sidebar-box ftco-animate">
              <h2>Options</h2>
              <div class="row">
          		<div class="col-sm-2" v-for="option in options" :key="option.id">
              
               
              <div class="tagcloud " id="tag">
                 
                <a class="tag-cloud-link">{{option.nom_option}}</a>
                    
              </div>
              </div>
              </div>
            </div>
            <div v-for="offre in offres" :key="offre.id">

   <div class="card"  id="card" style="width: 18rem;" v-if="offre.disponibilite== 1">
  <div class="card-body">
    <h5 class="card-title">{{offre.titre}}</h5>
    <p class="card-text">{{ offre.description }}.</p>
    <p class="card-text" id="p">{{ offre.pourcentage}} % </p>
  </div>
  </div>
</div>
            <div class="sidebar-box ftco-animate">
              <h3>type chambre</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!{{typdesc}}</p>
=======
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
>>>>>>> 55aa3a834a0f19199f24366f029f8c27f8ec961e
            </div>
          </div>
        </div>
      </div>
   
    </section> <!-- .section -->


    
</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
	 room:{},
   typdesc:{},
  options:[],
  type_nom:{},
  objets:[],
  prix:[],
price:{},
calcul:{},
  images:[],
  offres:[],
  chambres:[],
  per:{},
  pric:{},
  type_id:{},
  
    };
  },
  
   
  mounted(){
   this.getRoom();
    this.getRooms();
    this.getType();
    this.getPrice();
  },
 
	  
  methods: {       
  async getRoom(){
  const id=this.$route.params.id;
 await axios
 .get("http://127.0.0.1:8000/api/getTouschambres/"+id, {
      
      })
      .then((res) => {
		  
<<<<<<< HEAD
			    this.room=res.data.rooms;
         this.options=res.data.rooms.options;
          this.type_nom=res.data.rooms.type.nom_type;
          this.type_id=res.data.rooms.type.id;
          this.typdesc=res.data.rooms.type.intitule;
         this.price=res.data.rooms.prices.price_hotel
          this.offres=res.data.rooms.offres;
          this.images=res.data.rooms.images;

   this. per= parseFloat(res.data.rooms.offres.pourcentage);
 this. pric=parseFloat(res.data.rooms.prices.price_hotel);
 this.calcul=parseFloat((this.pric*this.pric)/100);
 console.log("gg",this.calcul,this.per,this.pric);


         console.log("option",this.type_id) 
           console.log("room",this.types)
=======
			    this.room=res.data.room;
         
           console.log(res.data)
>>>>>>> 55aa3a834a0f19199f24366f029f8c27f8ec961e
         
	  })

	  },
    async getRooms(){
 await axios
  .get("http://localhost:8000/api/getRoom", 
       
      )
      .then((res) => {
		   
			   this.chambres= res.data.rooms;
			 

           console.log(this.chambre)
		   
   }
	)

	  },
      async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/type", 

      )
      .then((res) => {
     
 
      this.objets = res.data.type;
	  

        console.log(this.objets);
      })
	
    
      },
       async getPrice(){
 await axios
  .get("http://127.0.0.1:8000/api/price", 

      )
      .then((res) => {
     
 
      this.prix= res.data.price;
	  

        console.log(this.prix);
      })
	
    
<<<<<<< HEAD
      },}}
   
    
    
    
  
  
=======
      },
      goToBooking(){
        this.$router.push('bookingroom')
      }
          
  },

>>>>>>> 55aa3a834a0f19199f24366f029f8c27f8ec961e
  

			
  


</script>
<<<<<<< HEAD
<style>
#tag{
   min-height: 1rem;
}
#p1{
   color: #d1a44f;
 font-size: 30px;
}
#reduit{
 
 font-size: 22px;
 color:red
    
}
div.c{

        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */

}
#p{
 color: #d1a44f;
 font-size: 22px;
}
#card{
box-shadow: 10px 5px 5px #8d703b;}
#icon{
  	font-size: 22px;
  color:#8d703b;
}
#box{
margin-top: 35%;
border-radius: 0%}
</style>
=======
<style scoped>
#btn{
  margin-left: 10px;
}
</style>
>>>>>>> 55aa3a834a0f19199f24366f029f8c27f8ec961e
