<template>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Résérvez maintement : </h2>
          </div>
        </div>
          <div class="col-md-3 d-flex">
            	
          </div>
          <div class="col-md-3 d-flex">
          </div>
          <div class="col-md-3 d-flex">
          </div>
        </div>
        <div class="row block-9 slide-top py-4">
          <div class="col-md-12 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="ml-md-0">
                 <div class="col-md-6 d-flex align-self-stretch ">
            <div class="media block-6 services py-6  text-center">
              <!--	<div class="icon d-flex align-items-center justify-content-center">
              		<span class="flaticon-airplane49" ></span> 
              	</div>-->
                 <h3 id="title" class="mb-4">1.1 Choisissez une chambre </h3>
            </div>
                 </div>
              
	            </div>
              </div>
              <div  class="row">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label">   Date d'arriver :</label>
                      <input placeholder="Select date" type="date" id="example" class="form-control" v-model="bookgroom.start">
                    </div>
                    <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Date de départ :</label>
                      <input placeholder="Select date" type="date" id="example" class="form-control" v-model="bookgroom.end">
                    </div>
                     <div class="col-md-2"> 
                       <h6 id="nuit" class="mb-4"> : Ntuis .</h6>
                    </div>
                 </div>
              </div>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom.nbadult">
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                      <option value="5">5 </option>
	                      <option value="6">6 </option>
	                    </select>
	                  </div>
                    </div>
                    <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Enfants :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom.nbenfant">
	                    	<option value="0">0 </option>
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                    </select>
	                  </div>
                    </div>
                    <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Bébé :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom.nbbebe">
	                    	<option value="0">0 </option>
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                      <option value="4">4 </option>
	                    </select>
	                  </div>
                    </div>
              </div>
              </div>
              <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2 py-4">
          <div class="col-md-5 heading-section text-center">
                <input type="button" value="Vérifier les disponibilités" v-on:click="findRoom()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5">
              </div>
                  </div>
              </div>
            </form>
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data (){
    return{
      bookgroom:{
        start:"",
        end:"",
        nbadult:"",
        nbenfant:"",
        nbbebe:"",
      }
    }
  },
  mounted(){
    
  },
   methods : {
      findRoom(){
        localStorage.setItem('bookgroom',JSON.stringify(this.bookgroom))
        this.$router.push('selectroom');
     }
     
    }
}
</script>





<style scoped>
#title{
  margin-top:25px ;
  margin-left: 10px;
}
#form{
  background-color: gray;
}
#nuit{
  margin-top: 45px;
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
#label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
  font-size: 20px;

}
</style>
