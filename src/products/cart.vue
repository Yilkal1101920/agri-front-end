<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="flex flex-col mx-8">
        <div class="inset-x-20 inset-y-0">
            <div class="p-2 flex flex-row">
                <div class="table-auto text-justify text-black">
                    <div>
                        <div class="flex">
                            <h1 class="p-10">Item</h1>
                            <h1 class="p-10">Product</h1>
                            <h1 class="p-10">Price</h1>
                            <h1 class="p-10">Quantity</h1>
                            <h1 class="p-10">Sub Total</h1>
                        </div>
                    </div>
                    <!-- <div v-for="item in datas" :key="item.product_id">
                        <div v-if="(item.state==1)">
                            <div class="">
                                <div class="p-4">
                                    <div class="flex flex-row space-x-20">
                                        <div class="p-2 w-20 h-15"><img class="w-54 h-42" :src='item.image' alt="image"></div>
                                        <div>{{item.title}}</div>
                                        <div>{{item.price}}</div>
                                        <div>{{item.nOrders}}</div>
                                        <div>{{(item.price)*(item.nOrders)}}</div>
                                        <button v-if="useCartConfirm.cartConfirmStore" @click.prevent="updateState(item.product_id)">Yes</button>
                                        <button v-if="useCartConfirm.cartConfirmStore" @click.prevent="updateState(item.product_id)">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div v-for="item in datas" :key="item.order_id">
                        <div>
                            <div class="" v-if="item.user_email==cart_email">
                                <div class="p-4">
                                    <div class="flex flex-row space-x-20">
                                        <!-- <div class="p-2 w-20 h-15"><img class="w-54 h-42" :src='item.image' alt="image"></div> -->
                                        <div>{{item.order_id}}</div>
                                        <div>{{item.product_id}}</div>
                                        <div>{{item.user_email}}</div>
                                        <div> <input type="text" class="w-12 h-4 form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="orderArray[item.order_id]" v-model.content="item.nOrders"/></div>
                                        <button v-if="item.confirm != 1" @click.prevent="getOrderedProductByIdforConfirm(item.order_id)">Confirm</button> <h1 v-if="item.confir == 1">Confirmed</h1>
                                        <button v-if="item.confirm != 1" @click.prevent="getOrderedProductById(item.order_id)">Cancel</button> <h v-if="item.cancel == 1">Canceled</h>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-black px-14 py-12">
                    <div class="border-double border-4 border-blue-500 block p-16 rounded-lg shadow-lg bg-white max-w-sm">
                        <div v-for="item in getUserEmail" :key="item.email">
                        <div>
                            <div class="" v-if="item.email==cart_email">
                        <form>
                            <div class="form-group mb-6">
                                <div class="form-group mb-6">
                                    <label for="fname" class="form-label inline-block mb-2 text-gray-700">First Name</label>
                                    <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="First Name" v-model="item.fName">
                                </div>
                                <div class="form-group mb-6">
                                    <label for="lname" class="form-label inline-block mb-2 text-gray-700">Last Name</label>
                                    <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="lname" placeholder="Last Name" v-model="item.faName">
                                </div>
                                <div class="form-group mb-6">
                                    <label for="phone" class="form-label inline-block mb-2 text-gray-700">Phone</label>
                                    <input type="phone" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" placeholder="Phone" v-model="item.phone">
                                </div>
                                <label for="email" class="form-label inline-block mb-2 text-gray-700">Email</label>
                                <input type="email" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="item.email">
                            </div>
                            <div class="form-group mb-6">
                                <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Sub Kebele</label>
                                <input type="password" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="sub kebele">
                            </div>
                        </form>
                            </div>
                        </div>
                        </div>
                        <button type="submit" class="
          px-6
          py-6
          bg-black
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" @click.prevent="checkOutOrder">PROCCED TO CHECKOUT -></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import axios from "axios";
import {
    onMounted,
    ref
} from 'vue'
import {
    useRouter
} from "vue-router"

