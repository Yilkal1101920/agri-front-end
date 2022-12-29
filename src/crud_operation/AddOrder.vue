<template>
<div class="flex flex-col justify-center items-center">
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
        <div class="control">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" v-model="firstName" />
        </div>
    </div>

    <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Last name</label>
        <div class="control">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="lastName" v-model="lastName" />
        </div>
    </div>
    <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
        <div class="control">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone" v-model="phone" />
        </div>
    </div>

    <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <div class="control">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Address" v-model="address" />
        </div>
    </div>

    <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
        <div class="control">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" @change="onFileChange" placeholder="image"/>
        </div>
    </div>

    <div class="control">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="saveOrder">SAVE</button>
    </div>
</div>
</div>
</template>

<script setup>


import axios from "axios";
import { ref, onMounted } from 'vue'
import {useRouter} from "vue-router"

const email = localStorage.getItem('user_email');
const image = localStorage.getItem('image_id');

onMounted(() => {
    if(!localStorage.getItem('user_id')){
        router.replace("/login");
    }
})
const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const address = ref('');
const saveOrder = async ()=>{
        try {
        await axios.post("http://localhost:5000/orders", {
                first_name: firstName.value,
                last_name: lastName.value,
                phone: phone.value,
                email: email,
                // address: address.value,
                // order_image: image
            });
            router.push("/imageUpload");
        }catch (err) {
                alert("error",err);
            }
        };
</script>

<style>
</style>
