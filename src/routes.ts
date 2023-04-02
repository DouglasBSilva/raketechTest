export default [

    {
      path: '/',
      component: () => import('./layout/DefaultLayout.vue'),
      children: [{
        path: '',
        component: () => import('./pages/Homepage.vue'),
        name: 'home',
      },
      {
        path: ':id',
        component: () => import('./pages/Heropage.vue'),
        name: 'hero',
      }]
    }
  ]