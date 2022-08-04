'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = ` ${firstName},you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh, and your a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  //console.log(lastName);
  return age;
}
const firstName = 'jonas';
calcAge(1991);
