<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <AdminPanel />
      <div class="w-full">
        <div class="p-6 overflow-x-auto text-justify flex justify-center">
          <table class="table-auto w-full text-gray-700">
            <thead class="bg-slate-400">
              <tr>
                <th class="py-2 pl-2">Name</th>
                <th class="py-2 pl-2">Father Name</th>
                <th class="py-2 pl-2">Phone</th>
                <th class="py-2 pl-2">Email</th>
                <th class="py-2 pl-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in newUsers" :key="item.email">
                <td
                  class="pl-2"
                  v-if="item.kebele == kebele && item.fName == selectedActiveUser"
                >
                  {{ item.fName }}
                </td>
                <td
                  class="pl-2"
                  v-if="item.kebele == kebele && item.fName == selectedActiveUser"
                >
                  {{ item.faName }}
                </td>
                <td
                  class="pl-2"
                  v-if="item.kebele == kebele && item.fName == selectedActiveUser"
                >
                  {{ item.phone }}
                </td>
                <td
                  class="pl-2"
                  v-if="item.kebele == kebele && item.fName == selectedActiveUser"
                >
                  {{ item.email }}
                </td>
                <button
                  class="pl-2"
                  v-if="item.kebele == kebele && item.fName == selectedActiveUser"
                  @click.prevent="deleteUser(item.email)"
                >
                  delete
                </button>
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
import { onMounted, ref } from "vue";
import AdminPanel from "../components/AdminPanel.vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const newUsers = ref([]);
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const userByName = ref("");
const selectedActiveUser = localStorage.getItem("active_user_name");

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

const deleteUser = async (email) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteActiveMahiberatUser(email);
      Swal.fire("Deleted Successfully!");
    }
  });
};

const deleteActiveMahiberatUser = async (email) => {
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
