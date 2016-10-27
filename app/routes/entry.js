import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },
  actions: {
    update(entry, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          entry.set(key, params[key]);
        }
      });
      entry.save();
      this.transitionTo('entry');
    },
    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var entry = params.entry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return entry.save();
      });
      this.transitionTo('entry');
    }
  }
});
