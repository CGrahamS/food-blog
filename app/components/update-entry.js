import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: false,
  actions: {

    showUpdateForm() {
      this.set('showUpdate', true);
    },
    update(entry) {
      var params = {
        title: this.get('title'),
        previewText: this.get('previewText'),
        text: this.get('text'),
        image: this.get('image'),
        date: this.get('date')
      };
      this.set('showUpdate', false);
      this.sendAction('update', entry, params);
    }
  }
});
