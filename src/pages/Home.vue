<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="bg-fixed w-full h-[100vh] text-white font-bold justify-center items-center flex bg-cover">
        <div class="inset-y-0">
            <div class="px-8 shadow-md flex flex-col justify-center bg-green-100">
                <img class="w-full h-80 bg-fixed border rounded-lg" src="https://i.ibb.co/DrQ8jxn/OIP.jpg" />
                <h1 class="flex justify-center text-6xl text-blue-500 pb-10 absolute">የደብረ ኤልያስ ወረዳ ግብርና ቢሮ</h1>
            </div>
            <div class="flex justify-center h-9 text-blue-600 p-2 m-3">
                <h1 class="text-2xl">አዲስ ለሽያጭ የቀረቡ የግብርና ውጤቶች</h1>
            </div>
            <div class="flex flex-row bg-green-100">
                <div class="container mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    <div class="text-blue-500 flex flex-row flex-wrap gap-3 justify-center">
                        <div class="" v-for="item in datas" :key="item.product_id">
                            <div v-if="item.amount > 0">
                                <div class=" flex flex-col">
                                    <div class=" flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer   h-74 w-60  p-4 shadow-md">
                                        <div class="w-full h-32 hover:bg-blue-300" @click.prevent="getProductById(item.product_id)">
                                            <div class="flex justify-end"><svg class="w-5 h-5 fill-current text-yellow-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
                                                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                                </svg></div>
                                            <img class="h-28 w-full mt-2 border rounded-lg" :src='item.image' alt="image">
                                        </div>
                                        <p class="w-full flex justify-center">Lorem ipsum dolor </p>
                                        <!-- <div class="star-rating">
                                            <span>&star;</span>
                                            <span>&star;</span>
                                            <span>&star;</span>
                                            <span>&star;</span>
                                            <span>&star;</span>
                                            <div class="star-rating__current">
                                                <span>&starf;</span>
                                                <span>&starf;</span>
                                                <span>&starf;</span>
                                                <span>&starf;</span>
                                                <span>&starf;</span>
                                            </div>
                                        </div> -->

                                        <div>
                                            <div class="flex items-center justify-center">
                                            <svg v-if="item.favorite_no == 1 || item.favorite_no == 2 || item.favorite_no == 3 || item.favorite_no == 4 || item.favorite_no == 5" @click.prevent="star1(item.product_id)" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg v-else @click.prevent="star1(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>

                                        
                                            <svg v-if="item.favorite_no == 2 || item.favorite_no == 3 || item.favorite_no == 4 || item.favorite_no == 5" @click.prevent="star2(item.product_id)" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg v-else  @click.prevent="star2(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>


                                            <svg v-if="item.favorite_no == 3 || item.favorite_no == 4 || item.favorite_no == 5" @click.prevent="star3(item.product_id)" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg v-else  @click.prevent="star3(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>


                                            <svg v-if="item.favorite_no == 4 || item.favorite_no == 5" @click.prevent="star4(item.product_id)" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg v-else  @click.prevent="star4(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>


                                            <svg v-if="item.favorite_no == 5" @click.prevent="star5(item.product_id)" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg v-else @click.prevent="star5(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </div>

                                        <!-- <div v-if="item.email != order_email" class="flex items-center justify-center">
                                            <svg @click.prevent="star1(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg @click.prevent="star2(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg @click.prevent="star3(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg @click.prevent="star4(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg @click.prevent="star5(item.product_id)" aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </div> -->

                                        </div>

                                        <div class="flex justify-center">
                                            <div>{{item.price}}</div>
                                            <div class="pl-1">Br Including VAT</div>
                                        </div>
                                        <div class="flex gap-3">
                                            <input type="number" name="" id="" class="border rounded-lg p-3 w-20 h-5" v-model="count2[item.product_id]">
                                            <button class="bg-blue-400 p-1 border rounded-lg" @click.prevent="getProductByIdforVmodel(item.product_id)">ወደ ካርት ጨምር</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import axios from "axios";
import {
    onMounted,
    ref
} from 'vue'

import {
    useRouter
} from "vue-router"

import {
    useCounterStore
} from "../state/store"; //counting sellected cart
import {
    useSelectStore
} from "../state/selectProStore";

const router = useRouter();

var useCounter = useCounterStore();
var useSelector = useSelectStore();

const datas = ref([]);

const count2 = ref([]); //count in v-model
const idforVmodell = ref(0);

const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated


const rateCounter = ref(0);
const star = ref(0);

// var activeColor = ref('')
// var rateCounter = ref('');

const order_email = localStorage.getItem("user_email"); // the email of user who orders the product to add cart

const pro_id = ref(0); ///the primary key id of the product

onMounted(async () => {
    try {
        // const response = await axios.get("http://localhost:5000/orders");
        // datas.value = response.data;

        const response = await axios.get("http://localhost:5000/productsFavorite");
        datas.value = response.data;

    } catch (err) {}
});

const getProductByIdforVmodel = async (id) => { // get product by id for product_id
    try {
        const idforVmodel = await axios.get(`http://localhost:5000/orders/vModel/${id}`);
        idforVmodell.value = idforVmodel.data.product_id;

    } catch (err) {}
    checkAmount(idforVmodell.value);
}


const getRateByProductId = async (id) => {
    try{
    const rate = await axios.get(`http://localhost:5000/favorite/${id}`);
    rateCounter.value = rate.data.favorite_no;

    if(rateCounter.value == 1 || rateCounter.value == 2 || rateCounter.value == 3 || rateCounter.value == 4 || rateCounter.value == 5){
       updateProductRate(id);
    }
    else{
        insertProductRate(id);
    }

} catch(err){

}
}


const insertProductRate = async (id) =>{

        try {
        await axios.post("http://localhost:5000/favorite", {
                email: order_email,
                favorite_no: star.value,
                fproduct_id: id,
            });

           alert(id);

    } catch (err) {
    }

}

const updateProductRate = async (id) =>{

        try {
        await axios.put(`http://localhost:5000/favorite/${id}`, {
                favorite_no: star.value,
            });

           alert("update rate successfully");

    } catch (err) {
    }

}


const star1 = async (id) => {
    star.value = 1;
    await svgClicked(id);
}
const star2 = async (id) => {
    star.value = 2;
    await svgClicked(id);
}
const star3 = async (id) => {
    star.value = 3;
    await svgClicked(id);
}
const star4 = async (id) => {
    star.value = 4;
    await svgClicked(id);
}
const star5 = async (id) => {
    star.value = 5;
    await svgClicked(id);
}


const svgClicked = async (id) => {  // get product by id for product_id
     console.log("rate clicked");
    console.log('clicked')
     await getRateByProductId(id);

    window.location.reload();
}

const checkAmount = async (id) => { ////CHECK USER IS LOG IN OR NOT

    if (!localStorage.getItem("user_email")) {
        alert('login first to order product')
        router.replace("/login");
    } else {
        try {
            const response = await axios.get(`http://localhost:5000/orders/${id}`); /////CALCULATE UN ORDERED AMOUNT
            numberOfItems.value = response.data.amount;

            if (numberOfItems.value >= count2.value[idforVmodell.value] && count2.value[idforVmodell.value] >= 0) {
                updatedAmount.value = response.data.amount - count2.value[idforVmodell.value];

                pro_id.value = response.data.product_id;

                updateProductById(id);
            } else {
                alert("You can only order from 0 upto " + numberOfItems.value + " items please re-order again")
            }
        } catch (err) {

        }

    }

}

const updateProductById = async (id) => {
    // nOrder = ;
    try {
        await axios.put(`http://localhost:5000/orders/${id}`, { ///update  amount and norders in agri_product table
            amount: updatedAmount.value,
            state: 1,
            nOrders: count2.value[idforVmodell.value],
        });

        addOrder(); //add orders into orderstable
        window.location.reload();
    } catch (err) {}
    totalOrderedCart();
}

const addOrder = async () => {
    try {
        await axios.post("http://localhost:5000/order", {
            user_email: order_email,
            nOrders: count2.value[idforVmodell.value],
            totalCart: useCounter.totalCount,
            product_id: pro_id.value,
        });
    } catch (err) {}
};

const totalOrderedCart = () => { //total  ordered carts calculation
    useCounter.inputValue = count2.value[idforVmodell.value];
    useCounter.totalCart();
}

const getProductById = async (id) => { // show products by id
    try {
        await axios.get(`http://localhost:5000/orders/${id}`);
        useSelector.itemId = id;
        router.push(`/product/${id}`)
    } catch (err) {}
}
</script>

<style scoped>
/* .star-rating {
    display: inline-block;
    color: gold;
    font-size: 3rem;
    position: relative;
}

.star-rating .star-rating__current {
    position: absolute;
    top: 0;
    overflow: hidden;
    white-space: nowrap;
} */

.rating {
    position: absolute;
    /* top: 50%;
    left: 50%; */
    transform: translate(0%, 0%) rotateY(180deg);
    display: flex;

}

.rating input {
    display: none;
}

.rating label {
    display: block;
    cursor: pointer;
    width: 30px;
}

.rating label:before {
    /* content: '\f005'; */
    font-family: fontAwesome;
    position: relative;
    display: block;
    font-size: 1rem;
    color: #2b10f5;
}

.rating label:after {
    /* content: '\f005'; */
    font-family: fontAwesome;
    position: absolute;
    top: 0;
    display: block;
    font-size: 1rem;
    color: #ff711f;
    opacity: 0;
    transition: .5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, .5s);
}

.rating label:hover:after,
.rating label:hover~label:after,
.rating input:checked~label:after {
    opacity: 1;
}
</style>
