import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  previewText: DS.attr("string"),
  text: DS.attr("string"),
  date: DS.attr("string"),
  image: DS.attr("string")
});
