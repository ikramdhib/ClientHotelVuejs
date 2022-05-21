<template>
   <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Acceuil</a></span> <span>A propos</span></p>
	            <h1 class="mb-4 bread">Details chambre</h1>
            </div>
          </div>
        </div>
      </div>
    </div></div> 
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
          	<div class="row">
          		<div class="col-md-12 ">
               
              <div v-if="images.length > 0">
          		    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators" >
            <div v-for="(image, index) in images" :key="index">
                <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
            </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in images" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                    <img class="d-block w-100" :src="'http://localhost:8000/storage'+image.name"   >
                </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
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
	    						<ul class="list ml-md-5">
                      <div v-if="room.nbbebe>0">
	    							<li><span id="icon">Bebe</span> : {{room.nbbebe}}</li>
                      </div>
	    							<li><i class="icon-bed " id="icon">: </i>{{room.nbBed}}</li>
	    						</ul>
    						</div>
                 <div class="sidebar-box ftco-animate">
              <h3>type chambre</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!{{typdesc}}</p>
            </div>
    					</div>
   
          </div> </div>
           <div class="col-lg-4 sidebar ftco-animate">
          <div class="form-group">
        
             
          		
                 <div class="box">
                 <router-link :to="'findroom'" > <input type="button" value="Reserver" id="box" class="btn btn-primary py-3 px-5"></router-link>
              </div>
              </div>
               <div class="sidebar-box ftco-animate">
              <div class="categories">
                <h2> les Prix</h2>
                <li id="p1">{{ price }} DT  </li> 
              <h2>Options</h2>
              <div class="row">
          	<div class="col-sm-2" v-for="option in options" :key="option.id">
              <div class="tagcloud " id="tag">
                <a class="tag-cloud-link">{{option.nom_option}}</a>
              </div>
              </div>
              </div>
              </div>
                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<div v-for="(offre, index) in room.offres" :key="index">
								<li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
							</div>
						</ol>
						<div class="carousel-inner">
						<div v-for="(offre, index) in room.offres" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
									<div class="card"  id="card" style="width: 18rem;">
										<div class="card-body">
											<span class="badge badge-pill badge-danger" id="r">OFFRE</span>
										<h5 class="card-title"> {{ offre.titre}}   </h5>
										<p class="card-text"> {{ offre.description }} </p>
										<p class="card-text" id="p" v-if="offre.pourcentage >0 "> {{ offre.pourcentage }} % </p>
										<p class="card-text" id="p" v-if="offre.pourcentage >0 "> <del id="pp"> {{price }} DT </del>
										<span class="px-4" id="of"> {{ price-((price*offre.pourcentage)/100)}} </span> </p>
										
									</div>
									</div>
								</div>
							
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" id="plus" role="button" data-slide="prev">
							<span id="plus" class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only"  id="plus">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators"  role="button" data-slide="next">
							<span id="plus" class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only"  >Next</span>
						</a>
					</div></div></div>
           	
            </div></div></section>
             <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Nos Chambres </span></h2>
          </div>

        </div>
          <div class="col-md-12 ">
            <div class="bg-white p-5">
                  <div class="row">
                  <div class="col-md-4"  v-for="chambre in chambres" :key="chambre.id"> 
					 
                    <div class="card"  >
						  <img  :src="'http://localhost:8000/storage'+chambre.images.name"  alt="Card image cap">
                    <div class="card-body">
                       <div v-for="objet in objets" :key="objet.id ">
                      <div v-if="objet.id==type_id && objet.id==chambre.type_id">
                      <h5 class="card-title">{{ objet.nom_type }} </h5></div></div>
					  <hr/>
                
                    
 <p class="card-text"> <a :href="'http://localhost:8080/#/Roomsingle'+chambre.id"   > plus de details </a></p>
                    
					  <hr/>
             <div v-for="prix in prixs" :key="prix.id">
                                 <div v-if="prix.id == chambre.price_id">
                      <p class="card-text" id="pr"> {{prix.price_hotel}} DT  </p></div></div>
                    </div>
                   
                  </div>
                  </div>
              </div>
              </div>
              </div>
            </div>

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
  prixs:[],
price:{},
calcul:{},
  images:[],
  offres:[],
  chambres:[],
  per:{},
  pric:{},
  type_id:{},
  ro:{},
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
		  
			    this.room=res.data.rooms;
         this.options=res.data.rooms.options;
          this.type_nom=res.data.rooms.type.nom_type;
          this.type_id=res.data.rooms.type.id;
          this.typdesc=res.data.rooms.type.intitule;
         this.price=res.data.rooms.prices.price_hotel
          this.offres=res.data.rooms.offres;
          this.images=res.data.rooms.images;
          this.ro=res.data.rooms.id;

   this.per=parseInt( res.data.rooms.offres.pourcentage);
 this.pric=res.data.rooms.prices.price_hotel;
 



         console.log("option",this.type_id) 
           console.log("room",this.types)
         
	  })

	  },
    async getRooms(){
 await axios
  .get("http://localhost:8000/api/getRoom", 
       
      )
      .then((res) => {
		   
			   this.chambres= res.data.rooms;
			 

           console.log(this.chambres)
		   
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
     
 
      this.prixs= res.data.price;
	  

        console.log(this.prixs);
      })
	
    
      },}}
   </script>
<style>
.cards-wrapper {
  
  justify-content: center;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
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
.bo{
	
	 color:#f33413;
		font-size: 20px;
    font-weight: bold;
	  }
	  	.b1{
	font-size: 15px;
	 color:grey;
font-weight: lighter;

	  }
</style>
