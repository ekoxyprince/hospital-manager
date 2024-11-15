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
import AutoComplete from "primevue/autocomplete";
import Menu from "primevue/menu";
import Select from "primevue/select";
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
app.component("Select", Select);
app.component("AutoComplete", AutoComplete);
app.component("Menu", Menu);
app.mount("#app");
