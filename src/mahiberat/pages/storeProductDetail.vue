<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div
      v-for="item in datas"
      :key="item.product_id"
      class="w-full text-gray-700 dark:text-white flex flex-row flex-wrap"
    >
      <div
        v-if="
          item.amount > 0 &&
          item.kebele == kebele_address &&
          item.product_id == selected_product
        "
        class="flex justify-center w-full px-8 gap-6 h-74"
      >
        <div
          class="border-b-4 justify-center grid sm:grid-cols-1 md:grid-cols-2 md:gap-8 py-6"
        >
          <div class="" @click.prevent="getProductById(item.product_id)">
            <div class="w-full h-48">
              <img
                class="h-40 shadow-lg cursor-pointer lg:w-80 lg:mt-2 rounded-lg hover:scale-110"
                :src="item.image"
                alt="This was image"
              />
            </div>
          </div>
          <div class="gap-11">
            <p class="w-full flex justify-center font-mono font-bold text-lg">
              {{ item.title }}
            </p>
            <div class="flex justify-center">
              <div>
                <div class="flex">
                  <p>ችርቻሮ ዋጋ፡</p>
                  <del
                    ><p>{{ item.price }} ብር</p></del
                  >
                </div>
              </div>
              <div class="pl-1"></div>
            </div>
            <div class="flex justify-center">
              <div>
                <p>ዋጋ፡ {{ item.price }} ብር</p>
              </div>
            </div>
            <div class="flex justify-center">
              <div>
                <p>መደብ፡ {{ item.category }}</p>
              </div>
            </div>
            <div class="flex justify-center">
              <div>
                <p>ገለጻ፡ {{ item.description }}</p>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="font-mono font-bold text-lg">
                <p>ቀበሌ፡ {{ item.kebele }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="font-mono font-bold text-lg text-gray-700 dark:text-white py-4 text-center">
      ተዛማጅ
    </p>
    <div>
      <!-- related related-->
      <div class="justify-center flex">
        <div v-for="item in datas" :key="item.product_id">
          <div
            v-if="
              item.amount > 0 &&
              item.kebele == kebele_address &&
              item.category == categoryDetail
            "
          >
            <div class="flex flex-col text-gray-700 dark:text-white">
              <div
                class="flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md"
              >
                <div
                  class="hover:bg-blue-300"
                  @click.prevent="getProductById(item.product_id)"
                >
                  <div class="w-full h-32 hover:bg-blue-300">
                    <img
                      class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                      :src="item.image"
                      alt="This was image"
                    />
                  </div>
                </div>
                <p class="w-full flex justify-center">{{ item.title }}</p>
                <div class="flex justify-center">
                  <div>{{ item.price }}</div>
                  <div class="pl-1">ብር</div>
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
import { useCounterStore } from "../../state/store"; //counting sellected cart
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const count2 = ref([]); //count in v-model

var useCounter = useCounterStore();
const datas = ref([]);
const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const idforVmodell = ref(0);
const productName = ref("");

const transactProduct = ref("");
const transactionEmail = ref("");
const totalOrderQuantity = ref("");

const kebele_address = localStorage.getItem("kebele");
const order_email = localStorage.getItem("store_email"); // the email of user who orders the product to add cart

const pro_id = ref(0); ///the primary key id of the product
const orderRestrictAmount = ref(0);

const selected_product = localStorage.getItem("product_id");
const productDetail = ref([]);
const categoryDetail = ref("");

const getProductByIdforVmodel = async (id) => {
  // get product by id for product_id
  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
  } catch (err) {}
};
const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};
//show all related products
const getProductByIdForDetail = async (id) => {
  try {
    const productDetails = await axios.get(`http://localhost:5000/products/${id}`);
    productDetail.value = productDetails.data;
    categoryDetail.value = productDetails.data.category;
  } catch (err) {}
};

onMounted(() => {
  if (
    localStorage.getItem("store_email") == undefined ||
    localStorage.getItem("store_email") == null ||
    localStorage.getItem("role") != "store"
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
  getProductByIdForDetail(selected_product);
});

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    router.push(`/product/selectedProduct`);
  } catch (err) {}
};
</script>

<style scoped></style>
