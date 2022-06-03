<template >
    <div  class="hero-wrap" id="bg2" :style="'background-image '" >

      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread"> RESTAURANT </h1>
            </div>
          </div>
        </div>
    </div>
</div>
		<section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container">
				<div>
					<div class="row  py-4"  v-if="image1!=null && image2!=null" >
					<div class="col-md-6"  >
					<div class=" p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center " :style="' width: 550px; height: 500px; background-image :url(http://localhost:8000/storage//'+image1.name+')'">
					</div>
					</div>
					<div class="col-lg-6"  style="">
					<div class=" p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" :style="'width: 550px; height: 500px; background-image :url(http://localhost:8000/storage//'+image2.name+')'">
					</div>
				</div>
				</div>
				<div class="row">
					
					<div class="col-md-7  wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          
		            <h2 class="mb-4"> {{ restaurant.nom }} </h2>
	          
	          </div>
	          <div >
							<p>{{ restaurant.description }}</p>
							<p>Résérver un<span id="tt"> Table </span> à partire de :  <span id="prix" class="pl-md-5"> {{ restaurant.prix_reservation }} DT </span></p>
							<div class="d-flex text align-items-center">
									<input id="btn" type="button" value="Résérver"   @click="gobook(restaurant.id)" class="btn btn-primary py-3 px-4" >
	        			</div>
						</div>

					</div>
					<div class="col-md-5  wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          </div>
	          <div >
					  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<div v-for="(offre, index) in restaurant.offres" :key="index">
								<li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
							</div>
						</ol>
						<div class="carousel-inner">
						<div v-for="(offre, index) in restaurant.offres" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
									<div class="card"  id="card" style="width: 18rem;">
										<div class="card-body">
											<span class="badge badge-pill badge-danger" id="r">OFFRE</span>
										<h5 class="card-title"> {{ offre.titre}}   </h5>
										<p class="card-text"> {{ offre.description }} </p>
										<p class="card-text" id="p" v-if="offre.pourcentage >0 "> {{ offre.pourcentage }} % </p>
										<p class="card-text" id="p" v-if="offre.pourcentage >0 "> <del id="pp"> {{ restaurant.prix_reservation }} DT </del>
										<span class="px-4" id="of"> {{ restaurant.prix_reservation-((restaurant.prix_reservation*offre.pourcentage)/100)}} </span> </p>
										
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

    </div>

   
<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
  <symbol id="star" viewBox="0 0 26 28">
    <path d="M26 10.109c0 .281-.203.547-.406.75l-5.672 5.531 1.344 7.812c.016.109.016.203.016.313 0 .406-.187.781-.641.781a1.27 1.27 0 0 1-.625-.187L13 21.422l-7.016 3.687c-.203.109-.406.187-.625.187-.453 0-.656-.375-.656-.781 0-.109.016-.203.031-.313l1.344-7.812L.39 10.859c-.187-.203-.391-.469-.391-.75 0-.469.484-.656.875-.719l7.844-1.141 3.516-7.109c.141-.297.406-.641.766-.641s.625.344.766.641l3.516 7.109 7.844 1.141c.375.063.875.25.875.719z"/>
  </symbol>
</svg>

