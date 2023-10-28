import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import LandingComponent from './components/LandingComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.component('landing-component', LandingComponent)
app.component('header-component', HeaderComponent)
app.component('nav-component', NavComponent)
app.component('home-component', HomeComponent)
app.component('song-list-component', SongListComponent)
app.component('song-filter-component', SongFilterComponent)
app.component('about-me-component', AboutMeComponent)
app.component('form-component', FormComponent)


app.use(router)
app.mount('#app')
