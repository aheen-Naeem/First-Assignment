"use strict";
// question no 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favouriteTransportation = [];
favouriteTransportation.push(["motorcycle", "Honda"]);
favouriteTransportation.push(["car", "toyota"]);
favouriteTransportation.push(["bicycle", "sohrab"]);
//using for each loop to print a series of statements
favouriteTransportation.forEach(([transport, brand]) => { console.log(`I would liked to own a ${brand} ${transport}`); });
