import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(){
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        entry: this.get('entry'),
        date: moment().format('LLLL')
      };
      this.sendAction('saveComment', params);
    }
  }
});
