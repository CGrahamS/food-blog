import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      admin: true,
      entries: this.store.findAll('entry')
    });
  },

  actions: {

    destroyEntry(entry){
      var comment_deletions = entry.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return entry.destroyRecord();
      });
      this.transitionTo('index');
    },
  }
});
