Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/map');

Router.route('/favourites');

Router.route('/search');

Router.route('/acount');