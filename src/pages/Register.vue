<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
// sweetalert import
import Swal from "sweetalert2";

const fname = ref("");
const lname = ref("");
const userName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const kebele = ref("");
const router = useRouter();
const userData = ref([]);
const userDataByMahiberatId = ref([]);
const memberData = ref([]);
const check_role = ref("");
const role = ref("");

const checkName = ref("");
const checkLname = ref("");
const checkUserName = ref("");
const tryCount = ref(0);

const signUpValidation = () => {
  tryCount.value = 1;
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    userName.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ያልተሞላ ቦታ አለ!",
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
    // sweet alert end
  } else {
    validateEmail();
  }
};

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    validatePassword();
  } else {
    // alert("Please enter a valid email address");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ ኢሜል ያስገቡ! ",
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
  }
};

const validatePassword = () => {
  if (/[0-9]/.test(password.value) && /[a-z]/.test(password.value)) {
    signup();
  } else {
    // alert("Please enter a valid password");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ የይለፍ ቃል ያስገቡ!",
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
  }
};
const signup = () => {
  getUserByEmail(email.value);
};

const getUserByEmail = async (email) => {
  try {
    const userInfo = await axios.get(`http://localhost:5000/users/${email}`);
    userData.value = userInfo.data;
    console.log(userData.value);
    if (userData.value.email == undefined) {
      await getUserByMahiberatId(userName.value);
      if (userDataByMahiberatId.value.user_state == 0) {
        if (confirmPassword.value == password.value) {
          saveUser();
        } else {
          let timerInterval;
          Swal.fire({
            position: "top-end",
            icon: "warning",
            // title: "ስህተት",
            html: "የተለያየ የይለፍ ቃል አስገብተዋል, እባክዎ የይለፍ ቃል እንደገና ያስገቡ! ",
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
        }
      } else {
        if (userDataByMahiberatId.value.user_state == 1) {
          let timerInterval;
          Swal.fire({
            position: "top-end",
            icon: "warning",
            // title: "ስህተት",
            html: "በዚህ መታዎቂያ ከዚህ በፊት ተመዝግበዋል!",
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
        } else {
          let timerInterval;
          Swal.fire({
            position: "top-end",
            icon: "warning",
            html: "የደብረ ኤልያስ ወረዳ የማሂበራት አባል አደሉም!",
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
        }
      }
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "በዚህ ኢሜል ከዚህ በፊት ተመዝግበዋል! ",
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
    }
  } catch (err) {}
};

const getUserByMahiberatId = async (m_id) => {
  try {
    const userInfoByMahiberatId = await axios.get(
      `http://localhost:5000/users/userName/${m_id}`
    );
    userDataByMahiberatId.value = userInfoByMahiberatId.data;
    console.log(userDataByMahiberatId.value);
  } catch (err) {}
};

const checkTheUserIsMember = async (mahiberat_id) => {
  try {
    const memberInfo = await axios.get(
      `http://localhost:5000/mahiberat/totalMembers/${mahiberat_id}`
    );
    memberData.value = memberInfo.data;
    console.log(memberData.value);

    checkName.value = memberData.value.fName;
    checkLname.value = memberData.value.faName;
    checkUserName.value = memberData.value.username;
    kebele.value = memberData.value.kebele;
    check_role.value = memberData.value.user_role;
  } catch (err) {}
};

const saveUser = async () => {
  await checkTheUserIsMember(userName.value);
  if (check_role.value == undefined || check_role.value == null) {
    role.value = "user";
  } else {
    role.value = check_role.value;
  }

  if (
    fname.value == checkName.value &&
    lname.value == checkLname.value &&
    userName.value == checkUserName.value
  ) {
    axios.put(`http://localhost:5000/users/createAccount/${userName.value}`, {
      email: email.value,
      password: password.value,
      user_state: 1,
    });
    // localStorage.setItem("user_id", 1);
    // localStorage.setItem("user_email", email);
    // logoutStor.logStore = true; // show log out button
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "success",
      // title: "ስህተት",
      html: "በትክክል ተመዝግበዋል!",
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
    router.push("/login");
  } else {
    // alert("You are not a member of this mahiberat");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የዚህ ገበሬ ማህበር አባል አይደሉም!",
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
  }
};
</script>

<template>
  <div
    class="bg-green-50 dark:bg-gray-800 dark:text-white w-full h-full justify-center items-center"
  >
    <div class="flex justify-center flex-wrap items-center sm:gap-2 md:gap-11">
      <div class=" ">
        <div class="flex gap-2 justify-center flex-wrap">
          <img
            src="../assets/loginLeft.png"
            class="w-auto h-56 rounded-full p-8 justify-start items-start"
            alt="signup image"
          />
          <div class="block pt-6 justify-center items-center">
            <p class="text-2xl text-orange-700 dark:text-white">መመዝገቢያ ቅጽ</p>
            <p class="text-gray-700 dark:text-white text-sm font-mono font-bold">
              ክፍት ቦታዎችን በትክክል ይሙሉ
            </p>
          </div>
        </div>
        <img
          src="../assets/signupRight.png"
          class="w-auto pl-[50%] sm:pb-0 md:pb-8 pr-8 rounded-[100%] h-56"
          alt="signup image"
        />
      </div>
      <div class="sm:pt-0 md:pt-7">
        <form class="w-[100%]">
          <div class="formClass block gap-6 justify-center items-center">
            <div
              class="name grid justify-center items-center w-full sm:grid-cols-1 md:grid-cols-2 gap-4 mb-1"
            >
              <div class="">
                <label for="fname" class="text-gray-700 dark:text-white"
                  >የመጀመሪያ ስም
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fname"
                  placeholder="የመጀመሪያ ስም"
                  v-model="fname"
                  required
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="fname == '' && tryCount == 1">
                    የመጀመሪያ ስም ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
              <div class="">
                <label
                  for="lname"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >የአባት ስም</label
                >
                <input
                  type="text"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="lname"
                  placeholder="የአባት ስም"
                  v-model="lname"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="lname == '' && tryCount == 1">
                    የአባት ስም ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
              <div class="">
                <label
                  for="phone"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >መለያ ስም</label
                >
                <input
                  type="text"
                  class="w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="መለያ ስም"
                  v-model="userName"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userName == '' && tryCount == 1">
                    መለያ ስም ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
              <div class="">
                <label
                  for="email"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >ኢሜል</label
                >
                <input
                  type="email"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="ኢሜል"
                  v-model="email"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="email == '' && tryCount == 1">
                    ኢሜል ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
              <div class="">
                <label
                  for="exampleInputPassword1"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >የይለፍ ቃል</label
                >
                <input
                  type="password"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="የይለፍ ቃል"
                  v-model="password"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="password == '' && tryCount == 1">
                    የይለፍ ቃል ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
              <div class="">
                <label
                  for="exampleInputPassword1"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >የማረጋገጫ ይለፍ ቃል</label
                >
                <input
                  type="password"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="የማረጋገጫ ይለፍ ቃል"
                  v-model="confirmPassword"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="confirmPassword == '' && tryCount == 1">
                    የማረጋገጫ ይለፍ ቃል ቦታ ባዶ ነው
                  </p>
                </div>
              </div>
            </div>
            <div class="submitButton flex justify-center">
              <button
                type="submit"
                class="px-8 text-lg py-2.5 bg-green-300 text-white font-bold font-mono my-5 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click.prevent="signUpValidation"
              >
                ተመዝገብ
              </button>
            </div>
            <p
              class="loginRedirect mb-5 justify-center text-1.5xl text-black dark:text-white"
            >
              ከአሁን በፊት ተመዝግበሃል?
              <router-link to="/login">
                <span
                  class="hover:text-orange-500 hover:cursor-pointer text-green-800 text-lg font-mono font-bold"
                  >በዚህ ግባ</span
                >
              </router-link>
            </p>
            <p
              class="loginRedirect mb-5 justify-center text-1.5xl text-black dark:text-white"
            >
              የማሂበራት ተጠቃሚ አባል አደለህም?
              <router-link to="/registerNotMemberOfMahiberat">
                <span
                  class="hover:text-orange-500 hover:cursor-pointer text-green-800 text-lg font-mono font-bold"
                  >በዚህ ግባና ተመዝገብ</span
                >
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 600px) {
  .formClass {
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
  }
  img {
    height: 150px;
    width: auto;
  }
  form .name {
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }
  .user {
    justify-content: center;
  }
  .address {
    justify-content: center;
  }
  .Password {
    justify-content: center;
  }
  .submitButton {
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-left: 100px;
  }
  .role {
    justify-content: center;
    width: 80%;
  }
  .loginRedirect {
    justify-content: center;
    padding-left: 100px;
  }
}
</style>
