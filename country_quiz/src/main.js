import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import './index.css'

const pinia = createPinia()

createApp(App).mount('#app')
createApp(App).use(pinia)

