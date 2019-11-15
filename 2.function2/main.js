function palindrome(message){
  var len = Math.floor(message.length / 2);
  for (var i = 0; i < len; i++)
    if (message[i] !== message[message.length - i - 1])
      return false;
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
