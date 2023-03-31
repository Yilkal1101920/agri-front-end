<template>
  <div>
    <aside
      class="absolute overflow-y-auto rounded bg-blue-400 dark:bg-gray-800 py-8 px-3"
      aria-label="Sidebar"
    >
      <div class="">
        <div class="nav" v-for="item in news.slice().reverse()" :key="item.id">
          <ul
            v-if="
              item.id > useNotification.showNewNotificationStart && item.kebele == kebele
            "
          >
            <li
              @click.prevent="
                useNotification.showNotificationBar = !useNotification.showNotificationBar
              "
            >
              <router-link to="/events">
                <div>
                  {{ item.description }}
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useNotificationStore } from "../state/showNotification.js";

var useNotification = useNotificationStore();
const news = ref([]);
const kebele = localStorage.getItem("kebele");

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;
  } catch (err) {
    console.log("error", err);
  }
};

onMounted(async () => {
  await getNews();
});
</script>
