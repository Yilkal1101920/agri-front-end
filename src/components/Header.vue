<template>
  <div class="w-full h-full">
    <header>
      <nav class="px-4 py-2.5 h-4 text-gray-800 dark:text-white">
        <div class="flex items-center">
          <!-- v-if="role == 'user'" -->
          <div class="" v-if="role == 'user' || role == 'customer'">
            <h1
              v-if="role == 'user' && seller == 'mahiberat'"
              class="absolute right-32 top-0 lg:absolute lg:right-40 lg:top-2 hover:bg-blue-100 dark:bg-white bg-white rounded-full"
            >
              <div class="rounded-full">
                <div class="text-gray-800 dark:text-text-gray-800">
                  <small>{{ numberOfCarts }}</small>
                </div>
                <RouterLink to="/product/cart"
                  ><svg class="fill-current text-blue-900 w-5 h-5">
                    <path
                      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                    ></path></svg
                ></RouterLink>
              </div>
            </h1>
            <h1
              v-if="role == 'customer' || (role == 'user' && seller == 'farmer')"
              class="absolute right-32 top-0 lg:absolute lg:right-40 lg:top-2 hover:bg-blue-100 dark:bg-white bg-white rounded-full"
            >
              <div class="rounded-full">
                <div class="text-gray-800 dark:text-text-gray-800">
                  <small>{{ numberOfProducts }}</small>
                </div>
                <RouterLink to="/product/customer/cart"
                  ><svg class="fill-current text-blue-900 w-5 h-5">
                    <path
                      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                    ></path></svg
                ></RouterLink>
              </div>
            </h1>
          </div>
          <!-- v-if="role == 'user'" -->
          <button
            v-if="role == 'user'"
            class="absolute right-20 top-0 lg:absolute lg:right-20 lg:top-2 hover:bg-blue-100 bg-white rounded-full"
            @click.prevent="notification"
          >
            <div>
              <small class="text-gray-800 dark:text-gray-800">{{ totalNews }}</small>
            </div>
            <svg
              class="fill-current text-black w-5 h-5"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="NotificationsIcon"
              tabindex="-1"
              title="Notifications"
            >
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              ></path>
            </svg>
          </button>

          <div class="flex items-center">
            <button
              class="absolute right-8 top-2 lg:absolute lg:right-0 lg:top-4 dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap mr-2"
              type="button"
              @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar"
            >
              <svg
                class="fill-current text-white w-auto h-6 hover:text-red-500 hover:p-1 hover:bg-yellow-500 hover:rounded-full"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonOutlineIcon"
                tabindex="-1"
                title="PersonOutline"
              >
                <path
                  d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <NewNotificationBar
      class="absolute w-40 right-2 top-20 mr-0"
      v-if="useNotification.showNotificationBar"
    />
    <SideBar class="absolute w-40 right-0 top-20 mr-0" v-if="useNavigator.showSideBar" />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import SideBar from "./SideBar.vue";
import NewNotificationBar from "./NewNotificationBar.vue";

import { useNavigationStore } from "../state/showNavigationStore.js";
import { useNotificationStore } from "../state/showNotification.js";

var useNotification = useNotificationStore();

var useNavigator = useNavigationStore();

const totalCartNumber = ref("");
var numberOfCarts = ref(0);
var numberOfProducts = ref(0);
var cart_email = ref("");
const totalNews = ref(0);
const news = ref([]);

const lastNotification_id = ref(0);

const role = ref("");

const kebele = localStorage.getItem("kebele");

const seller = localStorage.getItem("seller");

const showedNotificationId = ref();

const user_email = localStorage.getItem("user_email");
var customer_cart_email = ref("");

onMounted(async () => {
  getTotalCart();
  getTotalNews(localStorage.getItem("user_email"));
  role.value = localStorage.getItem("role");
  console.log(role.value);
});

const getTotalCart = async () => {
  try {
    const response = await axios.get("http://localhost:5000/order");
    totalCartNumber.value = response.data;

    cart_email = localStorage.getItem("user_email");
    customer_cart_email = localStorage.getItem("customer_email");

    for (let x in totalCartNumber.value) {
      if (
        totalCartNumber.value[x].user_email == cart_email &&
        totalCartNumber.value[x].payStatus == 0
      ) {
        // numberOfCarts.value = numberOfCarts.value + totalCartNumber.value[x].nOrders;
        numberOfCarts.value = numberOfCarts.value + 1;
      }
      if (
        totalCartNumber.value[x].user_email == customer_cart_email &&
        totalCartNumber.value[x].payStatus == 0
      ) {
        numberOfProducts.value = numberOfProducts.value + 1;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const notification = async () => {
  useNotification.showNotificationBar = !useNotification.showNotificationBar;
  if (localStorage.getItem("user_email") != undefined) {
    getShowedNotificationByEmail(localStorage.getItem("user_email"));
  }
};

const getTotalNews = async (email) => {
  try {
    const showed = await axios.get(`http://localhost:5000/showedNotification/${email}`);
    showed.data.notification_id;
    showedNotificationId.value = showed.data.notification_id;
    if (showed.data.notification_id == undefined) {
      showedNotificationId.value = 0;
    }
    useNotification.showNewNotificationStart = showedNotificationId.value;

    console.log(showedNotificationId.value);
    console.log(showedNotificationId.value);

    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    for (let x in news.value) {
      if (
        showedNotificationId.value < news.value[x].id &&
        kebele == news.value[x].kebele &&
        user_email != undefined
      )
        totalNews.value = totalNews.value + news.value[x].news_quantity;
      lastNotification_id.value = news.value[x].id;
    }
    useNotification.showNewNotificationEnd = lastNotification_id.value;
  } catch (err) {
    console.log("error", err);
  }
};

const showedNotification = () => {
  axios.post("http://localhost:5000/showedNotification", {
    email: cart_email,
    notification_id: lastNotification_id.value,
  });
};

const getShowedNotificationByEmail = async (email) => {
  try {
    const showedNO = await axios.get(`http://localhost:5000/showedNotification/${email}`);
    console.log(showedNO.data.notification_id);

    if (showedNO.data.notification_id <= lastNotification_id.value) {
      updateShowedNotificationByEmail(showedNO.data.email);
    } else {
      showedNotification();
    }
  } catch (err) {
    console.log(err);
  }
};

const updateShowedNotificationByEmail = async (email) => {
  // nOrder = ;
  try {
    await axios.put(`http://localhost:5000/showedNotification/${email}`, {
      notification_id: lastNotification_id.value,
    });
  } catch (err) {}
};
</script>
