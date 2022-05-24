// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, string) {
  const matchingDrivers = [];
  for (const item of array) {
    if (item.toUpperCase() === string.toUpperCase()) {
      matchingDrivers.push(item);
    }
    
  }
  return matchingDrivers;
}

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array,
// and returns all drivers whose names begin with the provided letters

function fuzzyMatch(array, string) {
    const matchingFirstLetter = [];
    for (const driver of array) {
    if (driver[0] == string[0]) {
        matchingFirstLetter.push(driver)
      }
    }
    return matchingFirstLetter;
}

//refactor this code to use the filter method
function matchName(arrayOfObjects, someString) {
    return arrayOfObjects.filter(
      (potentialMatch) => potentialMatch.name == someString
    );
  }