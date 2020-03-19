new Vue({
    el:'#vue-app',
    data: {
        name: 'Kharioki',
        job: 'Avenger',
        website: 'https://about.me/kharioki',
        websiteTag: '<a href="https://about.me/kharioki">Khariokis website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name
        }
    }
});