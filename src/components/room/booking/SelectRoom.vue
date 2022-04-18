<template>


    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
         <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Résérvez maintement : </h2>
          </div>
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
                 <h3 id="title" class="mb-4">1.2 Choisissez une chambre </h3>
            </div>
                 </div>
              
	            </div>
              </div>
              <div  class="row">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-6"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                    <tr>
                      <td rowspan="3" id="label">Mark</td>
                      <td colspan="2" id="label">Tradition</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Condition de vente de tarif</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix par 00 jours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><i class="icon-user"></i></th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="submit" value="Reserver" v-on:click="addUser()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>
              </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"><i class="icon-user"></i></th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row"><i class="icon-user"></i></th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                     </div>
              </div>
              </div>
             
            </form>
              </div>
              </div>
            </div>
          
          </div>

          <div class="col-md-3 d-flex">
             
          </div>
        </div>
      </div>
    </section>
</template>
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
#tr { border:0 ; }
</style>
