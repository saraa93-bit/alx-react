import { List, Map } from 'immutable';

// Concatenates two arrays into a List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Merges two objects into a List, with page2 values overriding page1 values
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  
  // Merge map1 and map2, giving priority to map2 values if keys conflict
  const mergedMap = map1.merge(map2);
  
  // Return the merged values as a List
  return List(mergedMap.values());
}
