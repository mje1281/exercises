function transmitter(options, callback){
  var dot = 1;
  var dash = 3;
  var spaceWithinLetter = 1;
  var spaceBetweenLetter = 3;
  var spaceBetweenWord = 7;
  
  var codes = options.codes;
  var message = options.message;
  
  var symbols = [];
  for (var i = 0; i < message.length; i++){
    var code = (message[i] == ' ') ? 'space' : codes['message'[i]];
    symbols.push(code);
  }
}
module.exports.transmitter = transmitter;
