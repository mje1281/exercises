function throttlePromises(limit, promiseArray){
  var promisesToDo = [];
  var i = 0;
  
  function nextAction() {
    if (i < promiseArray.length) {
      var actionIndex = i++;
      var follower = promiseArray[actionIndex];
      return Promise.resolve(follower())
          .then(result => {  
             resultArray[actionIndex] = result;
             return;
          }).then(nextAction);
    }
  }
  
  while (i < limit && i < promiseArray.length) {
    new Promise.resolve(promiseArray[i]()).then(result){
      promisesToDo.push(result);
    }  
  }
}