<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="grid h-screen w-screen mx-8">
        <div class="inset-x-20 inset-y-0">
            <div class="text-black float-left overscroll-auto overflow-y-scroll h-screen">
                <div class="border-double border-4 border-blue-500 w-60">
                    <h1><b>Filter by Price</b></h1>
                    <div class="p-4">
                        <div class="flex flex-row">
                            <input type="text" v-model="filterByPrice">
                            <button @click.prevent="getProductByPrice" class="bg-blue-500 rounded">Filter</button>
                        </div>
                        <p>price: 0-50000</p>
                    </div>
                </div>
                <div class="border-double border-4 border-blue-500">
                    <h1><b>CATEGORIES -</b></h1>
                    <ul class="p-4">
                        <li>

                            <button class="flex flex-row" @click.prevent="pMore = !pMore">
                                <h1>የግብርና ዉጤቶች</h1>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>

                            <ul v-if="pMore" class="p-3">
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ጤፍ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ስንዴ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">በቆሎ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ኑግ</li>
                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(mMore = !mMore)">
                                <h1>የግብርና መሳሪያዎች</h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="mMore" class="p-3">
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ማጭድ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ማረሻ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ወገል</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">አዷማ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">አካፋ</li>

                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(sMore = !sMore)">
                                <h1>ምርጥ ዘር</h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="sMore" class="p-3">
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ስንዴ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">በቆሎ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ችግኝ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">የጓሮ አትክልት</li>
                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(fMore = !fMore)">
                                <h1>ማዳበሪያ</h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="fMore" class="p-3">
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ዩሪያ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ዳፕ</li>

                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(nMore = !nMore)">
                                <h1>ጸረ-አረም</h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="nMore" class="p-3">
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ቅጠለ ሰፋፊ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ቅጠለ ጠባብ</li>

                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(iMore = !iMore)">
                                <h1>ጸረ-ተባይ </h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="iMore" class="p-3">
                                <li class=" pl-2 cursor-pointer hover:text-blue-500">ነቅዝ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ትል</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">አይጥ</li>

                            </ul>
                        </li>
                        <li>
                            <button class="flex flex-row" @click.prevent="(aMore = !aMore)">
                                <h1>እንስሳት</h1> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-4 p-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul v-if="aMore" class="p-3">
                                <li class=" pl-2 cursor-pointer hover:text-blue-500">ዶሮ</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ከብት</li>
                                <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">በግ</li>

                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="overscroll-auto overflow-y-scroll inset-y-0">
                <div class="p-2 float-left w-screen h-screen">
                    <div class="container mx-auto lg:grid-cols-4 sm:grid-cols-3">
                        <div class="text-blue-500 flex flex-row flex-wrap gap-3 justify-center">
                            <div v-for="item in datas" :key="item.product_id">
                               <div v-if="item.amount > 0">
                                <div class="flex flex-col">
                                    <div class="flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer   h-74 w-60  p-4 shadow-md">
                                        <div class="hover:bg-blue-300" @click.prevent="getProductById(item.product_id)">
                                            <div class="w-full h-32 hover:bg-blue-300">
                                                <div class="flex justify-end"><svg class="w-5 h-5 fill-current text-yellow-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
                                                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                                    </svg></div>
                                                <img class="h-28 w-full mt-2 border rounded-lg" :src='item.image' alt="This was image">
                                            </div>
                                        </div>
                                        <p class="w-full flex justify-center">Lorem ipsum dolor </p>
                                        <div class="flex justify-center">
                                            <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg></button>
                                            <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg></button>
                                            <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg></button>
                                            <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg></button>
                                            <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                            </svg></button>
                                        </div>
                                        <div class="flex justify-center">
                                            <div>{{item.price}}</div>
                                            <div class="pl-1">Br Including VAT</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div><input class="border rounded-lg p-3 w-20 h-5" type="number" v-model="count2[item.product_id]" /></div>
                                            <div><button @click.prevent="getProductByIdforVmodel(item.product_id)" class="bg-blue-400 ml-1 border rounded-lg">Add to Cart</button></div>
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
</div>
</template>

<script setup>
import axios from "axios";
import {
    onMounted,
    ref
} from 'vue'
import {
    useCounterStore
} from "../state/store"; //counting sellected cart

import {
    useSelectStore
} from "../state/selectProStore";
import {
    useRouter
} from "vue-router"

import {
    useFilterStore
} from "../state/filterStore" //for filtering purpose
var usefilter = useFilterStore();

const router = useRouter();

const count2 = ref([]); //count in v-model
// var nOrder = ref(0);

var filterByPrice = ref(0); // use this variable for filtering purpose

var useCounter = useCounterStore();
var useSelector = useSelectStore();
const pMore = ref(false);
const mMore = ref(false);
const nMore = ref(false);
const iMore = ref(false);
const aMore = ref(false);
const fMore = ref(false);
const sMore = ref(false);
const datas = ref([]);
const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const idforVmodell = ref(0);


const order_email = localStorage.getItem("user_email");  // the email of user who orders the product to add cart

const pro_id = ref(0);  ///the primary key id of the product


const getProductByIdforVmodel = async (id) => {  // get product by id for product_id
    try {
     const idforVmodel = await axios.get(`http://localhost:5000/orders/vModel/${id}`);
         idforVmodell.value = idforVmodel.data.product_id;


    } catch (err) {
    }
    checkAmount(idforVmodell.value);
}

const svgClicked = async () => {  // get product by id for product_id
    try {
        
        alert("SVG Clicked")

    } catch (err) {
    }
}

const totalOrderedCart = () => {    //total  ordered carts calculation
    useCounter.inputValue = count2.value[idforVmodell.value];
    useCounter.totalCart();
}

const getProducts = async () => {    //show all products
    try {
        const response = await axios.get("http://localhost:5000/orders");
        datas.value = response.data;
    } catch (err) {

    }

}

onMounted( () => {

    getProducts()

});

const getProductByPrice = () => {      //show products by price
    usefilter.filterStore = filterByPrice.value;
    router.replace('/product/byPrice');
}

const getProductById = async (id) => {  // show products by id
    try {
        await axios.get(`http://localhost:5000/orders/${id}`);
        useSelector.itemId = id;
        router.push(`/product/${id}`)
    } catch (err) {
    }
}

const checkAmount = async (id) => {          ////CHECK USER IS LOG IN OR NOT

    if (!localStorage.getItem("user_email")) {
        alert('login first to order product')
    router.replace("/login");
  }
  
else
{
    try {
        const response = await axios.get(`http://localhost:5000/orders/${id}`);   /////CALCULATE UN ORDERED AMOUNT
        numberOfItems.value = response.data.amount;

     console.log(response.data.amount);
     console.log(numberOfItems.value);


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
        await axios.put(`http://localhost:5000/orders/${id}`, {   ///update  amount and norders in agri_product table
            amount: updatedAmount.value,
            state: 1,
            nOrders: count2.value[idforVmodell.value],
        });


        addOrder();  //add orders into orderstable
        getProducts();
        window.location.reload();
    } catch (err) {

    }
    totalOrderedCart();
}

const addOrder = async ()=>{
        try {
        await axios.post("http://localhost:5000/order", {
                user_email: order_email,
                nOrders: count2.value[idforVmodell.value],
                totalCart: useCounter.totalCount,
                product_id: pro_id.value,
            });
        }catch (err) {

            }
        };
</script>
