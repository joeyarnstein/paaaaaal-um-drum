// Behavior                           Input                     Output
// return false for not palindromes      dog                   false
// retrun true for palindromes           tacocat               true



//grab input from user
//turn it into an array of letters
//clone the array and reverse it
//see if the original array equals the reversed array
//tell user it is palindrome or not


var palindromeChecker = function(userInput) {
  var originalArray = userInput.split("");
  var reverseArray = userInput.split("").reverse();
  var originalString = originalArray.toString();
  var reverseString = reverseArray.toString();
  if (originalString === reverseString) {
    return true;
  } else {
    return false;
  }
};
