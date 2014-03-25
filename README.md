Evented-queue
=============

A queue implementation that emits events when items are enqueued/dequeued

I wanted to build a system that would emit an event whenever a an item was enqueued or dequeued from a standard queue. Of course this is fairly trivial, but it's something I find myself using time and time again.

## Methodology

When an item is enqueued, a "itemenqueued" event is emitted. Any listners are informed and can fire an event as a result. The same is true for dequeueing of items. An "itemdequeued" event is fired. (although I don't see this being used as much). A "queueemptied" event can alert listeners when the queue has no more items.

##Adding items to an EventedQueue

Right now, the EventedQueue system is extremely simple. Just add the script to your page and instantiate an instance of EventedQueue:

    var myEventedQueue = new EventedQueue();

You may start enqueueing items with

    var item = Object/Array/String/Number;
    myEventedQueue.enqueue(item);

**Note:** When enqueing an array, it will be added just like any other type. It's constituent components will not be added one by one.
    
If you have an existing array of items you'd like to enqueue, you can use

    var items = [item1, item2, item3];
    myEventedQueue.enqueueMultiple(items);
    
**Note:** These items will be appended to the end of an existing queue using the Javascript Array.splice method. They will be queued in the order that they are specified in the existing array.

##Removing items from an EventedQueue
Queues are read from left to right. The left is known as the head. The right is known as the tail. Dequeueing an item from a queue means removing the item from the first position or head of the queue.

You can dequeue an item using

    var myItem = myEventedQueue.dequeue();

## Checking if an EventedQueue is empty

EventedQueue has a convenience method to check if the queue is empty:

    var item = "hello, is it me you're looking for?";
    var lionelsQueue = new EventedQueue();
    lionelsQueue.empty();
     //returns false

## Events fired when enqueing and dequeueing items

Here's where the fun begins. Perhaps you want to fire an event every time an item is added to the queue. Simply attach an event listner to the EventedQueue's "itemenqueued" event

    myEventedQueue.addEventListener('itemenqueued', function () { ... }, false);

Currently no additional information is returned.

To attach an event any time an item is dequeued, the process is similar:

    myEventedQueue.addEventListener('itemdequeued', function () { ... }, false);

If dequeueing items leads to an empty queue, EventedQueue emits a 'queueemptied' event.

    myEventedQueue.addEventListener('queueemptied', function() {
      console.log('Yay! our work here is done!'); 
    }, false);

## Adding multiple items

Naturally, there are times when one will want to add items in bulk. Emitting an event for 400 items, for example, might be overkill. For this reason, EventedQueue has an **enqueueMultiple** method which takes an array and adds its items at one time. It emits one event. This is the preferred method if a large amount of items will be added - or if an unknown number of items will be added.

    var lionelsHits = [
      'Dancing on the Ceiling',
      'Ballerina Girl',
      'Running With The Night',
      'All Night Long'
    ];
    
    var lionelsQueue = new EventedQueue();
    lioneleQueue.enqueueMultipe(lionelsQueue);

This will emit a single event, yet add multiple items.
