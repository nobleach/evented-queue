
Evented-queue
=============

A queue implementation that fires events when items are enqueued/dequeued

I wanted to build a system that would publish an event whenever a an item was enqueued or dequeued from a standard queue. Of course this is fairly trivial, but it's something I find myself using time and time again.

## Methodology

When an item is enqueued, a "itemenqueued" event is published. All subscribers are informed and can fire an event as a result. The same is true for dequeueing of items. An "itemdequeued" event is fired. (although I don't see this being used as much). A "queueemptied" event can alert listeners when the queue has no more items.

##Adding items to the queue

Right now, the Event-queue system is extremely simple. Just add the script to your page and instantiate an instance of EventedQueue:

    var myEventedQueue = new EventedQueue();

You may start enqueueing items with

    var item = *Obj/String/Num*;
    myEventedQueue.enqueue(item);
    
If you have an existing array of items you'd like to enqueue, you can use

    var items = [item1, item2, item3];
    myEventedQueue.enqueueMultiple(items);
    
**Note:** These items will be appended to the end of an existing queue using the Javascript Array.concat method. They will be queued in the order that they are specified in the existing array.

##Removing items from the queue
Queues are read from left to right. The left is known as the head. The right is known as the tail. Dequeueing an item from a queue means removing the item from the first position or head of the queue.

