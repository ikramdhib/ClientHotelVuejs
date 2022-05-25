import { createRouter, createWebHashHistory } from 'vue-router';

const routes=[
    {
        path:'/',
        name:'home',
        component: () => import('./components/Home.vue'),
    },
    {
        path:'/about',
        name:'about',
        component: () => import('./components/About.vue'),
    },
    {
        path:'/blog',
        name:'blog',
        component: () => import('./components/blog/Blog.vue'),
    },
    {
        path:'/blogsingle',
        name:'blogsingle',
        component: () => import('./components/blog/BlogSingle.vue'),
    },
    {
        path:'/contact',
        name:'contact',
        component: () => import('./components/Contact.vue'),
    },
    {
        path:'/login',
        name:'login',
        component: () => import('./components/client/Login.vue'),
    },
    {
        path:'/updatepassword',
        name:'updatepassword',
        component: () => import('./components/client/UpdatePassword.vue'),
    }, 
    {
        path:'/profile',
        name:'profile',
        component: () => import('./components/client/Profile.vue'),
    },
    {
        path:'/forgetpassword',
        name:'forgetpassword',
        component: () => import('./components/client/ForgetPassword.vue'),
    },
    {
        path:'/done',
        name:'done',
        component: () => import('./components/client/Done.vue'),
    },
    {
        path:'/register',
        name:'register',
        component: () => import('./components/client/Register'),
    },
    {
        path:'/restaurant:id',
        name:'restaurant',
        component: () => import('./components/restaurant/Restaurant.vue'),
    },
    {
        path:'/rooms',
        name:'rooms',
        component: () => import('./components/room/Rooms.vue'),
    },
    
    {
        path:'/roomsingle:id',
        name:'roomsingle',
        component: () => import('./components/room/RoomSingle.vue'),
    },
    {
        path:'/findroom',
        name:'findroom',
        component: () => import('./components/room/booking/FindRoom.vue'),
    },
    
    {
        path:'/selectroom',
        name:'selectroom',
        component: () => import('./components/room/booking/SelectRoom.vue'),
    },
    {
        path:'/bookroom',
        name:'bookroom',
        component: () => import('./components/room/booking/BookRoom.vue'),
    },
    {
        path:'/bookingpayment',
        name:'bookingpayment',
        component: () => import('./components/room/booking/BookingPayment.vue'),
    },
    {
        path:'/profileedite:id',
        name:'profileedite',
        component: () => import('./components/client/ProfileEdite.vue'),
    },
    {
        path:'/offres',
        name:'offres',
        component: () => import('./components/client/Offres.vue'),
    },
    {
        path:'/notifications',
        name:'notifications',
        component: () => import('./components/client/Notifications.vue'),
    },
    {
        path:'/restaurants',
        name:'restaurants',
        component: () => import('./components/restaurant/RestaurantMain.vue'),
    },
    {
        path:'/roof-top:id',
        name:'roof-top',
        component: () => import('./components/roof-top/Roof-Top.vue'),
    },
   
   
    {
        path:'/roof-tops',
        name:'roof-tops',
        component: () => import('./components/roof-top/Roof-TopMain.vue'),
    },
    {
        path:'/pool:id',
        name:'pool',
        component: () => import('./components/pool/Pool.vue'),
    },
    {
        path:'/pools',
        name:'pools',
        component: () => import('./components/pool/PoolMain.vue'),
    },
    {
        path:'/spas',
        name:'spas',
        component: () => import('./components/spa/SPAMain.vue'),
    },
    {
        path:'/spa:id',
        name:'spa',
        component: () => import('./components/spa/SPA.vue'),
    },
    {
        path:'/bookingpayement',
        name:'bookingpayement',
        component: () => import('./components/room/booking/BookingPayment.vue'),
    },
    {
        path:'/bookingcat:id:catg',
        name:'bookingcat',
        component: () => import('./components/BookingCatg.vue'),
    },
    {
        path:'/conferenceroom:id',
        name:'conferenceroom',
        component: () => import('./components/SalleConfernce/SalleConference.vue'),
    },
    {
        path:'/conferencerooms',
        name:'conferencerooms',
        component: () => import('./components/SalleConfernce/SalleConferenceMain.vue'),
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;