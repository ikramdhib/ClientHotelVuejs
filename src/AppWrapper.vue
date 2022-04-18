<template>
    <BookingRoom v-if="$route.path === '/bookingroom'" />
    <SelectRoom v-if="$route.path === '/selectroom'" />
    <App  v-else/>
</template>
<script>
import BookingRoom from './components/room/booking/BookingRoom.vue';
import SelectRoom from './components/room/booking/SelectRoom.vue';
import App from './App';

export default {
   
    components: {
        App,
        BookingRoom,
        SelectRoom,
    }
}
</script>