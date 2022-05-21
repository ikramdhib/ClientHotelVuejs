<template >
  <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Acceuil</a></span> <span>A propos</span></p>
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
   
          </div> </div>
          <div class="col-lg-4 sidebar ftco-animate">
          <div class="form-group">
               <div class="box">
                  <input type="button" value="Reserver" @click="gobook(room.id)" id="box" class="btn btn-primary py-3 px-5">
              </div>
              </div>
               <div class="sidebar-box ftco-animate">
              <div class="categories">
                
                   <h2  > les Equipements</h2>
                  <div v-for="eq in equipement" :key="eq.id">
                 <div   v-if ="eq.disponibilite == 1">
                  <li >{{eq.label}}</li>
                   <li>{{ eq.prix }}</li>
             
                 </div>
              </div>
              </div>
            </div>
            	
            <div class="sidebar-box ftco-animate">
              <h2>les Types de salle de conference  </h2>
              <div class="row">
          	<div  v-for="type in types" :key="type.id">
               <div v-if ="type.disponibilite == 1">
             
                <li>{{type.label}} / {{ type.capacite }} Personnes</li>
           
              </div></div>
              </div>
              </div>
           <div v-if="offres.length >0">
             <div v-for="offre in offres" :key="offre.id">
             <div class="card"  id="card" style="width: 18rem;" v-if="offre.disponibilite== 1">
            <div class="card-body">
          <h5 class="card-title">{{offre.titre}}</h5>
         <p class="card-text">{{ offre.description }}.</p>
           <p class="card-text" id="p">{{ offre.pourcentage}} % </p>
              </div>
           </div>
            </div>
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
   tab1:[],
    tab2:[],
    tab3:[],
    tab4:[],
    salles:[],
    equipement:[],
     types:[],
     offres:[],
     images:[],
    };
  },
  
   
  mounted(){
 this.getRoom();
    this.getal()
  },
 
	  
        methods: {       
        async getRoom(){
      const id = this.$route.params.id
      await axios  .get("http://127.0.0.1:8000/api/getconf/"+id,)
            .then(res => {
                this.room.id=res.data.cf;
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
            this.salles=res.data.salle;

            }
            )
          },

          gobook(id){
            this.$router.push({name:"bookingcat" , params:{id:id , catg:"salleConference"}})
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
      </style>
