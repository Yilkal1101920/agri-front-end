<template>
  <div>
    <div class="bg-green-50 flex w-full dark:bg-gray-800 text-gray-700 dark:text-white">
      <AdminPanel />
      <Dash />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Dash from "../components/Dash.vue";

const router = useRouter();

onMounted(() => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("please login first");
    router.replace("/login");
  }
});
</script>

<style scoped>
.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: black;
  color: white;
}
</style>
