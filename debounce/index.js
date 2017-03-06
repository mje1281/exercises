function debounce (action, wait, immediate){
    
  var callAction = function(){setTimeout(action, wait)}
  return callAction;]
  
}
module.exports.debounce = debounce;