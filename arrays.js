var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray (arr, element) {
  return ([...arr]);
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  return arr.unshift(element) 
}