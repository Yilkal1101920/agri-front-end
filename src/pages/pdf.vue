<template>
  <div id="pdfConvertor" class="w-full h-full bg-green-200 dark:bg-gray-800 pb-8">
    <div class="px-8">
      <div class="brand-section">
        <div class="row">
          <div class="col-6">
            <h1 class="text-white font-bol dark:text-white font-mono text-lg">
              {{ kebele }}
            </h1>
          </div>
          <div class="col-6">
            <div class="company-details text-white dark:text-white">
              <p class="text-white">{{ kebele }} Mahiberat</p>
              <p class="text-white">+251{{ userPhone }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="body-section">
        <div class="row">
          <div class="col-6 text-gray-800 dark:text-white font-mono font-bold">
            <h2 class="heading">Invoice No.: 001</h2>
            <p class="sub-heading">Tracking No. fabcart2025</p>
            <p class="sub-heading">Order Date: 20-20-2021</p>
            <p class="sub-heading">Email Address: {{ user_email }}</p>
          </div>
          <div class="col-6 text-gray-800 dark:text-white font-mono font-bold">
            <p class="sub-heading">Full Name: {{ userName }} {{ userFatherName }}</p>
            <p class="sub-heading">Address: {{ kebele }}</p>
            <p class="sub-heading">Phone Number: +251{{ userPhone }}</p>
            <p class="sub-heading">ID: {{ userID }}</p>
          </div>
        </div>
      </div>

      <div class="body-section">
        <h3 class="heading text-gray-800 dark:text-white font-mono font-bold text-lg">
          Ordered Items
        </h3>
        <br />
        <table class="table-bordered">
          <thead class="text-gray-700 bg-slate-400">
            <tr>
              <th>Product</th>
              <th class="">Price</th>
              <th class="">Quantity</th>
              <th class="">Sub Total</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr
              v-for="item in Ordereddatas"
              :key="item.order_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="
                  item.user_email == user_email && item.cancel != 1 && item.payStatus == 1
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.user_email == user_email && item.cancel != 1 && item.payStatus == 1
                "
                class=""
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.user_email == user_email && item.cancel != 1 && item.payStatus == 1
                "
                class="pl-2"
              >
                {{ item.nOrders }}
              </td>
              <td
                v-if="
                  item.user_email == user_email && item.cancel != 1 && item.payStatus == 1
                "
                class=""
              >
                {{ item.price * item.nOrders }}
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">Grand Total</td>
              <td>{{ totalCostInBirr }} birr</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div class="flex justify-between items-center">
          <div class="">
            <h3 class="text-gray-800 font-mono font-bold">Payment Status: Paid</h3>
            <h3 class="text-gray-800 font-mono font-bold">
              Payment Mode: Cash on Delivery
            </h3>
          </div>
          <div>
            <img src="../assets/stamp.png" class="h-24 w-auto" alt="" srcset="" />
          </div>
          <div>
            <img
              src="../assets/firma.png"
              class="h-24 w-auto"
              alt="This was firm image"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    class="bg-green-400 ml-10 my-5 hover:bg-green-700 py-2 px-8 rounded-lg pl-5 pr-5"
    @click="download"
  >
    ደረሰኝ ያውርዱ
  </button>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const kebele = localStorage.getItem("kebele");
const user_email = localStorage.getItem("user_email");

const getUserEmail = ref([]);
const Ordereddatas = ref([]);

const userName = ref("");
const userFatherName = ref("");
const userPhone = ref("");
const userKebele = ref("");
const userSubKebele = ref("");
const userVillage = ref("");
const userID = ref("");

const totalCost = ref("");
var totalCostInBirr = ref(0);

onMounted(async () => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1
  ) {
    alert("please login first");
    router.replace("/login");
  }
  await getUserByEmail(user_email);
  await getOrderedProducts();
  await getTotalPrice();
});

const download = () => {
  window.html2canvas = html2canvas;
  var doc = new jsPDF("p", "pt", "a2");
  doc.html(document.querySelector("#pdfConvertor"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
};

const getUserByEmail = async (email) => {
  try {
    const getUser = await axios.get(`http://localhost:5000/users/${email}`);
    getUserEmail.value = getUser.data;
    userName.value = getUser.data.fName;
    userFatherName.value = getUser.data.faName;
    userPhone.value = getUser.data.phone;
    userKebele.value = getUser.data.kebele;
    userSubKebele.value = getUser.data.subKebele;
    userVillage.value = getUser.data.village;
    userID.value = getUser.data.username;
  } catch (err) {}
};

const getOrderedProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    Ordereddatas.value = response.data;

    // confirmDisplay.value[Ordereddatas.value.order_id] = true;
  } catch (err) {}
};
const getTotalPrice = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    totalCost.value = response.data;

    for (let x in totalCost.value) {
      if (
        totalCost.value[x].user_email == user_email &&
        totalCost.value[x].payStatus == 1
      ) {
        totalCostInBirr.value =
          totalCostInBirr.value + totalCost.value[x].nOrders * totalCost.value[x].price;
        console.log(totalCost.value[x].nOrders);
        console.log(totalCost.value[x].price);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
<style scoped>
body {
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
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
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}

.brand-section {
  background-color: green;
  padding: 10px 40px;
}
.logo {
  width: 50%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}
.col-6 {
  width: 50%;
  flex: 0 0 auto;
}
.company-details {
  float: right;
  text-align: right;
}
.body-section {
  padding: 16px;
  border: 1px solid gray;
}

table {
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;
}
table thead tr {
  border: 1px solid #111;
  background-color: #f2f2f2;
}
table td {
  vertical-align: middle !important;
  text-align: center;
}
table th,
table td {
  padding-top: 08px;
  padding-bottom: 08px;
}
.table-bordered {
  box-shadow: 0px 0px 5px 0.5px gray;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.text-right {
  text-align: end;
}

.float-right {
  float: right;
}
</style>
