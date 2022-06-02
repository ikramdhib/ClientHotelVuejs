<template>

    <div class="hero-wrap" id="bg1" style="background-image:">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/" >Accueil</router-link></span> <span>Contact</span></p>
	            
            </div>
          </div>
        </div>
      </div>
    </div>


<button type="button" class="btn btn-primary" id="toggle" data-toggle="modal" data-target="#exampleModalLong" hidden  >
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle" >Evaluation</h5>
     
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
          <div>
         
             <div class="col-lg-4 sidebar ftco-animate">
          <div class="form-group">
                 
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
   <textarea name=""  cols="30" rows="6"  placeholder="Ajouter" v-model="rating.commentaire" />
  <div class="col-md-12">
 <hr/>
<input type="button" value="Envoyer"  id="btn" @click="addRatings" class="btn btn-primary py-3 px-4"></div></div>
       </div>
      </div>
    </div>
  </div>
</div>
 <section class="ftco-section contact-section bg-light">
      <div class="container">
  
        <div class="row ">
            <div class="col-md-6">
                 <div  id="contact1" class=" p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" style='width: 550px; height: 800px; background-image '>
					</div>
          </div>
          <div class="col-md-6 ">
					<div class="col-md-12 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h1 id="titre" class="mb-4"> Cher Client </h1>
	            </div>
	          </div>
	          <div class="pb-md-4">
							<p id="tit">Nous apprécions vraiment votre réservation et nous sommes très reconnaissants de la confiance que vous nous accordez. 
                               </p>
                            	
							<p>
                                connecter sur (+216 50711246) ou sur notre page Facebook  pour plus d'information . 
                            </p>
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
      isLogin:false,
      id:0,
      user_id:0,
      idus:0,
  rating:{
             commentaire:"",
                },

   isRatingsExist:false,
totale:0,
number:0,
number1:0,
number2:0,
number3:0,
number4:0,

 };},
 mounted(){

document.getElementById("toggle").click();
  if(localStorage.getItem('client')){
                        this.user = JSON.parse(localStorage.getItem('client'));
                }
               this.idus=this.user.id;
console.log("fghhj",this.idus)
 },

 methods:{
 
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
	   const id = this.$route.params.id
  if(this.idus==""){
      this.idus=null
   
      }
			 await axios
			.post('http://localhost:8000/api/addrating',
				{         rate:this.totale,
                  commentaire:this.rating.commentaire,
                   booking_id:id,
                   user_id:this.idus,
				},
			
				).then(response=>{
					 	
				     let res = response.data;
					 console.log(res);
    
				})

        	 
       
	
     }}
    
 }
</script>
<style scoped>

#tit{
    font-size: 30px;
    color:black;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#titre{
    
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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

#btn{
border-radius: 0px;
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
  }}
</style>
