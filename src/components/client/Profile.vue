<template>
   
    <div class="hero-wrap" id="bg1" style="background-image">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <p class="breadcrumbs mb-2"><span class="mr-2"><router-link to="/">Accueil</router-link></span> <span class="mr-2">Compte</span></p>
                <h1 class="mb-4 bread">Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
            <h1 class="mb-4"><p>Bonjour {{ user.firstname }}  {{ user.lastname }} </p></h1>
          </div>
        </div>
        <div class="row block-9 slide-top">
          <div class="col-md-6 order-md-last d-flex">
            <div class="bg-white p-5 contact-form">
                <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Mes Réservations  </h2>
          </div>
        </div>
                        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
                            </div>
                        
                        </div>
                        <div class="col-md-6 d-flex">
                            <div class="bg-white p-5 contact-form">
                                
                            <hr/>
                            </div>
                        </div>
                        </div>

                        <div class="row block-9">
                        <div class="col-md-6 order-md-last d-flex">
                            <div class="bg-white p-5 contact-form">
                                <div class="row justify-content-center mb-9 pb-5">
                        <div class="col-md-10 heading-section text-center">
                            <h2 class="mb-4"> Mes Information  </h2>
                        </div>
                        </div>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                    <th scope="row">
                                        <a href="">Information Personnelles <i id="row" class="icon-arrow-right"></i></a>
                                    </th>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                        <a href="">Changer Mot de Passe <i id="row" class="icon-arrow-right"></i></a>
                                    </th>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                        <a href="">Mes Badges <i id="row" class="icon-arrow-right"></i></a>
                                    </th>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                        <a href="">Mes Points <i id="row" class="icon-arrow-right"></i></a>
                                    </th>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                        <a href="">Gérer Mes Informations Personnelles  <i id="row" class="icon-arrow-right"></i></a>
                                    </th>
                                    </tr>
                                </tbody>
                            </table>
            </div>
          
          </div>
          <div class="col-md-6 d-flex">
               <div class="bg-white p-5 contact-form">
                  
              <hr/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
</template>
<script>
export default {
	data(){
		return{
			user:{},
			isToken:false,
		}
	},
	mounted(){
		if(localStorage.getItem('token_client')){
			this.isToken=true;
			this.user=JSON.parse(localStorage.getItem('client'))
		}
		console.log(this.isToken);
		console.log(this.user);
    },
}
</script>