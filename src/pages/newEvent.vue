<template>
  <div class="bg-green-50 dark:bg-gray-800 ">
              <p class="font-mono font-bold pt-4 text-center text-orange-900 dark:text-white">
ማንኛውንም አይነት የገበሬ ማህበራት መረጃ እዚህ ማግኘት ይችላሉ፡፡ 
<pre class="font-bold font-mono"> 
  ማህበራቶች የሚያወጡት ማስታዎቂያ
  ማህበራቶች እና የወረዳው የስራ ቅጥር
  ማህበራቶች የሚያደርጓቸውን ድርጊቶች
   </pre>
መከታተል ይችላሉ፡፡
              </p>
        <div class="pl-10" v-for="item in news.slice().reverse()" :key="item.id">
         <div v-if="item.kebele == kebele_address">
         <div v-if="item.title" class="lg:flex lg:flex-row flex flex-col gap-10">
          <div class="flex items-center justify-center pb-10">
            <img
             class="EventsImage w-70 h-60 lg:w-50 lg:h-40 mt-2 border rounded-lg hover:scale-110"
                      :src="item.newsImage"
                      alt="image"
                    />
          </div>
          <div>
            <ul>
            <li>
                <div class="block text-black font-mono items-center justify-center flex-wrap">
                  <div class="text-center text-2xl text-gray-700 dark:text-white">{{ item.title }}</div>
                  <div class="pl-3 text-gray-700 dark:text-white">{{ item.description }}</div>
                  <div class="dateAndLink text-center flex items-center md:gap-24 justify-center flex-wrap">
                    <div class="pl-3 text-center text-gray-700 dark:text-white"><p>የወጣበት ቀን፡ {{ item.postedDate }} ዓ.ም</p></div>
                    <a href="">
                    <span class="flex gap-1">
                    <span><img src="https://th.bing.com/th/id/R.cf61cc1b9c4a8b8f8c290442f43117a8?rik=h4fG9BLSmf9Hyw&riu=http%3a%2f%2fwww.wur.nl%2fupload%2f12ba3fb8-3f91-41c4-885c-4083e8c648e4_Fertilizer+Ethiopia.jpeg&ehk=2xcx2h4xvfTtoavPU%2bawNzE5S6JMjuo50AVPGw%2bZucM%3d&risl=&pid=ImgRaw&r=0" alt="link image" class="h-7 w-auto border rounded-lg"></span>
                    <div class="pl-3 text-gray-700 dark:text-white">{{ item.newsSource }}</div>
                  </span>
                </a>
                  </div>
                </div>
            </li>
          </ul>
          </div>
        </div>
        <div v-else class="justify-center items-center">
<p class="text-6xl font-mono text-orange-900 dark:text-white">
  ባዶ፡ ምንም ክስተት የለም
</p>
        </div>
        </div>
        </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const news = ref([]);
const kebele_address = localStorage.getItem("kebele");

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    console.log(news.value);

  } catch (err) {
  }
};

onMounted(async () => {
    if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1
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
  await getNews();
});
</script>
<style scoped>
@media screen and(max-width:600px) {
  .EventsImage{
    justify-content: center;
    align-content: center;
    
  }
  .dateAndLink{
    display: block;
  }
  .eventsContainer{
    display: block;
    flex-wrap: wrap;
  }
}
@media screen and(min-width:601px) {
  .EventsImage{
    justify-content: center;
    align-content: center;

  }
  .eventsContainer{
    display: flex;
  }
  .dateAndLink{
    display: flex;

  }
}
</style>
