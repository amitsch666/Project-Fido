let mapReverse = require('map-reverse');

const userNames = [
  'cwbuecheler',
  'bort',
  'captaincode',
  'hotpants6969',
  'kelly',
  'steve',
  'starlord'
];

// Use map to generate an array of uppercase usernames
const userNamesUp = userNames.map(name => {
  return name.toUpperCase();
});

const userNamesUpRev = mapReverse(userNames, name => {
  return name.toUpperCase();
});

for (let i = 0; i < userNamesUp.length; i++) {
  console.log(userNamesUp [i]);
}
console.log('--------------');
for (let i = 0; i < userNamesUpRev.length; i++) {
  console.log(userNamesUpRev [i]);
}
