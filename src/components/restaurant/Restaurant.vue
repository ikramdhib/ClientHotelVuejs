<template>
    <div  class="hero-wrap" id="bg2" :style="'background-image '" >

      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread"> {{ restaurant.nom }} </h1>
            </div>
          </div>
        </div>
    </div>
</div>
		<section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container">
				<div>
				<div class="row" >
					<div class="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" :style="'background-image :url(http://localhost:8000/storage//'+image1.name+')'">
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">DES RECETTES AUXQUELLES VOUS NE POURREZ PAS RÉSISTER</h2>
	            </div>
	          </div>
	          <div class="pb-md-4">
							<p>{{ restaurant.description }}</p>
							<p>Résérver un<span id="tt"> Table </span> à partire de :</p>
							<p id="prix" class="pl-md-5"> {{ restaurant.prix_reservation }} DT </p>
							<div class="d-flex text align-items-center">
								<input id="btn" type="button" value="Résérver"  class="btn btn-primary py-3 px-4" @click="back()">
	        			</div>
						</div>
					</div>
					
				</div>
				</div>
			</div>
		</section>

		<section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
			  <div  v-for="res in restaurant.menus" :key="res">
				  
            <h2>{{res.titre}}</h2>
			  </div>
          </div>
        </div>
		<div  v-for="m in restaurant.menus" :key="m"> 
				<div class="row">
        	<div class="col-md-6" v-for="p in m.plats" :key="p">
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
            <h2><span>Nos Offres pour le Restaurant</span></h2>
          </div>

        </div>
          <div class="col-md-12 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
              <div  class="row">
                <form class="p-5 contact-form">
              <div class="form-group">
                  <div class="row">

                  <div class="col-md-4 py-4" v-for="offre in restaurant.offres" :key="offre.id"> 
                    <div class="card"  id="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title"> {{ offre.titre}} </h5>
                      <p class="card-text"> {{ offre.description }} </p>
                      <p class="card-text" id="p" v-if="offre.pourcentage >0 "> {{ offre.pourcentage }} % </p>
					  <p class="card-text" id="p" v-if="offre.pourcentage >0 "> <del id="pp"> {{ restaurant.prix_reservation }} DT </del>
					   <span class="px-4" id="of"> {{ restaurant.prix_reservation-((restaurant.prix_reservation*offre.pourcentage)/100)}} </span> </p>
                      
                    </div>
                  </div>
                    </div>
                   
                 </div>
              </div>
            </form>
              </div>
              </div>
              </div>
            </div>
		 </div>
		  <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Nos Restaurants</span></h2>
          </div>

        </div>
          <div class="col-md-12 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
              <div  class="row">
                <form class="p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-4"  v-for="ret in recard" :key="ret.id"> 
					  <div id="d">
                    <div class="card"  id="card" >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ret.nom}} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description }} </p>
					  <hr/>
                      <p class="card-text" id="pp">  {{ ret.prix_reservation }} DT  
					  <span class="card-text py-4" id="b"> <input id="btn" type="button" value="Résérver"  class="btn btn-primary" @click="back()"> </span></p>
                    </div>
                  </div>
                    </div>
                  </div>
                 </div>
              </div>
            </form>
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
			image1:{},
		}
	},
	mounted (){
		this.getRes();
		this.getAll();
		console.log("ll",this.recard)
	},
	methods :{
		async getRes(){
			const id =this.$route.params.id;
		await axios.get('http://localhost:8000/api/getrestaurant/'+id).then(res=>{
				if(res!=null){
					this.restaurant=res.data.restaurant
					
				for(let i=0 ; i< this.restaurant.img.length ; i++){
					this.image1=this.restaurant.img[1]
					break;
				}4
				console.log("img",this.image1);
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

#b{
	margin-left:92px ;
}
</style>