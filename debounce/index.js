function debounce (action, wait){
    
  var timeout;
  return function() {
    var context = this; var args = arguments;
    var later = function() {
      timeout = null;
      action.apply(context, args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
  }  
};
module.exports.debounce = debounce;
