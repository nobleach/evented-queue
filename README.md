Evented-queue
=============

A queue implementation that fires events when items are enqueued/dequeued

I wanted to build a system that would publish an event whenever a an item was enqueued or dequeued from a standard queue. Of course this is fairly trivial, but it's something I find myself using time and time again.

## Methodology

When an item is enqueued, a "itemenqueued" event is published. All subscribers are informed and can fire an event as a result. The same is true for dequeueing of items. An "itemdequeued" event is fired. (although I don't see this being used as much). A "queueemptied" event can alert listeners when the queue has no more items.
