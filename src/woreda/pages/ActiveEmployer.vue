<template>
  <div class="w-full h-full bg-green-50 dark:bg-gray-800">
    <div class="mx-6">
      <div class="flex items-center">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/woreda/dashboard">
            <span
              ><svg
                class="fill-current h-8 w-auto text-green-600 hover:text-green-900 cursor-pointer"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowCircleLeftOutlinedIcon"
                tabindex="-1"
                title="ArrowCircleLeftOutlined"
              >
                <path
                  d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"
                ></path></svg
            ></span>
          </router-link>
          <p class="text-gray-700 dark:text-white">Back to Dashboard</p>
        </div>
        <p
          class="text-center pl-[30%] text-lg text-gray-700 dark:text-white font-bold font-mono"
        >
          Active Employees
        </p>
      </div>
      <div class="pb-6 w-full overflow-x-auto">
        <table class="tableClass table-auto">
          <thead class="text-gray-700 dark:text-white bg-slate-400">
            <tr>
              <th class="py-2 pl-2">Name</th>
              <th class="py-2 pl-2">Father Name</th>
              <th class="py-2 pl-2">ID</th>
              <th class="py-2 pl-2">Phone</th>
              <th class="py-2 pl-2">Kebele</th>
              <th class="py-2 pl-2">Role</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 dark:text-white">
            <tr v-for="user in newUsers" :key="user.username" class="hover:bg-slate-200">
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.fName }}
              </td>
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.faName }}
              </td>
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.username }}
              </td>
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.phone }}
              </td>
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.kebele }}
              </td>
              <td
                v-if="
                  (user.user_role == 'manager' || user.user_role == 'store') &&
                  user.user_state == 1
                "
                class=""
              >
                {{ user.user_role }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const newUsers = ref([]);
const router = useRouter();

const getTotalActiveEmployers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    newUsers.value = users.data;
  } catch (err) {}
};
onMounted(async () => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
  ) {
    alert("login first");
    router.replace("/login");
  }
  getTotalActiveEmployers();
});
</script>

<style scoped>
.bg {
  background-color: #030702;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.tableClass {
  transition: all 0.5s ease;
}
</style>
