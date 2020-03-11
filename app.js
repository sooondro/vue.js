Vue.component('greeting',{
  template: '<p>I am reusable {{ name }} . <button v-on:click="changeName">Change Name</button></p>',
  data: function(){
    return {
      name: 'Sandro',
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Sandy';
    }
  }
})

var one = new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
});
