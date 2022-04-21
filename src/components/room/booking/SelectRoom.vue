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
                      <td rowspan="3">
    				<div  class="room">
              <div id="img">
    					<a  class="img d-flex justify-content-center align-items-center" id="room1" style="background-image">
    						<div class="icon d-flex justify-content-center align-items-center">
    							<span class="icon-search2"></span>
    						</div>
    					</a>
              </div>
    			</div>

                      </td>
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
        </div>
      </div>
    </section>
</template>


<script>
import axios from 'axios';
export default {
  data(){
    return{
      bookgroom:{},
      rooms:[],
      tab1:[],
      tab2:[]
    }
  }
,
mounted(){
 this.bookgroom=  JSON.parse( localStorage.getItem('bookgroom'));
 console.log("hh",this.bookgroom);
 this.selectRoom();
},

methods:{
  async selectRoom(){
    
     // console.log("rr",parseInt(this.bookgroom.nbadult));
      //console.log("jj",parseInt(this.bookgroom.nbenfant));
      //console.log("jj",(this.bookgroom.end));

    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookgroom.end,
          nbAdult:this.bookgroom.nbadult,
          nbEnfant:this.bookgroom.nbenfant
    }
    )
    .then(res=>{
     this.tab1=res.data.available_room
      if(this.tab1.length !=0){
        for(let j=0 ; j<res.data.available_room.length ;j++){
          this.rooms.push(res.data.available_room[j])
        }
      }
      this.tab2=res.data.available_booking
      if(this.tab2.length !=0){
        for(let i=0 ; i<res.data.available_booking.length ; i++){
          this.rooms.push(res.data.available_booking[i]);
        }
      }
      console.log("tyty",this.rooms);
    }).catch(error=>{
      console.log(error);
    })
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
  width: 450px;
}

</style>
