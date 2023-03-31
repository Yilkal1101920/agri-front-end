<template>
  <div class="absolute flex flex-column bg-white dark:bg-gray-800">
    <div class="flex flex-col justify-center items-center">
      <ul
        class="nav nav-tabs flex flex-col xl:flex-row flex-wrap list-none border-b-0 pl-0"
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          >
            <div class="flex justify-center">
              <div>
                <div class="dropdown relative">
                  <button
                    class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                    type="button"
                    @click.prevent="
                      mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow
                    "
                  >
                    <router-link to="/">መነሻ</router-link>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <div class="dropdown relative">
            <div
              class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
            >
              <div>
                <div class="dropdown relative">
                  <button
                    @click.prevent="
                      mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow
                    "
                    class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                    type="button"
                  >
                    <router-link to="/product">ዉጤቶች</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li
          class="text-blue-600 nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
        >
          <div>
            <button
              v-on:click="
                () => {
                  dropDown = !dropDown;
                }
              "
            >
              መደብር
            </button>

            <ul
              :class="{
                'translate-y-0   duration-300': dropDown,
                'translate-y-4 invisible duration-75': !dropDown,
              }"
              class="absolute top-20 hover:translate-y-0 hover:visible left-30 bg-green-500 px-1 py-2 w-[8rem] rounded shadow-2xl drop-shadow-lg"
            >
              <li class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2">
                <router-link to="/login">የኔ አካዉንት</router-link>
              </li>
              <hr />
              <li class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2">
                <RouterLink to="/product/cart">ካርት ገጽ </RouterLink>
              </li>
              <hr />
              <li class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2">
                <RouterLink to="/product/cart">ማረጋገጫ ገጽ</RouterLink>
              </li>
              <hr />
              <li class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2">
                የወደድካቸው
              </li>
              <hr />
              <li class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2">
                <RouterLink to="/product/order">ግዥ ጠይቅ</RouterLink>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
        >
          <RouterLink to="/events">ክስተቶች</RouterLink>
        </li>
        <li
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
        >
          <router-link to="/about">ስለኛ</router-link>
        </li>
        <li
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
        >
          <router-link to="/help">እገዛ</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useHeaderShowStore } from "../state/mobileHeaderShow";

const mobileHeaderShow = useHeaderShowStore();

const dropDown = ref(false);

// const dropMore = () => {
//   dropDown.value = !dropDown.value;
//   mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow;
// };
</script>
