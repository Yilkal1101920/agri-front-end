<template>
  <div class="flex flex-row w-full h-full bg-green-50 dark:bg-gray-800">
    <div class="flex flex-row justify-center items-center">
      <AdminPanel />
      <div class="h-full w-full">
        <div ref="report" id="pdfConvertor" class="flex flex-col lg:mx-8 p-2 inset-y-0">
          <!-- <div class="inset-x-20 inset-y-0"> -->
          <div>
            <div class="table-auto text-justify flex justify-center">
              <!-- <div class="flex gap-1 items-center ml-8 py-4"></div> -->
              <table class="table-auto text-justify">
                <thead
                  class="lg:flex lg:flex-row text-gray-700 dark:text-white bg-slate-400 pb-3"
                >
                  <th class="py-2 lg:w-28 hidden lg:block text-xs lg:p-0">
                    Product Name
                  </th>
                  <th class="py-2 lg:w-24 lg:p-0">Cost</th>
                  <th class="py-2 lg:w-24 lg:p-0 hidden lg:block">Price</th>
                  <th class="py-2 lg:w-24 lg:p-0">Amount</th>
                  <th class="py-2 lg:w-24 lg:p-0">Total selled</th>
                  <th class="py-2 lg:w-24 lg:p-0">Total Ordered</th>
                  <th class="py-2 lg:w-24 lg:p-0">Not Selled</th>
                  <th class="py-2 hidden lg:block lg:w-24 text-xs lg:p-0">Total Cost</th>
                  <th class="py-2 hidden lg:block lg:w-24 text-xs lg:p-0">Total Price</th>
                  <th class="py-2 hidden lg:block lg:w-24 text-xs lg:p-0">Profit</th>
                </thead>
                <tbody class="text-gray-700">
                  <tr
                    v-for="item in Products"
                    :key="item.order_id"
                    class="lg:flex lg:flex-row hover:bg-slate-200"
                  >
                    <td
                      v-i
                      v-if="item.kebele == kebele"
                      f="item.kebele == kebele"
                      class="lg:w-28 lg:float-left hidden lg:block"
                    >
                      {{ item.title }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24">
                      {{ item.original_cost }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24 hidden lg:block">
                      {{ item.price }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24">
                      {{
                        item.postedForMarket +
                        totalOrdered[item.product_id] +
                        totalSoled[item.product_id]
                      }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24">
                      {{ totalSoled[item.product_id] }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24">
                      {{ totalOrdered[item.product_id] }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24">
                      {{ item.postedForMarket + totalOrdered[item.product_id] }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24 hidden lg:block">
                      {{ item.price * item.amount }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24 hidden lg:block">
                      {{ item.price * item.amount }}
                    </td>
                    <td v-if="item.kebele == kebele" class="lg:w-24 hidden lg:block">
                      {{
                        totalSoled[item.product_id] * (item.price - item.original_cost)
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- </div> -->
          </div>
        </div>
        <div class="flex justify-center py-6">
          <button
            class="bg-green-300 hover:bg-green-700 py-2 rounded-lg px-8 text-lg"
            @click.prevent="makePdf"
          >
            download report
          </button>
          <!-- <button
            class="bg-green-300 hover:bg-green-700 py-2 rounded-lg px-8 text-lg"
            @click.prevent="download"
          >
            download report
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
// import VueHtml2pdf from "vue-html2pdf";
// import jspdf from "jspdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";

const report = ref(null);

const router = useRouter();
const datas = ref([]);
const Products = ref([]);

const totalOrders = ref([]);
const totalAmount = ref([]);

const totalSoled = ref([]);
const totalSol = ref([]);

const totalOrdered = ref([]);
const totalOrder = ref([]);

const cart_email = localStorage.getItem("user_email");

const totalCost = ref("");
var totalCostInBirr = ref(0);

const kebele = localStorage.getItem("kebele");

const makePdf = () => {
  window.html2canvas = html2canvas;
  var doc = new jsPDF("p", "pt", "a2");
  doc.html(document.querySelector("#pdfConvertor"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
};

// const download = async () => {
//   const pdf = new jspdf();
//   const html = report.value.innerHTML;
//   pdf.fromHTML(html, 2, 2, {
//     width: 150,
//   });
//   pdf.save("report.pdf");
// };

const getProducts = async () => {
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

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("please login first");
    router.replace("/login");
  }
  await getProducts();
  await getTotalCostPrice();
});

const getTotalCostPrice = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    totalCost.value = response.data;

    for (let x in totalCost.value) {
      if (totalCost.value[x].user_email == cart_email) {
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
