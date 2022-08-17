import { createApp } from 'vue'
import components from '@/Components/UI'
import App from './App'
import router from "@/router";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).mount('#app')
