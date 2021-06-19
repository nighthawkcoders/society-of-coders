---
title: 'Data compression'
date: '6/14/2021'
class: 'CSP' 
section: 2 
keywords: 'compression, data' 
author: 'Kian Kishimoto' 
authorLink: 'https://github.com/Uhpachee'
---

Data can be handled in many ways, and one very prominent way that data is processed is called compression. 
Compression is exactly what it sounds like: the data is compressed into a smaller number of bits in order to save both time and storage.

Compression works by recognizing "patterns" in the stored data and then substituting the repeated bits for a smaller amount of bits. 
For example, if the given data was the string below
```string = "JohnJohnJohnMortensen" ```

it could be compressed into the following string:
```compressed_string = "JJJM"```


There are 2 types of data compression: lossless and lossy. 

Lossless data compression reduces the number of bits but ensures that the original data is able to be fully reconstructed. 
It is usually used with data that needs specific information in order to be unchanged/work properly.
This includes things like executable files, text files, and spreadsheet files.

Lossy data compression reduces the number of bits but only allows a parital or approximate reconstruction of the original data.
This is usually used with data that can still be recognizable after a few changes or where certain changes would not affect the overall outcome as much.
This includes things like video, audio, images, and media.

Lossy can compress the data into a smaller amount of bits than lossless and takes less time. 
However, lossy compression also sacrifices the ability to completely restore the exact original data, so each compression type has its trade-offs.


For more information, go to Big Idea 2 on CollegeBoard and look for the video titled "2.2: Daily Video 1".
