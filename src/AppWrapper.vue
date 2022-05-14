<template>
    <FindRoom v-if="$route.path === '/findroom'" />
    <SelectRoom v-else-if="$route.path === '/selectroom'" />
    <BookRoom v-else-if="$route.path === '/bookroom'" />
    <BookingPayment v-else-if="$route.path === '/bookingpayment'" />
 <booking v-else-if="$route.path === '/booking'" />
    <App  v-else/>
</template>
<script>
import FindRoom from './components/room/booking/FindRoom.vue';
import booking from './components/booking.vue';

import SelectRoom from './components/room/booking/SelectRoom.vue';
import BookRoom from './components/room/booking/BookRoom.vue';
import BookingPayment from './components/room/booking/BookingPayment.vue';
import App from './App';

export default {
   
    components: {
        App,
        FindRoom,
        SelectRoom,
        BookRoom,
        BookingPayment,
        booking
    }
}
</script>