<template>
<section class="ftco-section contact-section bg-light">
        <div class="row d-flex contact-info">
         <div class="row justify-content-center">
          <div class="row d-flex contact-info">
          <div class="col-md-10 heading-section p-5 text-center">
            <h2 class="mb-4 ">Résérvez maintement : </h2>
        </div>
        </div>
          </div>
        </div>
            <div class="row ">
               <div id="ctn" class="col-md-3 order-md-last ">
             <div class="bg-white p-5 contact-form">  
                 
                 <div  class="row" v-if="reservRoom.length >0">
              <div class="form-group">
                
            <div class="col-md-12"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                      <tr>
                      <td colspan="2" id="tit"> Votre Choix </td>
                    </tr>
                    <tr>            
                       <td ><p id="la"> Du  {{ bookingDate.start }} <br> 
                         Au {{ bookingDate.end }}
                        <br> {{ nuits }} nuits
                          </p></td>

                    </tr>
                    <tr>
                      <td  ><p><span id="tit"> Les Chambre</span></p></td>
                    </tr>
                    <tr v-for="res in reservRoom" :key="res.id">
                       <td ><p><span id="la" ><i id="icone" class="icon icon-bed"></i>  1 Chambre : {{ res.type }} pour : {{ res.nbadult }} persoones de {{ res.totale }} DT</span></p></td>
                    </tr>
                     <tr v-if="totale !=0">
                      <td  ><p><span id="tit"> TOTALE</span></p></td>
                      <td ><p><span id="la"> {{ totale }} </span></p></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-group">
		                <input id="btn" type="button" value="RESERVEZ"  class="btn btn-primary  py-2 px-5" @click="goReserver()">
		              </div></td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
              <hr/>
                    </div> 
                    <div  class="row" >

              <div class="form-group">
                <div class="media block-2 services py-4  text-center">
              
                 <h4 id="tit" class="mb-4"> GARANTIES</h4>
            </div>
            <div class="col-md-12"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                  
                    <tr>            
                       <td ><p> <i id="icone" class="icon icon-money"></i><span id="sp"> Meilleur prix garanti</span></p></td>

                    </tr>
                    <tr>
                      <td ><p> <i id="icone" class="icon-lock"></i><span id="sp"> Transaction sécurisée</span></p></td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
                    </div> 
            </div>
          
          </div>
          <div class="col-md-9 d-flex">
               <div class=" p-5 contact-form">
          <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row  slide-top py-4">
          <div class="col-md-12  d-flex">
            <div class="bg-white p-5 contact-form">
              <div class="form-group">
                  <div class="row">
                 <div class="col-md-9 d-flex align-self-stretch ">
            <div class="media block-2 services py-4  text-center">
                 <h3 id="title" class="mb-4">1.2 Choisissez Votre chambre N° :</h3>
		               
            </div>
                 </div>
              </div>
              <div v-if=" ((rooms1.length > 0) && (whichroom==1) && (selectedRoom1==true) )" >
                  <h1>HOOOOOOOOOOOOOME1</h1>
              <div  class="row" v-for="room1 in rooms1" :key="room1.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                    <tr>
                      <td rowspan="3" >
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <div v-for="(image, index) in room1.images" :key="index">
                <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
            </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in room1.images" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                    <img class="d-block w-100" :src="'http://localhost:8000/storage'+image.name" >
                </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

                      </td>
                      <td colspan="2" id="label"> {{ room1.type }} </td>
                    </tr>
                    <tr>
                      <td colspan="2" >  {{ room1.description.substr(0 , 110)+',...' }}  </td>
                    </tr>
                    <tr v-if="room1.offres.length!=0 " >
                       <td td > <div class="heading-section text-center" v-if="offreClicke==true">
                      <input id="tbb" type="button" @click="cacheOffres()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                      <td > <div class="heading-section text-center" v-if="room1.offres.length!=0 && offreClicke==false">
                      <input id="tbb" type="button" @click="clickOffre()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
           
             <!------------------------------------------------------------------------------------------------------------------>
                <div class="form-group" v-if="isOffreClicked==true">
                  <div class="row" v-for="offre in room1.offres" :key="offre">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Options pour un chambre</th>
                      <th scope="col">Pourcentage de L'offre</th>
                      <th scope="col">prix par nuit </th>
                      <th scope="col">prix par {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody v-for="option in optionsTab" :key="option.id">
                    <tr  v-if="room1.id==option.room_id">
                        <th scope="row"  ><i class="icon-user" v-for="icon in room1.nbAdult" :key="icon.id"></i></th>
                      <td > {{ option.nom_option }} </td>
                      <td id="pourcentage"> {{ offre.pourcentage }} % </td>
                      <td id="t"> <del>{{room1.price_booking + option.price_option }} DT</del> </td>
                      <td> {{ (room1.price_booking + option.price_option)-((room1.price_booking + option.price_option)*offre.pourcentage)/100 }} DT </td>
                     
          <div class="heading-section text-center">
                <input id="bbt" type="button" :value="(((room1.price_booking + option.price_option)-((room1.price_booking + option.price_option)*offre.pourcentage)/100)*nuits)+'DT'" v-on:click="bookNow1(
                  (((room1.price_booking + option.price_option)-((room1.price_booking + option.price_option)*offre.pourcentage)/100)*nuits),
                  room1.id ,
                   option.nom_option,
                  room1.type,
                 room1.nbAdult,
                 offre.id
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div> 
              </tr>
              </tbody>
                </table>
                  </div>
              </div>
              </div>
          <!------------------------------------------------------------------------------------------------------------------>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">OPtions pour un chambre</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix par {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody  v-for="option in optionsTab" :key="option.id">
                         <tr v-if="room1.id==option.room_id">
                      <th scope="row"  ><i class="icon-user" v-for="icon in room1.nbAdult" :key="icon.id"></i></th>
                      <td > {{ option.nom_option }} </td>
                      <td> {{room1.price_booking + option.price_option }} DT </td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="button" :value="((room1.price_booking+option.price_option)*nuits)+'DT'" v-on:click="bookNow1(
                  ((room1.price_booking+option.price_option)*nuits),
                  room1.id ,
                   option.nom_option,
                  room1.type,
                 room1.nbAdult, 
                  0
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>

                        
              </div>
                      </td>
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
              <!----------------------------------------------------------------->
               <div v-if=" ((rooms1.length == 0) && (rooms2.length==0) && (rooms3.length==0) )" >
                  
              <div  class="row">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                   
                    <tr>
                      <td id="tbb"> Aucune disponibilité n'a pu être trouvée pour la période de séjour sélectionnée. Veuillez changer vos dates de séjour.   </td>
                    </tr>
                       <td >
                         <div class="col-md-3">
                      <input  type="button" @click="goBack()" value="Modifier votre séjour" class="btn btn-primary py-2 px-2">
                         </div>
                    </td>
                      
                  </tbody>
                </table>
               </div>
              </div>
            </form>
              </div>
              </div>
              <!--------------------------------------------------------->
              <div v-if=" (rooms2.length!= 0 && whichroom==2 && selectedRoom2==true )">
               <h1>HOOOOOOOOOOOOOME2</h1>
              <div  class="row" v-for="room2 in rooms2" :key="room2.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
                <table  class="table table-borderless ">
                  
                  <tbody>
                    <tr>
                      <td rowspan="3"  style="width:350px">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <div v-for="(image, index) in room2.images" :key="index">
                <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
            </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in room2.images" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                    <img class="d-block w-100" :src="'http://localhost:8000/storage'+image.name" >
                </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

                      </td>
                      <td colspan="2" id="label"> {{ room2.type }} </td>
                    </tr>
                    <tr>
                      <td >Description:</td>
                      <td>  {{ room2.description }} </td>
                    </tr>
                    
                    <tr v-if="room2.offres.length!=0 ">
                        <td td rowspan="3"> <div class="heading-section text-center" v-if="offreClicke==true">
                      <input id="tbb" type="button" @click="cacheOffres()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                      <td td rowspan="3"> <div class="heading-section text-center" v-if="room2.offres.length!=0 && offreClicke==false">
                      <input id="tbb" type="button" @click="clickOffre()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
              
              <!------------------------------------------------------------------------------------------------------------------>
                <div class="form-group" v-if="isOffreClicked==true">
                  <div class="row" v-for="offre in room2.offres" :key="offre">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Options pour un chambre</th>
                      <th scope="col">Pourcentage de L'offre</th>
                      <th scope="col">L'ancien prix</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix par {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody  v-for="option in optionsTab" :key="option.id">
                         <tr v-if="room2.id==option.room_id">
                      <th scope="row"  ><i class="icon-user" v-for="icon in room2.nbAdult" :key="icon.id"></i></th>
                      <td > {{ option.nom_option }} </td>
                      <td id="pourcentage"> {{ offre.pourcentage }} % </td>
                      <td id="t"> <del>{{room2.price_booking + option.price_option }} DT</del> </td>
                      <td> {{ (room2.price_booking + option.price_option)-((room2.price_booking + option.price_option)*offre.pourcentage)/100 }} DT </td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input id="bbt" type="button" :value="(((room2.price_booking + option.price_option)-((room2.price_booking + option.price_option)*offre.pourcentage)/100)*nuits)+'DT'" v-on:click="bookNow1(
                  (((room2.price_booking + option.price_option)-((room2.price_booking+ option.price_option)*offre.pourcentage)/100)*nuits),
                  room2.id ,
                   option.nom_option,
                  room2.type,
                 room2.nbAdult,
                 offre.id
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>

                        
              </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                     </div>
              </div>
              </div>
          <!------------------------------------------------------------------------------------------------------------------>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Condition de vente de tarif</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix pour {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody v-for="option2 in optionsTab" :key="option2.id">
                      <tr v-if="room2.id==option2.room_id">
                      <th scope="row" ><i class="icon-user" v-for="icon in room2.nbAdult" :key="icon.id"></i></th>
                      <td> {{ option2.nom_option }} </td>
                      <td>{{room2.price_booking+option2.price_option}}</td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="button" :value="(room2.price_booking+option2.price_option)*nuits" v-on:click="bookNow2(
                  ((room2.price_booking+option2.price_option)*nuits),
                  room2.id ,
                   option2.nom_option,
                  room2.type,
                  room2.nbAdult,
                  0
                 
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>
              </div>
                      </td>
                    
                    </tr>
                  </tbody>
                </table>
                     </div>
              </div>
              </div>
             
            </form>
              </div>
              </div>
           
            <div v-if=" rooms3.length!=0  && whichroom==3 && selectedRoom3==true  ">
               <h1>HOOOOOOOOOOOOOME333333333</h1>
              <div  class="row" v-for="room3 in rooms3" :key="room3.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-9"> 
                <table  class="table table-borderless ">
                 
                  <tbody>
                    <tr>
                      <td rowspan="3"  style="width:350px">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <div v-for="(image, index) in room3.images" :key="index">
                <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class=" index === 0? 'active' : '' "></li>
            </div>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in room3.images" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                    <img class="d-block w-100" :src="'http://localhost:8000/storage'+image.name" >
                </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

                      </td>
                      <td colspan="2" id="label"> {{ room3.type }} </td>
                    </tr>
                    <tr>
                      <td >Description:</td>
                      <td>  {{ room3.description }} </td>
                    </tr>
                    <tr v-if="room3.offres.length!=0 ">
                        <td td rowspan="3"> <div class="heading-section text-center" v-if="offreClicke==true">
                      <input id="tbb" type="button" @click="cacheOffres()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                      <td td rowspan="3"> <div class="heading-section text-center" v-if="room3.offres.length!=0 && offreClicke==false">
                      <input id="tbb" type="button" @click="clickOffre()" value="Consulter nos Offres" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
                    </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
              
              <!------------------------------------------------------------------------------------------------------------------>
                <div class="form-group" v-if="isOffreClicked==true">
                  <div class="row" v-for="offre in room3.offres" :key="offre">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Options pour un chambre</th>
                      <th scope="col">Pourcentage de L'offre</th>
                      <th scope="col">L'ancien prix</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix par {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody  v-for="option in optionsTab" :key="option.id">
                         <tr v-if="room3.id==option.room_id">
                      <th scope="row"  ><i class="icon-user" v-for="icon in room3.nbAdult" :key="icon.id"></i></th>
                      <td > {{ option.nom_option }} </td>
                      <td id="pourcentage"> {{ offre.pourcentage }} % </td>
                      <td id="t"> <del>{{room3.price_booking + option.price_option }} DT</del> </td>
                      <td> {{ (room3.price_booking + option.price_option)-((room3.price_booking + option.price_option)*offre.pourcentage)/100 }} DT </td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input id="bbt" type="button" :value="(((room3.price_booking + option.price_option)-((room3.price_booking + option.price_option)*offre.pourcentage)/100)*nuits)+'DT'" v-on:click="bookNow1(
                  (((room3.price_booking + option.price_option)-((room3.price_booking + option.price_option)*offre.pourcentage)/100)*nuits),
                  room3.id ,
                   option.nom_option,
                  room3.type,
                 room3.nbAdult,
                 offre.id
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>

                        
              </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                     </div>
              </div>
              </div>
          <!------------------------------------------------------------------------------------------------------------------>
              <div class="form-group">
                  <div class="row">
                     <div class="col-md-12 py-4"> 
                  <table class="table">
                  <thead id="tr">
                    <tr>
                      <th scope="col">Nombre de personnes </th>
                      <th scope="col">Condition de vente de tarif</th>
                      <th scope="col">Prix moyen par nuit</th>
                      <th scope="col">prix pour {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody v-for="option in optionsTab" :key="option">
                      <tr v-if="room3.id==option.room_id">
                      <th scope="row" v-if="room3.id==option.room_id" ><i class="icon-user" v-for="icon in room3.nbAdult" :key="icon.id"></i></th>
                      <td> {{ option.nom_option }}</td>
                      <td>{{ (room3.price_booking+option.price_option) }}</td>
                      <td> 
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="button" :value="((room3.price_booking+option.price_option)*nuits)" v-on:click="bookNow3(
                  ((room3.price_booking+option.price_option)*nuits),
                  room3.id ,
                   option.nom_option,
                  room3.type,
                 room3.nbAdult,
                     0
                  )" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
              </div>
              </div>
                      </td>
                    
                    </tr>
                  </tbody>
                </table>
                     </div>
              </div>
              </div>
             
            </form>
              </div>
              </div>
               <div class="form-group">
                  <div class="row justify-content-center mb-9 pb-2 py-4">
          <div class="col-md-4 heading-section text-center"  >
                <input type="button" value="Accueil" id="bb" v-on:click="goAcc()" class="btn btn-primary btn-md btn-block waves-effect text-center">
              </div>
               <div class="col-md-4 heading-section text-center" >
                <input type="button" id="bb" value="Vos reservation" v-on:click="goProfile" class="btn btn-primary btn-md btn-block waves-effect text-center ">
              </div>
                  </div>
              </div>
               </div>
               
          </div>
          
            </div>
      </div>

    </section>
            </div>
          </div>
          
        </div>
</section>

   
</template>


<script>
import axios from 'axios';
export default {
  data(){
    return{
      bookgroom1:{},
      bookgroom2:{},
      bookgroom3:{},
      rooms1:[],
      tab11:[],
      tab21:[],
      rooms2:[],
      tab12:[],
      tab22:[],
       rooms3:[],
      tab13:[],
      tab23:[],
      bookingDate:{},
      nbchambre:"",
      whichroom:1,
      nuits:"",
      message1:"",
      message2:"",
      message3:"",
      optionsTab:[],
      optionsRoom1:[],
      optionsRoom2:[],
      optionsRoom3: [],
      isOffreClicked:false,
      reservRoom:[],
      isClickBook1:false,
      isClickBook2:false,
      isClickBook3:false,
      selectedRoom1:true,
      selectedRoom2:false,
      selectedRoom3:false,
      offreClicke:false,
      roomReserv1:{
        totale:"",
        id_room:"",
        option:"",
        type:"",
        nbadult:""
      },
      roomReserv2:{
        totale:"",
        id_room:"",
        option:"",
        type:"",
        nbadult:""
      },
      roomReserv3:{
        totale:"",
        id_room:"",
        option:"",
        type:"",
        nbadult:""
      },
   totale:0,
  size2:0,
  size3:0,
    }
  }
,
mounted(){
this.getBookinDates();
 this.selectTheFirstRoom().then(()=>{
if(this.rooms1.length==0){
  this.test()
}
})
 this.getOptions();
 //recuperer le nombre de chambre 
this.nbchambre=parseInt(localStorage.getItem('nbchambre'));

},


methods:{
  test(){
    console.log(true);
if(this.rooms1.length==0){
  this.selectTheSecondRoom();
}
 if(this.size2==0){
  this.selectTheThirdRoom();
}
if(this.rooms2.length==0 && this.rooms1.length<=0){
    this.selectedRoom3=true;
    this.whichroom==3;
}
  },
  goBack(){
    this.$router.push('findroom')
  },
   goAcc(){
       this.$router.push('/');
     },
     goProfile(){
       this.$router.push('profile')
     },
  cacheOffres(){
    this.isOffreClicked=false
    console.log('eeerrr',this.isOffreClicked);
  },

  clickOffre(){
    this.isOffreClicked=true;
    this.offreClicke=true
  },

   bookNow1(totale , id , option , type , nbadult , offres){
     if(!this.isClickBook1){
   this.roomReserv1.totale=totale
   this.roomReserv1.id_room=id
   this.roomReserv1.option=option
   this.roomReserv1.type=type
   this.roomReserv1.nbadult=nbadult
   this.roomReserv1.offres=offres
  
   this.reservRoom.push(this.roomReserv1)
     this.isClickBook1=true;
     }else if(this.isClickBook1){
      this.reservRoom.pop()
        this.roomReserv1.totale=totale
   this.roomReserv1.id_room=id
   this.roomReserv1.option=option
   this.roomReserv1.type=type
   this.roomReserv1.nbadult=nbadult
   this.roomReserv1.offres=offres
   this.reservRoom.push(this.roomReserv1)
     }

     this.selectTheSecondRoom().then(()=>{
     
    if(this.size2==0){
      this.selectedRoom2=false;
     this.selectTheThirdRoom().then(()=>{
      this.selectedRoom3=true;
      this.whichroom=3;
      })
    }   
  if(this.size2<=0 && this.rooms3.length==0){
    console.log("hieeeeeeeee");
        this.$router.push('bookroom');
      }
     else if(this.size2>0){
       console.log(true);
   this.whichroom++;   
   this.selectedRoom2=true;
   }
     }).then(this.calculeTotale())

  },
 bookNow2(totale , id , option , type , nbadult , offres){
  if(!this.isClickBook2){
   this.roomReserv2.totale=totale
   this.roomReserv2.id_room=id
   this.roomReserv2.option=option
   this.roomReserv2.type=type
   this.roomReserv2.nbadult=nbadult
   this.roomReserv2.offres=offres
   this.reservRoom.push(this.roomReserv2)
   this.isClickBook2=true;
   }
   else if(this.isClickBook2){
     console.log("",this.reservRoom.splice(1,2));
 this.roomReserv2.totale=totale
   this.roomReserv2.id_room=id
   this.roomReserv2.option=option
   this.roomReserv2.type=type
   this.roomReserv2.nbadult=nbadult
   this.roomReserv2.offres=offres
   this.reservRoom.push(this.roomReserv2)
   }
   this.selectTheThirdRoom().then(()=>{
     console.log(this.rooms3);
   console.log("thiiiiiiiiiiiiiiiiis",this.reservRoom);
   if(this.size3==0){
     this.selectedRoom3=false
   }else if (this.size3>0){
    this.whichroom++;
    this.selectedRoom3=true;
    console.log("rrre",this.rooms3.length)
    console.log("ee",this.selectedRoom3);
    console.log("ee4",this.selectedRoom1);

   }
      }).then( this.calculeTotale())
  
  },
   bookNow3(totale , id , option , type , nbadult , offres){
     if(!this.isClickBook3){
   this.roomReserv3.totale=totale
   this.roomReserv3.id_room=id
   this.roomReserv3.option=option
   this.roomReserv3.type=type
   this.roomReserv3.nbadult=nbadult
   this.roomReserv3.offres=offres
   this.reservRoom.push(this.roomReserv3)
   this.isClickBook3=true;
     }else if (this.isClickBook3){
      this.reservRoom= this.reservRoom.slice(0 , this.reservRoom.length-1);
   this.roomReserv3.totale=totale
   this.roomReserv3.id_room=id
   this.roomReserv3.option=option
   this.roomReserv3.type=type
   this.roomReserv3.nbadult=nbadult
   this.roomReserv3.offres=offres
   this.reservRoom.push(this.roomReserv3);
     }
this.calculeTotale();

  },

  calculeTotale(){
    if(this.reservRoom.length==this.nbchambre){
      for( let i=0 ; i <this.reservRoom.length ; i++ )
      this.totale=this.totale+ parseFloat(this.reservRoom[i].totale);
      console.log("yyyyyyyyyyyy",this.totale);
    }
  },
  goReserver(){
    if(this.reservRoom.length > this.nbchambre){
     this.reservRoom=this.reservRoom.slice(0 , this.reservRoom.length-1);
    }else{
    localStorage.setItem('roomBooked', JSON.stringify(this.reservRoom))
    localStorage.setItem('totale',this.totale)
    this.$router.push('bookroom')
    }
  },
  async selectTheFirstRoom(){

       if(localStorage.getItem('bookgroom1') != null){
       this.bookgroom1=  JSON.parse( localStorage.getItem('bookgroom1'));
      console.log("uuuuuuuuu1",this.bookgroom1);
    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom1.nbadult,
          nbEnfant:this.bookgroom1.nbenfant,
          nbbebe:this.bookgroom1.nbbebe
    }
    )
    .then(res=>{
     this.tab11=res.data.rooms
      if(this.tab11.length !=0){
        for(let j=0 ; j<res.data.rooms.length ;j++){
          this.rooms1.push(res.data.rooms[j])
        }
      }
      this.tab21=res.data.bookings
      if(this.tab21.length !=0){
        for(let i=0 ; i<res.data.bookings.length ; i++){
          this.rooms1.push(res.data.bookings[i]);
        }
      }
    }).catch(error=>{
      console.log(error);
    })
       }
        if(this.rooms1.length==0){
         this.selectedRoom1=false,
      this.selectedRoom2=true,
      this.whichroom++;
       }
       if(this.rooms1.length==0 && this.rooms2.length==0 ){
      this.whichroom=3
      this.selectedRoom3=true
}

  },
   async selectTheSecondRoom(){
     
  if(localStorage.getItem('bookgroom2') != null){
 this.bookgroom2=  JSON.parse( localStorage.getItem('bookgroom2'));
    console.log("uuuuuuuuu2",this.bookgroom2);
    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom2.nbadult,
          nbEnfant:this.bookgroom2.nbenfant,
          nbbebe:this.bookgroom2.nbbebe
    }
    )
    .then(res=>{
     this.tab12=res.data.rooms
      if(this.tab12.length !=0){
        if(this.reservRoom.length!=0){
          for(let f=0 ; f <this.reservRoom.length ; f++){
        for(let r=0 ; r<res.data.rooms.length ;r++){
           if(this.reservRoom[f].id_room != res.data.rooms[r].id)
          this.rooms2.push(res.data.rooms[r])
        }
      }
        }else{
           for(let r=0 ; r<res.data.rooms.length ;r++){
          this.rooms2.push(res.data.rooms[r])
        }
        }
      }
      this.tab22=res.data.bookings
      if(this.tab22.length !=0){
        if(this.reservRoom.length!=0){
          for(let j=0 ; j <this.reservRoom.length ; j++){
        for(let i=0 ; i<res.data.bookings.length ; i++){
          if(this.reservRoom[j].id_room != res.data.bookings[i].id)
          this.rooms2.push(res.data.bookings[i]);
        }
          }
      }else{
        for(let i=0 ; i<res.data.bookings.length ; i++){
          this.rooms2.push(res.data.bookings[i]);
        }
      }
      }
    }).catch(error=>{
      console.log(error);
    })
     }
        this.size2=this.rooms2.length;
       console.log(this.size2);
  },
  async selectTheThirdRoom(){
 if(localStorage.getItem('bookgroom3') != null){
 this.bookgroom3=  JSON.parse( localStorage.getItem('bookgroom3'));
    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom3.nbadult,
          nbEnfant:this.bookgroom3.nbenfant,
          nbbebe:this.bookgroom3.nbbebe
    }
    )
    .then(res=>{
     this.tab13=res.data.rooms
     
      if(this.tab13.length !=0){
         if(this.reservRoom.length!=0){
           console.log("eetttt",this.reservRoom.length);
           for(let f=0 ; f <this.reservRoom.length ; f++){
        for(let j=0 ; j<res.data.rooms.length ;j++){
          if(this.reservRoom[f].id_room != res.data.rooms[j].id){
          this.rooms3.push(res.data.rooms[j])
          }else{
            j++;
          }
        }
        
          }
          
         }
         else{
           for(let j=0 ; j<res.data.rooms.length ;j++){
          this.rooms3.push(res.data.rooms[j])
        }
         }
      }
      this.tab23=res.data.bookings
      if(this.tab23.length !=0){
         if(this.reservRoom.length!=0){
          for(let j=0 ; j <this.reservRoom.length ; j++){
        for(let i=0 ; i<res.data.bookings.length ; i++){
          if(this.reservRoom[j].id_room != res.data.bookings[i].id){
          this.rooms3.push(res.data.bookings[i]);
        }else{
            i++;
          }
        }
      }
         }
         else{
           for(let i=0 ; i<res.data.bookings.length ; i++){
          this.rooms3.push(res.data.bookings[i]);
        }
         }
        this.size3=this.rooms3.length;
       console.log("vvvvvvvvvvvvv",this.size3);
      }
    }).catch(error=>{
      console.log(error);
    })
     } 
     
  },
 

  getBookinDates(){
    this.bookingDate = JSON.parse(localStorage.getItem('bookingdate'));
    let nuit = (Date.parse(this.bookingDate.end)-Date.parse(this.bookingDate.start))/86400000;
     this.nuits =nuit
  },
    async getOptions(){
      await axios.get('http://localhost:8000/api/option')
      .then(res=>{
        this.optionsTab=res.data.option
        console.log("options",this.optionsTab);
      })
    },
    getRoomOption1(){
     
            this.optionsRoom1=this.optionsTab;
            console.log("tyt",this.optionsRoom1);
          
    },
     getRoomOption2(){
      for(let i=0 ; i<this.rooms2.length ; i++){
        for(let j=0 ; j<this.optionsTab.length ; j++){
          if(this.rooms2[i].id==this.optionsTab[j].room_id){
            this.optionsRoom2.push(this.optionsTab[j]);
          }
        }
      }
      console.log("optionroom2",this.optionsRoom2);
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
#img{
  width: 350px;
}
#dropdown{
margin: 20px;
}
#ctn{
  margin-top: 1px;
}
#tit{
  font-weight: bold;
}
#icone{
  padding-top: 112px;
  font-size:25px;
  color:#8d703b;
}
#sp{
  font-weight: bold;
  color: lightslategrey;
  font-size: 12px;
}
#pourcentage{
color: red;
font-size: 30px;
}
#t{
  color: red;
  font-size: 16px;
}
#bbt{
  background-color: red;
  border-color: rgb(129, 14, 14);
  color: white;
}
#tbb{
  background-color: transparent;
  border-color:transparent ;
  font-size: 22px;
  color: red;
}
#bg{
  font-size: 50px;
}
#bb{
  background-color: transparent;
  border-color: transparent;
  color: grey;

}
</style>
