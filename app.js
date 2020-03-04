new Vue({
  el: '#vue-app',
  data: {
    name: 'Sandro',
    job: 'Student',
    website: 'https://www.facebook.com/sandro.blavicki.9',
    websiteTag: '<a href="https://www.facebook.com/sandro.blavicki.9">Sandros website</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
