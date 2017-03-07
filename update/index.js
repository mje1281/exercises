function update(state, commands){  
  
  var newState = state;
  var objectKeys = [];
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
  checkObject(commands, objectKeys, newState, 0);
  
  function checkObject(submission, keys, newObject, interval){  
    if(!Array.isArray(submission[directive])){
      if(hasOwnProperty.call(submission, directive)){
        change = submission[directive]
        applyDirective(directive, submission, change, newObject)
      } else {
          checkObject(submission[keys[interval++]], keys, newObject[keys[interval++]], interval++);    
      }
      
    } else {
      var change = commands[directive][0]
      applyDirective(directive, submission, change, newState)
    }
  }
  
  function applyDirective(directive, commands, change, object){
    switch(directive){
      case('$push'):
          object.push(change)
        break;
      case('$unshift'):
          object.unshift(change);
        break;
      case('$splice'):   
          object.splice(parseInt(change[0]), parseInt(change[1]), parseInt(change[2]));
        break;
      case('$merge'):
        object = Object.assign(object, change);
        break;
      case('$set'):
      console.log(object)
        object = change;
        newState = change;
        break;
      case('$apply'):
        newState = change(state)
        break;
      default:
        break;   
    }
  } 
  
  return newState;
};
module.exports.update = update;
