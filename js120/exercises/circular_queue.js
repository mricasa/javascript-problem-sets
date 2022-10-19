/* A circular queue is a collection of objects stored in a buffer that is treated as though it is connected end-to-end in a circle. When an object is added to this circular queue, it is added to the position that immediately follows the most recently added object, while removing an object always removes the object that has been in the queue the longest.

This works as long as there are empty spots in the buffer. If the buffer becomes full, adding a new object to the queue requires getting rid of an existing object; with a circular queue, the object that has been in the queue the longest is discarded and replaced by the new object.

Assuming we have a circular queue with room for 3 objects, the circular queue looks and acts like this: 

Your task is to write a CircularQueue class that implements a circular queue for arbitrary objects. The class should obtain the buffer size with an argument provided to the constructor, and should provide the following methods:

    enqueue to add an object to the queue
    dequeue to remove (and return) the oldest object in the queue. It should return null if the queue is empty.

You may assume that none of the values stored in the queue are null (however, null may be used to designate empty spots in the buffer).

Requirements
- A circular queue is a collection of objects stored in a buffer that is treated as though it is connected end-to-end in a circle.
- Added objects are added to the position that follow the most recently added object.
- Removing an object removes the object that has been in the queue the longest
- If full, adding an object gets rid of an existing object (the object that has been in the queue the longest is discarded and replaced by the new object);

CircularQueue
- enqueue
- dequeue
- isFull
- oldest
- recent

queue can contain objects...
each object 
*/
