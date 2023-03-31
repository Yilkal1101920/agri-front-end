<template>
  <div class="w-full h-full">
    <div class="bg-green-50 dark:bg-gray-800 pb-6">
      <div class="grid h-full w-full mx-8">
        <div class="gap-7 flex flex-col lg:flex lg:flex-row">
          <div class="text-black dark:text-white w-60 p-10 lg:p-0">
            <div class=" ">
              <h1><b>Filter by Price</b></h1>
              <div class="">
                <div class="flex flex-row">
                  <input
                    type="text"
                    v-model="filterByPrice"
                    class="py-2 rounded-l-lg border border-green-300 text-gray-800 dark:text-gray-800"
                  />
                  <button
                    @click.prevent="getProductByPrice"
                    class="bg-green-400 hover:text-white hover:bg-green-700 px-3 rounded-r-lg"
                  >
                    Filter
                  </button>
                </div>
                <p>price: 0-50000</p>
              </div>
            </div>
            <div class="">
              <h1 class="text-2xl py-3" v-if="languageStore.language == 'Am'">
                የመደብ ዝርዝር
              </h1>
              <h1 class="text-2xl py-3" v-if="languageStore.language == 'En'">
                Category List
              </h1>
              <ul class="">
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="pMore = !pMore">
                    <h1
                      v-if="languageStore.language == 'Am'"
                      class="text-gray-800 dark:text-white"
                    >
                      የግብርና ዉጤቶች
                    </h1>
                    <h1
                      v-if="languageStore.language == 'En'"
                      class="text-gray-800 dark:text-white"
                    >
                      Agricultural Products
                    </h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>

                  <ul v-if="pMore" class="p-3">
                    <li
                      @click.prevent="getProductByName('Teff')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ጤፍ</p>
                      <p v-if="languageStore.language == 'En'">Teff</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Wheate')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ስንዴ</p>
                      <p v-if="languageStore.language == 'En'">Wheate</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Maize')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">በቆሎ</p>
                      <p v-if="languageStore.language == 'En'">Maize</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Nuggets')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ኑግ</p>
                      <p v-if="languageStore.language == 'En'">Nug</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="mMore = !mMore">
                    <h1 v-if="languageStore.language == 'Am'">የግብርና መሳሪያዎች</h1>
                    <h1 v-if="languageStore.language == 'En'">Agricultural Materials</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
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
                  <button class="flex flex-row" @click.prevent="sMore = !sMore">
                    <h1 v-if="languageStore.language == 'Am'">ምርጥ ዘር</h1>
                    <h1 v-if="languageStore.language == 'En'">Selected Seed</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul v-if="sMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Wheate Seed')"
                    >
                      <p v-if="languageStore.language == 'Am'">ስንዴ</p>
                      <p v-if="languageStore.language == 'En'">Wheate</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Maize Seed')"
                    >
                      <p v-if="languageStore.language == 'Am'">በቆሎ</p>
                      <p v-if="languageStore.language == 'En'">Maize</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="fMore = !fMore">
                    <h1 v-if="languageStore.language == 'Am'">ማዳበሪያ</h1>
                    <h1 v-if="languageStore.language == 'En'">Fertlizer</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul v-if="fMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('UREA')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዩሪያ</p>
                      <p v-if="languageStore.language == 'En'">URIA</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('DAP')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዳፕ</p>
                      <p v-if="languageStore.language == 'En'">DAP</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="osMore = !osMore">
                    <h1 v-if="languageStore.language == 'Am'">ዘይትና ስኳር</h1>
                    <h1 v-if="languageStore.language == 'En'">Sugar And Oil</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul v-if="osMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Oil')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዘይት</p>
                      <p v-if="languageStore.language == 'En'">Oil</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Sugar')"
                    >
                      <p v-if="languageStore.language == 'Am'">ስኳር</p>
                      <p v-if="languageStore.language == 'En'">Sugar</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="">
                    <h1 v-if="languageStore.language == 'Am'">ሌሎች</h1>
                    <h1 v-if="languageStore.language == 'En'">Others</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="getFarmersProduct">
                    <h1 v-if="languageStore.language == 'Am'">ከገበሬዎች ይግዙ</h1>
                    <h1 v-if="languageStore.language == 'En'">Buy From Farmers</h1>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-4 p-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex">
            <div class="lg:p-2">
              <div class="container">
                <div
                  class="text-blue-500 flex flex-row flex-wrap gap-3 lg:justify-center"
                >
                  <div v-for="item in datas" :key="item.product_id">
                    <div
                      v-if="
                        item.amount > 0 &&
                        item.kebele == kebele_address &&
                        item.marketState == 1 &&
                        item.postedForMarket != 0
                      "
                    >
                      <div class="flex flex-col">
                        <div
                          class="dark:text-white dark:shadow-md dark:shadow-white flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md"
                        >
                          <div
                            class="hover:bg-blue-300"
                            @click.prevent="getProductById(item.product_id)"
                          >
                            <div class="w-full h-32 hover:bg-blue-300">
                              <div class="flex justify-end">
                                <svg
                                  class="w-5 h-5 fill-current text-yellow-600"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="FavoriteBorderIcon"
                                >
                                  <path
                                    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                                  ></path>
                                </svg>
                              </div>
                              <img
                                class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                                :src="item.image"
                                alt="This was image"
                              />
                            </div>
                          </div>
                          <p class="w-full flex justify-center">{{ item.title }}</p>
                          <div
                            v-for="productRate in ratingAndFavoriteData"
                            :key="productRate.favorite_id"
                          >
                            <div
                              v-if="
                                productRate.user_email == order_email &&
                                productRate.product_id == item.product_id
                              "
                              class="flex justify-center"
                            >
                              <button class="hover:bg-yellow-300">
                                <svg
                                  v-if="productRate.star1 == 1"
                                  @click.prevent="productRate1(item.product_id)"
                                  class="w-5 h-5 fill-current text-yellow-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                                <svg
                                  v-else
                                  @click.prevent="productRate1(item.product_id)"
                                  class="w-5 h-5 fill-current text-blue-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                              </button>
                              <button class="hover:bg-yellow-300">
                                <svg
                                  v-if="productRate.star2 == 1"
                                  @click.prevent="productRate2(item.product_id)"
                                  class="w-5 h-5 fill-current text-yellow-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                                <svg
                                  v-else
                                  @click.prevent="productRate2(item.product_id)"
                                  class="w-5 h-5 fill-current text-blue-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                              </button>
                              <button class="hover:bg-yellow-300">
                                <svg
                                  v-if="productRate.star3 == 1"
                                  @click.prevent="productRate3(item.product_id)"
                                  class="w-5 h-5 fill-current text-yellow-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                                <svg
                                  v-else
                                  @click.prevent="productRate3(item.product_id)"
                                  class="w-5 h-5 fill-current text-blue-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                              </button>
                              <button class="hover:bg-yellow-300">
                                <svg
                                  v-if="productRate.star4 == 1"
                                  @click.prevent="productRate4(item.product_id)"
                                  class="w-5 h-5 fill-current text-yellow-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                                <svg
                                  v-else
                                  @click.prevent="productRate4(item.product_id)"
                                  class="w-5 h-5 fill-current text-blue-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                              </button>
                              <button class="hover:bg-yellow-300">
                                <svg
                                  v-if="productRate.star5 == 1"
                                  @click.prevent="productRate5(item.product_id)"
                                  class="w-5 h-5 fill-current text-yellow-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                                <svg
                                  v-else
                                  @click.prevent="productRate5(item.product_id)"
                                  class="w-5 h-5 fill-current text-blue-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="StarIcon"
                                >
                                  <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            v-if="
                              rateShow != 0 &&
                              productIdForRate != 0 &&
                              verfying_email == order_email
                            "
                            class="flex justify-center"
                          >
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate1(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate2(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate3(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate4(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate5(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                          </div>

                          <div
                            v-if="rateShow != 0 && productIdForRate == 0"
                            class="flex justify-center"
                          >
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate1(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate2(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate3(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate4(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                            <button class="hover:bg-yellow-300">
                              <svg
                                @click.prevent="productRate5(item.product_id)"
                                class="w-5 h-5 fill-current text-blue-500"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon"
                              >
                                <path
                                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                ></path>
                              </svg>
                            </button>
                          </div>

                          <div class="flex justify-center">
                            <div>{{ item.price }}</div>
                            <div class="pl-1">ብር ቫት ጨምሮ</div>
                          </div>
                          <div class="flex flex-row">
                            <div>
                              <input
                                v-if="languageStore.language == 'Am'"
                                class="border text-gray-800 dark:text-green-800 rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                                type="number"
                                v-model="count2[item.product_id]"
                                placeholder="መጠን"
                              />
                              <input
                                v-if="languageStore.language == 'En'"
                                class="border text-gray-800 dark:text-green-800 rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                                type="number"
                                v-model="count2[item.product_id]"
                                placeholder="amount"
                              />
                            </div>
                            <div>
                              <button
                                @click.prevent="
                                  checkInput(item.product_id, item.post_email)
                                "
                                class="bg-green-400 hover:bg-green-700 hover:text-white ml-1 border rounded-lg"
                              >
                                <p v-if="languageStore.language == 'Am'">ወደ ካርት ጨምር</p>
                                <p v-if="languageStore.language == 'En'">add to cart</p>
                              </button>
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
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useCounterStore } from "../state/store"; //counting sellected cart

import { useSelectStore } from "../state/selectProStore";
import { useRouter } from "vue-router";

import { useFilterStore } from "../state/filterStore"; //for filtering purpose
import Swal from "sweetalert2";

import { useLanguageStore } from "../state/languageStore";

const languageStore = useLanguageStore();

var usefilter = useFilterStore();

const router = useRouter();

const count2 = ref([]); //count in v-model
// var nOrder = ref(0);

var filterByPrice = ref(0); // use this variable for filtering purpose

var useCounter = useCounterStore();
var useSelector = useSelectStore();
const pMore = ref(false);
const mMore = ref(false);
const osMore = ref(false);
const fMore = ref(false);
const sMore = ref(false);
const datas = ref([]);
const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const idforVmodell = ref(0);
const productName = ref("");

const transactProduct = ref("");
const transactionEmail = ref("");
const totalOrderQuantity = ref("");

const kebele_address = localStorage.getItem("kebele");
const order_email = localStorage.getItem("user_email"); // the email of user who orders the product to add cart
var verfying_email = localStorage.getItem("user_email");
const pro_id = ref(0); ///the primary key id of the product
const orderRestrictAmount = ref(0);
const updateOrderAmount = ref(0);

const RatingAndFavorite = ref([]);
const rate1 = ref(0);
const rate2 = ref(0);
const rate3 = ref(0);
const rate4 = ref(0);
const rate5 = ref(0);
const productFavorite = ref(0);
const starNumber = ref(0);

const star1 = ref(0);
const star2 = ref(0);
const star3 = ref(0);
const star4 = ref(0);
const star5 = ref(0);

const order_date = ref("");
const rateShow = ref(0);

const ratingAndFavoriteData = ref([]);

const productIdForRate = ref(0);

const patent_email = ref("");

const day = ref("");
const dayName = ref("");
const month = ref("");
const monthName = ref("");

const checkInput = async (id, email) => {
  patent_email.value = email;
  localStorage.setItem("seller", "mahiberat");
  if (count2.value[id] > 0) {
    getProductByIdforVmodel(id);
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የተሳሳተ ቁጥር አስገብተዋል!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  }
};

const getProductByIdforVmodel = async (id) => {
  // get product by id for product_id

  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
  } catch (err) {}
  checkAmount(idforVmodell.value);
};

const productRate1 = async (id) => {
  starNumber.value = 1;
  await svgClicked(id);
};
const productRate2 = async (id) => {
  starNumber.value = 2;
  await svgClicked(id);
};
const productRate3 = async (id) => {
  starNumber.value = 3;
  await svgClicked(id);
};
const productRate4 = async (id) => {
  starNumber.value = 4;
  await svgClicked(id);
};
const productRate5 = async (id) => {
  starNumber.value = 5;
  await svgClicked(id);
};
const svgClicked = async (id) => {
  try {
    await getRatingAndFavoriteByUserEmailAndProductId(order_email, id);
    if (rate1.value == undefined) {
      await insertRatingAndFavorite(id);
    } else {
    }
  } catch (err) {
    console.log(err);
  }
};

const totalOrderedCart = () => {
  //total  ordered carts calculation
  useCounter.inputValue = count2.value[idforVmodell.value];
  useCounter.totalCart();
};

const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};

const getRatingAndFavorite = async () => {
  try {
    const favoriteAndRate = await axios.get(
      "http://localhost:5000/products/ratingAndFavorite"
    );
    ratingAndFavoriteData.value = favoriteAndRate.data;
    for (let x in ratingAndFavoriteData.value) {
      if (order_email == ratingAndFavoriteData.value[x].user_email) {
        productIdForRate.value = ratingAndFavoriteData.value[x].product_id;
        verfying_email = ratingAndFavoriteData.value[x].user_email;
      }
      if (
        order_email != ratingAndFavoriteData.value[x].user_email &&
        productIdForRate.value == 0
      ) {
        rateShow.value = rateShow.value + 1;
      }
    }
  } catch (err) {}
};

onMounted(() => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
    router.replace("/login");
  }
  getProducts();
  getRatingAndFavorite();
});

const getProductByPrice = () => {
  //show products by price
  usefilter.filterStore = filterByPrice.value;
  localStorage.setItem("filterByPrice", filterByPrice.value);
  router.replace("/product/byPrice");
};

const getProductByName = (name) => {
  usefilter.filterByName = name;
  localStorage.setItem("filterByName", name);
  router.replace("/product/byName");
};

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/product/selectedProduct`);
  } catch (err) {}
};

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT

  if (!localStorage.getItem("user_email")) {
    alert("login first to order product");
    router.replace("/login");
  } else {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`); /////CALCULATE UN ORDERED AMOUNT
      numberOfItems.value = response.data.postedForMarket;
      productName.value = response.data.title;

      console.log(response.data.postedForMarket);
      console.log(numberOfItems.value);
      if (
        numberOfItems.value >= count2.value[idforVmodell.value] &&
        count2.value[idforVmodell.value] >= 0
      ) {
        updatedAmount.value =
          response.data.postedForMarket - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;
        await getOrderRestrictionQuantity(pro_id.value, kebele_address);
        if (count2.value[idforVmodell.value] <= orderRestrictAmount.value) {
          await getTransactionHistoryByEmailAndProductName(pro_id.value, order_email);
          if (transactProduct.value == undefined || transactionEmail.value == undefined) {
            updateProductById(id);
            addToTransaction();
          } else {
            if (
              count2.value[idforVmodell.value] <=
              orderRestrictAmount.value - totalOrderQuantity.value
            ) {
              updateProductById(id);
              updateTransactionByEmailAndProductName(pro_id.value, order_email);
            } else {
              if (
                count2.value[idforVmodell.value] >
                  orderRestrictAmount.value - totalOrderQuantity.value &&
                totalOrderQuantity.value < orderRestrictAmount.value
              ) {
                const remainOrder = orderRestrictAmount.value - totalOrderQuantity.value;
                alert("You can order a maximum of " + remainOrder);
              } else {
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም",
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                    // Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft();
                    }, 100);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                  },
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    // console.log("I was closed by the timer");
                  }
                });
              }
            }
          }
        } else {
          if (orderRestrictAmount.value == undefined) {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "ይቅርታ ለማዘህ ገደብ ስላልተሰጠው ገደብ እስቂሰጠው ትንሽ ይጠብቁ",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "You can not order more than " + orderRestrictAmount.value,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      } else {
        alert(
          "You can only order from 0 upto " +
            numberOfItems.value +
            " items please re-order again"
        );
      }
    } catch (err) {}
  }
};

