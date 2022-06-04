<template>
    <FindRoom v-if="$route.path === '/findroom'" />
    <SelectRoom v-else-if="$route.path === '/selectroom'" />
    <BookRoom v-else-if="$route.path === '/bookroom'" />
    <App v-else/>
   
</template>
<script>

import FindRoom from './components/room/booking/FindRoom.vue';
import SelectRoom from './components/room/booking/SelectRoom.vue';
import BookRoom from './components/room/booking/BookRoom.vue';
import App from './App';


export default {
   
    components: {
        App,
        FindRoom,
        SelectRoom,
        BookRoom,
       
    }
}
</script>