import {
    useCartConfirmStore
} from '../state/cartConfirm' //for seleced cart confirmation
const useCartConfirm = useCartConfirmStore();

const router = useRouter();
const datas = ref([])
const nOrderCart = ref(0);
const productId = ref(0);
const cart_email = localStorage.getItem('user_email');
const amountRollback = ref(0);

const orderArray = ref([]);
const getUserEmail = ref([]);
const orderDifference = ref(0);

const confirmDisplay = ref([]);


// const getProducts = async() => {
//     try {
//                 const response = await axios.get("http://localhost:5000/orders");
//                 datas.value = response.data;
//                 console.log(datas.value);

//                 useCartConfirm.cartConfirmStore = true;
//             } catch (err) {
//                 console.log(err);
//             }  

// }

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/order");
        datas.value = response.data;

        confirmDisplay.value[datas.value.order_id] = true;

    } catch (err) {
    }

}

const getOrderedProductById = async (id) => {
    try {
        const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
        nOrderCart.value = getOrder.data.nOrders;
        productId.value = getOrder.data.product_id;
        confirmDisplay.value[getOrder.data.order_id] = false;

        await updateOrderByOrderIdCancel(id);
        await updateAmount(productId.value);
        window.location.reload();
    } catch (err) {
        console.log(err);
    }

    confirm.value[id] = 1;
    cancel.value[id] = 1;

}

const getOrderedProductByIdforConfirm = async (id) => {
    try {
        const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
        productId.value = getOrder.data.product_id;
        orderDifference.value = getOrder.data.nOrders - orderArray.value[id];
        confirmDisplay.value[getOrder.data.order_id] = false;

        await updateOrderByOrderId(id);
        await updateAmountforConfirm(productId.value);
        window.location.reload();
    } catch (err) {
        console.log(err);
    }

    confirm.value[id] = 1;
    confir.value[id] = 1;

}

onMounted(async () => {
    await getProducts()
    await getUserByEmail()
});

// const updateState = async (id) => {

//     try {
//         await axios.put(`http://localhost:5000/orders/cart/${id}`, {
//             nOrders: 0,
//             state: 0,
//         });
//         getProducts()
//     } catch (err) {

//     }
// }

const getProductById = async (id) => { // for the purpose of updating amount

    try {
        const updatAmount = await axios.get(`http://localhost:5000/orders/${id}`);
        amountRollback.value = updatAmount.data.amount + nOrderCart.value;
    } catch (err) {
    }
}

const getProductByIdforConfirm = async (id) => { // for the purpose of updating amount

try {
    const updatAmount = await axios.get(`http://localhost:5000/orders/${id}`);
    amountRollback.value = updatAmount.data.amount + orderDifference.value;
} catch (err) {
}
}

const getUserByEmail = async () => { // for the purpose of updating amount

try {
    const getUser = await axios.get(`http://localhost:5000/users`);
    getUserEmail.value = getUser.data;
} catch (err) {
}
}

const updateAmount = async (id) => {
    await getProductById(id);
    try {
        axios.put(`http://localhost:5000/rollBack/${id}`, {
            amount: amountRollback.value,
            nOrders: 0,
            state: 0,
        });
    } catch (err) {
    }
}

const updateAmountforConfirm = async (id) => {
    await getProductByIdforConfirm(id);
    try {
        axios.put(`http://localhost:5000/rollBack/${id}`, {
            amount: amountRollback.value,
            nOrders: 0,
            state: 0,
        });
    } catch (err) {
    }
}

const updateOrderByOrderId = async (id) => {
    try {
        axios.put(`http://localhost:5000/order/${id}`, {
            confirm: 1,
            confir: 1,
            cancel: 0
        });
    } catch (err) {
    }
}

const updateOrderByOrderIdCancel = async (id) => {
    try {
        axios.put(`http://localhost:5000/order/${id}`, {
            confirm: 1,
            confir: 0,
            cancel: 1
        });
    } catch (err) {
    }
}

const checkOutOrder = () => {
    router.replace("/product/order");
}
</script>
