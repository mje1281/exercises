function update(stateToChange, commands){  
  
  var newState = stateToChange;
  var objectKeys = [];
  var commandObject = {'$push':'push', '$unshift':'unshift', '$merge': 'merge', '$apply':'apply', '$splice':'splice', '$set': 'set'};

  getSubmissionKeys(commands);
  function getSubmissionKeys(submission){
    var originalKeys = Object.keys(submission)
    objectKeys.push(originalKeys[0])
    if(!originalKeys[0].includes('$')){
      getSubmissionKeys(submission[originalKeys[0]]);
    }
  }
  
  var hasOwnProperty  = Object.prototype.hasOwnProperty;
  var directive = objectKeys[objectKeys.length - 1];
  return updateObject(commands, newState);

  function updateObject(submission, newObject){  
    if(!Array.isArray(submission[directive])){
      var changeObject = newObject
      objectKeys = []
      getSubmissionKeys(submission);
      for(var i = 0; i < objectKeys.length; i++){
        var key = objectKeys[i];
        if(hasOwnProperty.call(commandObject, key)){          
          changeObject = applyDirective(key, submission[key], newObject)
        } else {
          var newValue = updateObject(submission[key], newObject[key]) 
          if (newValue !== changeObject[key]) {
            if (changeObject === newObject){
              changeObject = copy(newObject);
            }
            changeObject[key] = newValue;
          }
        }
      }

      return changeObject;
        
      
    } else {
      var change = commands[directive][0]
      newObject = applyDirective(directive, change, newState)
    }
    return newObject;
  }
  
  
  function applyDirective(directive, change, object){
    switch(directive){
      case('$push'):
          object.push(change)
          return object;
        break;
      case('$unshift'):
          object.unshift(change)
          return object;
        break;
      case('$splice'):   
          object.splice(parseInt(change[0]), parseInt(change[1]), parseInt(change[2]));
          return object;
        break;
      case('$merge'):
        object = Object.assign(object, change);
        return object;
        break;
      case('$set'):
        object = change;
        return object;
        break;
      case('$apply'):
        object = change(newState)
        return object;
        break;
      default:
        break;   
    }
  } 
  
  function copy(object) {
  if (object instanceof Array) {
    return object.slice();
  } else if (object && typeof object === 'object') {
    return Object.assign(new object.constructor(), object);
  } else {
    return object;
  }
}
    
};
module.exports.update = update;
