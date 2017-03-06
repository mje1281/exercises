function transmitter(options, callback){
  
  var codes = options.codes;
  var message = options.message;
  var toggle = options.toggle;
  var timeouter = options.timeouter;
  var messageParts = message.split(' ');
  
  for(var a = 0; a < messageParts.length; a++){
    for (var i = 0; i < messageParts[a].length; i++){
      var code = codes['messageParts[a]'[i]];
        for(var j = 0; j < code.length; j++){
          toggle();
          if(code[j] === '.'){
            timeouter(toggle(), 1)          
          } else if(code[j] === '-'){
            timeouter(toggle(), 3);
          }
          if(j !== code.length -1){
            timeouter(toggle(), 1)
          }
        }
      if(i !== messageParts[a].length - 1){
        timeouter(toggle(), 3)  
      }
    }
    if(a !== messageParts.length -1) {
      timeouter(toggle(), 7)
    }
  }
  callback();
  
}
module.exports.transmitter = transmitter;
