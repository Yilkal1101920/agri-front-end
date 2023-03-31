<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <div class="w-full">
      <div class="overflow-x-auto text-justify flex justify-center mt-1 mx-6 mb-6">
        <table class="table-auto text-gray-700 dark:text-white w-full">
          <thead class="bg-slate-400 dark:bg-white">
            <tr>
              <th class="py-2 pl-2">ProductId</th>
              <th class="py-2 pl-2">Category</th>
              <th class="py-2 pl-2">ProductType</th>
              <th class="py-2 pl-2">Title</th>
              <th class="py-2 pl-2">Price</th>
              <th class="py-2 pl-2">OrginalCost</th>
              <th class="py-2 pl-2">Amout</th>
              <th class="py-2 pl-2">Address</th>
              <th class="py-2 pl-2">Image</th>
              <th class="py-2 pl-2">Description</th>
              <th class="py-2 pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datas" :key="item.product_id" class="hover:bg-slate-200">
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.product_id }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.category }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.type_product }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.title }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.price }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.original_cost }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.amount }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.address }}
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td v-if="item.kebele == kebele && item.title == productName" class="pl-2">
                {{ item.description }}
              </td>
              <td
                v-if="item.kebele == kebele && item.title == productName"
                class="border-none hs-text-centered"
              >
                <div class="flex flex-row">
                  <a
                    class="button is-danger is-small bg-red-600 border rounded"
                    @click="deleteProduct(item.product_id)"
                  >
                    <svg
                      class="fill-current h-6 w-auto text-red-500 hover:text-red-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DeleteForeverOutlinedIcon"
                      tabindex="-1"
                      title="DeleteForeverOutlined"
                    >
                      <path
                        d="M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                      ></path></svg
                  ></a>
                  <a
                    class="button is-danger is-small bg-blue-600 ml-2 border rounded"
                    @click="editProductById(item.product_id)"
                  >
                    <svg
                      class="fill-current h-6 w-auto text-blue-500 hover:text-blue-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EditOutlinedIcon"
                      tabindex="-1"
                      title="EditOutlined"
                    >
                      <path
                        d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                      ></path></svg
                  ></a>
                  <a
                    class="button is-danger is-small bg-green-600 ml-2 border rounded"
                    @click.prevent="getProductById(item.product_id)"
                  >
                    <svg
                      class="fill-current h-6 w-auto text-green-500 hover:text-green-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DisplaySettingsOutlinedIcon"
                      tabindex="-1"
                      title="DisplaySettingsOutlined"
                    >
                      <path
                        d="M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z"
                      ></path>
                      <path
                        d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"
                      ></path></svg
                  ></a>
                </div>
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
import { useSelectStore } from "../state/selectProStore";
import Swal from "sweetalert2";

const datas = ref([]);
var useSelector = useSelectStore();
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const productName = localStorage.getItem("product_name");

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
};
onMounted(async () => {
  if (
    localStorage.getItem("store_email") == undefined ||
    localStorage.getItem("store_email") == null ||
    localStorage.getItem("role") != "store"
  ) {
    alert("please login first");
    router.replace("/login");
  }
  getProducts();
});

const deleteProduct = async (id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteProductInTheStore(id);
      Swal.fire("Deleted Successfully!");
    }
  });
};
const deleteProductInTheStore = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  } catch (err) {
    console.log(err);
  }
};
const getProductById = async (id) => {
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/mahiberat/product/${id}`);
  } catch (err) {
    console.log(err);
  }
};
const editProductById = async (id) => {
  try {
    const getProduct = await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.product_id = id;
    useSelector.category = getProduct.data.category;
    useSelector.product_type = getProduct.data.type_product;
    useSelector.title = getProduct.data.title;
    useSelector.price = getProduct.data.price;
    useSelector.orginal_cost = getProduct.data.orginal_cost;
    useSelector.amount = getProduct.data.amount;
    useSelector.address = getProduct.data.address;
    useSelector.description = getProduct.data.description;
    router.push(`/mahiberat/product/edit/${id}`);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
