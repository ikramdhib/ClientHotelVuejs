<template>
  <section class="ftco-section contact-section bg-light">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="row justify-content-center mb-9 pb-5">
          <div class="col-md-10 heading-section text-center">
            <h2 class="mb-4">Résérvez maintement :</h2>
          </div>
        </div>
        <div class="col-md-3 d-flex"></div>
        <div class="col-md-3 d-flex"></div>
        <div class="col-md-3 d-flex"></div>
      </div>
      <div class="row block-9 slide-top py-4">
        <div class="col-md-12 order-md-last d-flex">
          <div class="bg-white p-5 contact-form">
            <div class="form-group">
              <div class="row">
                <div class="ml-md-0">
                  <div class="col-md-6 d-flex align-self-stretch">
                    <div class="media block-6 services py-6 text-center">
                      <!--	<div class="icon d-flex align-items-center justify-content-center">
              		<span class="flaticon-airplane49" ></span> 
              	</div>-->
                      <h3 id="title" class="mb-4">Saisir une reservation</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--rooftop-->
            <div v-if="isRooftop">
              <div class="row">
                <form class="bg-light p-5">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Nombres de tables :</label>
                        <select
                          name=""
                          id=""
                          class="form-control"
                          v-model="booking.nombre"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Choisir une offre :</label>
                        <select
                          v-model="monChoix"
                          @change="onChang($event)"
                          class="form-control"
                        >
                          <option></option>
                          <option
                            v-for="offre in this.offtop"
                            :value="offre.id"
                            :key="offre.id"
                          >
                            {{ offre.titre }}{{ offre.pourcentage }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <ul class="list-group py-4">
                          <table>
                            <tr>
                              <td>Totale:</td>
                            </tr>
                            <tr>
                              <div v-if="offre">
                                <td>
                                  <input v-model="prix1" disabled /> DT
                                </td>
                              </div>
                              <div v-if="offre == false">
                                <td>
                                  <input
                                    :v-model="prix1"
                                    :value="
                                      (this.prix1 =
                                        this.prix_reservation *
                                        this.booking.nombre)
                                    "
                                    disabled
                                  /> DT
                                </td>
                              </div>
                            </tr>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!--spa-->
            <div v-if="isSpa">
              <div class="row">
                <form class="bg-light p-5">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Choisir nombre personne :</label>
                        <select
                          name=""
                          id=""
                          class="form-control"
                          v-model="booking.nombre"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Choisir une offre :</label>
                        <select
                          v-model="monChoix"
                          @change="onChange($event)"
                          class="form-control"
                        >
                          <option></option>
                          <option
                            v-for="offre in this.offspa"
                            :value="offre.id"
                            :key="offre.id"
                          >
                            {{ offre.titre }}{{ offre.pourcentage }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <ul class="list-group py-4">
                          <table>
                            <tr>
                              <td>Totale:</td>
                            </tr>
                            <tr>
                              <div v-if="offre">
                                <td><input v-model="prix" disabled />DT</td>
                              </div>
                              <div v-if="offre == false">
                                <td>
                                  <input
                                    :v-model="prix"
                                    :value="
                                      (this.prix =
                                        this.prix_reservation *
                                        this.booking.nombre)
                                    "
                                    disabled
                                  />DT
                                </td>
                              </div>
                            </tr>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!--pool-->
            <div v-if="ispool">
              <div class="row">
                <form class="bg-light p-5">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> choisir nombre de Personnes :</label>
                        <select
                          name=""
                          id=""
                          class="form-control"
                          v-model="booking.nombre"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <div>Choisir votre offre :</div>
                        <select
                          v-model="Choix"
                          @change="modif($event)"
                          class="form-control"
                        >
                          <option></option>
                          <option
                            v-for="offre in offpool"
                            :value="offre.id"
                            :key="offre.id"
                          >
                            {{ offre.titre }}{{ offre.pourcentage }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <ul class="list-group">
                          <table>
                            <tr>
                              <td>Totale:</td>
                            </tr>
                            <tr>
                              <div v-if="offre">
                                <td><input v-model="somm" disabled />DT</td>
                              </div>
                              <div v-if="offre == false">
                                <td>
                                  <input
                                    :v-model="somm"
                                    :value="
                                      (this.somm =
                                        this.prix_reservation *
                                        this.booking.nombre)
                                    "
                                    disabled
                                  />DT
                                </td>
                              </div>
                            </tr>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!--isConferenceRoom-->
            <div v-if="isConferenceRoom">
              <div class="row">
                <form class="bg-light p-5">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Choisir equipements :</label>
                        <div v-for="p in salle" :key="p.id">
                          <input
                            type="checkbox"
                            :v-model="choi"
                            :value="(choi = p.id)"
                            @click="isOffre($event)"
                          />
                          {{ p.label }}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> capacite :</label>
                        <input
                          type="number"
                          min="1"
                          id="example"
                          class="form-control"
                          v-model="capacite"
                        />
                      </div>

                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Choisir une offre :</label>
                        <select
                          v-model="monChoix"
                          @change="onChange3($event)"
                          class="form-control"
                        >
                          <option></option>
                          <option
                            v-for="offre in offsall"
                            :value="offre.id"
                            :key="offre.id"
                          >
                            {{ offre.titre }}{{ offre.pourcentage }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <ul class="list-group py-4">
                          <table>
                            <tr>
                              <td>Totale:</td>
                            </tr>
                            <tr>
                              <div v-if="offre">
                                <td>
                                  <input v-model="prix1" disabled />DT
                                </td>
                              </div>
                              <div v-if="offre == false">
                                <td>
                                  <input
                                    :v-model="prix1"
                                    :value="(this.prix1 =this.prixx * this.capacite + this.somm)" disabled
                                  />DT
                                </td>
                              </div>
                            </tr>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!--restaurent-->
            <div v-if="isrestaurant">
              <div class="row">
                <form class="bg-light p-5">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="icon-circle-arrow-right"></i>
                        <label id="label"> Nombres de tables :</label>
                        <select
                          name=""
                          id=""
                          class="form-control"
                          v-model="booking.nombre"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <div>Choisir votre offre :</div>
                        <select
                          v-model="monChoix"
                          @change="onChangee($event)"
                          class="form-control"
                        >
                          <option></option>
                          <option
                            v-for="offre in offres"
                            :value="offre.id"
                            :key="offre.id"
                          >
                            {{ offre.titre }}{{ offre.pourcentage }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <div class="col-md-4">
                          <ul class="list-group">
                            <table>
                              <tr>
                                <td>Totale:</td>
                              </tr>
                              <tr>
                                <div v-if="offre">
                                  <td><input v-model="prix" disabled /></td>
                                </div>
                                <div v-if="offre == false">
                                  <td>
                                    <input
                                      :v-model="prix"
                                      :value="
                                        (this.prix =
                                          this.prix_reservation *
                                          this.booking.nombre)
                                      "  
                                    />DT
                                  </td>
                                </div>
                              </tr>
                            </table>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!--information personnels -->
            <div class="row py-4">
              <form class="bg-light p-5 contact-form">
                <div class="form-group">
                  <div class="row">
                    <h2>Information personnels :</h2>
                    <ul style="list-style-type-center:none">
                                <li class="li" style="color:red" v-for="error in errors" :key="error"><InlineMessage>{{ error }}</InlineMessage> </li>
                      </ul>
                    <div class="col-md-4">
                      <i class="icon-circle-arrow-right"></i>
                      <label id="label"> Nom :</label>
                      <input
                        :placeholder="Nom"
                        type="text"
                        id="example"
                        class="form-control"
                        v-model="user.firstname"
                      />
                    </div>
                    <div class="col-md-4">
                      <i class="icon-circle-arrow-right"></i>
                      <label id="label"> Prenom :</label>
                      <input
                        :placeholder="Prenom"
                        type="text"
                        id="example"
                        class="form-control"
                        v-model="user.lastname"
                      />
                    </div>
                    <div class="col-md-4">
                      <i class="icon-circle-arrow-right"></i>
                      <label id="label"> phone:</label>
                      <input
                        :placeholder="Phone"
                        type="text"
                        id="example"
                        class="form-control"
                        v-model="user.phone"
                      />
                    </div>
                    <div class="col-md-4">
                      <i class="icon-circle-arrow-right"></i>
                      <label id="label"> email :</label>
                      <input
                        :placeholder="Email"
                        type="mail"
                        id="example"
                        class="form-control"
                        v-model="user.email"
                      />
                    </div>

                    <div class="col-md-8">
                      <i class="icon-circle-arrow-right"></i>
                      <label id="label"> Information Complimentaire:</label>

                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        :placeholder="Message"
                        class="form-control"
                        v-model="booking.infoComplimentaire"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-center mb-9 pb-2 py-4">
                      <div class="col-md-5 heading-section text-center">
                        <input
                          type="button"
                          value="Reserver"
                          @click="Addbooking()"
                          class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 py-3 px-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="form-group">
              <div class="row justify-content-center">
                <div class="col-md-2">
                  <a :href="'http://localhost:8080/#/'"> Acceuil </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      monChoix: "",
      pourcentage: "",
      isOffreExist: false,
      restaurent: {},
      prixx: 0,
      prix_reservation: null,
      user: {
        firstname: "",
        lastname: "",
        phone: "",
        country: "",
        zipcode: "",
        cin: "",
        img: "",
        role: "",
        email: "",
        password: "",
      },
      user_id: 0,

      booking: {
        nom: "",
        infoComplimentaire: "",
        email: "",
        offres: "",
        prenom: "",
        phone: "",
        prix: "",
        nombre:0,
      },
      spa: "",
      p: "",
      prixeq: null,
      salle: "",
      off: null,
      offpool: [],
      offtop: [],
      offsall: [],
      selected: false,
      plat: "",
      isrestaurant: false,
      isRooftop: false,
      ispool:false,
      isConferenceRoom: false,
      isSpa: false,
      offre: false,
      offres: [],
      offspa: [],
      monChoix1: "",
      Choix: "",
      resultat: "",
      prix:0,
      equi: 0,
      somm: 0,
      capacite: 0,
      prix1: null,
      pourr: 0,
      pour: 0,
      somme: 0,
      choi: "",
      table: [],
      errors:[],
      po: 0,
    };
  },

  mounted() {
    document.getElementById('ftco-navbar').style.display="none";
    document.getElementsByClassName("ftco-footer")[0].style.display="none";
    // #,footer{
    // display:none !important;
    // }
    const id = this.$route.params.id;
    const catg = this.$route.params.catg;
    if (catg == "spa") {
      axios.get("http://localhost:8000/api/spaimg/" + id).then((res) => {
        this.spa = res.data.rooftop.id;

        console.log("si spa", this.spa);
        this.prix_reservation = res.data.rooftop.prix_reservation;
      });
      this.isSpa = true;
    } else if (catg == "restaurant") {
      axios.get("http://localhost:8000/api/getrestaurant/" + id).then((res) => {
        this.restaurent = res.data.restaurant;
        this.restaurant = res.data.restaurant.id;
        this.prix_reservation = res.data.restaurant.prix_reservation;
      });
      this.isrestaurant = true;
    } else if (catg == "pool") {
      axios.get("http://localhost:8000/api/alloffimg/" + id).then((res) => {
        this.pool = res.data.rooftop.id;
        this.prix_reservation = res.data.rooftop.prix_reservation;

        console.log(this.prix_reservation);
      });
      this.ispool = true;
    } else if (catg == "roof") {
      axios.get("http://localhost:8000/api/getroof/" + id).then((res) => {
        if (res != null) {
          this.rooftop = res.data.rooftop.id;

          this.prix_reservation = res.data.rooftop.prix;
        }
      });
      this.isRooftop = true;
    } else if (catg == "salleConference") {
      axios.get("http://127.0.0.1:8000/api/getconf/" + id).then((res) => {
        if (res != null) {
          this.ConferenceRoom = res.data.cf.id;
          this.salle = res.data.cf.equipement;
          this.capacite = res.data.cf.typeconferencerooms.capacite;
          this.prixx = res.data.cf.prix;

          console.log("zzzz", this.capacite);
        }
      });
      this.isConferenceRoom = true;
    }

    this.offresres();

    this.isLogin = true;
    if (localStorage.getItem("client")) {
      this.user = JSON.parse(localStorage.getItem("client"));
    }
    this.idus=this.user.id;
console.log("fghhj",this.idus)
  },
  unmounted(){
     document.getElementById('ftco-navbar').style.display="block";
    document.getElementsByClassName("ftco-footer")[0].style.display="block";
  }
  ,

  methods: {
    async Addbooking() {
      if (this.isRooftop) {
        if (this.monChoix == "") {
          this.monChoix =null;
        }
          if(this.idus==""){
      this.idus=null
   
      }
        if (this.booking.infoComplimentaire == "") {
          this.booking.infoComplimentaire = "AUCUN INFORMATION PERSONNELS ";
        }
        	if(this.user.lastname==""){
				this.errors.push("votre nom doit étre saisie")
	               }
                  if(this.user.firstname==""){
				this.errors.push("votre prenom doit étre saisie")
	               }
                  	if(this.user.email==""){
				this.errors.push("votre email doit étre saisie")
	               }
                 	if(this.user.email==""){
				this.errors.push("votre numero de teléphone doit étre saisie")
	               }
                 
        await axios

          .post(
            "http://localhost:8000/api/Booking",
            {
              infoComplimentaire: this.booking.infoComplimentaire,
              nombre: this.booking.nombre,
              phone: this.user.phone,
              email: this.user.email,
              nom: this.user.lastname,
              offre_id: this.monChoix,
              prenom: this.user.firstname,
              user_id:this.idus,
              prix: this.prix1,
              rooftop_id: this.rooftop,
              isSmsSend: false,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token_client"),
              },
            }
          )
          .then((res) => {
            this.response = res.data.booking.id;
            console.log(res);
           this.$router.push({name:"book" , params:{id:this.response}});
          });
      } else if (this.isrestaurant) {
        if (this.monChoix == "") {
          this.monChoix =null;
        }
          if(this.idus==""){
      this.idus=null
   
      }
        if (this.booking.infoComplimentaire == "") {
          this.booking.infoComplimentaire = "AUCUN INFORMATION PERSONNELS ";
        }
        	if(this.user.lastname==""){
				this.errors.push("votre nom doit étre saisie")
	               }
                 	if(this.user.firstname==""){
				this.errors.push("votre prenom doit étre saisie")
	               }
                  	if(this.user.email==""){
				this.errors.push("votre email doit étre saisie")
	               }
                 	if(this.user.email==""){
				this.errors.push("votre numero de teléphone doit étre saisie")
	               }

        await axios
          .post(
            "http://localhost:8000/api/Booking",
            {
              infoComplimentaire: this.booking.infoComplimentaire,
              nombre: this.booking.nombre,
              phone: this.user.phone,
              email: this.user.email,
              offre_id: this.monChoix,
              nom: this.user.lastname,
              prenom: this.user.firstname,
              user_id:this.idus,
              prix: this.prix,
              restaurant_id: this.restaurant,
              isSmsSend: false,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token_client"),
              },
            }
          )
          .then((res) => {
            this.response = res.data.booking.id;
            console.log(res);
           this.$router.push({name:"book" , params:{id:this.response}});
          });
      } else if (this.ispool) {
        if (this.monChoix == "") {
          this.monChoix =null;
        }
          if(this.idus==""){
      this.idus=null
   
      }
        if (this.booking.infoComplimentaire == "") {
          this.booking.infoComplimentaire = "AUCUN INFORMATION PERSONNELS ";
        }
        	if(this.user.lastname==""){
				this.errors.push("votre nom doit étre saisie")
	               }
                 	if(this.user.firstname==""){
				this.errors.push("votre prenom doit étre saisie")
	               }
                  	if(this.user.email==""){
				this.errors.push("votre email doit étre saisie")
	               }
                 	if(this.user.email==""){
				this.errors.push("votre numero de teléphone doit étre saisie")
	               }
        await axios
          .post(
            "http://localhost:8000/api/Booking",
            {
              infoComplimentaire: this.booking.infoComplimentaire,
              nombre: this.booking.nombre,
              phone: this.user.phone,
              email: this.user.email,
              offre_id: this.monChoix,
              nom: this.user.lastname,
              prenom: this.user.firstname,
              user_id:this.idus,
              prix: this.somm,
              pool_id: this.pool,
              isSmsSend: false,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token_client"),
              },
            }
          )
          .then((res) => {
            this.response = res.data.booking.id;
            console.log(res);
           this.$router.push({name:"book" , params:{id:this.response}});
          });
      } else if (this.isConferenceRoom) {
        if (this.monChoix == "") {
          this.monChoix =null;
        }
          if(this.idus==""){
      this.idus=null
   
      }
        if (this.booking.infoComplimentaire == "") {
          this.booking.infoComplimentaire = "AUCUN INFORMATION PERSONNELS ";
        }
        	if(this.user.lastname==""){
				this.errors.push("votre nom doit étre saisie")
	               }
                 	if(this.user.firstname==""){
				this.errors.push("votre prenom doit étre saisie")
	               }
                  	if(this.user.email==""){
				this.errors.push("votre email doit étre saisie")
	               }
                 	if(this.user.email==""){
				this.errors.push("votre numero de teléphone doit étre saisie")
	               }
        await axios
          .post(
            "http://localhost:8000/api/Booking",
            {
              infoComplimentaire: this.booking.infoComplimentaire,
              nombre: this.capacite,
              phone: this.user.phone,
              email: this.user.email,
              offre_id: this.monChoix,
              nom: this.user.lastname,
              prenom: this.user.firstname,
              prix: this.prix1,
              user_id:this.idus,
              conference_room_id: this.ConferenceRoom,
              isSmsSend: false,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token_client"),
              },
            }
          )
          .then((res) => {
            this.response = res.data.booking.id;
            console.log(res);
            this.$router.push({name:"book" , params:{id:this.response}});
          });
      } else if (this.isSpa) {
        if (this.monChoix == "") {
          this.monChoix =null;
        }
          if(this.idus==""){
      this.idus=null
   
      }
        if (this.booking.infoComplimentaire == "") {
          this.booking.infoComplimentaire = "AUCUN INFORMATION PERSONNELS ";
        }
        	if(this.user.lastname==""){
				this.errors.push("votre nom doit étre saisie")
	               }
                 	if(this.user.firstname==""){
				this.errors.push("votre prenom doit étre saisie")
	               }
                  	if(this.user.email==""){
				this.errors.push("votre email doit étre saisie")
	               }
                 	if(this.user.email==""){
				this.errors.push("votre numero de teléphone doit étre saisie")
	               }

        await axios
          .post(
            "http://localhost:8000/api/Booking",
            {
              offre_id: this.monChoix,
              infoComplimentaire: this.booking.infoComplimentaire,
              nombre: this.booking.nombre,
              phone: this.user.phone,
              email: this.user.email,
              nom: this.user.lastname,
              prenom: this.user.firstname,
              prix: this.prix,
              user_id:this.idus,
              spa_id: this.spa,
              isSmsSend: false,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token_client"),
              },
            }
          )
          .then((res) => {
            this.response = res.data.booking.id;
            console.log(res);
           this.$router.push({name:"book" , params:{id:this.response}});
          });
      }
    },
    async offresres() {
      const id = this.$route.params.id;
      const catg = this.$route.params.catg;
      if (catg == "restaurant") {
        await axios
          .get("http://127.0.0.1:8000/api/getoffrestaurent/" + id)
          .then((res) => {
            this.offres = res.data.offres;

            console.log(this.offres);
          });
      } else if (catg == "roof") {
        await axios
          .get("http://127.0.0.1:8000/api/getoffRoofTop/" + id)
          .then((res) => {
            this.offtop = res.data.offres;
            console.log(this.offtop);
          });
      } else if (catg == "pool") {
        await axios
          .get("http://127.0.0.1:8000/api/getoffpool/" + id)
          .then((res) => {
            this.offpool = res.data.offres;
            console.log(this.offpool);
          });
      } else if (catg == "spa") {
        await axios
          .get("http://127.0.0.1:8000/api/soldde/" + id)
          .then((res) => {
            this.offspa = res.data.offres;
            for (let i = 0; i < this.offspa.lengeth; i++) {
              this.table.push(this.offspa[i].pourcentage);
              if (this.monChoix == this.offspa[i].pourcentage)
                this.off = this.offspa[i].id;
            }
            console.log(this.offspa);
            console.log(this.table);
          });
      } else if (catg == "salleConference") {
        await axios
          .get("http://127.0.0.1:8000/api/getoffsall/" + id)
          .then((res) => {
            this.offsall = res.data.offres;

            console.log(this.offsall);
          });
      }
    },
    //onchange spa******************************************************************************/
    onChange(event) {
      let pr = event.target.value;
      this.offre = true;
      for (let i = 0; i < this.offspa.length; i++) {
        if (this.offspa[i].id == this.monChoix) {
          this.pour = this.offspa[i].pourcentage;
          console.log("eeeeeeeeeh", this.pour);
        }
      }
      if (pr != null) {
        console.log("eeer", this.offre);
      } else if (pr == null) {
        console.log("eeer", this.offre);
      }

      this.prix =
        (this.prix_reservation - (this.prix_reservation * this.pour) / 100) *
        this.booking.nombre;
    },

    //onchange pool/*************************************************************************** */
    modif(event) {
      let pr = event.target.value;
      this.offre = true;
      for (let i = 0; i < this.offpool.length; i++) {
        if (this.offpool[i].id == this.Choix) {
          this.pourr = this.offpool[i].pourcentage;
          console.log("eeeeeeeeeh", this.pourr);
        }
      }
      if (pr != null) {
        console.log("hi", this.Choix);
      } else if (pr == null) {
        console.log("eeer");
      }

      this.somm =
        (this.prix_reservation - (this.prix_reservation * this.pourr) / 100) *
        this.booking.nombre;
    },
    //onchange roof****************************************************************************/
    onChang(event) {
      let pr = event.target.value;
      this.offre = true;
      for (let i = 0; i < this.offtop.length; i++) {
        if (this.offtop[i].id == this.monChoix) {
          this.pour = this.offtop[i].pourcentage;
          console.log("eeeeeeeeeh", this.pour);
        }
      }
      if (pr != null) {
        console.log("hi", this.monChoix);
      } else if (pr == null) {
        console.log("eeer");
      }

      this.prix1 =
        (this.prix_reservation - (this.prix_reservation * this.pour) / 100) *
        this.booking.nombre;
    },
    //onchange salle/******************************************************* */
    onChange3(event) {
      let pr = event.target.value;

      this.offre = true;
      for (let i = 0; i < this.offsall.length; i++) {
        if (this.offsall[i].id == this.monChoix) {
          this.pour = this.offsall[i].pourcentage;
          console.log("eeeeeeeeeh", this.pour);
        }
      }
      if (pr != null) {
        console.log("hi", this.monChoix);
      } else if (pr == null) {
        console.log("eeer");
      }

      this.prix1 =
        (this.prixx - (this.prixx * this.pour) / 100) * this.capacite +
        this.somm;
    },

    isOffre(event) {
      if (event.target.checked != null) {
        this.Offre = true;
        for (let i = 0; i < this.salle.length; i++) {
          if (this.salle[i].id == this.choi) {
            this.po = this.salle[i].prix;
            console.log("eeeeeeeeeh", this.po);
          }
        }
      } else {
        this.Offre = false;
      }

      this.somm = this.somm + this.po;

      console.log("rrrrrrrrrrrrrrrrr", this.somm);
    },

    //onchange restaurent/*************************************************************** */
    onChangee(event) {
      let pr = event.target.value;
      this.offre = true;
      for (let i = 0; i < this.offres.length; i++) {
        if (this.offres[i].id == this.monChoix) {
          this.pour = this.offres[i].pourcentage;
          console.log("eeeeeeeeeh", this.pour);
        }
      }
      if (pr != null) {
        console.log("hi", this.monChoix);
      } else if (pr == null) {
        console.log("eeer");
      }

      this.prix =
        (this.prix_reservation - (this.prix_reservation * this.pour) / 100) *
        this.booking.nombre;
    },
  },
};
</script>
<style>
div.p {
  color: red;
}
</style>