const getOrderRestrictionQuantity = async (name, kebele) => {
  const orderRestriction = await axios.get(
    `http://localhost:5000/orderRestriction/${name}/${kebele}`
  );

  orderRestrictAmount.value = orderRestriction.data.allowed_quantity;
};

const getTransactionHistoryByEmailAndProductName = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );

  transactProduct.value = transactionHistory.data.product_id;
  transactionEmail.value = transactionHistory.data.transaction_email;
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
};
const updateProductById = async (id) => {
  // nOrder = ;
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      ///update  amount and norders in agri_product table
      postedForMarket: updatedAmount.value,
      state: 1,
      nOrders: count2.value[idforVmodell.value],
    });
    await getOrderByUserEmailAndProductId(order_email);
    await getProducts();
    window.location.reload();
  } catch (err) {}
  totalOrderedCart();
};

const updateTransactionByEmailAndProductName = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: count2.value[idforVmodell.value] + totalOrderQuantity.value,
    });
  } catch (err) {}
};

const getOrderByUserEmailAndProductId = async (email) => {
  try {
    const getOrder = await axios.get(
      `http://localhost:5000/order/email/${email}/${pro_id.value}`
    );
    if (
      getOrder.data.product_id == pro_id.value &&
      getOrder.data.user_email == email &&
      getOrder.data.payStatus == 0
    ) {
      updateOrderAmount.value = getOrder.data.nOrders + count2.value[idforVmodell.value];
      await updateOrder(email, pro_id.value);
    } else if (
      getOrder.data.product_id == pro_id.value &&
      getOrder.data.user_email == email &&
      getOrder.data.payStatus == 1
    ) {
      await getOrderByUserEmailAndProductIdAndPaymentStatus(email);
    } else {
      await addOrder();
    }
  } catch (err) {}
};

