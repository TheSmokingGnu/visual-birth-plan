import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { HomeComponent } from './components/home';
import { ChoiceComponent } from './components/choice';
import { PlanComponent } from './components/plan';
import { NavbarComponent } from './components/navbar';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/plan', component: PlanComponent },
    { path: '/choice/:pageName', component: ChoiceComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
