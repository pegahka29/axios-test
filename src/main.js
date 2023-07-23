// import { createApp } from 'vue'
// import App from './App.vue'
//
// import store from "./store";
//
// createApp(App).use(store).mount("#app");

import { createApp } from 'vue'
import App from './App.vue'

//Import Pinia into your config file
import { createPinia } from 'pinia'

createApp(App)
    //Add the line below to the file to instantiate it
    .use(createPinia())
    .mount('#app')
