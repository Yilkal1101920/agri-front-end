<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <header>
        <nav class="bg-green-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 h-4 text-blue-600">
            <div class="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
                <div class="flex items-center">
                    <button class=" 
                absolute right-0         
              dropdown-toggle
              leading-tight
              ease-in-out
              flex
              items-center
              whitespace-nowrap
              mr-2
            " type="button" id="home" data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="showSideBar = !showSideBar">
                        ☰
                    </button>
                </div>
                <div class="flex items-center lg:order-2">
                    <h1 class="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-9 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <div class="stack">
                            <div><small>{{numberOfCarts}}</small></div>
                            <RouterLink to="/product/cart"><svg class="fill-current text-blue-900 w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartIcon" tabindex="-1" title="ShoppingCart">
                                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg></RouterLink>
                            
                        </div>
                    </h1>
                    <button v-if="loginfo.logStore" class="mr-7" @click.prevent="logout">logout</button>
                </div>
            </div>
        </nav>
    </header>
    <SideBar class="absolute w-40 right-0 mr-0" v-if="showSideBar" />
</div>
</template>

<script setup>
import axios from "axios";
import {
    ref,
    onMounted
} from 'vue'
import {
    useRouter
} from "vue-router"
import SideBar from '../pages/SideBar.vue'
import {
    useCounterStore
} from "../state/store";

import {
    uselogoutStore
} from "../state/logoutStore"; // import for logout display

var useCounter = useCounterStore();
const loginfo = uselogoutStore();
const router = useRouter();
const showSideBar = ref(false);
const totalCartNumber = ref('');
var numberOfCarts = ref(0);
var cart_email = ref('');
const logout = () => {
    localStorage.removeItem('user_id');
    loginfo.logStore = false; // logout display none

    localStorage.removeItem('user_email');
    loginfo.logStore = false;
    router.replace('/');
}

onMounted(async () => { //get total cart from orders table by email
    getTotalCart();
}
)

 const getTotalCart = async()=>{
try {
    const response = await axios.get(`http://localhost:5000/order`);
    totalCartNumber.value = response.data;  

    console.log(totalCartNumber.value);

    cart_email = localStorage.getItem('user_email');
    console.log(cart_email, "email");

for(let x in totalCartNumber.value){
console.log("uuuuuuuuuuuuuuu")
console.log(x)
if(totalCartNumber.value[x].user_email==cart_email){
 numberOfCarts.value = numberOfCarts.value + totalCartNumber.value[x].nOrders;
console.log("numberOfCarts.value", "totalCarts")
console.log(totalCartNumber.value[x].nOrders)
}
}

console.log(numberOfCarts.value, "totalCarts")
} catch (err) {
    console.log(err);
}
 }
</script>
