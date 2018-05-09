var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray (array, element) {
  var guy = [...array]
  return guy;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element) 
}