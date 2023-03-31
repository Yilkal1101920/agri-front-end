<template>
  <div class="w-40 pl-5 bg-blue-100 dark:bg-green-400 py-5 border-blue-300 rounded-full">
    <div v-for="user in Users" :key="user.email" class="nav text-blue-600">
      <ul>
        <li
          class="text-gray-700 dark:text-white cursor-pointer hover:scale-110"
          v-if="user.user_role == 'manager' && user.kebele == kebele_address"
          @click.prevent="chatsWith(user.email)"
        >
          {{ user.fName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useChatStore } from "../state/chatStore";
const chatChatstore = useChatStore();

const kebele_address = localStorage.getItem("kebele");

const Users = ref([]);

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    Users.value = users.data;
  } catch (err) {}
};
onMounted(async () => {
  getUsers();
});

const chatsWith = async (email) => {
  chatChatstore.chatEmail = email;
  localStorage.setItem("chat_with_admin_email", email);
};
</script>
