var Transistor = require('transistor');

new Transistor({
    locales: [
        {
            name: 'fr'
        },
        {
            name: 'en',
            path: '/en'
        }
    ],
    routes: [
        {
            path: '/',
            template: 'homepage.html',
        },
        {
            path: '/about',
            template: 'about.html'
        },
        {
            path: '/works',
            template: 'works/list.html'
        },
        {
            path: '/works/:slug',
            template: 'works/entry.html',
            model: 'works.*'
        }
    ]
});