---
title: "Fault Tolerance (AP)"
date: '06-03-2021'
class: 'CSP'
section: 4 
author: 'Abhijay Deevi'
---
I would say one of the easiest topics to understand for the AP exam is Fault Tolerance. You will need to understand it conceptually first in order to easily answer these types of questions. 

In order to connect different devices, we need to have wires or some form of connection between those devices. An example of this is shown below: 

A-B-C-D-E-F

This is a very simple diagram since there is only one connection in between each device.

Now this is the idea that you need to understand from this diagram. If I am on device A and I need to send some data to Device D, then I will have to pass the data through device B and C before reaching Device D. 
However, if one of the connections broke from B to C, for example, then Device A would not be able to transfer that data over to device D. 

In order to prevent this from happening, people developed the idea of fault tolerance. This allows devices to have multiple connections between each device. That means that if one of the connections were the break, I would have another path to go through to send my data from Device A to Device B. 

Here is a small example of how fault tolerance could work. Imagine there was also a curved connections connecting A and D. Say I wanted to pass some data from Device A to Device B. If all the connections were stable, then I would be able to immediately go from A to B. However, if that connection between them were broken, I would still have another path to send the data to B (A to D to B).

A-B-D

This is a very simple example. In reality, there will be way more connections between each device so even if 4 different connections broke, there would usually be a way to fix them. 

Now Collegeboard gives many types of problems with this. They might ask something like "What is the shortest path to get from Device A to Device B" or "What is the least amount of connections you need to cut to make sure Device A can't communicate with Device D." 

If you follow the same logic from these short example above, you can easily answer these questions. You just have to constantly follow the paths and see how many different paths one device can connect to another. 

If you want more information on Fault Tolerance, go to Collegeboard and head to Big Idea 4. It is the second topic on there. They give some videos as well as a few more examples which can help you practice. 