const getOrderByUserEmailAndProductIdAndPaymentStatus = async (email) => {
  try {
    const getOrderData = await axios.get(
      `http://localhost:5000/order/email/payment/${email}/${pro_id.value}/${0}`
    );
    if (
      getOrderData.data.product_id == pro_id.value &&
      getOrderData.data.user_email == email &&
      getOrderData.data.payStatus == 0
    ) {
      updateOrderAmount.value =
        getOrderData.data.nOrders + count2.value[idforVmodell.value];
      await updateOrder(email, pro_id.value);
    } else {
      await addOrder();
    }
  } catch (err) {}
};

const updateOrder = async (email, id) => {
  order_date.value = new Date();
  try {
    await axios.put(`http://localhost:5000/order/emailAndId/${email}/${id}`, {
      nOrders: updateOrderAmount.value,
      edited_date: order_date.value,
    });
  } catch (err) {}
};

const addOrder = async () => {
  order_date.value = new Date();
  try {
    await axios.post("http://localhost:5000/order", {
      patent_email: patent_email.value,
      user_email: order_email,
      nOrders: count2.value[idforVmodell.value],
      totalCart: useCounter.totalCount,
      product_id: pro_id.value,
      ordered_date: order_date.value,
      edited_date: order_date.value,
      order_kebele: kebele_address,
    });
    await insertReport();
  } catch (err) {}
};

