
<template>
<Menu/>
<body>
<router-view/>
</body>
<Footer/>
</template>

<script>
import AOS from 'aos'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
export default {
  name: "App",
  components: {
    Footer,
    Menu
  },
   mounted() {
    AOS.init()
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i");

@import url("/src/assets/front/css/open-iconic-bootstrap.min.css");
@import url("/src/assets/front/css/animate.css");

@import url("/src/assets/front/css/owl.carousel.min.css");
@import url("/src/assets/front/css/owl.theme.default.min.css");
@import url("/src/assets/front/css/magnific-popup.css");

@import url("/src/assets/front/css/aos.css");

@import url("/src/assets/front/css/ionicons.min.css");
@import url("/src/assets/front/css/images.css");
 @import url("/src/assets/front/css/bootstrap-datepicker.css"); 
@import url("/src/assets/front/css/jquery.timepicker.css");

@import url("/src/assets/front/css/flaticon.css");
@import url("/src/assets/front/css/icomoon.css");
@import url("/src/assets/front/css/style.css");

@import url("https://unpkg.com/aos@2.3.1/dist/aos.css");

@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");  
</style>
