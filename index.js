// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let firstTwo = [];
  for (let i = 0; i <= 1; i++) {
    firstTwo.push(drivers[i]);
  }
  return firstTwo;
}

const returnLastTwoDrivers = function(drivers){
  let lastTwo = [];
  for(let i = drivers.length - 2; i <= drivers.length - 1; i++){
    lastTwo.push(drivers[i]);
  }
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(){
    return num * num;
  }
}

const fareDoubler = createFareMultiplier;

const fareTripler = createFareMultiplier;

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}
