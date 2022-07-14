import { createApp } from 'vue'
import components from '@/Components/UI'
import App from './App'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
