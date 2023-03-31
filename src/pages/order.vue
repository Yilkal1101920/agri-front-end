<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-20 gap-5">
      <div class="text-black pl-14 py-12 w-full">
        <div class="border">
          <div v-for="item in getUserEmail" :key="item.email">
            <div>
              <div class="" v-if="item.email == cart_email">
                <form>
                  <div class="form-group mb-6">
                    <div class="form-group mb-6">
                      <label
                        for="fname"
                        class="form-label inline-block mb-2 text-gray-700"
                        >First Name</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="fname"
                        placeholder="First Name"
                        v-model="item.fName"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <label
                        for="lname"
                        class="form-label inline-block mb-2 text-gray-700"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="lname"
                        placeholder="Last Name"
                        v-model="item.faName"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <label
                        for="phone"
                        class="form-label inline-block mb-2 text-gray-700"
                        >Phone</label
                      >
                      <input
                        type="phone"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="phone"
                        placeholder="Phone"
                        v-model="item.phone"
                      />
                    </div>
                    <label for="email" class="form-label inline-block mb-2 text-gray-700"
                      >Email</label
                    >
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter email"
                      v-model="item.email"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700"
                      >Sub Kebele</label
                    >
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="item.subKebele"
                      placeholder="sub kebele"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700"
                      >Village</label
                    >
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="item.village"
                      placeholder="village"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-black pl-4 py-12 w-[50%]">
        <div class="flex justify-center items-center">
          <div>
            <h2 class="text-lg font-mono font-bold pb-3">የክፍያ መንገድ ይምረጡ</h2>
            <button
              type="submit"
              class="bg-green-300 px-6 text-2xl py-2.5 text-blue-400 dark:bg-gray-800 font-medium mb-5 rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              @click.prevent="payWithChapa"
            >
              በቻፓ ይክፈሉ
            </button>
            <button
              type="submit"
              class="text-lg font-mono font-bold py-2 px-11 hover:scale-x-110 my-2 bg-green-300 text-blue-400 hover:text-white leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              በፔይፓል ይክፈሉ
            </button>
            <button
              type="submit"
              class="text-lg font-mono font-bold py-2 px-11 hover:scale-x-110 my-2 bg-green-300 text-blue-400 hover:text-white leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              በስትራይፕ ይክፈሉ
            </button>
            <div>
              <form
                ref="myform"
                id="paymentForm"
                action="http://localhost:5000/payment"
                method="POST"
              >
                <button
                  class="text-lg font-mono font-bold py-2 px-11 hover:scale-x-110 my-2 bg-green-300 text-blue-400 hover:text-white leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  በስትሪፕ ይክፈሉ
                </button>
              </form>
            </div>
            <div class="form-check">
              <input
                required
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-green-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="text-lg font-mono font-bold text-gray-800"
                for="flexRadioDefault1"
              >
                ሲቀበሉ ይክፈሉ
              </label>
            </div>
            <div class="form-check pt-5">
              <input
                required
                class="text-lg font-mono font-bold text-gray-800 rounded-full h-4 w-4 border border-green-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="telebirr"
                checked
              />
              <label class="text-lg font-mono font-bold text-gray-800" for="telebirr">
                telebirr
              </label>
              <div class="">
                <img class="h-36 w-auto" src="https://i.ibb.co/2dMZ2CZ/Telebirr.jpg" />
              </div>
            </div>
            <div class="form-check">
              <input
                required
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-green-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="cbebirr"
              />
              <label class="text-lg font-mono font-bold text-gray-800" for="cbebirr">
                CBE birr
              </label>
              <div class="pt-10">
                <img class="w-auto h-36" src="https://i.ibb.co/f4Kw6vX/cbe.jpg" />
              </div>
            </div>
            <div class="form-check pt-10">
              <input
                required
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-green-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="awashbank"
                checked
              />
              <label class="text-lg font-mono font-bold text-gray-800" for="awashbank">
                ጸደይ ባንክ
              </label>
              <div class="">
                <img class="w-auto h-36" src="../assets/tsedaybanklogo.jpg" />
              </div>
            </div>
            <button
              type="submit"
              class="mt-3 px-8 py-2 text-lg hover:scale-x-110 font-mono font-bold hover:text-white bg-green-400 hover:bg-green-700 text-white leading-tight rounded-lg shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              @click.prevent="order()"
            >
              ጨርሰህ ውጣ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCounterStore } from "../state/store"; //for counting total cart

const UseCount = useCounterStore();

const router = useRouter();

const getUserEmail = ref([]);

const name = ref("");
const fname = ref("");
const payemail = ref("");
const totalCost = localStorage.getItem("totalCost");
const cart_email = localStorage.getItem("user_email");

let myform;
let foo;
onMounted(async () => {
  await getUserByEmail();
  // await payment();
});

const getUserByEmail = async () => {
  try {
    const getUser = await axios.get(`http://localhost:5000/users`);
    getUserEmail.value = getUser.data;
    for (let x in getUserEmail.value) {
      if (cart_email == getUserEmail.value[x].email) {
        name.value = getUserEmail.value[x].fName;
        fname.value = getUserEmail.value[x].faName;
        payemail.value = getUserEmail.value[x].email;
      }
    }
  } catch (err) {}
};

const order = () => {
  UseCount.totalCount = 0;
  router.replace("/reciet/pdf");
};
const payWithChapa = async () => {
  const url = await axios.post("http://localhost:5000/api/pay", {
    amount: "5000",
    currency: "ETB",
    email: payemail.value,
    first_name: name.value,
    last_name: fname.value,
  });
  window.location.href = url.data.url;
};
</script>
