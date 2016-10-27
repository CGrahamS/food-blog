import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  previewText: DS.attr("string"),
  text: DS.attr("string"),
  date: DS.attr("string"),
  image: DS.attr("string"),
  comments: DS.hasMany('comments', {async: true}),
  action:{
    stuff(){
      alert("hey");
      return "why hey";
    }
  }
});
