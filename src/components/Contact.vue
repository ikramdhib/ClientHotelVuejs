<template>

    <div class="hero-wrap"  id="contact" :style="'background-image '">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
	            <h1 class="mb-4 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4">
            <h2 class="h3">Contact Information</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3 d-flex">
          	<div class="info bg-white p-4">
	            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
	          </div>
          </div>
          <div class="col-md-3 d-flex">
          	<div class="info bg-white p-4">
	            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
	          </div>
          </div>
          <div class="col-md-3 d-flex">
          	<div class="info bg-white p-4">
	            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
	          </div>
          </div>
          <div class="col-md-3 d-flex">
          	<div class="info bg-white p-4">
	            <p><span>Website</span> <a href="#">yoursite.com</a></p>
	          </div>
          </div>
        </div></div>
        <div class="row ">
              <div class="row ">
            <div class="col-md-6 d-flex">
                 <div  id="contact" class=" p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" style='width: 550px; height: 800px; background-image '>
					</div>
          </div>
          <div class="col-md-6 ">
					<div class="col-md-12 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-4 mb-5">
	          	<div class="ml-md-0">
		            <h1 id="titre" class="mb-4"> Contactez Nous </h1>
	            </div>
	          </div>
	          <div class="pb-md-4">
						<form action="#" class="bg-white p-5 contact-form">
              <div class="form-group">
                <input type="text" class="form-control"   v-model="contact.name" placeholder="votre Nom">
              </div>
              <div class="form-group">
                <input type="text" class="form-control"   v-model="contact.email" placeholder="votre email">
              </div>
              <div class="form-group">
                <input type="text" class="form-control"  v-model="contact.objet" placeholder="Objet">
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control"   v-model="contact.message" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="button"   @click="AqddContact()" value="Send Message" class="btn btn-primary py-3 px-5">
              </div>
            </form>
          
          </div>
<<<<<<< HEAD
=======

        
    
         
>>>>>>> d503f453e37045546e42ac278a7db5de6613f668
        </div>
          </div>
      </div></div>
    </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
       toastCount: 0,
     contact:  {
             messsage:"",
			 objet:"",
            email:"",
			name:"",
					
				}}},
        methods:{
 async AddContact(){
 await axios
  .post("http://127.0.0.1:8000/api/AddContact", 

  {message:this.contact.message,
               objet:this.contact.objet,
                email:this.contact.email,
                 name :this.contact.name,
	          
				}).then(res=>{
	this.response=res.data.contact;

        console.log(res);
      
        })
    
 }
 }
 
 }
</script>
<style scoped>
 
</style>