<template>
  <div class="flex bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1 w-full">
      <AdminPanel />
      <div class="w-full px-6">
        <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-full">
          <router-link to="/mahiberat/dashboard">
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
          <p class="font-mono font-bold text-lg text-gray-700 dark:text-white">
            Total Mahiberat Members
          </p>
          <div class="w-[50%]">
            <form action="">
              <div class="flex gap-0">
                <input
                  type="search"
                  v-model="filterMember"
                  name="search"
                  id="searchProduct"
                  placeholder=" Search member..."
                  class="w-[80%] shadow-sm p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
                />
                <input
                  type="submit"
                  value="Search"
                  @click="searchMember"
                  class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
                />
              </div>
            </form>
          </div>
          <router-link to="/mahiberat/addNewMember">
            <button
              class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
              @click="productAdd"
            >
              Add Member
            </button>
          </router-link>
        </div>
        <div class="overflow-x-auto flex mt-6">
          <table class="table-auto text-justify text-slate-700 dark:text-white w-full">
            <thead class="bg-slate-400 text-white">
              <tr>
                <th class="pl-2 py-2">Name</th>
                <th class="pl-2 py-2">Father Name</th>
                <th class="pl-2 py-2">ID</th>
                <th class="pl-2 py-2">Phone</th>
                <th class="pl-2 py-2">Kebele</th>
                <th class="pl-2 py-2">Sub Kebele</th>
                <th class="pl-2 py-2">Village</th>
                <th class="pl-2 py-2">Job</th>
                <th class="pl-2 py-2">Sex</th>
                <th class="pl-2 py-2">Age</th>
                <th class="pl-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 dark:text-white">
              <tr
                v-for="member in newUsers"
                :key="member.username"
                class="hover:bg-slate-200"
              >
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.fName }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.faName }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.username }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.phone }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.kebele }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.subKebele }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.village }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.job }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.sex }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.age }}
                </td>
                <button
                  class="pl-2"
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  @click.prevent="deleteMember(member.username)"
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
const filterMember = ref("");

const kebele = localStorage.getItem("kebele");

const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    newUsers.value = users.data;
  } catch (err) {}
};
onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
  ) {
    alert("login first");
    router.replace("/login");
  }
  getTotalMahiberatMembers();
});
const deleteMember = async (m_id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteMahiberatMember(m_id);
      Swal.fire("Deleted Successfully!");
    }
  });
};

const deleteMahiberatMember = async (m_id) => {
  try {
    await axios.delete(`http://localhost:5000/mahiberat/mahiberatMembers/${m_id}`);
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};
const searchMember = async () => {
  localStorage.setItem("mahiberat_member_name", filterMember.value);
  router.push(`/mahiberat/totalMembers/${filterMember.value}`);
};
</script>

<style scoped>
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
</style>
