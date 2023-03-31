import { defineStore } from 'pinia';
import axios from "axios";

import { fetchWrapper} from '../helpers/fetch-wrapper.js';
import router from '../router'

const baseUrl = `${import.meta.env.VITE_API_URL}/a_users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            this.user = user;
            const userInfo = await axios.get(`http://localhost:5000/users/${username}`);
            if (
              userInfo.data.user_role == "woreda_admin"
            ) {
              localStorage.setItem("role", userInfo.data.user_role );
              localStorage.setItem("user_id", 1);
              localStorage.setItem("woreda_admin_email", username);
              self.location.replace("/woreda/dashboard");
            } else if (
                userInfo.data.user_role == "manager"
            ) {
              localStorage.setItem("kebele", userInfo.data.kebele);
              localStorage.setItem("role", userInfo.data.user_role );
              localStorage.setItem("user_id", 1);
              localStorage.setItem("manager_email", username);
              localStorage.setItem("seller", "mahiberat");
              self.location.replace("/mahiberat/dashboard");
            } else if (
                userInfo.data.user_role == "store"
            ) {
              localStorage.setItem("kebele", userInfo.data.kebele);
              localStorage.setItem("role", userInfo.data.user_role );
              localStorage.setItem("user_id", 1);
              localStorage.setItem("store_email", username);
              self.location.replace("/mahiberat/storeDashboard");
            } else if (
                userInfo.data.user_role == "user" &&
                userInfo.data.user_state == 1
            ) {
              localStorage.setItem("kebele", userInfo.data.kebele);
              localStorage.setItem("role", userInfo.data.user_role );
              localStorage.setItem("user_id", 1);
              localStorage.setItem("user_email", username);
              localStorage.setItem("user_state", userInfo.data.user_state);
              localStorage.setItem("seller", "mahiberat");
              self.location.replace("/product");
            }else if (
              userInfo.data.user_role == "user" &&
              userInfo.data.user_state == 0
          ) {
            localStorage.setItem("kebele", userInfo.data.kebele);
            localStorage.setItem("role", userInfo.data.user_role );
            localStorage.setItem("user_id", 1);
            localStorage.setItem("user_email", username);
            localStorage.setItem("user_state", userInfo.data.user_state);
            self.location.replace("/deActivated");
          }
            else if (
              userInfo.data.user_role == "customer"
          ) {
            localStorage.setItem("kebele", userInfo.data.kebele);
            localStorage.setItem("role", userInfo.data.user_role );
            localStorage.setItem("user_id", 1);
            localStorage.setItem("customer_email", username);
            self.location.replace("/farmersProduct");
          }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
    }
});
