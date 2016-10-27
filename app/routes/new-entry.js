import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      admin: true,
      entries: this.store.findAll('entry')
    });
  },
  actions: {
    post(params){
        alert("post");
      var newPost = this.store.createRecord('entry', params);
      newPost.save();
      this.transitionTo('index');
    },

  }

});
