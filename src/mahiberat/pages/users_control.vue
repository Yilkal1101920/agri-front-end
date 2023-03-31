<template>
  <div class="dark:bg-gray-800 bg-green-50">
    <table
      class="table is-striped is-bordered mt-2 is-fullwidth text-black dark:text-white"
    >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.user_id">
          <td v-if="item.kebele == kebele">{{ item.fName }}</td>
          <td v-if="item.kebele == kebele">{{ item.faName }}</td>
          <td v-if="item.kebele == kebele">{{ item.phone }}</td>
          <td v-if="item.kebele == kebele">{{ item.email }}</td>
          <td v-if="item.kebele == kebele" class="has-text-centered">
            <a
              class="button is-danger is-small bg-red-600"
              @click="deleteUser(item.user_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const items = ref([]);
const kebele = localStorage.getItem("kebele");

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("login first");
    router.replace("/login");
  }
  getUser();
});

const deleteUser = async (id) => {
  alert("Are You sure to delete");
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUser();
  } catch (err) {
    console.log(err);
  }
};

const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    items.value = response.data;
    console.log(items.value);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
