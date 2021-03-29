import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import './assets/scss/tailwind.scss'

const app = createApp(App)
app.use(router)
app.use(createStore(store))
app.mount('#app')
