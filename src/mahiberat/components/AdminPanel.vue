<template>
  <div
    class="w-60 pl-5 bg-blue-100 dark:bg-gray-800 py-5 border-1 border-blue-300 sticky top-0"
  >
    <div class="text-black dark:text-white">
      <div class="">
        <h1><b>Admin Panel</b></h1>
      </div>
      <div class="">
        <ul class="p-4 gap-5">
          <li>
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="dashShow">
                <svg
                  class="w-5 h-5 border-none"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HomeIcon"
                  tabindex="-1"
                  title="Home"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Dashboard</h1>
              </button>
            </div>
          </li>
          <li class="pt-2">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="newMore = !newMore">
                <svg
                  class="w-6 h-6 white:text-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">News</h1>
              </button>
            </div>
            <ul v-if="newMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="addInformation">Add News</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="showPostedNews">Posted News</button>
              </li>
            </ul>
          </li>
          <li class="pt-2">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="mMore = !mMore">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ProductionQuantityLimitsIcon"
                >
                  <path
                    d="M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Products</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="mMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="productAdd">Product Add</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="productList">Product List</button>
              </li>
            </ul>
          </li>
          <li class="pt-2">
            <div>
              <button class="flex flex-row" @click.prevent="fMore = !fMore">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AssignmentIcon"
                >
                  <path
                    d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Orders</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="fMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="orderList">Order List</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="orderRestriction">Add Restriction</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="orderRestrictionList">Restriction List</button>
              </li>
            </ul>
          </li>
          <li class="pt-4">
            <button @click.prevent="uMore = !uMore">
              <div class="flex flex-row">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccessibilityIcon"
                  tabindex="-1"
                  title="Accessibility"
                >
                  <path
                    d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">users</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </div>
            </button>
            <ul v-if="uMore" class="p-3">
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="activeUsers">Active users</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="addNewMember">Add Members</button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button @click.prevent="totalMembers">Total Members</button>
              </li>
            </ul>
          </li>
          <li class="pt-4">
            <div @click.prevent="showDepartment" class="flex flex-row">
              <svg
                class="w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LocalFireDepartmentIcon"
                tabindex="-1"
                title="LocalFireDepartment"
              >
                <path
                  d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
                ></path>
                <path
                  d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
                ></path>
              </svg>
              <h1 class="pl-3 cursor-pointer hover:text-green-700">Department</h1>
              <button @click.prevent=""></button>
            </div>
          </li>
          <li class="pt-4">
            <div>
              <button class="flex flex-row" @click.prevent="aMore = !aMore">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SupervisorAccountIcon"
                  tabindex="-1"
                  title="SupervisorAccount"
                >
                  <path
                    d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Accounts</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="aMore" class="p-3">
              <li>invoice</li>
              <li>create invoice</li>
              <li>salary slip</li>
              <li></li>
            </ul>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="reportShow">
                <svg
                  class="w-6 h-6 dark:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Report</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="reportShow1">
                <svg
                  class="w-6 h-6 dark:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Report</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="settingShow">
                <svg
                  class="w-6 h-6 dark:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Settings</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div @click.prevent="chatWithUsers" class="flex flex-row">
              <svg
                class="w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LocalFireDepartmentIcon"
                tabindex="-1"
                title="LocalFireDepartment"
              >
                <path
                  d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
                ></path>
                <path
                  d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
                ></path>
              </svg>
              <h1 class="pl-3 cursor-pointer hover:text-green-700">Conversation</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const mMore = ref(false);
const aMore = ref(false);
const fMore = ref(false);
const newMore = ref(false);
const uMore = ref(false);

const productAdd = () => {
  router.replace("/mahiberat/addProduct");
};
const productList = () => {
  router.replace("/mahiberat/productsList");
};
const dashShow = () => {
  router.replace("/mahiberat/dashboard");
};
const addInformation = () => {
  router.replace("/mahiberat/addNews");
};
const showPostedNews = () => {
  router.replace("/mahiberat/postedNews");
};
const orderList = () => {
  router.replace("/mahiberat/orderList");
};
const orderRestriction = () => {
  router.replace("/mahiberat/orderRestriction");
};
const orderRestrictionList = () => {
  router.replace("/mahiberat/orderRestrictionList");
};

const chatWithUsers = () => {
  router.replace("/mahiberat/chat");
};

const showDepartment = () => {
  router.replace("/mahiberat/department");
};

const activeUsers = () => {
  router.replace("/mahiberat/activeUsers");
};
const addNewMember = () => {
  router.replace("/mahiberat/addNewMember");
};
const totalMembers = () => {
  router.replace("/mahiberat/totalMembers");
};
const reportShow = () => {
  router.replace("/mahiberat/report");
};
const reportShow1 = () => {
  router.replace("/mahiberat/report1");
};
const settingShow = () => {
  router.replace("/mahiberat/settings");
};
</script>
