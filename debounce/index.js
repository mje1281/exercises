function debounce (action, wait){
    
  var timeout;
  return function() {
    var later = function() {
      timeout = null;
      action.call();
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
  }  
};
module.exports.debounce = debounce;
