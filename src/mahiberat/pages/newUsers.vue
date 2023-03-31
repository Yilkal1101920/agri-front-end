<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="p-8">
      <div v-for="item in newUsers" :key="item.email">
        <div>
          <div class="text-black">
            <div class="p-4">
              <div
                v-if="
                  item.active == 0 && item.user_role == 'user' && item.kebele == kebele
                "
                class="flex flex-row space-x-20"
              >
                <div>{{ item.fName }}</div>
                <div>{{ item.faName }}</div>
                <div>{{ item.phone }}</div>
                <div>{{ item.email }}</div>
                <button @click.prevent="updateUserbyEmail(item.email)">accept</button>
                <button @click.prevent="deleteUser(item.email)">reject</button>
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
import AdminPanel from "../components/AdminPanel.vue";
import { useRouter } from "vue-router";

const newUsers = ref([]);
const router = useRouter();

const orderArray = ref([]);
const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    newUsers.value = users.data;
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
  getUsers();
});

const updateUserbyEmail = async (email) => {
  try {
    axios.put(`http://localhost:5000/users/${email}`, {
      active: 1,
    });
  } catch (err) {}
  window.location.reload();
};

const deleteUser = async (email) => {
  alert("Are You sure to delete");
  try {
    await axios.delete(`http://localhost:5000/users/email/${email}`);
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
