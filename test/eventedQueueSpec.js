var expect = require('chai').expect;
var EventedQueue = require('../evented-queue.js');
var myEventedQueue;

beforeEach(function() {
  // console.log(EventedQueue);
});

describe('EventQueue', function() {

  myEventedQueue = new EventedQueue();
  describe('Adding Items', function() {
    var item = 'Socks';
    var called = false;
    myEventedQueue.addEventListener('itemenqueued', function() {
      called = true; 
    }, false);

    myEventedQueue.enqueue(item);

    it('Should emit an itemenqueued event from the EventedQueue.', function() {
      expect(called).to.equal(true);
    });

  });
});


