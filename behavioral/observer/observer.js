var pubsub = (function () {
  
  var topics = [];
  
  function subscribe(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    topics[topic].push(func);
  }
  
  function unsubscribe(topic, func) {
    for(var i = 0; i < topics[topic].length; i++) {
      if (topics[topic][i] === func) {
        topics[topic].splice(i, 1);
        return true;
      }
    }
    return false;
  }
  
  function publish(topic, args) {
    var subscribers = topics[topic].slice(0);
    var subscriber = null;
    while(subscribers.length > 0) {
      subscriber = subscribers.shift();
      subscriber(topic, args);
    }
  }
  
  return {
   publish: publish,
   subscribe: subscribe,
   unsubscribe: unsubscribe
  }
  
})();
