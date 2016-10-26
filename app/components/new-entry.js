import Ember from 'ember';

export default Ember.Component.extend({
  admin: true,
  actions: {
    post(){
      var params = {
        title: this.get('title'),
        previewText: this.get('previewText'),
        text: this.get('text'),
        image: this.get('image'),
        date: this.get('date')
      };
      this.sendAction('post2', params);
    }
  }
});
