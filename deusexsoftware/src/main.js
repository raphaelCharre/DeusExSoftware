// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

//Components
import App from './App'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

//Data
import projects from './assets/data/projects.json'
import founders from './assets/data/founders.json'

//Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.component('nav-bar', NavBar);
Vue.component('app-footer', Footer);
Vue.component('contact-form', ContactForm);

Vue.prototype.getProjects = ()=>projects;
Vue.prototype.getFounders = ()=>founders;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
