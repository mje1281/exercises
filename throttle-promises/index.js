function throttlePromises(limit, promiseArray){
  var promisesToDo = [];
  var i = 0;
  while (i < limit && i < promiseArray.length) {
    new Promise.resolve(promiseArray[i]()).then(result){
      promisesToDo.push(result);
    }
    
  }
}