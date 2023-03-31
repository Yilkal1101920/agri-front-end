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
                placeholder=" Search Product"
                class="w-[80%] p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
              />
              <input
                type="submit"
                value="Search"
                @click="searchProductMarketActivationByName"
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
              <th class="py-2 pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datas" :key="item.product_id" class="hover:bg-slate-200">
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.product_id }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.category }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.type_product }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.original_cost }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.postedForMarket }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.address }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 0 &&
                  item.postedForMarket != 0
                "
                class="border-none hs-text-centered"
              >
                <div class="flex flex-row">
                  <a
                    class="button is-danger is-small bg-blue-300 border rounded"
                    @click="editProductById(item.product_id)"
                  >
                    accept
                  </a>
                  <a
                    class="button is-danger is-small bg-red-300 ml-2 border rounded"
                    @click="rejectProductRequestForMarketById(item.product_id)"
                  >
                    reject
                  </a>
                </div>
              </td>
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
const datas = ref([]);
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const productName = ref("");

const productAdd = () => {
  router.replace("/mahiberat/addProductToStore");
};

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
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

const editProductById = async (id) => {
  try {
    await axios.put(`http://localhost:5000/products/store/market/state/${id}`, {
      marketState: 1,
    });
    self.location.replace("/mahiberat/storeProductsListThatAreNotActivated");
  } catch (err) {
    console.log(err);
  }
};

const rejectProductRequestForMarketById = async (id) => {
  try {
    await axios.put(`http://localhost:5000/products/store/rejectForMarket/${id}`, {
      postedForMarket: 0,
    });
    self.location.replace("/mahiberat/storeProductsListThatAreNotActivated");
  } catch (err) {
    console.log(err);
  }
};

const searchProductMarketActivationByName = async () => {
  localStorage.setItem("product_name", productName.value);
  router.push(`/mahiberat/storeProductsListThatAreNotActivated/${productName.value}`);
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
