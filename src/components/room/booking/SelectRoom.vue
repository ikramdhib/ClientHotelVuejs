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
                 <div class="col-md-9 d-flex align-self-stretch ">
            <div class="media block-6 services py-6  text-center">
              <!--	<div class="icon d-flex align-items-center justify-content-center">
              		<span class="flaticon-airplane49" ></span> 
              	</div>-->
                 <h3 id="title" class="mb-4">1.2 Choisissez Votre chambre N° :</h3>
		                <div id="dropdown" class="select-wrap one-third">
	                    <select name="" id="" class="form-control" v-model="whichroom"  @change="displayRooms($event)">
	                    	<option v-for="chambre in nbchambre" :key="chambre" :value="chambre" > {{ chambre }} </option >
	                    </select>
                    </div>
            </div>
                 </div>
              </div>
              <div v-if="whichroom==1">
              <div  class="row" v-for="room1 in rooms1" :key="room1.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
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
                      <td colspan="2" id="label"> {{ room1.type }} </td>
                    </tr>
                    <tr>
                      <td >Description:</td>
                      <td>  {{ room1.description }} </td>
                    </tr>
                    <tr>
                      <td>Availablity:</td>
                      <td>{{ room1.avaibility }} </td>
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
                      <th scope="col">prix par {{ nuits }} jours</th>
                    </tr>
                  </thead>
                  <tbody  v-for="option in optionsTab" :key="option.id">
                         <tr v-if="room1.id==option.room_id">
                      <th scope="row"  ><i class="icon-user" v-for="icon in room1.nbAdult" :key="icon.id"></i></th>
                      <td > {{ option.nom_option }} </td>
                      <td> {{room1.price + option.price_option }} </td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="submit" :value="(room1.price+option.price_option)*nuits" v-on:click="bookNow()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
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
              <div v-if="whichroom==2">
              <div  class="row" v-for="room2 in rooms2" :key="room2.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
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
                      <td colspan="2" id="label"> {{ room2.type }} </td>
                    </tr>
                    <tr>
                      <td >Description:</td>
                      <td>  {{ room2.description }} </td>
                    </tr>
                    <tr>
                      <td>Availablity:</td>
                      <td>{{ room2.avaibility }} </td>
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
                  <tbody v-for="option2 in optionsTab" :key="option2.id">
                      <tr v-if="room2.id==option2.room_id">
                      <th scope="row" ><i class="icon-user" v-for="icon in room2.nbAdult" :key="icon.id"></i></th>
                      <td> {{ option2.nom_option }} </td>
                      <td>{{room2.price+option2.price_option}}</td>
                      <td>
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="submit" :value="(room2.price+option2.price_option)*nuits" v-on:click="bookNow()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
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
            <div v-if="whichroom==3">
              <div  class="row" v-for="room3 in rooms3" :key="room3.id">
                <form class="bg-light p-5 contact-form">
              <div class="form-group">
                
            <div class="col-md-12"> 
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
                      <td colspan="2" id="label"> {{ room3.type }} </td>
                    </tr>
                    <tr>
                      <td >Description:</td>
                      <td>  {{ room3.description }} </td>
                    </tr>
                    <tr>
                      <td>Availablity:</td>
                      <td>{{ room3.avaibility }} </td>
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
                    <tr v-for="option in optionsTab" :key="option">
                      <th scope="row" ><i class="icon-user" v-for="icon in room3.nbAdult" :key="icon.id"></i></th>
                      <td> {{ option.nom_option }}</td>
                      <td>{{room3.price+price_option}}</td>
                      <td> 
                         <div class="form-group">
          <div class="heading-section text-center">
                <input type="submit" :value="room3.price*nuits" v-on:click="bookNow()" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-2 px-2">
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
    }
  }
,
mounted(){
this.getBookinDates();
 this.selectTheFirstRoom();
 this.selectTheSecondRoom();
 this.selectTheThirdRoom();
 this.getOptions();
 this.optionsRoom1=this.optionsTab;
 console.log("rrr",this.optionsRoom1);
 //recuperer le nombre de chambre 
this.nbchambre=parseInt(localStorage.getItem('nbchambre'));


},

methods:{
  async selectTheFirstRoom(){
    
       if(localStorage.getItem('bookgroom1') != null){
       this.bookgroom1=  JSON.parse( localStorage.getItem('bookgroom1'));

    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom1.nbadult,
          nbEnfant:this.bookgroom1.nbenfant
    }
    )
    .then(res=>{
     this.tab11=res.data.available_room
      if(this.tab11.length !=0){
        for(let j=0 ; j<res.data.available_room.length ;j++){
          this.rooms1.push(res.data.available_room[j])
        }
      }
      this.tab21=res.data.available_booking
      if(this.tab21.length !=0){
        for(let i=0 ; i<res.data.available_booking.length ; i++){
          this.rooms1.push(res.data.available_booking[i]);
        }
      }
    }).catch(error=>{
      console.log(error);
    })
       }else{
         this.message1="Vous devez changer les dates de résérvation"
       }
  },
   async selectTheSecondRoom(){
     
  if(localStorage.getItem('bookgroom2') != null){
 this.bookgroom2=  JSON.parse( localStorage.getItem('bookgroom2'));
  
    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom2.nbadult,
          nbEnfant:this.bookgroom2.nbenfant
    }
    )
    .then(res=>{
     this.tab12=res.data.available_room
      if(this.tab12.length !=0){
        for(let j=0 ; j<res.data.available_room.length ;j++){
          this.rooms2.push(res.data.available_room[j])
        }
      }
      this.tab22=res.data.available_booking
      if(this.tab22.length !=0){
        for(let i=0 ; i<res.data.available_booking.length ; i++){
          this.rooms2.push(res.data.available_booking[i]);
        }
      }
    }).catch(error=>{
      console.log(error);
    })
     }else{
         this.message2="Vous devez changer les dates de résérvation"
       }
  },
  async selectTheThirdRoom(){

  if(localStorage.getItem('bookgroom3') != null){
 this.bookgroom3=  JSON.parse( localStorage.getItem('bookgroom3'));
  
    await axios
    .post('http://localhost:8000/api/available-rooms',
    { 
          end:this.bookingDate.end,
          nbAdult:this.bookgroom3.nbadult,
          nbEnfant:this.bookgroom3.nbenfant
    }
    )
    .then(res=>{
     this.tab13=res.data.available_room
      if(this.tab13.length !=0){
        for(let j=0 ; j<res.data.available_room.length ;j++){
          this.rooms3.push(res.data.available_room[j])
        }
      }
      this.tab23=res.data.available_booking
      if(this.tab23.length !=0){
        for(let i=0 ; i<res.data.available_booking.length ; i++){
          this.rooms3.push(res.data.available_booking[i]);
        }
      }
    }).catch(error=>{
      console.log(error);
    })
     }else{
         this.message3="Vous devez changer les dates de résérvation"
       }
  },
  bookNow(){
    this.$router.push('bookroom')
  },

  displayRooms(event){
     this.whichroom=parseInt(event.target.value);
  },
  getBookinDates(){
    this.bookingDate = JSON.parse(localStorage.getItem('bookingdate'))
    let nuit = (Date.parse(this.bookingDate.end)-Date.parse(this.bookingDate.start))/86400000;
     this.nuits =nuit
  },
    async getOptions(){
      await axios.get('http://localhost:8000/api/user/option')
      .then(res=>{
        this.optionsTab=res.data.data
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
  width: 450px;
}
#dropdown{
margin: 20px;
}

</style>
