<template>
  <div class="w-full h-full">
    <div class="bg-green-50 dark:bg-gray-800 pb-6">
      <div class="grid h-full w-full mx-8">
        <div class="gap-7 flex flex-col lg:flex lg:flex-row">
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
                        item.marketState == 1 &&
                        item.postedForMarket == 0
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
                          <div class="flex justify-center">
                            <button class="hover:bg-yellow-300">
                              <svg
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
                                @click.prevent="addCart(item.product_id, item.post_email)"
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
import { useRouter } from "vue-router";

import Swal from "sweetalert2";

import { useLanguageStore } from "../state/languageStore";

const languageStore = useLanguageStore();

const router = useRouter();

const count2 = ref([]); //count in v-model

const datas = ref([]);
const productName = ref("");

const pro_id = ref(0); ///the primary key id of the product
const updateOrderAmount = ref(0);
const order_date = ref("");

const order_email = localStorage.getItem("customer_email");
const patent_email = ref("");

const totalAmount = ref("");

const checkInput = async (id) => {
  if (count2.value[id] > 0) {
    await checkAmount(id);
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
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
};

const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};

onMounted(() => {
  if (
    (localStorage.getItem("user_email") == undefined ||
      localStorage.getItem("user_email") == null ||
      localStorage.getItem("role") != "user") &&
    (localStorage.getItem("customer_email") == undefined ||
      localStorage.getItem("customer_email") == null ||
      localStorage.getItem("role") != "customer")
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
});

const addCart = async (id, email) => {
  try {
    localStorage.setItem("seller", "farmer");
    patent_email.value = email;
    await checkInput(id);
  } catch (err) {
    console.log(err);
  }
};

const checkAmount = async (id) => {
  if (!localStorage.getItem("customer_email")) {
    alert("login first to order product");
    router.replace("/login");
  } else {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`); /////CALCULATE UN ORDERED AMOUNT
      productName.value = response.data.title;
      pro_id.value = response.data.product_id;
      totalAmount.value = response.data.amount;
      if (response.data.amount >= count2.value[id]) {
        await getOrderByUserEmailAndProductId(order_email);
      } else {
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          // title: "ስህተት",
          html: "ገበያ ላይ ካለው በላይ አዝዘዋል!",
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
    } catch (err) {
      console.log(err);
    }
  }
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
      updateOrderAmount.value = getOrder.data.nOrders + count2.value[pro_id.value];
      await updateOrder(email, pro_id.value);
      await updateProductById(pro_id.value);
    } else if (
      getOrder.data.product_id == pro_id.value &&
      getOrder.data.user_email == email &&
      getOrder.data.payStatus == 1
    ) {
      await getOrderByUserEmailAndProductIdAndPaymentStatus(email);
    } else {
      await addOrder(pro_id.value, patent_email.value);
      await updateProductById(pro_id.value);
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
      updateOrderAmount.value = getOrderData.data.nOrders + count2.value[pro_id.value];
      await updateOrder(email, pro_id.value);
      await updateProductById(pro_id.value);
    } else {
      await addOrder(pro_id.value, patent_email.value);
      await updateProductById(pro_id.value);
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
    self.location.replace("/farmersProduct");
  } catch (err) {}
};

const addOrder = async (id, email) => {
  order_date.value = new Date();
  try {
    await axios.post("http://localhost:5000/order", {
      patent_email: email,
      user_email: order_email,
      nOrders: count2.value[id],
      product_id: id,
      ordered_date: order_date.value,
      edited_date: order_date.value,
    });
  } catch (err) {}
};

const updateProductById = async (id) => {
  try {
    await axios.put(`http://localhost:5000/farmer/product/${id}`, {
      amount: totalAmount.value - count2.value[id],
    });
    self.location.replace("/farmersProduct");
  } catch (err) {
    console.log(err);
  }
};
</script>
