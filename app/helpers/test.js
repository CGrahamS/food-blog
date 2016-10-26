import Ember from 'ember';

export function test(params) {
  var output = [];
  params.forEach(function(param){
    if(param.title === "yum"){
      output.push(param);
    }
  });
  return output;
}

export default Ember.Helper.helper(test);
