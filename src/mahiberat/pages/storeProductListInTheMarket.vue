<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
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
    <div class="w-full">
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
            <tr v-for="item in datas" :key="item.product_id" class="hover:bg-slate-200">
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.product_id }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.category }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.type_product }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.original_cost }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.postedForMarket }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.address }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="
                  item.post_email == store_email &&
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
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
const datas = ref([]);
var useSelector = useSelectStore();
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const productName = ref("");

const store_email = localStorage.getItem("store_email");

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    console.log(datas.value);
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
});

const deleteProduct = async (id) => {
  alert("Are You sure to delete");
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  } catch (err) {
    console.log(err);
  }
};
const getProductById = async (id) => {
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/mahiberat/product/${id}`);
  } catch (err) {
    console.log(err);
  }
};
const editProductById = async (id) => {
  try {
    const getProduct = await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.product_id = id;
    useSelector.category = getProduct.data.category;
    useSelector.product_type = getProduct.data.type_product;
    useSelector.title = getProduct.data.title;
    useSelector.price = getProduct.data.price;
    useSelector.orginal_cost = getProduct.data.orginal_cost;
    useSelector.amount = getProduct.data.amount;
    useSelector.address = getProduct.data.address;
    useSelector.description = getProduct.data.description;
    router.push(`/mahiberat/product/edit/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchProductByName = async () => {
  localStorage.setItem("product_name", productName.value);
  router.push(`/mahiberat/product/productByName/${productName.value}`);
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
