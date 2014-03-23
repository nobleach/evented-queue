function EventedQueue() {
  this._dataStore = [];
  this.itemenqueuedEvent = new Event('itemenqueued');
  this.itemdequeuedEvent = new Event('itemdequeued');
}

EventedQueue.prototype.enqueue = function(item) {
  this._dataStore.push(item);
  //fire itemqueued event
  this.dispatchEvent(this.itemdequeuedEvent);
}

EventedQueue.prototype.dequeue = function() {
  this._dataStore.shift();
  //fire itemdequeued event
  if(this._dataStore.length === 0) {
    //fire queueemptied event
  }
}
