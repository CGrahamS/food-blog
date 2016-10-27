import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if(confirm('Are you sure wnat to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
