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
                            <h1>የግብርና ዉጤቶች <button @click.prevent="(pMore = !pMore)">^</button></h1>
                            <ul v-if="pMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>የግብርና መሳሪያዎች <button @click.prevent="(mMore = !mMore)">^</button></h1>
                            <ul v-if="mMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>ዘር <button @click.prevent="(sMore = !sMore)">^</button></h1>
                            <ul v-if="sMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>ማዳበሪያ <button @click.prevent="(fMore = !fMore)">^</button></h1>
                            <ul v-if="fMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>ጸረ-አረም <button @click.prevent="(nMore = !nMore)">^</button></h1>
                            <ul v-if="nMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>ጸረ-ተባይ <button @click.prevent="(iMore = !iMore)">^</button></h1>
                            <ul v-if="iMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>
                            <h1>እንስሳት <button @click.prevent="(aMore = !aMore)">^</button></h1>
                            <ul v-if="aMore" class="p-3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                    </ul>
                </div>
            </div>
            <div class="overscroll-auto overflow-y-scroll inset-y-0">
                <div class="p-2 float-left w-screen h-screen">
                    <div class="container mx-auto">
                        <div class="overflow-y-scroll overflow-x-scroll text-blue-500">
                            <div v-for="item in datas" :key="item.product_id">
                                <div v-if="((item.price==usefilter.filterStore))" class="float-left">
                                    <div class="p-4">
                                        <div class="hover:bg-blue-300" @click.prevent="getProductById(item.product_id)">
                                            <div class="p-2 w-60 h-45"><img class="w-54 h-42" :src='item.image' alt="yilkal"></div>
                                            <div>{{item.title}}</div>
                                        </div>
                                        <div>{{item.price}}</div>
                                        <div class="flex flex-row">
                                            <div><button @click.prevent="useCounter.decrement" class="bg-green-500 rounded w-6 h-9">-</button></div>
                                            <div><input class="w-20 h-9" type="number" v-model="count2" /></div>
                                            <div><button @click.prevent="useCounter.increment" class="bg-green-500 rounded w-6 h-9">+</button></div>
                                            <div><button @click.prevent="updateProductById(item.product_id)" class="bg-green-500 rounded h-9">Add to Cart{{count}}</button></div>
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
} from "../state/store";
import {
    useSelectStore
} from "../state/selectProStore";
import {
    useRouter
} from "vue-router"

import { useFilterStore } from "../state/filterStore"  //for filtering purpose
var usefilter = useFilterStore();

const router = useRouter();
const count2 = ref('');


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

const totalOrderedCart = () => {
    alert('cart')
    useCounter.inputValue = count2.value;
    alert(useCounter.inputValue)
    useCounter.totalCart();
}

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:5000/orders");
        datas.value = response.data;
        console.log(datas.value);
    } catch (err) {
        console.log(err);
    }
});

const getProductByPrice = () => {
    usefilter.filterStore = filterByPrice.value;
    router.replace('/product/byPrice');
}

const getProductById = async (id) => {
    alert("Select Product");
    try {
        await axios.get(`http://localhost:5000/orders/${id}`);
        useSelector.itemId = id;
        alert(useSelector.itemId);
        router.push(`/product/${id}`)
    } catch (err) {
        console.log(err);
    }
}

const updateProductById = async (id) => {
    alert("update Product");
    try {
        await axios.put(`http://localhost:5000/orders/${id}`);
    } catch (err) {
        console.log(err);
    }
    totalOrderedCart();
}
</script>
