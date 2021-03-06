const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: 'table',
        name: 'table',
        component: (resolve) => require(['./views/table.vue'], resolve)
    }
];
export default routers;