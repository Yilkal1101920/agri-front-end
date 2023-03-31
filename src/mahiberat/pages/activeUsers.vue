<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <AdminPanel />
      <div class="w-full">
        <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-full">
          <p class="font-mono font-bold text-lg text-gray-700 dark:text-white">
            Total Active Members
          </p>
          <div class="w-[50%]">
            <form action="">
              <div class="flex gap-0">
                <input
                  type="search"
                  v-model="userByName"
                  name="search"
                  id="searchProduct"
                  placeholder=" Search member..."
                  class="w-[80%] shadow-sm p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
                />
                <input
                  type="submit"
                  value="Search"
                  @click="searchUserByName"
                  class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
                />
              </div>
            </form>
          </div>
          <router-link to="/mahiberat/totalMembers">
            <button
              class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
              @click="productAdd"
            >
              Total Member
            </button>
          </router-link>
        </div>
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
              <tr v-for="user in newUsers" :key="user.email">
                <td class="pl-2" v-if="user.kebele == kebele && user.user_role == 'user'">
                  {{ user.fName }}
                </td>
                <td class="pl-2" v-if="user.kebele == kebele && user.user_role == 'user'">
                  {{ user.faName }}
                </td>
                <td class="pl-2" v-if="user.kebele == kebele && user.user_role == 'user'">
                  {{ user.phone }}
                </td>
                <td class="pl-2" v-if="user.kebele == kebele && user.user_role == 'user'">
                  {{ user.email }}
                </td>
                <button
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.user_state == 1
                  "
                  @click.prevent="deActivateAccount(user.email)"
                >
                  Deactivate
                </button>
                <button
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.user_state == 0
                  "
                  @click.prevent="activateAccount(user.email)"
                >
                  Activate
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

const deActivateAccount = async (email) => {
  Swal.fire({
    title: "Are you sure to deactivate this account?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deActivateMahiberatUserAccount(email);
      Swal.fire("Deactivated Successfully!");
    }
  });
};

const deActivateMahiberatUserAccount = async (email) => {
  try {
    await axios.put(`http://localhost:5000/users/email/${email}`, {
      user_state: 0,
    });
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};

const activateAccount = async (email) => {
  try {
    await axios.put(`http://localhost:5000/users/email/${email}`, {
      user_state: 1,
    });
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};
const searchUserByName = async () => {
  localStorage.setItem("active_user_name", userByName.value);
  router.push(`/mahiberat/activeUsers/${userByName.value}`);
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
