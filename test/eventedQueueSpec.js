var expect = require('chai').expect;
var EventedQueue = require('../evented-queue.js');
var myEventedQueue = new EventedQueue();
var item = 'Lionel Richie Albums';
var called = false;
var empty = false;

describe('EventQueue', function() {
  
  describe('Adding Items', function() {
    myEventedQueue.addEventListener('itemenqueued', function() {
      called = true; 
    }, false);

    myEventedQueue.enqueue(item);

    it('Should emit an itemenqueued event from the EventedQueue.', function() {
      expect(called).to.equal(true);
    });

  });

  describe('Removing Items', function() {

    myEventedQueue.addEventListener('itemdequeued', function() {
      called = true;  
    });

    myEventedQueue.addEventListener('queueemptied', function() {
      empty = true;
    });

    var removedItem = myEventedQueue.dequeue();
    it('Should dequeue and return an item', function() {
      expect(removedItem).to.equal(item);
    });

    it('Should emit an itemdequeued even from the EventedQueue', function() {
      expect(called).to.equal(true);
    });

    it('Should emit a queueemptied event when the queue no longer has any items left', function() {
      expect(empty).to.equal(true);
    });
  }); 

  describe('Adding Multiple Items', function() {

    myEventedQueue.addEventListener('itemenqueued', function() {
      called = true;
    });

    var items = [
      'Ballerina Girl',
      'Hello',
      'Dancing on the Ceiling'
    ];

    myEventedQueue.enqueueMultiple(items);

    it('Should emit a single itemenqueued event from the EventedQueue.', function() {
      expect(called).to.equal(true);
    });

  });
});