</div><div class="col-md-20">
    <textarea class="form-control" placeholder="Ajouter commentaire"  v-model="rating.commentaire" id="exampleFormControlTextarea1" rows="6" cols="8"></textarea>
        <input type="button" value="Envoyer" id="B"  @click="addRatings" class="btn btn-primary py-3 px-3"></div>
					</div>
						</div>
						</div>
						</div>
		</section>

		<section class="ftco-section ">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
				  
            <h2>{{ menu.titre }}</h2>
          </div>
        </div>
		<div > 
				<div class="row">
        	<div class="col-md-6" v-for="p in menu.plats" :key="p">
        		<div class="pricing-entry d-flex ftco-animate" v-for="im in p.images" :key="im" >
        			<div class="img" :style="'background-image :url(http://localhost:8000/storage//'+im.name+')'"></div>
        			<div class="desc pl-3">
	        			<div class="d-flex text align-items-center">
	        				<h3><span> {{ p.nom }} </span></h3>
	        				<span class="price"> {{ p.prix_plat }} DT </span>
	        			</div>
	        			<div class="d-block">
	        				<p> {{ p.intitule }} </p>
	        			</div>
        			</div>
        		</div>
        	</div>
			
        </div></div>
			</div>
		</section>
		  <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Nos Restaurants</span></h2>
          </div>

        </div>
          <div class="col-md-12 ">
            <div class="bg-white p-5">
                  <div class="row">
                  <div class="col-md-4"  v-for="ret in recard" :key="ret.id"> 
					  <div v-if="ret.id != restaurant.id && ret.disponibilite==true">
                    <div class="card"  >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ret.nom}} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description.substr(0 , 110)+',...' }} <input type="button" id="bt" value="plus details" class="btn btn-primary" @click="goDetail(ret.id)"  >   </p> 
					  <hr/>
                      <p class="card-text" id="pr">  {{ ret.prix_reservation }} DT   </p>
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
import axios from 'axios'
export default {
	data(){
		return{
			restaurant:{ },
			name:"",
			res:{ },
			recard:[],
			recardd:[],
			image1:{},
			image2:{},
			menu:{ },
			plats:[],
			idres:"",
			idus:0,
			user:{},
			isRatingsExist:false,
			rating:{
             commentaire:"",
                },
			
totale:0,
number:0,
number1:0,
number2:0,
number3:0,
number4:0,
		}
	},
	mounted (){
		console.log("hy");
		this.getRes();
		this.getAll();
		this.getAlll();
		console.log(this.plats)
		console.log(this.restaurant);
		console.log("ggg",this.menu);
		 this.isLogin=true;
      if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
						 this.idus=this.user.id;
                        console.log("fghhj",this.idus);
                }
				
},

	methods :{
		async getRes(){
			let id =this.$route.params.id;
			console.log("rr",id);
		await axios.get('http://localhost:8000/api/getrestaurant/'+id).then(res=>{
				if(res!=null){
					this.restaurant=res.data.restaurant
					this.idres=res.data.restaurant.id
					this.menu=res.data.restaurant.menus
				for(let i=0 ; i< this.restaurant.img.length ; i++){
					this.image1=this.restaurant.img[0]
					this.image2=this.restaurant.img[1]
					break;
				}
				console.log("img",res.data.restaurant.menus);
				
			
				}
			})
		},
		async getAll(){
			await axios.get('http://localhost:8000/api/all').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.ress.length ; i++){
						this.recard.push(res.data.ress[i]);
					}
				}
			})
		},
			async getAlll(){
			await axios.get('http://localhost:8000/api/alll').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.restaurants.length ; i++){
						this.recardd.push(res.data.restaurants[i]);
					}
				}
			})
		},
		gobook(id){
	
	
         this.$router.push({name:'booking', params:{id:id , catg:'restaurant'}})
       },
		goDetail(id){
			this.restaurant=this.recardd.filter(e=>e.id==id)[0];
			console.log("eeee", this.restaurant);
			this.menu=this.restaurant.menus
			for(let i=0 ; i< this.restaurant.images.length ; i++){
					this.image1=this.restaurant.images[0]
					this.image2=this.restaurant.images[1]
					break;
				}
			
		},
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
			 await axios .post('http://localhost:8000/api/addrating',
				{ rate:this.totale,
                  commentaire:this.rating.commentaire,
                   restaurant_id:this.idres,
                   user_id:this.idus,
				},
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token_client')}}
				).then(response=>{
					 	
				     let res = response.data;
					 console.log(res);
    
				})
	
		
    }

	}
}
</script>
<style scoped>
#prix{
	color: red;
	font-weight: bold;
	font-family: cursive;
	font-size: 25px;
}
#tt{
	color: black;
}
#btn{
	border-radius: 0%;
}
#pp{
	color: red;
	font-size: 20px;
}
#of{
	color: black;
	font-size: 30px;
}
#card{
box-shadow: 10px 5px 5px #8d703b;}
#icon{
  	font-size: 22px;
  color:#8d703b;
}
#d{
	width: 18rem;
	margin-left: 120px;
	margin-right: 20px;
}

#bt{
	background-color: transparent;
	border-color: transparent;
	color: #8d703b;
}
#b{
	margin-left:92px ;
}
#pr{
	color: black;
	font-family: monospace;
	font-size: 20px;
}

#plus{
	color: black;
}
#r{
	margin-left: 80%;
}
#B{
  margin-top: 10%;
  border-radius: 0%
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
}
</style>