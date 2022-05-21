<template >
    <div  class="hero-wrap" id="bg2" :style="'background-image '" >

      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread"> ROOF-TOP  </h1>
            </div>
          </div>
        </div>
    </div>
</div>
		<section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container">
				<div>
				<div class="row"  >
					<div id="roof1" class="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" style="background-image ">
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">DES RECETTES AUXQUELLES VOUS NE POURREZ PAS RÉSISTER</h2>
	            </div>
	          </div>
	          <div class="pb-md-4">
				<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
				<p  class="pl-md-5">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
				 <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
					</div>
				</div>
		       </div>
			</div>
		</div>
		</section>
     
		  <div class="container-fluid">
        <div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-7 text-center heading-section py-4">
            <h2><span>Découvrez nos Roof-Top</span></h2>
          </div>

        </div>
          <div class="col-md-12 ">
            <div class="bg-white p-5 ">
                  <div class="row">
                  <div class="col-md-4"  v-for="ret in recard" :key="ret.id"> 
					  <div v-if="ret.disponibilite==true" >
                    <div class="card" >
						  <img  :src="'http://localhost:8000/storage'+ret.images.name"  alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title"> {{ ret.intitule }} </h5>
					  <hr/>
                      <p class="card-text"> {{ ret.description }}  <input type="button" value="plus details" class="btn btn-primary" @click="goDetail(ret.id)" id="bt" > </p>


					  <hr/>
                      <p class="card-text" id="pr">  {{ ret.prix}} DT  
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
			restaurant:null,
			name:"",
			res:[ ] ,
			recard:[],
			offres:[],
			off:[],
			tab:[],
		}
	},
	mounted (){
		this.getRes();
		this.getAll();
},

	methods :{
		async getRes(){
		await axios.get('http://localhost:8000/api/alloffrof').then(res=>{
			this.restaurant=res.data.restaurants;

          for(let i=0 ; i<this.restaurant.length ; i++){
			this.res.push(this.restaurant[i]);
		  }
			})
		},
		async getAll(){
			await axios.get('http://localhost:8000/api/getroomimg').then(res=>{
				if(res!=null){
					for(let i=0 ; i < res.data.roofs.length ; i++){
						this.recard.push(res.data.roofs[i]);
					}
					
				}
			})
		},
		goDetail(id){
			this.$router.push({name:'roof-top' , params:{id:id}})
		},
		
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
#pr{
	color: black;
	font-family: monospace;
	font-size: 20px;
}
#bt{
	background-color: transparent;
	border-color: transparent;
	color: #8d703b;
}
</style>