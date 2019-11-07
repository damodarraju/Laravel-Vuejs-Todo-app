require('./bootstrap');
window.Vue = require('vue');

// Loding Components
import articles from './components/Articles.vue';

const app = new Vue({
    el: '#app',
    components: {
        articles,
    },
})
