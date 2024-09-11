import { List } from 'immutable';

// Converts an array to an immutable List
export function getListObject(array) {
  return List(array);
}

// Appends an element to the immutable List
export function addElementToList(list, element) {
  return list.push(element);
}
