var myModule = (function () {
  var internalCounter = 0;
  
  function increment(amount) {
    amount = checkAmount(amount);    
    internalCounter += amount;  
  }
  
  function decrement(amount) {
    amount = checkAmount(amount);
    internalCounter -= amount;
  }
  
  function getCounter() {
    return internalCounter; 
  }
  
  function checkAmount(amount) {
    if (typeof(amount) == 'undefined') {
      amount = 1;
    }
    return amount;
  }
  
  return {
    increment: increment,
    decrement: decrement,
    getCounter: getCounter
  };
  
})();
