import Layout from '@/layout';

const tableRoutes = {
  path: '/negocios',
  component: Layout,
  redirect: '/negocios/index',
  name: 'Negocios',
  meta: {
    title: 'negocios',
    icon: 'table',
    permissions: ['view menu table'],
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/negocios/tabla'),
      name: 'negocios',
      meta: { title: 'negocios' },
    },
  ],
};
export default tableRoutes;
