<script setup>
import axios from "axios";
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"
import { uselogoutStore } from "../state/logoutStore"; //import for logout display
const logoutStor = uselogoutStore();
const fname = ref('');
const lname = ref('');
const phone = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const signup = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((res) => {
        console.log(res.user.getIdToken);
        saveUser();
        alert('Success');
        logoutStor.logStore = true; // show log out button
    }).catch((error) => {
        console.log(error)
    })
}
const saveUser = ()=>{
  console.log('alehu');
          console.log('alehuuuuuuuuu');
          axios.post("http://localhost:5000/users", {
                fName: fname.value,
                faName: lname.value,
                phone: phone.value,
                email: email.value 
            });
            router.push("/");
        }
</script>

<template>
<div>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <div class="flex flex-col justify-center items-center">
        <main>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="First Name" v-model="fname">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="lname" placeholder="Last Name" v-model="lname">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" placeholder="Phone" v-model="phone">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                        <small id="emailHelp" class="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group mb-6">
                        <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Password</label>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Password" v-model="password">
                    </div>
                    <div class="form-group form-check mb-6">
                        <input type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck1">
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
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
      ease-in-out" @click.prevent="signup">Register</button>
                </form>
            </div>
        </main>
    </div>
</div>
</template>
