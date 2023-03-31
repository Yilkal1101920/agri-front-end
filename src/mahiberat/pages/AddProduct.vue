<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex flex-row w-full">
      <AdminPanel />
      <div class="ml-6 w-full flex flex-row">
        <div class="w-full flex flex-row pl-10 flex-wrap">
          <div class="w-full p-2 px-8 py-6 mb-4">
            <div class="field">
              <label class="block text-gray-700 text-sm font-bold mb-2">Product Id</label>
              <div class="control">
                <div>
                  <select v-model="productId" class="w-full border border-green-300">
                    <option value="">product_id</option>
                    <optgroup v-for="product in filteredProduct">
                      <option>
                        {{ product.product_id }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="productId == 0 && tryCount == 1">
                    የሚሸጠዉን አልመረጡም
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Products amount for Market</label
              >
              <div class="control">
                <input
                  class="shadow border-green-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Amount"
                  v-model="amount"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="amount == '' && tryCount == 1">
                    ብዛቱን አላስገቡም
                  </p>
                </div>
                <div class="mb-0 ml-5">
                  <p
                    class="text-red-600"
                    v-if="
                      (amount <= 0 || amount == null || amountNumberCheck) &&
                      amount != '' &&
                      tryCount == 1
                    "
                  >
                    ብዛቱ የተሳሳተ ነው
                  </p>
                </div>
              </div>
            </div>
            <div class="control flex justify-center">
              <button
                class="bg-green-300 py-2 px-8 hover:bg-green-500 text-white font-bold my-4 hover:scale-x-110 rounded focus:outline-none focus:shadow-outline"
                @click="postProductForMarket(productId)"
              >
                Add to Market
              </button>
            </div>
          </div>
        </div>
        <div class="w-full p-2 px-8 py-6 mb-4">
          <table class="table-auto w-full text-gray-700">
            <thead>
              <tr>
                <th>code</th>
                <th>Title</th>
                <th>price</th>
                <th>amount</th>
                <th>amountInMarket</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in filteredProduct" :key="product.product_id">
                <td>{{ product.product_id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.postedForMarket }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Swal from "sweetalert2";

const router = useRouter();
var amount = ref("");
const AmountOfPostedInToMarket = ref(0);
const kebele = localStorage.getItem("kebele");

const tryCount = ref("");
const amountNumberCheck = ref(false);

const manager_email = localStorage.getItem("manager_email");

const order_date = ref("");

const day = ref("");
const dayName = ref("");
const month = ref("");
const monthName = ref("");

const totalUsers = ref("");
const storeEmployee = ref("");

const store_email = ref("");
const datas = ref("");
const seller = localStorage.getItem("seller");

const filteredProduct = ref("");

const productId = ref(0);

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
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
  } else {
    await getProducts();
    await getStoreEmployee();
    await filterProduct();
  }
});

const postProductForMarket = async (id) => {
  tryCount.value = 1;
  amountNumberCheck.value = isNaN(amount.value);
  if (id != "" && amount.value != "") {
    await getProductById(id);
    if (AmountOfPostedInToMarket.value == 0) {
      if (amount.value > 0) {
        await updateProduct(id);
      } else {
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          html: "ብዛቱ የተሰሳተ ነው!",
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
    } else if (AmountOfPostedInToMarket.value == undefined) {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "ለገበያ የመረጡት የግብርና አቅርቦት ገና ወደ ማሂበራታችን መጋዘን አልገባም!",
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
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Please Finish first Products In The Market!",
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
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ያልተሞላ ቦታ አለ!",
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
// const getProductByKebeleAndProductName = async (kebele, name) => {
//   const productByNameAndKebele = await axios.get(
//     `http://localhost:5000/products/postedForMarket/${kebele}/${name}`
//   );

//   AmountOfPostedInToMarket.value = productByNameAndKebele.data.postedForMarket;
// };
const getProductById = async (id) => {
  try {
    const productByNameAndKebele = await axios.get(
      `http://localhost:5000/products/${id}`
    );
    AmountOfPostedInToMarket.value = productByNameAndKebele.data.postedForMarket;
  } catch (err) {}
};
const updateProduct = async (id) => {
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      postedForMarket: amount.value,
      marketState: 0,
    });
    await insertReport();
  } catch (err) {}
  router.push("/mahiberat/productsList");
};

// const insertReport = async () => {
//   try {
//     order_date.value = new Date();
//     const date = new Date(order_date.value);
//     day.value = date.getDay();
//     if (day.value == 0) {
//       dayName.value = "Monday";
//     }
//     if (day.value == 1) {
//       dayName.value = "Tuesday";
//     }
//     if (day.value == 2) {
//       dayName.value = "Wednsday";
//     }
//     if (day.value == 3) {
//       dayName.value = "Tursday";
//     }
//     if (day.value == 4) {
//       dayName.value = "Friday";
//     }
//     if (day.value == 5) {
//       dayName.value = "Saturday";
//     }
//     if (day.value == 6) {
//       dayName.value = "Sunday";
//     }

//     month.value = date.getMonth();

//     if (month.value == 0) {
//       monthName.value = "January";
//     }
//     if (month.value == 1) {
//       monthName.value = "February";
//     }
//     if (month.value == 2) {
//       monthName.value = "March";
//     }
//     if (month.value == 3) {
//       monthName.value = "April";
//     }
//     if (month.value == 4) {
//       monthName.value = "May";
//     }
//     if (month.value == 5) {
//       monthName.value = "June";
//     }
//     if (month.value == 6) {
//       monthName.value = "Junly";
//     }
//     if (month.value == 7) {
//       monthName.value = "Ogust";
//     }
//     if (month.value == 8) {
//       monthName.value = "September";
//     }
//     if (month.value == 9) {
//       monthName.value = "October";
//     }
//     if (month.value == 10) {
//       monthName.value = "November";
//     }
//     if (month.value == 11) {
//       monthName.value = "December";
//     }
//     await axios.post("http://localhost:5000/report", {
//       reporter_email: manager_email,
//       product_name: title.value,
//       quantity: amount.value,
//       report_owner: kebele,
//       report_status: "market",
//       transaction: "cash less",
//       transaction_in_birr: 0,
//       day: dayName.value,
//       monthName: monthName.value,
//       year: date.getFullYear(),
//       month: date.getMonth() + 1,
//       date: date.getDate(),
//       hour: date.getHours(),
//       minute: date.getMinutes(),
//       second: date.getSeconds(),
//       millisecond: date.getMilliseconds(),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const getStoreEmployee = async () => {
  try {
    const getUsers = await axios.get("http://localhost:5000/users");
    totalUsers.value = getUsers.data;

    storeEmployee.value = totalUsers.value.filter(
      (employeeData) => employeeData.kebele == kebele && employeeData.user_role == "store"
    );
    for (let x in storeEmployee.value) {
      store_email.value = storeEmployee.value[x].email;
    }
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};

const filterProduct = async () => {
  try {
    filteredProduct.value = datas.value.filter(
      (product) => product.kebele == kebele && product.seller == seller
    );
  } catch (err) {}
};
</script>

<style></style>