const addToTransaction = async () => {
  try {
    await axios.post("http://localhost:5000/transactionHistory", {
      transaction_email: order_email,
      product_id: pro_id.value,
      NoOrders: count2.value[idforVmodell.value],
      transaction_kebele: kebele_address,
    });
  } catch (err) {}
};

const getRatingAndFavoriteByUserEmailAndProductId = async (email, id) => {
  const ratingAndFavorite = await axios.get(
    `http://localhost:5000/products/ratingAndFavorite/${email}/${id}`
  );
  RatingAndFavorite.value = ratingAndFavorite.data;
  rate1.value = ratingAndFavorite.data.star1;
  rate2.value = ratingAndFavorite.data.star2;
  rate3.value = ratingAndFavorite.data.star3;
  rate4.value = ratingAndFavorite.data.star4;
  rate5.value = ratingAndFavorite.data.star5;
  productFavorite.value = ratingAndFavorite.data.favorite;
};
const insertRatingAndFavorite = async (productId) => {
  await checkStarNumber();
  try {
    await axios.post("http://localhost:5000/products/ratingAndFavorite", {
      user_email: order_email,
      product_id: productId,
      star1: star1.value,
      star2: star2.value,
      star3: star3.value,
      star4: star4.value,
      star5: star5.value,
      favorite: 0,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateRatingAndFavorite = async (productId) => {
  await checkStarNumber();
  try {
    await axios.put(`http://localhost:5000/products/ratingAndFavorite/${email}/${id}`, {
      user_email: order_email,
      product_id: productId,
      star1: star1.value,
      star2: star2.value,
      star3: star3.value,
      star4: star4.value,
      star5: star5.value,
      favorite: 0,
    });
  } catch (err) {
    console.log(err);
  }
};

const checkStarNumber = async () => {
  if (starNumber.value == 1) {
    star1.value = 1;
    star2.value = 0;
    star3.value = 0;
    star4.value = 0;
    star5.value = 0;
  }
  if (starNumber.value == 2) {
    star1.value = 1;
    star2.value = 1;
    star3.value = 0;
    star4.value = 0;
    star5.value = 0;
  }
  if (starNumber.value == 3) {
    star1.value = 1;
    star2.value = 1;
    star3.value = 1;
    star4.value = 0;
    star5.value = 0;
  }
  if (starNumber.value == 4) {
    star1.value = 1;
    star2.value = 1;
    star3.value = 1;
    star4.value = 1;
    star5.value = 0;
  }
  if (starNumber.value == 5) {
    star1.value = 1;
    star2.value = 1;
    star3.value = 1;
    star4.value = 1;
    star5.value = 1;
  }
};

const getFarmersProduct = async () => {
  localStorage.setItem("seller", "farmer");
  router.replace("/farmersProduct");
};

const insertReport = async () => {
  try {
    order_date.value = new Date();
    const date = new Date(order_date.value);
    day.value = date.getDay();
    if (day.value == 0) {
      dayName.value = "Monday";
    }
    if (day.value == 1) {
      dayName.value = "Tuesday";
    }
    if (day.value == 2) {
      dayName.value = "Wednsday";
    }
    if (day.value == 3) {
      dayName.value = "Tursday";
    }
    if (day.value == 4) {
      dayName.value = "Friday";
    }
    if (day.value == 5) {
      dayName.value = "Saturday";
    }
    if (day.value == 6) {
      dayName.value = "Sunday";
    }

    month.value = date.getMonth();

    if (month.value == 0) {
      monthName.value = "January";
    }
    if (month.value == 1) {
      monthName.value = "February";
    }
    if (month.value == 2) {
      monthName.value = "March";
    }
    if (month.value == 3) {
      monthName.value = "April";
    }
    if (month.value == 4) {
      monthName.value = "May";
    }
    if (month.value == 5) {
      monthName.value = "June";
    }
    if (month.value == 6) {
      monthName.value = "Junly";
    }
    if (month.value == 7) {
      monthName.value = "Ogust";
    }
    if (month.value == 8) {
      monthName.value = "September";
    }
    if (month.value == 9) {
      monthName.value = "October";
    }
    if (month.value == 10) {
      monthName.value = "November";
    }
    if (month.value == 11) {
      monthName.value = "December";
    }
    await axios.post("http://localhost:5000/report", {
      reporter_email: "yilkal@gmail.com",
      product_name: "teff",
      quantity: 5,
      report_owner: "yemezegn",
      report_status: "order",
      transaction: "no",
      transaction_in_birr: 0,
      day: dayName.value,
      monthName: monthName.value,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
    });
  } catch (err) {
    console.log(err);
  }
};
</script>
