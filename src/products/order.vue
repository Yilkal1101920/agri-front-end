<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="flex flex-row mx-8">
        <div class="text-black px-14 py-12">
            <div class="border-double border-4 border-blue-500 block p-16 rounded-lg shadow-lg bg-white max-w-sm">
                <form>
                        <div class="form-group mb-6">
                            <label for="fname" class="form-label inline-block mb-2 text-gray-700">First Name</label>
                            <input type="text" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="First Name" v-model="fname">
                        </div>


                        <div class="form-group mb-6">
                            <label for="lname" class="form-label inline-block mb-2 text-gray-700">Last Name</label>
                            <input type="text" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="lname" placeholder="Last Name" v-model="lname">
                        </div>

                        <div class="form-group mb-6">
                            <label for="phone" class="form-label inline-block mb-2 text-gray-700">Phone</label>
                            <input type="phone" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" placeholder="Phone" v-model="phone">
                </div>
                        <div class="form-group mb-6">
                            <label for="email" class="form-label inline-block mb-2 text-gray-700">Email</label>
                            <input type="email" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                        </div>

                        <div class="form-group mb-6">
                            <label for="username" class="form-label inline-block mb-2 text-gray-700">Password</label>
                            <input type="text" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" placeholder="username" v-model="password">
                        </div>

                        <div class="form-group mb-6">
                            <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Account username</label>
                            <input type="password" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Password" v-model="password">
                        </div>

                        <div class="form-group form-check mb-6">
                            <input type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck1">
                            <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Check me out</label>
                        </div>
                </form>
            </div>
        </div>
        <div class="text-black px-14 py-12">
            <div class="flex justify-center">
                <div>
                    <div class="form-check">
                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                            Cash on delivery
                        </label>
                    </div>
                    <div class="form-check pt-5">
                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="telebirr" id="telebirr" checked>
                        <label class="form-check-label inline-block text-gray-800" for="telebirr">
                            telebirr
                        </label>
                        <div class=""><img class="h-50 w-50" src="https://i.ibb.co/2dMZ2CZ/Telebirr.jpg" /></div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cbebirr" id="cbebirr">
                        <label class="form-check-label inline-block text-gray-800" for="cbebirr">
                            CBE birr
                        </label>
                        <div class="pt-10"><img class="w-50 h-50" src="https://i.ibb.co/f4Kw6vX/cbe.jpg" /></div>
                    </div>
                    <div class="form-check pt-10">
                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="awashbank" id="awashbank" checked>
                        <label class="form-check-label inline-block text-gray-800" for="awashbank">
                            Awash Bank
                        </label>
                        <div class=""><img class="w-50 h-50" src="https://i.ibb.co/Dtp9Y1b/awashbank.png" /></div>
                    </div>
                    <button type="submit" class="
              px-6
              py-6
              bg-black
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out" @click.prevent="order()">PLACE ORDER -></button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

import {useRouter} from "vue-router"
import { useCounterStore } from '../state/store' //for counting total cart

const UseCount = useCounterStore();

const router = useRouter();

const order = ()=>{
    UseCount.totalCount = 0;
    router.replace('/product/completeTransaction');
}
</script>
