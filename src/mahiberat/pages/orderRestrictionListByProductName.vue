<template>
  <div class="flex w-full h-full bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="w-full mx-5">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-[95%]"></div>

      <div class="overflow-x-auto text-justify flex justify-center mt-3 mb-6">
        <table class="table-auto w-full text-gray-700">
          <thead class="bg-slate-400">
            <tr class="">
              <th class="py-2 pl-2">Product Name</th>
              <th class="py-2 pl-2">Allowed Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="restriction in datas"
              :key="restriction.restriction_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="
                  restriction.kebele == kebele &&
                  restriction.product_name == orderRestrictionByProductName
                "
                class="pl-2"
              >
                {{ restriction.product_name }}
              </td>
              <td
                v-if="
                  restriction.kebele == kebele &&
                  restriction.product_name == orderRestrictionByProductName
                "
                class="pl-2"
              >
                {{ restriction.allowed_quantity }}
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
import AdminPanel from "../components/AdminPanel.vue";

const router = useRouter();

const datas = ref([]);

const kebele = localStorage.getItem("kebele");
const orderRestrictionByProductName = localStorage.getItem("restriction_product_name");

const getRestrictions = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderRestriction");
    datas.value = response.data;
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
  getRestrictions();
});
</script>

<style scoped>
.bg {
  background-color: #d3f5ce;
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
</style>
