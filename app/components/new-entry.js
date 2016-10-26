import Ember from 'ember';

export default Ember.Component.extend({
  admin: true,
  actions: {
    post(){
      // var currentUnixTime = Math.round((new Date()).getTime() / 1000);
      // var newDate =
      //  moment.unix(currentUnixTime).format("YYYY-MM-DD");
      //  var stringDate = newDate.toString();
      var params = {
        title: this.get('title'),
        previewText: this.get('previewText'),
        text: this.get('text'),
        image: this.get('image'),
        date: moment().format('LLLL')
      };
      this.sendAction('post2', params);
    }
  }
});
