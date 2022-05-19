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
              <div  class="row" v-if="isNotFetch==false">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label">   Date d'arriver :</label>
                      <input placeholder="Select date" type="date" id="example" class="form-control" :min="dateNow"  v-model="bookingdate.start">
                    </div>
                    <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Date de départ :</label>
                      <input :placeholder="dateNow" type="date" id="example"   :min="bookingdate.start" class="form-control" v-model="bookingdate.end">
                    </div>
                     <div class="col-md-2"> 
                       <h6 id="nuit" class="mb-4"> : Ntuis .</h6>
                    </div>
                 </div>
              </div>
              
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >Nombre de chambre : </label>
		                <div class="select-wrap one-third">
	                    <select  id="" class="form-control" v-model="nbChambre"  @change="display($event)">
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                    </select>
	                  </div>
                    </div>
                  </div>
              </div>
              <div class="form-group" v-if="nbChambre==1 || nbChambre==2 || nbChambre==3" > 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 1 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbbebe">
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
              
              <div class="form-group" v-if=" nbChambre==2 || nbChambre==3"> 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 2 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbbebe">
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
              
              <div class="form-group"  v-if=" nbChambre==3"> 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 3 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbbebe">
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
               <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2 py-4">
          <div class="col-md-2 heading-section text-center"  >
                <input type="button" value="Accueil" id="bb" v-on:click="goAcc()" class="btn btn-primary btn-md btn-block waves-effect text-center">
              </div>
               <div class="col-md-2 heading-section text-center" >
                <input type="button" id="bb" value="Vos reservation" v-on:click="goProfile" class="btn btn-primary btn-md btn-block waves-effect text-center ">
              </div>
                  </div>
              </div>
            </form>
              </div>
              <!-------------------------------------------------------------------------------------------------------------------------------->
                   <div  class="row py-4" v-if="isNotFetch">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                  <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label">   Date d'arriver :</label>
                      <input placeholder="Select date" type="date" id="example" class="form-control" :min="dateNow"  v-model="bookingdate.start">
                    </div>
                    <div class="col-md-5"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Date deeeeeeeeee départ :</label>
                      <input :placeholder="dateNow" type="date" id="example"   :min="bookingdate.start" class="form-control" v-model="bookingdate.end">
                    </div>
                     <div class="col-md-2"> 
                       <h6 id="nuit" class="mb-4"> : Ntuis .</h6>
                    </div>
                 </div>
              </div>
              
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >Nombre de chambre : </label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="nbChambre"  @change="display($event)">
	                    	<option value="1">1 </option>
	                      <option value="2">2 </option>
	                      <option value="3">3 </option>
	                    </select>
	                  </div>
                    </div>
                  </div>
              </div>
              <div class="form-group" v-if="nbChambre==1 || nbChambre==2 || nbChambre==3" > 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 1 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom1.nbbebe">
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
              
              <div class="form-group" v-if=" nbChambre==2 || nbChambre==3"> 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 2 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom2.nbbebe">
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
              
              <div class="form-group"  v-if=" nbChambre==3"> 
              <hr/>
                  <div class="row">
                    <div class="col-md-4"> 
                 <h6 id="sous-titre">Chambre : 3 </h6>
                    </div>
                  </div>
                    <div class="row">
                     <div class="col-md-4"> 
                  <i class="icon-circle-arrow-right"></i>  <label id="label" >   Adultes :</label>
		                <div class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbadult">
	                    	<option value="1" >1 </option >
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
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbenfant">
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
	                    <select name="" id="" class="form-control" v-model="bookgroom3.nbbebe">
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
               <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2 py-4">
          <div class="col-md-2 heading-section text-center"  >
                <input type="button" value="Accueil" id="bb" v-on:click="goAcc()" class="btn btn-primary btn-md btn-block waves-effect text-center">
              </div>
               <div class="col-md-2 heading-section text-center" >
                <input type="button" id="bb" value="Vos reservation" v-on:click="goProfile" class="btn btn-primary btn-md btn-block waves-effect text-center ">
              </div>
                  </div>
              </div>
            </form>
              </div>
              <!----------------------------------------------------------------------------------------------------------------------->
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
      bookingdate:{
        start:"",
        end:"",
      },
    bookgroom1:{
        nbadult:"",
        nbenfant:"",
        nbbebe:"",
      },
        bookgroom2:{
        nbadult:"",
        nbenfant:"",
        nbbebe:"",
      },
        bookgroom3:{
        nbadult:"",
        nbenfant:"",
        nbbebe:"",
      },
      nbChambre:"" ,
      dateNow: null,
      isFetch:false,
      isNotFetch:true,
      fetch:null,
    }
  },
  mounted(){
    /**************************** */
    this.isFetch=localStorage.getItem('isFetch');
    console.log(this.isFetch);
    this.fetch=JSON.parse(localStorage.getItem('fetch'));
    if(this.fetch!=null){
      this.nbChambre=1
     this.bookgroom1.nbadult=this.fetch.nbadult
      this.bookgroom1.nbenfant=this.fetch.nbenfant
      this.bookgroom1.nbbebe=this.fetch.nbbebe
      this.bookingdate.end=this.fetch.end
      this.bookingdate.start=this.fetch.start
    }
    console.log(this.fetch);
    if(this.isFetch==true){
      this.isNotFetch=false
     
    }
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
    console.log("ttttt",this.dateNow);
     let nuit = (Date.parse(this.bookingdate.end)-Date.parse(this.bookingdate.start))/86400000;
     this.nuits=nuit


  },
   methods : {
      findRoom(){
        if(!this.bookgroom1.nbenfant=='' && !this.bookgroom1.nbbebe=='' && !this.bookgroom1.nbadult==''){
        localStorage.setItem('bookgroom1',JSON.stringify(this.bookgroom1))
        }

        if(!this.bookgroom2.nbenfant=='' && !this.bookgroom2.nbbebe=='' && !this.bookgroom2.nbadult==''){
        localStorage.setItem('bookgroom2',JSON.stringify(this.bookgroom2))
        }
        if(!this.bookgroom3.nbenfant=='' && !this.bookgroom3.nbbebe=='' && !this.bookgroom3.nbadult==''){
        localStorage.setItem('bookgroom3',JSON.stringify(this.bookgroom3))
        }
        localStorage.setItem('bookingdate',JSON.stringify(this.bookingdate))
        localStorage.setItem('nbchambre', this.nbChambre);
        this.$router.push('selectroom');

     },

     display(event){
       console.log(event.target.value);
       this.nbChambre=parseInt(event.target.value)
       console.log("tyty",this.nbChambre);
       console.log("tyty",typeof(this.nbChambre));
       console.log("tyty",typeof(event.target.value));

     },
     goAcc(){
       this.$router.push('/');
     },
     goProfile(){
       this.$router.push('profile')
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
#sous-titre{
  font-family: 'Times New Roman', Times, serif;
  color:#8d703b;
  font-size: 20px;
  font-weight: bold;
}
#bb{
  background-color: transparent;
  border-color: transparent;
  color: grey;

}
</style>
