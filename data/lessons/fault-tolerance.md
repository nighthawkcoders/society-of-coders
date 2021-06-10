---
title: "Fault Tolerance (AP)"
date: '06-03-2021'
class: 'CSP'
section: 4 
author: 'Abhijay Deevi'
---
I would say one of the easiest topics to understand for the AP exam is Fault Tolerance. You will need to understand it conceptually first in order to easily answer these types of questions. 

In order to connect different devices, we need to have wires or some form of connection between those devices. An example of this is shown below: 

<p align="center">
  <img src="https://media.discordapp.net/attachments/852627989194604587/852628019268419614/rwOUo.png" />
<p>

This is a little more complex, but notice all the lines that are connecting each computing device. Now imagine you just cut the wire between one computing device. These devices would still be able to communicate with eachother because of those extra lines. 
  
<p align="center">
  <img src="https://media.discordapp.net/attachments/852627989194604587/852628612695719956/L4PVrDVkeMIAAAAASUVORK5CYII.png" />
<p>

Now this is the idea that you need to understand from this diagram. If I am on device Oakland and I need to send some data to Device New York, then I will have to pass the data through device Austin and device Tampa before reaching Device New York. I could also just go through Oakland, Austin, to New York. 
However, if one of the connections broke from those devices, for example Austin and New York, then Oakland can go through a different path to send the data. 

This idea is known as fault tolerance. This allows devices to have multiple connections between each device. That means that if one of the connections were the break, I would have another path to go through to send my data from Device A to Device B. 

This is a very simple example. In reality, there will be way more connections between each device so even if 4 different connections broke, there would usually be a way to fix them. 

Now Collegeboard gives many types of problems with this. They might ask something like "What is the shortest path to get from Device A to Device B" or "What is the least amount of connections you need to cut to make sure Device A can't communicate with Device D." 

If you follow the same logic from these short example above, you can easily answer these questions. You just have to constantly follow the paths and see how many different paths one device can connect to another. 

If you want more information on Fault Tolerance, go to Collegeboard and head to Big Idea 4. It is the second topic on there. They give some videos as well as a few more examples which can help you practice. 





