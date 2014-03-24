Evented-queue
=============

A queue implementation that emits events when items are enqueued/dequeued

I wanted to build a system that would emit an event whenever a an item was enqueued or dequeued from a standard queue. Of course this is fairly trivial, but it's something I find myself using time and time again.

## Methodology

When an item is enqueued, a "itemenqueued" event is emitted. Any listners are informed and can fire an event as a result. The same is true for dequeueing of items. An "itemdequeued" event is fired. (although I don't see this being used as much). A "queueemptied" event can alert listeners when the queue has no more items.

##Adding items to the queue

Right now, the Event-queue system is extremely simple. Just add the script to your page and instantiate an instance of EventedQueue:

    var myEventedQueue = new EventedQueue();

You may start enqueueing items with

    var item = Object/Array/String/Num;
    myEventedQueue.enqueue(item);

**Note:** When enqueing an array, it will be added just like any other type. It's constituent components will not be added one by one.
    
If you have an existing array of items you'd like to enqueue, you can use

    var items = [item1, item2, item3];
    myEventedQueue.enqueueMultiple(items);
    
**Note:** These items will be appended to the end of an existing queue using the Javascript Array.splice method. They will be queued in the order that they are specified in the existing array.

##Removing items from the queue
Queues are read from left to right. The left is known as the head. The right is known as the tail. Dequeueing an item from a queue means removing the item from the first position or head of the queue.

You can dequeue an item using

    var myItem = myEventedQueue.dequeue();

## Events fired when enqueing and dequeueing items

Here's where the fun begins. Perhaps you want to fire an event every time an item is added to the queue. Simply attach an event listner to the EventedQueue's "itemenqueued" event:
    myEventedQueue.addEventListener('itemenqueued', function () { ... }, false);

Currently no additional information is returned.

To attach and event any time an item is dequeued, the process is similar:

    myEventedQueue.addEventListener('itemdequeued', function () { ... }, false);

If dequeueing items leads to an empty queue, EventedQueue emits a 'queueemptied' event.

    myEventedQueue.addEventListener('queueemptied', function() {
      console.log('Yay! our work here is done!'); 
    }, false);


