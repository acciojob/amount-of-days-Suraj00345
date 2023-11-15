function daysOfAYear(year) {
   return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}

// take input
let input = prompt('Enter a year:');

alert(daysOfAYear(input));
