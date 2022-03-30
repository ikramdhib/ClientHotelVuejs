<template>
    <Home v-if="$route.path === '/'" />
    <Rooms v-else-if="$route.path === '/rooms'" />
    <About v-else-if="$route.path === '/about'" />
    <Contact v-else-if="$route.path === '/contact'" />
    <Blog v-else-if="$route.path === '/blog'" />
</template>
<script>
import Home from  './components/Home';
import Contact from  './components/Contact';
import About from './components/About';
import Rooms from './components/Rooms';
import Blog from './components/Blog';

export default {
   
    components: {
        Home,
        Rooms,
        About,
        Blog,
        Contact
    }
}
</script>