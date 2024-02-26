import { LinkedList } from "./linkedlist.js";

// Create new linked list
console.log("Create new list");
const value = 1;
const list = new LinkedList(value);
console.log(list.toString());

// Append new item
console.log("Append item");
list.append(2);
console.log(list.toString());

// Prepend new item
console.log("Prepend item");
list.prepend(100);
console.log(list.toString());

// Get size
console.log("Get size");
console.log(list.size());

// Get head
console.log("Get head");
console.log(list.head());

// Get tail
console.log("Get tail");
console.log(list.tail());

// Return node at index
console.log("Return node at index");
console.log(list.at(2));

// Remove last element
console.log("Remove last element");
list.pop();
console.log(list.toString());

// Check if list contains element
console.log("Check if list contains element");
console.log(list.contains(1));

// Find index of value in list
console.log("Find index of value in list");
console.log(list.find(1));

// Insert value
console.log("Insert value");
list.insertAt(19, 1);
console.log(list.toString());

// Remove item
console.log("Remove");
list.removeAt(2);
console.log(list.toString());
