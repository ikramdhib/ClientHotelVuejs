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
                <h2> le Prix</h2>
                <li id="p1">{{room.price_booking}} DT  </li>  </div>
                <div v-if="options.length>0">
              <h2>Options</h2>
              <div class="row">
          	<div  v-for="option in options" :key="option.id">
              <ul>
                <li>{{option.nom_option}}</li>
              </ul>
              </div>
              </div></div>
             <div v-if="offres.length>0">
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
					</div></div>
          <!---------------les meilleur commentaire ---->
          <div v-if="comment.length>0">
          <h5>Ce que les clients ont le plus apprécié :</h5>
                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<div v-for="(com, index) in comment" :key="index">
								<li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
							</div>
						</ol> <!---------------------------hyhyhyhy-->
						<div class="carousel-inner">
						<div v-for="(com, index) in comment" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
									<ul class="list-group">
                     <li class="list-group-item" id="style">{{com.commentaire}}</li></ul>
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
					</div>
   </div></div></div>
           	
            </div>
                <div class="col-lg-4 sidebar ftco-animate">
          <div class="form-group">
                  <h4>Evaluation</h4>
      <div class="rating" >
        <input type="radio" name="rating-star"  :v-model="number" :value="number=1" @click="isRating($event)" class="rating__control screen-reader"  id="rc1">
        <input type="radio" name="rating-star"  :v-model="number1" :value="number1=2"  @click="isRating1($event)" class="rating__control screen-reader" id="rc2">
        <input type="radio" name="rating-star"  :v-model="number2" :value="number2=3" @click="isRating2($event)" class="rating__control screen-reader" id="rc3">
        <input type="radio" name="rating-star"  :v-model="number3" :value="number3=4" @click="isRating3($event)" class="rating__control screen-reader" id="rc4">
        <input type="radio" name="rating-star"  :v-model="number4" :value="number4=5"  @click="isRating4($event)" class="rating__control screen-reader" id="rc5">
        <label for="rc1" class="rating__item">
          <svg class="rating__star">
            <use xlink:href="#star"></use>
          </svg>
          <span class="screen-reader">1</span>
        </label>
        <label for="rc2" class="rating__item">
          <svg class="rating__star">
            <use xlink:href="#star"></use>
          </svg>
          <span class="screen-reader">2</span>
        </label>
        <label for="rc3" class="rating__item">
          <svg class="rating__star">
            <use xlink:href="#star"></use>
          </svg>
          <span class="screen-reader">3</span>
        </label>
        <label for="rc4" class="rating__item">
          <svg class="rating__star">
            <use xlink:href="#star"></use>
          </svg>
          <span class="screen-reader">4</span>
        </label>
        <label for="rc5" class="rating__item">
          <svg class="rating__star">
            <use xlink:href="#star"></use>
          </svg>
          <span class="screen-reader">5</span>
        </label>  
      </div>

  

   
<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
  <symbol id="star" viewBox="0 0 26 28">
    <path d="M26 10.109c0 .281-.203.547-.406.75l-5.672 5.531 1.344 7.812c.016.109.016.203.016.313 0 .406-.187.781-.641.781a1.27 1.27 0 0 1-.625-.187L13 21.422l-7.016 3.687c-.203.109-.406.187-.625.187-.453 0-.656-.375-.656-.781 0-.109.016-.203.031-.313l1.344-7.812L.39 10.859c-.187-.203-.391-.469-.391-.75 0-.469.484-.656.875-.719l7.844-1.141 3.516-7.109c.141-.297.406-.641.766-.641s.625.344.766.641l3.516 7.109 7.844 1.141c.375.063.875.25.875.719z"/>
  </symbol>
</svg></div>
          </div>
<div class="col-md-7">
    <textarea class="form-control" placeholder="Ajouter commentaire"  v-model="rating.commentaire" id="exampleFormControlTextarea1" rows="6"></textarea>
        <input type="button" value="Envoyer" id="B"  @click="addRatings" class="btn btn-primary py-3 px-3">
  </div>
      </div>
   
