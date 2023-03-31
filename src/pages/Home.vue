<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <div class="pb-6 w-full h-full text-white font-bold justify-center items-center flex">
      <div class="inset-y-0 w-full">
        <div class="flex flex-col justify-center">
          <img class="h-80 w-full" src="https://i.ibb.co/DrQ8jxn/OIP.jpg" />
          <h1
            class="flex dark:text-white justify-center text-3xl lg:text-6xl text-blue-500 pb-10 absolute"
            v-if="languageStore.language == 'Am'"
          >
            የደብረ ኤልያስ ወረዳ ግብርና ቢሮ
          </h1>
          <h1
            class="flex w-[55%] pl-5 font-bold font-mono dark:text-white justify-center text-3xl lg:text-6xl text-blue-500 pb-10 absolute"
            v-if="languageStore.language == 'En'"
          >
            D/Elias Agricultural Office
          </h1>
        </div>
        <div class="flex justify-center text-blue-600 p-2 m-3">
          <h1
            v-if="languageStore.language == 'Am'"
            class="text-2xl text-center dark:text-white"
          >
            ለሽያጭ የቀረቡ የግብርና ግብአቶች
          </h1>
          <h1
            v-if="languageStore.language == 'En'"
            class="text-2xl text-center dark:text-white"
          >
            Products in the market
          </h1>
        </div>
        <div class="flex product">
          <div class="container flex">
            <div class="text-blue-500 flex flex-row flex-wrap gap-3 justify-center">
              <div class="" v-for="item in datas" :key="item.product_id">
                <div
                  v-if="
                    item.amount > 0 &&
                    !(
                      item.email != undefined &&
                      item.email != order_email &&
                      CPID == 1
                    ) &&
                    item.marketState == 1 &&
                    item.postedForMarket != 0
                  "
                >
                  <div class="flex flex-col">
                    <div
                      class="flex text-blue-600 dark:text-white flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md dark:shadow-md dark:shadow-white"
                    >
                      <div
                        class="w-full h-40 hover:bg-blue-300"
                        @click.prevent="getProductById(item.product_id)"
                      >
                        <div class="flex flex-row">
                          <p class="">{{ item.kebele }} 
                          <p v-if="languageStore.language == 'Am'">ቀበሌ</p>
                          <p v-if="languageStore.language == 'En'">Kebele</p>
                          </p>
                          <div class="pl-24">
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
                        </div>
                        <img
                          class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                          :src="item.image"
                          alt="image"
                        />
                      </div>
                      <p class="w-full flex justify-center">
                        በ {{ item.kebele }} ቀበሌ ማህበራት ለሽያጭ የቀረበ {{ item.title }}
                      </p>

                      <div>
                        <div class="flex items-center justify-center">
                          <svg
                            v-if="
                              (item.favorite_no == 1 ||
                                item.favorite_no == 2 ||
                                item.favorite_no == 3 ||
                                item.favorite_no == 4 ||
                                item.favorite_no == 5) &&
                              item.email == order_email
                            "
                            @click.prevent="star1(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            @click.prevent="star1(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>

                          <svg
                            v-if="
                              (item.favorite_no == 2 ||
                                item.favorite_no == 3 ||
                                item.favorite_no == 4 ||
                                item.favorite_no == 5) &&
                              item.email == order_email
                            "
                            @click.prevent="star2(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="item.favorite_no == undefined"
                            @click.prevent="star2(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="
                              item.favorite_no != undefined && item.email != order_email
                            "
                            @click.prevent="star2(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            @click.prevent="star2(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>

                          <svg
                            v-if="
                              (item.favorite_no == 3 ||
                                item.favorite_no == 4 ||
                                item.favorite_no == 5) &&
                              item.email == order_email
                            "
                            @click.prevent="star3(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="item.favorite_no == undefined"
                            @click.prevent="star3(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="
                              item.favorite_no != undefined && item.email != order_email
                            "
                            @click.prevent="star3(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            @click.prevent="star3(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>

                          <svg
                            v-if="
                              (item.favorite_no == 4 || item.favorite_no == 5) &&
                              item.email == order_email
                            "
                            @click.prevent="star4(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="item.favorite_no == undefined"
                            @click.prevent="star4(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="
                              item.favorite_no != undefined && item.email != order_email
                            "
                            @click.prevent="star4(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            @click.prevent="star4(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>

                          <svg
                            v-if="item.favorite_no == 5 && item.email == order_email"
                            @click.prevent="star5(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="item.favorite_no == undefined"
                            @click.prevent="star5(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else-if="
                              item.favorite_no != undefined && item.email != order_email
                            "
                            @click.prevent="star5(item.product_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            @click.prevent="star5(item.favorite_id)"
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <div class="flex justify-center">
                        <div>{{ item.price }}</div>
                        <div class="pl-1">
                          <p v-if="languageStore.language == 'Am'">ብር/{{item.measurement}}</p>
                          <p v-if="languageStore.language == 'En'">Birr/{{item.measurement}}</p>
                        </div>
                      </div>
                      <div class="flex gap-3">
                        <input
                          v-if="languageStore.language == 'Am'"
                          type="number"
                          name=""
                          id=""
                          class="border text-gray-800 dark:text-gray-800 rounded-sm border-green-300 w-20 hover:shadow-md hover:shadow-green-300"
                          placeholder="መጠን"
                          v-model="count2[item.product_id]"
                        />
                        <input
                          v-if="languageStore.language == 'En'"
                          type="number"
                          name=""
                          id=""
                          class="border text-gray-800 dark:text-gray-800 rounded-sm border-green-300 w-20 hover:shadow-md hover:shadow-green-300"
                          placeholder="amount"
                          v-model="count2[item.product_id]"
                        />
                        <button
                          class="bg-green-400 p-1 border rounded-lg hover:bg-green-700 hover:text-white"
                          @click.prevent="checkInput(item.product_id, item.post_email)"
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
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import { useRouter } from "vue-router";

import { useCounterStore } from "../state/store"; //counting sellected cart
import { useSelectStore } from "../state/selectProStore";
// sweetalert start

import Swal from "sweetalert2";
// sweetalert end here

import { useLanguageStore } from "../state/languageStore";

const router = useRouter();

var useCounter = useCounterStore();
var useSelector = useSelectStore();

const languageStore = useLanguageStore();

const datas = ref([]);
const cpids = ref([]);

const count2 = ref([]); //count in v-model
const idforVmodell = ref(0);

const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const productName = ref("");
const orderRestrictAmount = ref(0);

const rateCounter = ref(0);
const star = ref(0);

const countProductItemDisplay = ref([]);
const CPID = ref(0);

const transactProduct = ref("");
const transactionEmail = ref("");
const totalOrderQuantity = ref("");

const order_email = localStorage.getItem("user_email"); // the email of user who orders the product to add cart
const kebele = localStorage.getItem("kebele");

const pro_id = ref(0); ///the primary key id of the product
const check_kebele = ref("");
const productData = ref("");

const updateOrderAmount = ref(0);
const order_date = ref("");

const patent_email = ref("");

onMounted(async () => {
  try {
    // const cpid = await axios.get("http://localhost:5000/orders");
    // datas.value = response.data;

    const response = await axios.get("http://localhost:5000/productsFavorite");
    datas.value = response.data;
    await getCPID();
  } catch (err) {}
});

const getCPID = async () => {
  try {
    const cpidresponse = await axios.get("http://localhost:5000/CPID");
    cpids.value = cpidresponse.data;
    console.log(cpids.value);
  } catch (err) {}
};

const checkInput = async (id, seller_email) => {
  patent_email.value = seller_email;
  localStorage.setItem("seller", "mahiberat");
  if (count2.value[id] > 0) {
    await getProductByIdforVmodel(id);
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
  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
    check_kebele.value = idforVmodel.data.kebele;
  } catch (err) {}
  if (check_kebele.value == kebele) {
    await checkAmount(idforVmodell.value);
  } else {
    // alert("you can not order other than your kebele");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ከምትገለገልበት የገበሬ ማህበራት ውጭ ማዘዝ አትችልም!",
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
    // sweetalert end
  }
};

const getProductByProductId = async (id) => {
  const userInfo = await axios.get(`http://localhost:5000/products/${id}`);
  productData.value = userInfo.data;
  if (productData.value.kebele == kebele) {
    await getRateByProductId(id);
  } else if (productData.value.kebele == undefined) {
    await getRateByProductId(id);
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "Rate ለመስጠት የማሂበራቱ ተጠቃሚ መሆን አለብዎ!",
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

const getRateByProductId = async (id) => {
  try {
    const rate = await axios.get(`http://localhost:5000/favorite/${id}`);
    rateCounter.value = rate.data.favorite_no;
    console.log(rate.data);
    // console.log(rateCounter.value);
    if (
      (rateCounter.value == 1 ||
        rateCounter.value == 2 ||
        rateCounter.value == 3 ||
        rateCounter.value == 4 ||
        rateCounter.value == 5) &&
      rate.data.email == order_email
    ) {
      await updateProductRate(id);
    } else {
      await insertProductRate(id);
    }
    window.location.reload();
  } catch (err) {}
};

const getRateByProductIdToCountnoofDisplay = async (id) => {
  try {
    const counter = await axios.get(`http://localhost:5000/rate/${id}`);
    countProductItemDisplay.value = counter.data;
    // console.log(counter.data);
    console.log(countProductItemDisplay.value);
    if (
      countProductItemDisplay.value.email != undefined &&
      countProductItemDisplay.value.email != order_email
    ) {
      CPID.value = 1;
     await insertCPID(id);
    }
    console.log(x);
  } catch (err) {}
};

const insertCPID = async (id) => {
  try {
    await axios.post("http://localhost:5000/CPID", {
      c_email: order_email,
      CPID: 1,
      cproduct_id: id,
    });
  } catch (err) {}
};

const insertProductRate = async (id) => {
 await getRateByProductIdToCountnoofDisplay(id);
  try {
    await axios.post("http://localhost:5000/favorite", {
      email: order_email,
      favorite_no: star.value,
      fproduct_id: id,
    });
  } catch (err) {}
};

const updateProductRate = async (id) => {
  try {
    await axios.put(`http://localhost:5000/favorite/${id}`, {
      favorite_no: star.value,
    });
  } catch (err) {}
};

const star1 = async (id) => {
  star.value = 1;
  await svgClicked(id);
};
const star2 = async (id) => {
  star.value = 2;
  await svgClicked(id);
};
const star3 = async (id) => {
  star.value = 3;
  await svgClicked(id);
};
const star4 = async (id) => {
  star.value = 4;
  await svgClicked(id);
};
const star5 = async (id) => {
  star.value = 5;
  await svgClicked(id);
};

const svgClicked = async (id) => {
  console.log("rate clicked");
  console.log("clicked");
  if (order_email == undefined || order_email == null) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "Rate ለመስጠት መጀመሪያ መመዝገብ አለብዎ!",
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
  } else {
    await getProductByProductId(id);
  }

  // window.location.reload();
};

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT
  if (!localStorage.getItem("user_email")) {
    // alert("login first to order product");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ለማዘዝ መጀመሪያ በመለያ ግባ!",
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
  } else {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      numberOfItems.value = response.data.postedForMarket;
      productName.value = response.data.title;
      if (
        numberOfItems.value >= count2.value[idforVmodell.value] &&
        count2.value[idforVmodell.value] >= 0
      ) {
        updatedAmount.value =
          response.data.postedForMarket - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;

        await getOrderRestrictionQuantity(pro_id.value, kebele);

        if (count2.value[idforVmodell.value] <= orderRestrictAmount.value) {
          await getTransactionHistoryByEmailAndProductName(
            pro_id.value,
            order_email
          );
          if (transactProduct.value == undefined || transactionEmail.value == undefined) {
           await updateProductById(id);
           await addToTransaction();
          } else {
            if (
              count2.value[idforVmodell.value] <=
              orderRestrictAmount.value - totalOrderQuantity.value
            ) {
             await updateProductById(id);
             await updateTransactionByEmailAndProductName(pro_id.value, order_email);
            } else {
              if (
                count2.value[idforVmodell.value] >
                  orderRestrictAmount.value - totalOrderQuantity.value &&
                totalOrderQuantity.value < orderRestrictAmount.value
              ) {
                const remainOrder = orderRestrictAmount.value - totalOrderQuantity.value;
                // alert("You can order a maximum of " + remainOrder);
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "ከ " + remainOrder + " በላይ ማዘዝ አትችልም!",
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
              } else {
                // alert("ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም");
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
        // alert(
        //   "You can only order from 0 upto " +
        //     numberOfItems.value +
        //     " items please re-order again"
        // );
        // Swal.fire({
        //   position: "top-end",
        //   icon: "warning",
        //   title: "ማዘዝ የምትችል ከ 0 እስክ " + numberOfItems.value + " እንደገና ያዝዙ!",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          // title: "ስህተት",
          html: "ማዘዝ የምትችል ከ 0 እስክ " + numberOfItems.value + " እንደገና ያዝዙ!",
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
    } catch (err) {}
  }
};

const addToTransaction = async () => {
  try {
    await axios.post("http://localhost:5000/transactionHistory", {
      transaction_email: order_email,
      product_id: pro_id.value,
      NoOrders: count2.value[idforVmodell.value],
      transaction_kebele: kebele
    });
  } catch (err) {}
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
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      postedForMarket: updatedAmount.value,
      state: 1,
    });

    await getOrderByUserEmailAndProductId(order_email);
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
  try {
    await axios.post("http://localhost:5000/order", {
      patent_email: patent_email.value,
      user_email: order_email,
      nOrders: count2.value[idforVmodell.value],
      totalCart: useCounter.totalCount,
      product_id: pro_id.value,
      ordered_date: order_date.value,
      edited_date: order_date.value,
      order_kebele: kebele,
    });
  } catch (err) {}
};

const totalOrderedCart = () => {
  //total  ordered carts calculation
  useCounter.inputValue = count2.value[idforVmodell.value];
  useCounter.totalCart();
};

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/product/${id}`);
  } catch (err) {}
};
</script>

<style scoped>

@keyframes fadeInLeft {
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0);
  }
}
.product{
  animation: fadeInLeft 2s ease-in;
}
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
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5s);
}

.rating label:hover:after,
.rating label:hover ~ label:after,
.rating input:checked ~ label:after {
  opacity: 1;
}
</style>
