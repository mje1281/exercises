function update(state, commands){  
  
  var newState = state;
  var originalKeys = Object.keys(commands);
  
  var baseKey = originalKeys[originalKeys.length - 1];
  var functionName =  baseKey.slice(1, baseKey.length)
  
  switch(functionName){
    case('push'):
      for(var i = 0; i < commands[baseKey].length; i++){
        newState.push(commands[baseKey][i]);
      }
      break;
    
    default:
      break;
     
  }
  
  return newState;
};
