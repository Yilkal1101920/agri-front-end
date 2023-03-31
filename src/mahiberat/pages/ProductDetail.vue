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
          item.product_id == selected_product &&
          item.marketState == 1 &&
          item.postedForMarket != 0
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
              item.marketState == 1 &&
              item.postedForMarket != 0 &&
              item.category == categoryDetail &&
              item.marketState == 1 &&
              item.postedForMarket != 0
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
const order_email = localStorage.getItem("manager_email"); // the email of user who orders the product to add cart

const pro_id = ref(0); ///the primary key id of the product
const orderRestrictAmount = ref(0);

const selected_product = localStorage.getItem("product_id");
const productDetail = ref([]);
const categoryDetail = ref("");

const checkInput = async (id) => {
  if (count2.value[id] > 0) {
    getProductByIdforVmodel(id);
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

const getProductByIdforVmodel = async (id) => {
  // get product by id for product_id
  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
  } catch (err) {}
  checkAmount(idforVmodell.value);
};

const svgClicked = async () => {
  // get product by id for product_id
  try {
  } catch (err) {}
};

const totalOrderedCart = () => {
  //total  ordered carts calculation
  useCounter.inputValue = count2.value[idforVmodell.value];
  useCounter.totalCart();
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

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT

  if (!localStorage.getItem("user_email")) {
    alert("login first to order product");
    router.replace("/login");
  } else {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`); /////CALCULATE UN ORDERED AMOUNT
      numberOfItems.value = response.data.postedForMarket;
      productName.value = response.data.title;

      console.log(response.data.postedForMarket);
      console.log(numberOfItems.value);

      if (
        numberOfItems.value >= count2.value[idforVmodell.value] &&
        count2.value[idforVmodell.value] >= 0
      ) {
        updatedAmount.value =
          response.data.postedForMarket - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;
        await getOrderRestrictionQuantity(productName.value, kebele_address);

        if (count2.value[idforVmodell.value] <= orderRestrictAmount.value) {
          await getTransactionHistoryByEmailAndProductName(
            productName.value,
            order_email
          );
          if (transactProduct.value == undefined || transactionEmail.value == undefined) {
            updateProductById(id);
            addToTransaction();
          } else {
            if (
              count2.value[idforVmodell.value] <=
              orderRestrictAmount.value - totalOrderQuantity.value
            ) {
              updateProductById(id);
              updateTransactionByEmailAndProductName(productName.value, order_email);
            } else {
              if (
                count2.value[idforVmodell.value] >
                  orderRestrictAmount.value - totalOrderQuantity.value &&
                totalOrderQuantity.value < orderRestrictAmount.value
              ) {
                const remainOrder = orderRestrictAmount.value - totalOrderQuantity.value;
                alert("You can order a maximum of " + remainOrder);
              } else {
                alert("ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም");
              }
            }
          }
        } else {
          alert("You can not order more than " + orderRestrictAmount.value);
        }
      } else {
        alert(
          "You can only order from 0 upto " +
            numberOfItems.value +
            " items please re-order again"
        );
      }
    } catch (err) {}
  }
};

const getOrderRestrictionQuantity = async (name, kebele) => {
  const orderRestriction = await axios.get(
    `http://localhost:5000/orderRestriction/${name}/${kebele}`
  );

  orderRestrictAmount.value = orderRestriction.data.allowed_quantity;
};

const getTransactionHistoryByEmailAndProductName = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );

  transactProduct.value = transactionHistory.data.product_name;
  transactionEmail.value = transactionHistory.data.transaction_email;
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
};

const updateProductById = async (id) => {
  // nOrder = ;
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      ///update  amount and norders in agri_product table
      postedForMarket: updatedAmount.value,
      state: 1,
      nOrders: count2.value[idforVmodell.value],
    });

    addOrder(); //add orders into orderstable
    getProducts();
    window.location.reload();
  } catch (err) {}
  totalOrderedCart();
};

const updateTransactionByEmailAndProductName = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: count2.value[idforVmodell.value] + totalOrderQuantity.value,
    });
  } catch (err) {}
};

const addOrder = async () => {
  try {
    await axios.post("http://localhost:5000/order", {
      user_email: order_email,
      nOrders: count2.value[idforVmodell.value],
      totalCart: useCounter.totalCount,
      product_id: pro_id.value,
    });
  } catch (err) {}
};
</script>

<style scoped></style>
