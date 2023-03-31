<template>
  <div class="flex w-full h-full bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="w-full mx-5">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-[95%]">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/mahiberat/transactionHistory">
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
          <p class="text-gray-700 dark:text-white">Back to Transaction History</p>
        </div>
      </div>

      <div class="overflow-x-auto text-justify flex justify-center mt-3 mb-6">
        <table class="table-auto w-full text-gray-700">
          <thead class="bg-slate-400">
            <tr class="">
              <th class="py-2 pl-2">Name</th>
              <th class="py-2 pl-2">Father Name</th>
              <th class="py-2 pl-2">Email</th>
              <th class="py-2 pl-2">Product Name</th>
              <th class="py-2 pl-2">Price</th>
              <th class="py-2 pl-2">Total</th>
              <th class="py-2 pl-2">Total Price</th>
              <th class="py-2 pl-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datas" :key="item.order_id" class="hover:bg-slate-200">
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.fName }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.faName }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.user_email }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.nOrders }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                {{ item.price * item.nOrders }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.payStatus == 1 &&
                  (filterTransaction == item.fName ||
                    filterTransaction == item.faName ||
                    filterTransaction == item.email ||
                    filterTransaction == item.title)
                "
                class="pl-2"
              >
                <div v-if="item.payStatus == 0" class="flex flex-row">
                  <button @click.prevent="updateOrderByOrderIdforPayment(item.order_id)">
                    pay
                  </button>
                  <button
                    @click.prevent="getOrderedProductById(item.order_id)"
                    class="pl-3"
                  >
                    cancel
                  </button>
                </div>
                <!-- payed -->
                <h1 v-if="item.payStatus == 1">
                  <svg
                    class="fill-current h-6 w-auto text-green-500"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CheckOutlinedIcon"
                    tabindex="-1"
                    title="CheckOutlined"
                  >
                    <path
                      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    ></path>
                  </svg>
                </h1>
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
import AdminPanel from "../components/AdminPanel.vue";

const router = useRouter();

const datas = ref([]);
const nOrderCart = ref(0);
const productId = ref(0);
const amountRollback = ref(0);

const orderArray = ref([]);
const userName = ref([]);

const productName = ref("");
const orderEmail = ref("");
const totalOrderQuantity = ref(0);
const kebele = localStorage.getItem("kebele");
const filterTransaction = localStorage.getItem("filter_transaction_history");

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/joinOrder");
    datas.value = response.data;
    for (datas.value.order_id in datas.value) {
      orderArray[datas.value.order_id] = datas.value[datas.value.order_id].nOrders;
    }
  } catch (err) {}
};

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("please login first");
    router.replace("/login");
  }
  getProducts();
});

const updateOrderByOrderIdforPayment = async (id) => {
  try {
    axios.put(`http://localhost:5000/order/payment/${id}`, {
      confirm: 1,
      confir: 1,
      payStatus: 1,
    });
  } catch (err) {}
  window.location.reload();
};

const getOrderedProductById = async (id) => {
  try {
    const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
    nOrderCart.value = getOrder.data.nOrders;
    productId.value = getOrder.data.product_id;
    orderEmail.value = getOrder.data.user_email;
    await updateAmount(productId.value);
    await deleteOrder(id);
    await getProductbyproductid(productId.value);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

const updateAmount = async (id) => {
  await getProductById(id);
  try {
    axios.put(`http://localhost:5000/rollBack/productsInMarket/${id}`, {
      postedForMarket: amountRollback.value,
      state: 0,
    });
  } catch (err) {}
};

const getProductById = async (id) => {
  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    amountRollback.value = updatAmount.data.postedForMarket + nOrderCart.value;
  } catch (err) {}
};

const deleteOrder = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/order/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchByNameOfUser = async () => {
  localStorage.setItem("user_name", userName.value);
  router.push(`/mahiberat/orderList/${userName.value}`);
};

const getProductbyproductid = async (id) => {
  try {
    const product = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = product.data.title;
    getTransactionHistoryByEmailAndProductName(productName.value, orderEmail.value);
  } catch (err) {}
};

const getTransactionHistoryByEmailAndProductName = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
  updateTransactionByEmailAndProductName(name, email);
};

const updateTransactionByEmailAndProductName = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: totalOrderQuantity.value - nOrderCart.value,
    });
  } catch (err) {}
};
</script>

<style scoped>
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
