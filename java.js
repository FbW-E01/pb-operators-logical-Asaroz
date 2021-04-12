// Declare two variables: isDogBetter with the value of true, and isCatBetter with the value of false.

var is_dog_better= true
var is_cat_better=false


// Check the result of:

// a) isDogBetter AND isCatBetter.

console.log(is_dog_better && is_cat_better)

// b) isDogBetter OR isCatBetter.

console.log(is_dog_better || is_cat_better)

// c) NOT (isDogBetter AND isCatBetter).

console.log(!(is_dog_better && is_cat_better))

// Declare three more variables atoms, sandGrains, starsInSky. Give these variables number values.

var atoms = 32675454987569
var sand_grains= 2354978456934
var stars_in_sky=54985478645

// Check the result of whether:

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log(atoms>stars_in_sky && atoms > sand_grains)

// b) atoms is NOT equal to sandGrains.

console.log(atoms !== sand_grains)

// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.

console.log(stars_in_sky<sand_grains || stars_in_sky>atoms)

// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

console.log(atoms==stars_in_sky || atoms!==sand_grains)

// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.

console.log((atoms>10 || atoms== 10) && (sand_grains<10 || sand_grains==10))

// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log(((atoms*stars_in_sky)<100) || atoms*sand_grains>100)