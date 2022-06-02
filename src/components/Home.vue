<template>
  <section class="home-slider">
    <div class="bd-example">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/bg_1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/bg_2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src="./images/bg_3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
 
	  <section class="ftco-booking">
    	<div class="container">
    		<div class="row">
    			<div class="col-lg-12">
    				<form action="#" class="booking-form">
	        		<div class="row">
	        			<div class="col-md d-flex">
	        				<div class="form-group p-4 align-self-stretch d-flex align-items-end">
	        					<div class="wrap">
				    					<label for="#">Date d'arriver</label>
				    					<input v-model="fetch.start" type="date" :min="dateNow" class="form-control checkin_date" >
			    					</div>
			    				</div>
	        			</div>
	        			<div class="col-md d-flex"> 
	        				<div class="form-group p-4 align-self-stretch d-flex align-items-end">
	        					<div class="wrap">
				    					<label for="#">Date de départ</label>
				    					<input   v-model="fetch.end" type="date" :min="dateNow"  class="form-control checkout_date" >
			    				</div>
			    				</div>
	        			</div>
	        			<div class="col-md d-flex">
	        				<div class="form-group p-4 align-self-stretch d-flex align-items-end">
	        					<div class="wrap">
			      					<label for="#">Client</label>
			      					<div class="form-field">
			        					<div class="select-wrap">
			                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
			                    <select v-model="fetch.nbadult" class="form-control">
			                     <option value="1">1 </option>
			                      <option value="2">2 </option>
			                      <option value="3">3 </option>
			                      <option value="4">4 </option>
			                      <option value="5">5 </option>
			                      <option value="6">6 </option>
			                    </select>
			                  </div>
				              </div>
				            </div>
		              </div>
	        			</div>
                <div class="col-md d-flex">
	        				<div class="form-group p-4 align-self-stretch d-flex align-items-end">
	        					<div class="wrap">
			      					<label for="#">enfant</label>
			      					<div class="form-field">
			        					<div class="select-wrap">
			                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
			                    <select  v-model="fetch.nbenfant" class="form-control">
			                      <option value="0">0</option>
			                     <option value="1">1 </option>
			                      <option value="2">2 </option>
			                      <option value="3">3 </option>
			                      <option value="4">4 </option>
			                    </select>
			                  </div>
				              </div>
				            </div>
		              </div>
	        			</div>
                <div class="col-md d-flex">
	        				<div class="form-group p-4 align-self-stretch d-flex align-items-end">
	        					<div class="wrap">
			      					<label for="#">bébé</label>
			      					<div class="form-field">
			        					<div class="select-wrap">
			                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
			                    <select  v-model="fetch.nbbebe" class="form-control">
			                      <option value="0">0</option>
			                     <option value="1">1</option>
			                      <option value="2">2 </option>
			                      <option value="3">3 </option>
			                      <option value="4">4 </option>
			                    </select>
			                  </div>
				              </div>
				            </div>
		              </div>
	        			</div>
	        			<div class="col-md d-flex">
	        				<div class="form-group d-flex align-self-stretch">
			              <input type="button" value="Vérifier les disponibilités" @click="getfetch()" class="btn btn-primary py-3 px-4 align-self-stretch">
			            </div>
	        			</div>
	        		</div>
	        	</form>
	    		</div>
    		</div>
    	</div>
    </section>
    <section  class="slide-top ftc-no-pb ftc-no-pt">
			<div class="container">
				<div class="row">
			<div  class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" id="bg3" style="background-image;">
						<a id="b" href="https://youtu.be/OtJVufo3IrA" class="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span  class="icon-play"></span>
						</a>
					</div>
					
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
	          	<div class="ml-md-0">
		          	<span class="subheading">BienVenu Au Deluxe</span>
		            <h2 class="mb-4">Bienvenue dans notre Hôtel</h2>
	            </div>
	          </div>
	          <div class="pb-md-5">
							<p>Situé au coeur de Tunisie, Deluxe est un point de départ idéal pour toutes les activités plein air, artistiques et culturelles : VTT sous toutes ses formes, balades, randonnées ou trail, ou encore, yoga, pic-nique et visites de petits villages qui vous feront voyager dans le temps.</p>
							<p>Deluxe réunit tous les ingrédients pour passer un séjour inoubliable en Tunisie en famille ou entre amis. Nous avons pensé le Deluxe comme un lieu typique et rafraîchissant aux couleurs accidulées proposant de multiples options pour un séjour qui vous ressemble : déjeuner ou goûter gourmand au soleil sur la toute nouvelle terrasse du Savoy, moment détente au spa ou cocktails...à vous de concocter votre journée parfaite avant de passer au Resto, le restaurant du Deluxe, où vous vous régalerez de plats traditionnels et raffinés dans une ambiance chaleureuse.</p>
							<ul class="ftco-social d-flex">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
						</div>
					</div>
				</div>
			</div>
		</section>

     

  <section clas="ftco-section">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-2"></div>
        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-reception-bell"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">24/7 Réception</h3>
              <p> A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-serving-dish"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">Restaurant & Cafée</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 d-flex align-self-stretch">
          <div class="media block-6 services py-4 d-block text-center">
            <div class="d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-spa"></span>
              </div>
            </div>
            <div class="media-body p-2 mt-2">
              <h3 class="heading mb-3">Spa Suites</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--get les chambres-->
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center">
          <h2 class="mb-4">Notres Chambres</h2>
        </div>
      </div>
      <div class="row">
        <template v-for="room in rooms" :key="room.id">
          <div
            class="col-sm col-md-6 col-lg-4 py-4"
            v-if="room.avaibility == 1"
          >
            <div class="card" >
              <img :src="'http://localhost:8000/storage' + room.images.name" />
              <div class="card-body">
                <div v-for="type in types" :key="type.id">
                  <div v-if="type.id == room.type_id">
                    <h5 class="card-title text-center">{{ type.nom_type }}</h5>
                      <p class="card-text text-center"> {{room.description.substr(0 , 110)+',...' }}</p>
                    <div class="text p-3 text-center">
                      
                            <p class="box">
                              {{ room.price_booking }} DT
                              <span class="box1"> par nuit </span>
                            </p>
                      
                      <router-link :to="'RoomSingle' + room.id"
                        ><a href="#" 
                          >plus details</a
                        ></router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
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
      dateNow:null,
      id: 0,
	     types:[],
    	room_id:[],
      description:"",
		 image:"",
     fetch:{
       end:"",
       start:"",
       nbadult:"",
       nbenfant:"",
       nbbebe:"",
      
     },
    isFetch:false,
    };
  },

  mounted() {
    this.getRoom();
    /********************************** */
    let d = new Date();
    let day =(d.getDate()+1)
    let month =(d.getMonth()+1)
    let year = d.getFullYear()
    if(month<10){
      month="0"+ month
    }
    if(day<10){
      day="0"+ day
    }
    this.dateNow= year+"-"+month+"-"+day;
        this.getType();
   
  },

  methods: {
    async getRoom() {
      await axios
        .get("http://localhost:8000/api/getRoom")
        .then((res) => {
          this.rooms = res.data.rooms;
          this.image = res.data.rooms.images.name;
          this.description=res.data.rooms.description;
          console.log("ii",this.description);
          console.log("rooms",this.table);
        })
        .then(this.getType())
        .then(this.getPrice());
    },

		  getfetch(){
        if(this.fetch!=null){
          this.isFetch=true,
          localStorage.setItem('fetch',JSON.stringify(this.fetch));
          localStorage.setItem('isFetch',this.isFetch)
          this.$router.push('findroom')
        }
        else{
          this.isFetch=false
        }
       
      },
	 
	  async getType(){
 await axios
  .get("http://127.0.0.1:8000/api/type", 

      )
      .then((res) => {
     
 
      this.types = res.data.type;
	  

        console.log(this.types);
      });
    },

   
  }
};
</script>
	  <style >
.box {
  color: #bb9245;
  font-size: 20px;
  font-weight: bold;
}
.box1 {
  font-size: 15px;
  color: grey;
  font-weight: lighter;
}
#titre {
  margin-bottom: 300px;
  color: white;
}
#b {
  background-color: transparent;
}
</style>
