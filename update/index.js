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
    case('unshift'):
      for(var i = 0; i < commands[baseKey].length; i++){
        newState.unshift(commands[baseKey][i]);
      }
      break;
    case('splice'):
      for(var i = 0; i < commands[baseKey].length; i++){
        var toRemove = commands[baseKey][i];    
        newState.splice(parseInt(toRemove[0]), parseInt(toRemove[1]), parseInt(toRemove[2]));
      }
      break;
    case('merge'):
      for(var x in commands[baseKey]){
        newState[x] = commands[baseKey][x];
      }
      break; 
    case('set'):
      newState = {};
      for(var x in commands[baseKey]){
        newState[x] = commands[baseKey][x];
      }
      break;   
    default:
      break;
     
  }
  
  return newState;
};
