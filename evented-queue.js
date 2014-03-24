var EventedQueue = function() {
  this._dataStore = [];
  this._listeners = {};
}

EventedQueue.prototype.addEventListener = function(eventName, callback) {
  if(!this._listeners[eventName]) {
    this._listeners[eventName] = [];
  }
  this._listeners[eventName].push(callback);
}

EventedQueue.prototype.removeEventListener = function(eventName, callback) {
  var index = -1;
  if(this._listeners[eventName]) {
    index = this._listeners[eventName].indexOf(callback);
    if(index !== -1) {
      this._listeners[eventName].splice(index, 1);
    }
  }
}

EventedQueue.prototype.dispatchEvent = function(eventName, eventObject) {
  var self = this;
  var i;
  var eventFunction = "on" + eventName.charAt(0).toUpperCase() + eventName.slice(1);   
  if(this._listeners[eventName]) {
    for(i = 0; i < this._listeners[eventName].length; i++) {
      this._listeners[eventName][i](eventObject);
    }     
  }
  if(self[eventFunction]) {
    self[eventFunction](eventObject);
  } 

}

EventedQueue.prototype.enqueue = function(item) {
  this._dataStore.push(item);
  //fire itemqueued event
  this.dispatchEvent('itemenqueued');
}

EventedQueue.prototype.dequeue = function() {
  //fire itemdequeued event
  var slice = this._dataStore.shift();
  this.dispatchEvent('itemdequeued');
  if(this._dataStore.length === 0) {
    //fire queueemptied event
    this.dispatchEvent('queueemptied');
  }
  return slice;
}

module.exports = EventedQueue;

