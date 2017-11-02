import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import NewsList from '@/components/NewsList/NewsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    }, {
      path: '/test',
      name: 'NewsList',
      component: NewsList,
    },
  ],
});
