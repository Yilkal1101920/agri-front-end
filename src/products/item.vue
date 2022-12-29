<template>
<div class="overscroll-auto overflow-y-scroll inset-y-0">
    <div class="p-2 float-left w-screen h-screen">
        <div class="container mx-auto">
            <div class="overflow-y-scroll overflow-x-scroll text-blue-500">
                <div>
                    <div class="flex flex-col">
                        <div class="flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer   h-74 w-60  p-4 shadow-md">
                            <div class="hover:bg-blue-300">
                                <div class="w-full h-32 hover:bg-blue-300">
                                    <div class="flex justify-end"><svg class="w-5 h-5 fill-current text-yellow-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg></div>
                                    <img class="h-28 w-full mt-2 border rounded-lg" :src='items.image' alt="image">
                                </div>
                            </div>
                            <p class="w-full flex justify-center">Lorem ipsum dolor </p>
                            <div class="flex justify-center">
                                        <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></button>
                                        <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></button>
                                        <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></button>
                                        <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></button>
                                        <button class="hover:bg-yellow-300"><svg @click.prevent="svgClicked()" class="w-5 h-5 fill-current text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></button>
                                    </div>
                                <div class="flex justify-center">
                                    <div>{{items.price}}</div>
                                    <div class="pl-1">Br Including VAT</div>
                                </div>
                            <div class="flex flex-row">
                                <div><input class="border rounded-lg p-3 w-20 h-5" type="number" v-model="count2[items.product_id]" /></div>
                                <div><button @click.prevent="getProductByIdforVmodel(items.product_id)" class="bg-blue-400 ml-1 border rounded-lg">Add to Cart{{count}}</button></div>
                            </div>
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
import {
    onMounted,
    ref
} from 'vue'
import {
    useSelectStore
} from "../state/selectProStore";
import {
    useCounterStore
} from "../state/store";
var useItemSelector = useSelectStore();
const count2 = ref([]);
var useCounter = useCounterStore();
const items = ref([]);

const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const idforVmodell = ref(0);

const pro_id = ref(0);  ///the primary key id of the product

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:5000/orders/${useItemSelector.itemId}`);
        items.value = response.data;
        console.log(items.value);
    } catch (err) {
        console.log(err);
    }
});

const getProductByIdforVmodel = async (id) => {  // get product by id for product_id
    try {
     const idforVmodel = await axios.get(`http://localhost:5000/orders/vModel/${id}`);
         idforVmodell.value = idforVmodel.data.product_id;

         console.log(idforVmodel.data.product_id)
         console.log(idforVmodell.value)


    } catch (err) {
        console.log(err);
    }
    checkAmount(idforVmodell.value);
}

const svgClicked = async () => {  // get product by id for product_id
    try {
        
        alert("SVG Clicked")

    } catch (err) {
    }
}

const checkAmount = async (id) => {          ////CHECK USER IS LOG IN OR NOT

if (!localStorage.getItem("user_email")) {
    alert('login first to order product')
router.replace("/login");
}

else
{
try {
    const response = await axios.get(`http://localhost:5000/orders/${id}`);   /////CALCULATE UN ORDERED AMOUNT
    numberOfItems.value = response.data.amount;

 console.log(response.data.amount);
 console.log(numberOfItems.value);


    if (numberOfItems.value >= count2.value[idforVmodell.value] && count2.value[idforVmodell.value] >= 0) {
        updatedAmount.value = response.data.amount - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;

       console.log(count2.value[idforVmodell.value]);

        updateProductById(id);
    } else {
        alert("You can only order from 0 upto " + numberOfItems.value + " items please re-order again")
    }

    console.log(count2.value[idforVmodell.value]);

} catch (err) {
    console.log(err);

}

}

}

const updateProductById = async (id) => {
    // nOrder = ;
    try {
        await axios.put(`http://localhost:5000/orders/${id}`, {   ///update  amount and norders in agri_product table
            amount: updatedAmount.value,
            state: 1,
            nOrders: count2.value[idforVmodell.value],
        });


        addOrder();  //add orders into orderstable
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
    totalOrderedCart();
}

const addOrder = async ()=>{
        try {
        await axios.post("http://localhost:5000/order", {
                user_email: order_email,
                nOrders: count2.value[idforVmodell.value],
                totalCart: useCounter.totalCount,
                product_id: pro_id.value,
            });
        }catch (err) {
                alert("error",err);
                console.log('error', err);
            }
        };

        
        const totalOrderedCart = () => {    //total  ordered carts calculation
    useCounter.inputValue = count2.value[idforVmodell.value];
    useCounter.totalCart();
}

</script>

<style scoped>

</style>
