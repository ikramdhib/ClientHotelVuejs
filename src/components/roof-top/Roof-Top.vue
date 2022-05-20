<template >
    <div  class="hero-wrap" id="bg2" :style="'background-image '" >

      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread"> {{ rooftop.intitule }} </h1>
            </div>
          </div>
        </div>
    </div>
</div>
		<section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container">
				<div class="row">
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">PROFITEZ  VOTRE TEMPS DANS NOTRE ROOF-TOP PLACE</h2>
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
					<div class="col-md-12 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="pb-md-4">
							<p>{{ rooftop.description }}</p>
							<p>Résérver un<span id="tt"> Table </span> à partire de : <span id="prix" class="pl-md-5"> {{ rooftop.prix }} DT </span></p>
							
							<div class="d-flex text align-items-center">
<<<<<<< HEAD
										<input id="btn" type="button" value="Résérver"  @click="gobook(rooftop.id)"  class="btn btn-primary py-3 px-4" >
=======
								<input id="btn" type="button" value="Résérver"  class="btn btn-primary py-3 px-4" @click="goBooking(rooftop.id)">
>>>>>>> ce0f592d6616d7999cf7779de544a95dbfac2cc6
	        			</div>
					</div>
					</div>
				</div>
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

                  <div class="col-md-4 py-4" id="d" v-for="offre in rooftop.offres" :key="offre.id"> 
                    <div class="card"  id="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title"> {{ offre.titre}} </h5>
                      <p class="card-text"> {{ offre.description }} </p>
                      <p class="card-text" id="p" v-if="offre.pourcentage >0 "> {{ offre.pourcentage }} % </p>
					  <p class="card-text" id="p" v-if="offre.pourcentage >0 "> <del id="pp"> {{ rooftop.prix}} DT </del>
					   <span class="px-4" id="of"> {{ rooftop.prix-((rooftop.prix*offre.pourcentage)/100)}} </span> </p>
                      
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
                  <div class="col-md-4"  v-for="ret in rooftopcard" :key="ret.id"> 
					  <div id="d">
                    <div class="card"   >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ret.intitule}} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description }} </p>
                      <p class="card-text"> <a :href="'http://localhost:8080/#/roof-top'+ret.id"   > plus de details </a></p>

					  <hr/>
                      <p class="card-text" id="pp">  {{ ret.prix }} DT  
					  <span class="card-text py-4" id="b"> <input id="btn" type="button" value="Résérver"  class="btn btn-primary" @click="goBooking()"> </span></p>
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
			rooftop:{ },
			name:"",
			roof:{ },
			rooftopcard:[],
			image1:{},
			image2:{},
		}
	},
	mounted (){
		this.getRes();
		this.getAll();
},

	methods :{
		async getRes(){
			const id =this.$route.params.id;
			console.log("rr",id);
		await axios.get('http://localhost:8000/api/getroof/'+id).then(res=>{
				if(res!=null){
					this.rooftop=res.data.rooftop
				for(let i=0 ; i< this.rooftop.images.length ; i++){
					this.image1=this.rooftop.images[0]
					this.image2=this.rooftop.images[1]
					break;
				}
				console.log(res.data.rooftop)
				
				
				}
			})
		},
		async getAll(){
			await axios.get('http://localhost:8000/api/getroomimg').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.roofs.length ; i++){
						this.rooftopcard.push(res.data.roofs[i]);
					}
				}
			})
		},
<<<<<<< HEAD
		gobook(id){
	 this.$router.push({name:'booking', params:{id:id , categorie:'roof'}})
       },
=======
	goBooking(id){
		this.$router.push({name:'bookingcat' , params:{id:id , catg:'roof'} })
	}
		
>>>>>>> ce0f592d6616d7999cf7779de544a95dbfac2cc6
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