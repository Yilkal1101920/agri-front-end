<template>
  <div v-if="useNavigator.showSideBar">
    <aside
      class="overflow-y-auto rounded bg-green-500 dark:bg-gray-800 py-6 px-3"
      aria-label="Sidebar"
    >
      <div class="">
        <div class="nav">
          <ul>
            <li @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar">
              <router-link
                v-if="!log_display"
                to="/login"
                class="text-gray-800 dark:text-white hover:scale-110 hover:text-white"
                >Log In</router-link
              >
            </li>
            <li @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar">
              <router-link
                v-if="!log_display"
                to="/register"
                class="text-gray-800 dark:text-white hover:scale-110 hover:text-white"
                >create new Account</router-link
              >
            </li>
            <li>
              <button
                v-if="log_display"
                @click.prevent="logout"
                class="text-gray-800 dark:text-white hover:scale-110 hover:text-white"
              >
                logout
              </button>
            </li>
            <li @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar">
              <button v-if="check_user" class="">
                <router-link
                  to="/userDashboard"
                  class="text-gray-800 dark:text-white hover:scale-110 hover:text-white"
                  >profile</router-link
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNavigationStore } from "../state/showNavigationStore.js";

var useNavigator = useNavigationStore();
const log_display = ref(false);

const log_check = localStorage.getItem("user_id");
const check_user = localStorage.getItem("user_email");

onMounted(async () => {
  //get total cart from orders table by email
  if (log_check == 1) {
    log_display.value = true;
  } else {
    log_display.value = false;
  }
});

const logout = () => {
  localStorage.removeItem("user_id");
  // loginfo.logStore = false; // logout display none
  if (localStorage.getItem("role") == "manager") {
    localStorage.removeItem("manager_email");
    localStorage.removeItem("role");
    localStorage.removeItem("kebele");
  } else if (localStorage.getItem("role") == "store") {
    localStorage.removeItem("store_email");
    localStorage.removeItem("role");
  } else {
    localStorage.removeItem("user_email");
    localStorage.removeItem("role");
    localStorage.removeItem("kebele");
  }
  // loginfo.logStore = false;
  useNavigator.showSideBar = !useNavigator.showSideBar;
  // router.push("/");
  self.location.replace("/");
};
</script>
