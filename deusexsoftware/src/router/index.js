import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import PortfolioPage from '@/pages/PortfolioPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },{
      path: '/services',
      name: 'Services',
      component: ServicesPage
    },{
      path: '/portfolio',
      name: 'Portfolio',
      component: PortfolioPage
    },{
      path: '/about',
      name: 'About',
      component: AboutPage
    },{
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },{
      path: '*',
      name: 'Not found',
      component: HomePage
    }
  ]
})
