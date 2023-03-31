<template>
  <div class="bg-green-50 dark:bg-slate-800 w-full h-full">
    <div class="pt-4 mx-6 text-gray-700 dark:text-white justify-center items-center">
      <nav class="flex justify-between px-6 bg-white shadow-md p-3">
        <div class="">
          <span class="text-lg text-gray-700 dark:text-gray-800 font-bold font-mono"
            >{{ kebele }} Mahiberat</span
          >
        </div>
        <div class="">
          <div v-for="user in activeUsers" :key="user.user_id">
            <span
              class="font-mon font-bold text-lg text-gray-800 dark:text-gray-800"
              v-if="user.kebele == kebele && user.email == manager_email"
              >{{ user.fName }}</span
            >
          </div>
        </div>
      </nav>
      <div class="flex gap-4 mt-4 mb-11 justify-center items-center">
        <div
          @click="transactionHistory"
          class="cursor-pointer shadow-md hover:scale-110 bg-blue-200 py-6 w-[38%] rounded-lg"
        >
          <p class="font-mono font-bold text-lg text-center">Revenu</p>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ totalSoledInBirr }} Birr
          </h2>
        </div>
        <div @click="transactionHistory" class="bg-red-200 py-6 w-[38%] rounded-lg">
          <p class="font-mono font-bold text-lg text-center">Expense</p>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ totalExpenseInBirr }} Birr
          </h2>
        </div>
        <div @click="transactionHistory" class="bg-green-200 py-6 w-[38%] rounded-lg">
          <p class="font-mono font-bold text-lg text-center">Profit</p>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ totalSoledInBirr - totalExpenseInBirr }} Birr
          </h2>
        </div>
      </div>
      <div
        class="flex gap-4 my-2 flex-wrap justify-center items-center text-gray-700 dark:text-white"
      >
        <div
          @click="membersPage"
          class="hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 hover:scale-110 cursor-pointer shadow-md h-20 bg-white py-2 w-[25%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg text-center">Customers</h2>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ countMembers }}
          </h2>
        </div>
        <div
          @click="activeSystemUsers"
          class="hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 hover:scale-110 cursor-pointer shadow-md h-20 bg-white py-2 w-[25%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg text-center">active users</h2>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ countActiveSystemUsers }}
          </h2>
        </div>
        <div
          @click="ordersPage"
          class="hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 hover:scale-110 cursor-pointer shadow-md h-20 bg-white py-2 w-[25%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg text-center">Order</h2>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ countOrders }}
          </h2>
        </div>
        <div
          @click="transactionHistory"
          class="hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 hover:scale-110 cursor-pointer shadow-md h-20 bg-white py-2 w-[25%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg text-center">Total sale in Birr</h2>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ totalSoledInBirr }} Birr
          </h2>
        </div>
        <div
          @click="productsPage"
          class="hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 hover:scale-110 cursor-pointer shadow-md h-20 bg-white py-2 w-[25%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg text-center">Total products</h2>
          <h2 class="font-mono font-bold text-lg text-center">
            {{ countProducts }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const members = ref("");
const Orders = ref("");
const Products = ref("");
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const countMembers = ref(0);
const countActiveSystemUsers = ref(0);
const countOrders = ref(0);
const countProducts = ref(0);
const activeUsers = ref([]);
const totalExpenseAndRevenue = ref([]);
const totalExpenseInBirr = ref(0);
const totalSoledInBirr = ref(0);
const totalSellData = ref([]);
const manager_email = localStorage.getItem("manager_email");

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("please login first");
    router.replace("/login");
  }
  getTotalMahiberatMembers();
  getTotalOrders();
  getTotalProducts();
  getUsers();
  getTotalExpenseRevenue();
  await getTotalSoled();
});
const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    members.value = users.data;
    for (let x in members.value) {
      if (kebele == members.value[x].kebele && members.value[x].user_role == "user") {
        countMembers.value++;
      }
    }
  } catch (err) {}
};

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    activeUsers.value = users.data;
    for (let x in activeUsers.value) {
      if (
        kebele == activeUsers.value[x].kebele &&
        activeUsers.value[x].user_state == 1 &&
        activeUsers.value[x].user_role == "user"
      ) {
        countActiveSystemUsers.value++;
      }
    }
  } catch (err) {}
};

const membersPage = async () => {
  router.replace("/mahiberat/totalMembers");
};

const activeSystemUsers = async () => {
  router.replace("/mahiberat/activeUsers");
};

const transactionHistory = async () => {
  router.replace("/mahiberat/transactionHistory");
};

const getTotalOrders = async () => {
  try {
    const orders = await axios.get("http://localhost:5000/joinOrder");
    Orders.value = orders.data;
    for (let x in Orders.value) {
      if (kebele == Orders.value[x].kebele && Orders.value[x].payStatus == 0) {
        countOrders.value++;
      }
    }
  } catch (err) {}
};

const ordersPage = async () => {
  router.replace("/mahiberat/orderList");
};

const getTotalProducts = async () => {
  try {
    const products = await axios.get("http://localhost:5000/products");
    Products.value = products.data;
    for (let x in Products.value) {
      if (
        kebele == Products.value[x].kebele &&
        Products.value[x].marketState == 1 &&
        Products.value[x].postedForMarket != 0
      ) {
        countProducts.value++;
      }
    }
  } catch (err) {}
};

const productsPage = async () => {
  router.replace("/mahiberat/productsList");
};
const getTotalExpenseRevenue = async () => {
  try {
    const response = await axios.get("http://localhost:5000/joinOrder");
    totalExpenseAndRevenue.value = response.data;

    for (let x in totalExpenseAndRevenue.value) {
      if (
        totalExpenseAndRevenue.value[x].kebele == kebele &&
        totalExpenseAndRevenue.value[x].payStatus == 1
      ) {
        totalExpenseInBirr.value =
          totalExpenseInBirr.value +
          totalExpenseAndRevenue.value[x].nOrders *
            totalExpenseAndRevenue.value[x].original_cost;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getTotalSoled = async () => {
  try {
    const response = await axios.get("http://localhost:5000/joinOrder");
    totalSellData.value = response.data;
    console.log(totalSellData.value);
    for (let x in totalSellData.value) {
      console.log(x);
      if (
        totalSellData.value[x].payStatus == 1 &&
        totalSellData.value[x].kebele == kebele
      ) {
        totalSoledInBirr.value =
          totalSoledInBirr.value +
          totalSellData.value[x].nOrders * totalSellData.value[x].price;
        console.log(totalSellData.value[x].nOrders);
        console.log(totalSellData.value[x].price);
      }
    }
  } catch (err) {}
};
</script>
