<template>
  <div class="w-full h-full bg-green-50 dark:bg-gray-700 flex py-4 justify-center">
    <div class="py-5 mx-8 bg-red-50 shadow-md rounded-lg px-8 border border-red-600">
      <p class="font-mono font-bold text-lg text-red-500">
        Your account is temporary blocked
      </p>
      <p class="font-mono font-bold text-sm text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, mollitia nam
        maiores quia officiis laboriosam dolores pariatur incidunt reprehenderit
        asperiores vel ea enim qui autem earum iste! Quia, porro quod.
      </p>
      <p v-show="knowMoreActivate" class="font-mono font-bold text-sm text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
        accusamus, ratione velit molestias cupiditate obcaecati architecto rerum nulla
        iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam vitae ab expedita.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsum molestiae
        cumque, a minima dolore architecto rem debitis, iusto alias ducimus reiciendis
        illo mollitia id. Adipisci iste dolor suscipit provident? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Debitis impedit accusamus, ratione velit
        molestias cupiditate obcaecati architecto rerum nulla iure at perspiciatis amet!
        Ut, tenetur obcaecati. Quibusdam vitae ab expedita. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aliquam ipsum molestiae cumque, a minima dolore
        architecto rem debitis, iusto alias ducimus reiciendis illo mollitia id. Adipisci
        iste dolor suscipit provident? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Debitis impedit accusamus, ratione velit molestias cupiditate obcaecati
        architecto rerum nulla iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam
        vitae ab expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aliquam ipsum molestiae cumque, a minima dolore architecto rem debitis, iusto
        alias ducimus reiciendis illo mollitia id. Adipisci iste dolor suscipit provident?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
        accusamus, ratione velit molestias cupiditate obcaecati architecto rerum nulla
        iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam vitae ab expedita.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsum molestiae
        cumque, a minima dolore architecto rem debitis, iusto alias ducimus reiciendis
        illo mollitia id. Adipisci iste dolor suscipit provident?
      </p>
      <div class="flex gap-4 items-center justify-around py-5">
        <button
          v-show="!knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          Know more
        </button>
        <button
          v-show="knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          View less
        </button>
        <button
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          <router-link to="/help"> Contact us</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const knowMoreActivate = ref(false);
</script>

<style scoped></style>
