<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "./components/MobileHeader.vue";
import { ref, onMounted } from "vue";

import { useHeaderShowStore } from "./state/mobileHeaderShow";
import { useLanguageStore } from "./state/languageStore";
import BackToTop from 'vue-backtotop';

// dark mode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// dark mode end
const mobileHeaderShow = useHeaderShowStore();

const languageStore = useLanguageStore();

const dropDown = ref(false);

const user_role = ref("");

languageStore.language == "Am";

onMounted(() => {
  user_role.value = localStorage.getItem("role");
  if (localStorage.getItem("lang") == "Am") {
    languageStore.language = "Am";
  } else {
    languageStore.language = "En";
  }
});

const getlanguage = async (ln) => {
  languageStore.language = ln;

  localStorage.setItem("lang", ln);
};
</script>
<template>
  <div class="w-full">
    <div class="text-gray-800 dark:text-white">
      <div class="w-full h-full">
        <div class="inset-x-0 top-0">
          <div
            class="nav sticky top-0 flex items-center text-gray-800 dark:bg-gray-800 bg-green-500 h-15 md:flex md:flex-row"
          >
            <button
              class="md:hidden"
              @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
            >
              ☰
            </button>

            <MobileHeader class="lg:hidden" v-if="mobileHeaderShow.headerShow" />

            <div class="block pl-2">
              <router-link to="/">
                <div class="flex pl-5 cursor-pointer">
                  <img
                    src="./assets/debreEliasLogo.png"
                    class="w-auto h-11"
                    alt="this was logo"
                  />
                </div>
              </router-link>
              <p class="pl-3 dark:text-white text-gray-700"><p v-if="languageStore.language == 'Am'">የግብርና አቅርቦት ማከፋፈያ</p>
              <p v-if="languageStore.language == 'En'">Agriculture Supply</p></p>
            </div>

            <div
              class="md:flex md:flex-row hidden"
              v-if="
                user_role == 'user' ||
                user_role == 'customer' 
              "
            >
              <div class="flex flex-col justify-center items-center">
                <ul
                  class="nav nav-tabs sm:hidden md:flex items-center flex-wrap list-none border-b-0 pl-0 mb-4"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                    >
                      <div class="flex justify-center">
                        <div>
                          <div class="dropdown relative">
                            <button
                              class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                              type="button"
                            >
                              <router-link 
                                to="/"
                                class="font-mono font-bold text-sm dark:text-white"
                                ><p v-if="languageStore.language == 'Am'">መነሻ</p>
                                <p v-if="languageStore.language == 'En'">
                                  Home
                                </p></router-link
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <div class="dropdown relative">
                      <div
                        class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                      >
                        <div>
                          <div class="dropdown relative">
                            <button
                              v-if="user_role =='user'"
                              class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                              type="button"
                            >
                              <router-link
                                to="/product"
                                class="font-mono font-bold text-sm dark:text-white"
                              >
                                <p v-if="languageStore.language == 'Am'">ምርት</p>
                                <p v-if="languageStore.language == 'En'">products</p>
                              </router-link>
                            </button>
                            <button 
                             v-if="user_role == 'customer'"
                              class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                              type="button"
                            >
                              <router-link
                                to="/farmersProduct"
                                class="font-mono font-bold text-sm dark:text-white"
                              >
                                <p v-if="languageStore.language == 'Am'">ምርት</p>
                                <p v-if="languageStore.language == 'En'">products</p>
                              </router-link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <div>
                      <button
                        v-on:click="
                          () => {
                            dropDown = !dropDown;
                          }
                        "
                        class="font-mono font-bold text-sm text-blue-700 dark:text-white"
                      >
                        <P v-if="languageStore.language == 'Am'">መደብር</P>
                        <P v-if="languageStore.language == 'En'">Store</P>
                      </button>

                      <ul
                        :class="{
                          'translate-y-0   duration-300': dropDown,
                          'translate-y-4 invisible duration-75': !dropDown,
                        }"
                        class="absolute top-20 hover:translate-y-0 hover:visible left-30 bg-green-500 px-1 py-2 w-[8rem] rounded shadow-2xl drop-shadow-lg"
                      >
                        <hr />
                        <li
                          class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2"
                        >
                          <RouterLink
                          v-if="user_role == 'user'"
                           to="/product/cart"
                            ><p v-if="languageStore.language == 'Am'">ካርት ገጽ</p>
                            <p v-if="languageStore.language == 'En'">Cart Page</p>
                          </RouterLink>
                          <RouterLink
                          v-if="user_role == 'customer'"
                           to="/product/customer/cart"
                            ><p v-if="languageStore.language == 'Am'">ካርት ገጽ</p>
                            <p v-if="languageStore.language == 'En'">Cart Page</p>
                          </RouterLink>
                        </li>
                        <hr />
                        <li
                          class="px-2 py-1 text-white rounded cursor-pointer hover:translate-x-2"
                        >
                          <RouterLink to="/product/payedProductOrder">
                            <p v-if="languageStore.language == 'Am'">የገዛሁቸው</p>
                            <p v-if="languageStore.language == 'En'">buyed</p>
                          </RouterLink>
                        </li>
                        <hr />
                      </ul>
                    </div>
                  </li>
                  <li
                    class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <RouterLink
                      to="/events"
                      class="font-mono font-bold text-sm dark:text-white"
                    >
                      <p v-if="languageStore.language == 'Am'">ሁነቶች</p>
                      <p v-if="languageStore.language == 'En'">Events</p>
                    </RouterLink>
                  </li>
                  <li
                    class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <router-link
                      to="/about"
                      class="font-mono font-bold text-sm dark:text-white"
                    >
                      <p v-if="languageStore.language == 'Am'">ስለ እኛ</p>
                      <p v-if="languageStore.language == 'En'">About</p>
                    </router-link>
                  </li>
                  <li
                    class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <router-link
                      to="/help"
                      class="font-mono font-bold text-sm dark:text-white"
                      ><p v-if="languageStore.language == 'Am'">እገዛ</p>
                      <p v-if="languageStore.language == 'En'">help</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex">
              <div class="pt-0">
                <button
                  v-if="languageStore.language == 'Am'"
                  @click="getlanguage('En')"
                  class="px-4 text-white dark:text-white"
                >
                <span class="flex gap-1 items-center">
                <span><img class="h-4 w-auto" src="./assets/us-flag.png" alt=""></span>
                <span class="hover:border-b-2 hover:border-l-2">English</span>
              </span>
                </button>
                <button
                  v-if="languageStore.language == 'En'"
                  @click="getlanguage('Am')"
                  class="px-4 text-white dark:text-white"
                >
                <span class="flex gap-1 items-center">
                <span><img class="h-4 w-auto" src="./assets/ehio_flag.png" alt=""></span>
                <span class="hover:border-b-2 hover:border-l-2">አማርኛ</span>
              </span>
                </button>
              </div>
              <div class="flex gap-5 items-center">
                <button @click="toggleDark()" class="h-7 w-7 rounded-full bg-slate-200 text-white dark:text-white">
                  <img v-show="isDark" 
                    src="https://cdn-icons-png.flaticon.com/128/1687/1687686.png"
                    data-src="https://cdn-icons-png.flaticon.com/128/1687/1687686.png"
                    alt="Brightness icon"
                    title="Switch to brightness mode"
                    width="16"
                    height="16"
                    class="hover:scale-100 h-6 w-auto hover:border-l-2 hover:border-b-2"
                    srcset="https://cdn-icons-png.flaticon.com/128/1687/1687686.png 4x"
                  />
                  <span v-show="!isDark" class="flex gap-1 items-center" title="Switch to dark mode">
                    <svg class="fill-current h-6 w-auto hover:border-l-2 hover:border-b-2 text-black" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightlightOutlinedIcon" tabindex="-1" title="NightlightOutlined"><path d="M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2z"></path></svg>
                  </span>
                </button>
              </div>
              <div>
                <Header class="items-end" />
              </div>
            </div>
          </div>
        </div>
        <router-view />
        <Footer />

         <!-- top  -->
         <div class="flex justify-center">
          <back-to-top bottom="15px" right="150px">
           <img src="./assets/top.png" alt="Top" class="h-16 w-16 bg-blue-200 rounded-full">
          </back-to-top>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a.router-link-exact-active {
  color: bisque;
}
</style>
