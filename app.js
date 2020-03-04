new Vue({
  el: '#vue-app',
  data: {
    name: 'Sandro',
    job: 'Student'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