</section>
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
                
                     <p class="card-text" id="pr"> {{chambre.description.substr(0 , 110)+',...'}} <input type="button" id="bt" value="plus details" class="btn btn-primary" @click="goDetail(chambre.id)"  >  </p>
                    
					  <hr/>                    
                      <p class="card-text" id="pr"> {{ chambre.price_booking }} DT  </p>
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
  user:{},
  idus:0,
  rating:{
             commentaire:"",
                },
			 user_id:0,
   isRatingsExist:false,
totale:0,
number:0,
number1:0,
number2:0,
number3:0,
number4:0,
comment:[],
chambress:[],
    };
  },
  
   
  mounted(){
   this.getRoom();
    this.getRooms();
    this.getRoomss();
    this.getType();

     this.isLogin=true;
      if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
                         this.idus=this.user.id;
console.log("fghhj",this.idus);
                }
                 
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
         this.price=res.data.rooms.price_booking;
          this.offres=res.data.rooms.offres;
          this.images=res.data.rooms.images;
          this.ro=res.data.rooms.id;
this.getcomment(id);
 



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
      async getRoomss(){
 await axios
  .get("http://localhost:8000/api/getRoomm", 
       
      )
      .then((res) => {
		   
			   this.chambress= res.data.rooms;
		   
   }
	)

    },
    	goDetail(id){
    this.room=this.chambress.filter(e=>e.id==id)[0]
    console.log("hooo",this.room);
         this.options=this.room.options;
          this.type_nom=this.room.type.nom_type;
          this.type_id=this.room.type.id;
          this.typdesc=this.room.type.intitule;
         this.price=this.room.price_booking;
          this.offres=this.room.offres;
          this.images=this.room.images;
          this.ro=this.room.id;
          this.getcomment(id)
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
      async getcomment(id){
         
await axios .get("http://127.0.0.1:8000/api/gettee/"+id, {
      
      })
      .then((res) => {
		  
			    this.comment=res.data.ratings.Ratings;
            console.log(this.comment);

       })},
       /******************************** */
     



    isRating(event){
 if(event.target.checked==1){
 this.isRatingsExist=true;
 this.totale=this.totale+this.number;}

      else{
        this.isRatingsExist=false;
      }
     
      console.log("rrrrrrrrrrrrrrrrr",this.isRatingsExist );
       console.log("rrrrrrrrrrrrrrrrr",this.totale);
        
    },
     isRating1(event){
 if(event.target.checked==1){
 this.isRatingsExist=true;
 this.totale=this.totale+this.number1;}

      else{
        this.isRatingsExist=false;
      }
     
      console.log("rrrrrrrrrrrrrrrrr",this.isRatingsExist );
       console.log("rrrrrrrrrrrrrrrrr",this.totale);
        
    },
     isRating2(event){
 if(event.target.checked==1){
 this.isRatingsExist=true;
 this.totale=this.totale+this.number2;}

      else{
        this.isRatingsExist=false;
      }
     
      console.log("rrrrrrrrrrrrrrrrr",this.isRatingsExist );
       console.log("rrrrrrrrrrrrrrrrr",this.totale);
        
    },
     isRating3(event){
 if(event.target.checked==1){
 this.isRatingsExist=true;
 this.totale=this.totale+this.number3;}

      else{
        this.isRatingsExist=false;
      }
     
      console.log("rrrrrrrrrrrrrrrrr",this.isRatingsExist );
       console.log("rrrrrrrrrrrrrrrrr",this.totale);
        
    },
    isRating4(event){
 if(event.target.checked==1){
 this.isRatingsExist=true;
 this.totale=this.totale+this.number4;}

      else{
        this.isRatingsExist=false;
      }
     
      console.log("rrrrrrrrrrrrrrrrr",this.isRatingsExist );
       console.log("rrrrrrrrrrrrrrrrr",this.totale);
        
    },
     async addRatings() {
		  if(this.idus==""){
         this.idus=null
      }
			 await axios
			 
			    .post('http://localhost:8000/api/addrating',
				{ rate:this.totale,
                  commentaire:this.rating.commentaire,
                   room_id:this.ro,
                    user_id:this.idus,
				},
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client')}}
				).then(response=>{
					 	
				     let res = response.data;
					 console.log(res);
    
				})
	
		
    }
}}
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
  
   color: #f51606;
 font-size: 30px;
}
#reduit{
 
 font-size: 22px;
 color:red
    
}
#f{
  color:black;
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
#B{
  margin-top: 10%;
  border-radius: 0%
}
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
    .screen-reader{
  width: var(--screenReaderWidth, 1px) !important;
  height: var(--screenReaderHeight, 1px) !important;
  padding: var(--screenReaderPadding, 0) !important;
  border: var(--screenReaderBorder, none) !important;

  position: var(--screenReaderPosition, absolute) !important;
  clip: var(--screenReaderClip, rect(1px, 1px, 1px, 1px)) !important;
  overflow: var(--screenReaderOverflow, hidden) !important;
}

