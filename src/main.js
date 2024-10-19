import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import "primeicons/primeicons.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import DatePicker from "primevue/datepicker";
import Dialog from "primevue/dialog";
const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("VueDatePicker", VueDatePicker);
app.component("DatePicker", DatePicker);
app.component("Dialog", Dialog);
app.mount("#app");
