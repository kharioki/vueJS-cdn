new Vue({
    el:'#vue-app',
    data: {
        // name: '',
        age: 20,
        // x: 0,
        // y: 0
        a: 0,
        b: 0
    },
    methods: {
        // add: function(inc) {
        //     this.age += inc;
        // },
        // subtract: function(dec) {
        //     this.age -= dec;
        // },
        // updateXY: function(event) {
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click: function() {
        //     alert('You clicked me!')
        // }
        // logName: function() {
        //     console.log('You entered your name');
        // },
        // logAge: function() {
        //     console.log('You entered your age');
        // }

        // addToA: function() {
        //     return this.a + this.age
        // },
        // addToB: function() {
        //     return this.b + this.age
        // }
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age
        }
    }
});