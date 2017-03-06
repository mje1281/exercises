function transmitter(options, callback){
  
  var codes = options.codes;
  var message = options.message;
  var toggle = options.toggle;
  var timeouter = options.timeouter;
  
  var symbols = [];
  for (var i = 0; i < message.length; i++){
    var code = (message[i] == ' ') ? 'space' : codes['message'[i]];
    if(code !== 'space'){
      for(var j = 0; j < code.length; j++){
        if(code[j] === '.'){
          toggle();
          timeouter(toggle(), 1)
          timeouter(toggle(), 1)
        } else if(code[j] === '-'){
          toggle();
          timeouter(toggle(), 3);
          timeouter(toggle(), 1);
          clearTimeout(timeouter);
        }
      }
    } else {
      options.timeouter(options.toggle(), 7)
    }
  }
  callback();
}
module.exports.transmitter = transmitter;
