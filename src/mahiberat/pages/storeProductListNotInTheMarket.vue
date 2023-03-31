<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <div class="w-full">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-full">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/mahiberat/storeDashboard">
            <span
              ><svg
                class="fill-current h-8 w-auto text-green-600 hover:text-green-900 cursor-pointer"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowCircleLeftOutlinedIcon"
                tabindex="-1"
                title="ArrowCircleLeftOutlined"
              >
                <path
                  d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"
                ></path></svg
            ></span>
          </router-link>
          <p class="text-gray-700 dark:text-white">Back to Dashboard</p>
        </div>

        <div class="w-[50%]">
          <form action="">
            <div class="flex gap-0">
              <input
                type="search"
                v-model="productName"
                name="search"
                id="searchProduct"
                placeholder=" Search Product on the store"
                class="w-[80%] shadow-md p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
              />
              <input
                type="submit"
                value="Search"
                @click="searchProductByName"
                class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
              />
            </div>
          </form>
        </div>
        <button
          class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
          @click="productAdd"
        >
          Add Product
        </button>
      </div>
      <div class="overflow-x-auto text-justify flex justify-center mt-1 mx-6 mb-6">
        <table class="table-auto text-gray-700 dark:text-white w-full">
          <thead class="bg-slate-400 dark:bg-white">
            <tr>
              <th class="py-2 pl-2">ProductId</th>
              <th class="py-2 pl-2">Category</th>
              <th class="py-2 pl-2">ProductType</th>
              <th class="py-2 pl-2">Title</th>
              <th class="py-2 pl-2">Price</th>
              <th class="py-2 pl-2">OrginalCost</th>
              <th class="py-2 pl-2">Amout</th>
              <th class="py-2 pl-2">Address</th>
              <th class="py-2 pl-2">Image</th>
              <th class="py-2 pl-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in productDatas"
              :key="item.product_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.product_id }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.category }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.type_product }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.original_cost }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                <p v-if="item.marketState == 1">
                  {{
                    item.amount -
                    item.postedForMarket -
                    totalSoled[item.product_id] -
                    totalOrder[item.product_id]
                  }}
                </p>
                <p v-if="item.marketState == 0">
                  {{ item.amount }}
                </p>
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.address }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="border-none hs-text-centered"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useSelectStore } from "../state/selectProStore";
const productDatas = ref([]);
const datas = ref([]);
var useSelector = useSelectStore();
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const productName = ref("");

const Products = ref([]);

const totalOrders = ref([]);
const totalAmount = ref([]);

const totalSoled = ref([]);
const totalSol = ref([]);

const totalOrdered = ref([]);
const totalOrder = ref([]);

const store_email = localStorage.getItem("store_email");

const productAdd = () => {
  router.replace("/mahiberat/addProductToStore");
};

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    productDatas.value = response.data;
    console.log(productDatas.value);
  } catch (err) {
    console.log(err);
  }
};
onMounted(async () => {
  if (
    localStorage.getItem("store_email") == undefined ||
    localStorage.getItem("store_email") == null ||
    localStorage.getItem("role") != "store"
  ) {
    alert("please login first");
    router.replace("/login");
  }
  getProducts();
  getTotalSoledProducts();
});

const searchProductByName = async () => {
  localStorage.setItem("product_name", productName.value);
  router.push(`/mahiberat/product/productByName/${productName.value}`);
};

const getTotalSoledProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    Products.value = response.data;
    console.log(Products.value);
    for (let x in Products.value) {
      totalAmount.value[Products.value[x].product_id] = 0;
      totalSoled.value[Products.value[x].product_id] = 0;

      totalOrdered.value[Products.value[x].product_id] = 0;

      const response = await axios.get("http://localhost:5000/order");
      datas.value = response.data;
      totalOrders.value[Products.value[x].product_id] = 0;
      totalSol.value[Products.value[x].product_id] = 0;

      totalOrder.value[Products.value[x].product_id] = 0;

      for (let y in datas.value) {
        if (datas.value[y].product_id == Products.value[x].product_id) {
          totalOrders.value[datas.value[y].product_id] =
            totalOrders.value[datas.value[y].product_id] + datas.value[y].nOrders;
        }
        if (
          datas.value[y].product_id == Products.value[x].product_id &&
          datas.value[y].payStatus == 1
        ) {
          totalSol.value[datas.value[y].product_id] =
            totalSol.value[datas.value[y].product_id] + datas.value[y].nOrders;
        }
        if (
          datas.value[y].product_id == Products.value[x].product_id &&
          datas.value[y].payStatus == 0
        ) {
          totalOrder.value[datas.value[y].product_id] =
            totalOrder.value[datas.value[y].product_id] + datas.value[y].nOrders;
        }
      }
      console.log(totalOrders.value[Products.value[x].product_id]);
      totalAmount.value[Products.value[x].product_id] =
        Products.value[x].postedForMarket +
        totalOrders.value[Products.value[x].product_id];

      totalSoled.value[Products.value[x].product_id] =
        totalSol.value[Products.value[x].product_id];

      totalOrdered.value[Products.value[x].product_id] =
        totalOrder.value[Products.value[x].product_id];
    }
  } catch (err) {}
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