/*
=====
CORE STYLES
=====
*/

.rating{
  --uiRatingColor: var(--ratingColor, #eee);
  --uiRatingColorActive: var(--ratingColorActive, #8d703b);

  display: var(--ratingDisplay, flex);
  font-size: var(--ratingSize, 1rem);
  color: var(--uiRatingColor);
}
    
.rating__control:nth-of-type(1):focus ~ .rating__item:nth-of-type(1)::before,
.rating__control:nth-of-type(2):focus ~ .rating__item:nth-of-type(2)::before,
.rating__control:nth-of-type(3):focus ~ .rating__item:nth-of-type(3)::before,
.rating__control:nth-of-type(4):focus ~ .rating__item:nth-of-type(4)::before,
.rating__control:nth-of-type(5):focus ~ .rating__item:nth-of-type(5)::before{
  content: ""; 
  box-shadow: 0 0 0 var(--ratingOutlineWidth, 4px) var(--uiRatingColorActive);

  position: absolute;
  top: -.15em;
  right: 0;
  bottom: -.15em;
  left: 0;
  z-index: -1;
}

.rating__item{
  cursor: pointer;  
  position: relative;
}

.rating__item{
  padding-left: .25em;
  padding-right: .25em;
}

.rating__star{
  display: block;
  width: 1em;
  height: 1em;

  fill: currentColor;
  stroke: var(--ratingStroke, #222);
  stroke-width: var(--ratingStrokeWidth, 1px);
}

.rating:hover,
.rating__control:nth-of-type(1):checked ~ .rating__item:nth-of-type(1),
.rating__control:nth-of-type(2):checked ~ .rating__item:nth-of-type(-n+2),
.rating__control:nth-of-type(3):checked ~ .rating__item:nth-of-type(-n+3),
.rating__control:nth-of-type(4):checked ~ .rating__item:nth-of-type(-n+4),
.rating__control:nth-of-type(5):checked ~ .rating__item:nth-of-type(-n+5){
  color: var(--uiRatingColorActive);
}

.rating__item:hover ~ .rating__item{
  color: var(--uiRatingColor);
}

/*
=====
SETTINGS
=====
*/

.rating{
  --ratingSize: 2rem;
  --ratingColor: #eee;
  --ratingColorActive: #8d703b;
}

/*
=====
DEMO
=====
*/

body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  font-size: 1rem;
  margin: 0;
}

.page{
  min-height: 100vh;
  display: flex;
}

.page__demo{
  margin: auto;  
}



@media (min-width: 641px){
  .page__demo{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .page__group{
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  }
  #style{
    border:transparent;
    font-weight:Bold;
    font-size: 20px;
    color: rgb(46, 36, 5);
  }
 
}
</style>
