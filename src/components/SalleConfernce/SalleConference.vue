<template >
  <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread">Details Salle de conference</h1>
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
</svg>
          </div>
          </div>
          <div class="row">
          <div class="col-md-8">
<textarea class="form-control"  placeholder="Ajouter un commentaire"  v-model="rating.commentaire" id="exampleFormControlTextarea1" rows="6"></textarea>
        <input type="button" value="Envoyer"  @click="addRatings" id="B" class="btn btn-primary py-3 px-3">
  </div>
</div>
          </div>
          </div>

        
          
          <div class="col-lg-4 sidebar ftco-animate">
          <div class="form-group">
                 <div class="box">
             <input type="button" value="Reserver" @click="gobook(room)" id="box" class="btn btn-primary py-3 px-5">
              </div>
              </div>
        
               <div class="sidebar-box ftco-animate">
              <div class="categories">
                	<h2> {{decoration}} </h2>
                <div v-if="equipement.length>0">
                   <h2  > les Equipements</h2>
                  <div v-for="eq in equipement" :key="eq.id">
                 <div   v-if ="eq.disponibilite == 1">
                  <li >{{eq.label}}</li>
                   <li>{{ eq.prix }}DT</li>
             
                 </div>
              </div>
                </div>
              </div>
            </div>
            
            <div class="sidebar-box ftco-animate">
              <h2>les Types de salle de conference  </h2>
              <div class="row" v-if="types.length>0">
          	<div  v-for="type in types" :key="type.id">
               <div v-if ="type.disponibilite == 1">
             
                <li>{{type.label}} / {{ type.capacite }} Personnes</li>
           
              </div></div>
              </div>
              </div>
			  		<div v-if="offres.length>0">
           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<div v-for="(offre, index) in registre.offres" :key="index">
								<li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
							</div>
						</ol>
						<div class="carousel-inner">
						<div v-for="(offre, index) in registre.offres" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
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
          </div>
        </div>
      </div>
      </section> <!-- .section -->
        <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Nos Salles de conference </span></h2>
          </div>

        </div>
          <div class="col-md-12 ">
            <div class="bg-white p-5">
                  <div class="row">
                  <div class="col-md-4"  v-for="ret in record" :key="ret.id"> 
					  <div v-if=" ret.disponibilite==true">
                    <div class="card"  >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ret.nom}} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description.substr(0 , 110)+',...' }} <input type="button" id="bt" value="plus details" class="btn btn-primary" @click="goDetail(ret.id)"  >  </p>
       

                    
					  <hr/>
                      <p class="card-text" id="pr">  {{ ret.prix }} DT   </p>
                    </div>
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
      decoration:{},
	  room:{},
   tab1:[],
    tab2:[],
    tab3:[],
    tab4:[],
    record:[],
    recordd:[],
    salles:[],
    equipement:[],
     types:[],
     offres:[],
     images:[],
     registre:[],
     price:{},
      isRatingsExist:false,
      rating:{
             commentaire:"",
                },
			 user_id:0,
       user:{},
       idus:0,
totale:0,
number:0,
number1:0,
number2:0,
number3:0,
number4:0,
    };
  },
  
   
  mounted(){
 this.getRoom();
    this.getal();
    this.getall()
     this.isLogin=true;
      if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
                         this.idus=this.user.id;
                         console.log("fghhj",this.idus);
                }
                 
  },
 
	  
        methods: {       
        async getRoom(){
      const id = this.$route.params.id
      await axios  .get("http://127.0.0.1:8000/api/getconf/"+id,)
            .then(res => {
              this.registre=res.data.cf
                this.room=res.data.cf.id;
                this.price=res.data.cf.prix
                this.decoration=res.data.cf.decoration
                this.tab1=res.data.cf.equipement
                for(let i=0 ; i< this.tab1.length ; i++){
                  this.equipement.push(this.tab1[i]);
                }
                this.tab2=res.data.cf.typeconferencerooms
                for(let i=0 ; i< this.tab2.length ; i++){
                  this.types.push(this.tab2[i]);
                }
                this.tab3=res.data.cf.offres
                for(let i =0; i<this.tab3.length ; i++){
                  this.offres.push(this.tab3[i])
                }
                this.tab4=res.data.cf.images
                for(let i =0 ; i <this.tab4.length ; i++){
                  this.images.push(this.tab4[i])
                }
          })

          },
            async getal(){
          await axios.get('http://localhost:8000/api/getSalle').then(res=>{
          
					for(let i=0 ; i < res.data.salle.length ; i++){
						this.record.push(res.data.salle[i]);
					
          }
            })
          },
            async getall(){
          await axios.get('http://localhost:8000/api/getSallee').then(res=>{
          
					for(let i=0 ; i < res.data.salle.length ; i++){
						this.recordd.push(res.data.salle[i]);
					
          }
            })
          },
          	goDetail(id){
              this.registre=this.recordd.filter(e=>e.id==id)[0]
              console.log(this.registre);
                this.images=this.registre.images
              
                  this.offres=this.registre.offres
                
                  this.types=this.registre.type_conference_rooms;
                
                  this.equipement=this.registre.equipements;
                
		},

          gobook(id){
            this.$router.push({name:"booking" , params:{id:id,catg:"salleConference"}})
          },
          
          /************************************** */
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
         this.idus=null }
			 await axios
			  .post('http://localhost:8000/api/addrating',
				{ rate:this.totale,
                  commentaire:this.rating.commentaire,
                   conference_room_id:this.room,
                     user_id:this.idus,	},
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client')}}
				).then(response=>{
					 	  let res = response.data;
					 console.log(res);
    
				})
	
		
    }
}}
          
        </script>
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
      color:rgb(90, 90, 90)
          
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
  --uiRatingColorActive: var(--ratingColorActive,#8d703b);

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
#B{
  margin-top: 10%;
  border-radius: 0%
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

.page__group{
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.page__hint{
  display: block;
  font-weight: 700;
  margin-top: 1rem;
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
}
#pr{
	color: black;
	font-family: monospace;
	font-size: 20px;
}
#r{
	margin-left: 80%;
}
#bt{
	background-color: transparent;
	border-color: transparent;
	color: #8d703b;
}
 </style>
