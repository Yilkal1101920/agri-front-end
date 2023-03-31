<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <ChatPanel />
    <div class="pl-7 w-full">
      <p
        class="text-lg font-mono text-gray-700 dark:text-white text-center justify-center my-4"
      >
        ማንኛውንም ስለምተገለገልበት የገበሬ አገልገሎት ጥያቄ መጠየቅ ይችላሉ
      </p>
      <div class="flex justify-between w-full">
        <label
          class="flex dark:text-white text-gray-700 font-bold pl-5 pt-5 font-mono text-lg"
          for="messageFromMahiberatId"
          >የተቀበልከዉ ሜሴጅ</label
        >
        <label
          class="flex text-gray-700 dark:text-white text-lg font-bold pr-5 font-mono"
          for="messageToMahiberatId"
          >ያንተ ሜሴጅ</label
        >
      </div>
      <div class="w-full" v-for="item in chats" :key="item.chat_id">
        <div class="">
          <div
            class="mr-[50%] rounded-tl-full px-3 py-2 my-0.5 bg-slate-200 group/item"
            id="messageFromMahiberatId"
            v-if="
              item.send_email == chatChatstore.chatEmail &&
              item.receive_email == send_email
            "
          >
            <div>
              <p
                class="text-gray-700 dark:text-white font-mono my-0.5 p-2 rounded-lg w-full"
              >
                {{ item.message }}
              </p>
            </div>
            <div class="flex gap-5 group/edit invisible group-hover/item:visible">
              <div>
                <svg
                  class="fill-current h-6 w-auto hover:text-red-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-red-900"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HighlightOffOutlinedIcon"
                  tabindex="-1"
                  title="HighlightOffOutlined"
                >
                  <path
                    d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  class="fill-current h-6 w-auto hover:text-yellow-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-yellow-900"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ModeEditOutlineOutlinedIcon"
                  tabindex="-1"
                  title="ModeEditOutlineOutlined"
                >
                  <path
                    d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            class="ml-[50%] rounded-tr-full rounded-l-lg px-3 py-2 my-0.5 bg-green-200 group/item"
            id="messageToMahiberatId"
            v-if="
              item.send_email == send_email &&
              item.receive_email == chatChatstore.chatEmail
            "
          >
            <div>
              <p class="text-gray-700 font-mono w-full">{{ item.message }}</p>
            </div>
            <div class="flex gap-5 group/edit invisible group-hover/item:visible">
              <div>
                <svg
                  class="fill-current h-6 w-auto hover:text-red-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-red-900"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HighlightOffOutlinedIcon"
                  tabindex="-1"
                  title="HighlightOffOutlined"
                >
                  <path
                    d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  class="fill-current h-6 w-auto hover:text-yellow-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-yellow-900"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ModeEditOutlineOutlinedIcon"
                  tabindex="-1"
                  title="ModeEditOutlineOutlined"
                >
                  <path
                    d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action="">
        <input
          class="shadow appearance-none border border-green-300 rounded-l-full pl-6 w-[85%] mt-2 mb-6 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="ጥያቄ፣ አስተያየት፣ መልእክት ወ.ዘ.ተ..."
          v-model="chatt"
          required
        />
        <input
          class="bg-green-300 hover:bg-green-700 text-white font-bold mb-5 py-2 mt-2 px-2 justify-end items-end text-end rounded-r-full focus:outline-none focus:shadow-outline"
          @click="send"
          type="submit"
          value="መልእክት ላክ"
        />
      </form>
    </div>
  </div>
</template>
<script setup>
import ChatPanel from "../components/ChatPanel.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useChatStore } from "../state/chatStore";
import { useRouter } from "vue-router";
// sweetalert import
import Swal from "sweetalert2";

const router = useRouter();
const chatChatstore = useChatStore();
const send_email = localStorage.getItem("user_email");

const chats = ref([]);

const chatt = ref("");
onMounted(async () => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user"
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
    router.replace("/login");
  }
  await getChatts();
});

const send = async () => {
  try {
    await axios.post("http://localhost:5000/chat", {
      send_email: send_email,
      receive_email: chatChatstore.chatEmail,
      message: chatt.value,
    });
    getChatts();
  } catch (err) {
    console.log(err);
  }
};

const getChatts = async () => {
  chatChatstore.chatEmail = localStorage.getItem("chat_with_admin_email");
  try {
    const response = await axios.get("http://localhost:5000/chat");
    chats.value = response.data;
  } catch (err) {
    console.log("error", err);
  }
};
</script>

<style scoped></style>
