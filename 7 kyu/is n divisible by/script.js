// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
function isDivisible(x, ...num){
    return num.every(a => x % a===0);
  }