// Code your solution in this file!
// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2, drivers.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(n) {
    return n * multiplier;
  };
};

const fareDoubler = function(n) {
  return n * 2;
};

const fareTripler = function(n) {
  return n * 3;
};

const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
};
