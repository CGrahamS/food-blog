import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: true,
  actions: {
    showUpdateForm() {
      this.showUpdate = true;
    },
    update(entry) {
      var params = {
        title: this.get('title'),
        previewText: this.get('previewText'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('showUpdate', false);
      this.sendAction('update', entry, params);
    }
  }
});
