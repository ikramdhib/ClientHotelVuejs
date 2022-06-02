<template >
    <div  class="hero-wrap" id="s1" :style="'background-image '" >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread"> SPA </h1>
            </div>
          </div>
        </div>
    </div>
</div>
		<section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container"><div class="row">
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">PROFITEZ  DE FRESH EAU </h2>
	            </div>
	          </div>
					</div>
				</div>
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
	          
		            <h2 class="mb-4"> {{ restaurant.title }} </h2>
	          <div class="pb-md-4">
							<p>{{ restaurant.description }}</p>
							<p>Résérver un<span id="tt"> Table </span> à partire de :  <span id="prix" class="pl-md-5"> {{ restaurant.prix_reservation }} DT </span></p>
							<div class="d-flex text align-items-center">
							<input id="btn" type="button" value="Résérver"  @click="gobook(restaurant.id)" class="btn btn-primary py-3 px-4" >
	        			</div>
						</div>
					</div>
				</div>
				<div class="col-md-5  wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          </div>
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
				</div>
				</div>
		</section>
   
		  <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Découvrez nos Spa</span></h2>
          </div>

        </div>
          <div class="col-md-12">
            <div class="bg-white p-5 ">
                  <div class="row">
                  <div class="col-md-4"  v-for="ret in recard" :key="ret.id"> 
					  <div >
                    <div class="card" >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ret.nom}} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description.substr(0 , 110)+',...' }} <input type="button" id="bt" value="plus details" class="btn btn-primary" @click="goDetail(ret.id)"  >  </p>

					  <hr/>
                      <p class="card-text" id="pr">  {{ ret.prix_reservation }} DT  
					  </p>
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
		}
		
	},
	mounted (){
		console.log("hy");
		this.getRes();
		this.getAll();
		this.getAlll();
			
		
},

	methods :{
		async getRes(){
			const id =this.$route.params.id;
			console.log("rr",id);
		await axios.get('http://localhost:8000/api/spaimg/'+id).then(res=>{
				if(res!=null){
					this.restaurant=res.data.rooftop
				for(let i=0 ; i< this.restaurant.images.length ; i++){
					this.image1=this.restaurant.images[0]
					this.image2=this.restaurant.images[1]
					break;
				}
					
				}
			
			})
		},
		async getAll(){
			await axios.get('http://localhost:8000/api/allspa').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.roofs.length ; i++){
						this.recard.push(res.data.roofs[i]);
					}
					
				}
			})
		},
			async getAlll(){
			await axios.get('http://localhost:8000/api/allspaa').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.roofs.length ; i++){
						this.recardd.push(res.data.roofs[i]);
					}
					
				}
			})
		},
		goDetail(id){
			this.restaurant=this.recardd.filter(e=>e.id==id)[0]
			console.log(this.restaurant);
			for(let i=0 ; i< this.restaurant.images.length ; i++){
					this.image1=this.restaurant.images[0]
					this.image2=this.restaurant.images[1]
					break;
				}
		},
		gobook(id){

		 	this.$router.push({name:'bookingcat' , params:{id:id , catg:'spa'} })
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
#r{
	margin-left: 80%;
}
#bt{
	background-color: transparent;
	border-color: transparent;
	color: #8d703b;
}
#pr{
	color: black;
	font-family: monospace;
	font-size: 20px;
}
</style>