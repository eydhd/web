import App from "./App.vue";
import store from "./store";
import router from "./router";
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleLeft,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "vue3-toastify/dist/index.css";

// 将需要的图标添加到库中
library.add(faAngleLeft, faExclamationTriangle);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router);
app.mount("#app");
