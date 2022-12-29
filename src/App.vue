<script setup>
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
</script>
<template>
<div >
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="bg-white">
    <div class="w-screen h-screen">
        <div class="inset-x-0 top-0">
            <Header />
            <div class="nav bg-green-500 h-15 text-white">
                <div class="flex justify-left pl-5"> <img src="https://i.ibb.co/2cVN8Rb/greenn.png" class="w-20 h-20"></div>
                <div class="flex flex-col justify-center items-center">
                    <ul class="nav nav-tabs flex flex-col xl:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
                                <div class="flex justify-center">
                                    <div>
                                        <div class="dropdown relative">
                                            <button class="
          dropdown-toggle
          leading-tight
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        " type="button" id="home" data-bs-toggle="dropdown" aria-expanded="false">
                                                <router-link to="/">Home</router-link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <div class="dropdown relative">
                                <div class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
                                    <div>
                                        <div class="dropdown relative">
                                            <button v-on:click="showLatest = !showLatest" class="
          dropdown-toggle
          leading-tight
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        " type="button" id="home" data-bs-toggle="dropdown" aria-expanded="false">
                                                <router-link to="/product">Products</router-link>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item" role="presentation">
                            <div class="dropdown relative">
                                <div class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
                                    <div>
                                        <div class="dropdown relative">
                                            <button v-on:click="showAbout = !showAbout" class="
          dropdown-toggle
          leading-tight
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        " type="button" id="home" data-bs-toggle="dropdown" aria-expanded="false">
                                                <router-link to="/about">About</router-link>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    ">
                            <router-link to="/help">Help</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view />
        <Footer />
    </div>
</div>
</div>
</template>
<script setup>
</script>
<style scoped>

</style>
