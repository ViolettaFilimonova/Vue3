import { createApp } from 'vue'
import components from '@/Components/UI'
import App from './App'
import router from "@/router";
import directives from "@/directives"
import store from "@/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(router).use(store).mount('#app')
