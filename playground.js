"use strict";

const music_collection = {
  "59": {
    "album": "Post",
    "artist":"Björk",
    "tracks": [
      "Army of Me",
      "Enjoy",
      "Hyperballad"
    ]
  },
  "37": {
    "album": "Hybrid Theory",
    "artist":"Linkin Park",
    "tracks": [
      "Papercut",
      "One Step Closer",
      "By Myself",
      "Pushing Me Away"
    ],
    "year": 2000
  },
  "57": {
    "album": "A Saucerful of Secrets",
    "artist":"Pink Floyd",
    "tracks": [
      "A Saucerful of Secrets",
      "Set the Controls for the Heart of the Sun",
      "Careful with that Axe, Eugene",
    ],
    "year": 1968,
    "genres": [
      "psych rock"
    ]
  },
}

// Actualiza un obj de la coleccion musical.
// obj, str, str, val => obj
// Recibe value = "" para borrar la propiedad
function updateCollection(collection, id, prop, value) {

  if(value === ''){
    delete collection[id][prop];
  } else if( Array.isArray(collection[id][prop]) ) {
    if(Array.isArray(value)) {
      collection[id][prop] = value;
    } else {
      collection[id][prop].push(value);
    }
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(updateCollection(music_collection, '37', 'tracks', 'With You'));


// const doesnt allows reasignment
const some = 5;
//some = 9;

// const allows mutation
const ARRAY = [0,1,2,3,4,5];
ARRAY[0] = 5;

// freeze prevents mutation
Object.freeze(music_collection);
//music_collection["59"] = "str"; //strict mode no lo permite...error

// Rest operator for variable number of args
const sum = (...args) => args.reduce((a, b) => a + b);
console.log(sum(5,4,3));

// Array destructuring
let [, x, y] = ARRAY;
console.log("Array destructuring: x: ", x, " y:", y);

// Obj destructuring with nested object
let { "59" : {artist : p} } = music_collection;
console.log("Obj destructuring with nested object: ", p);

let num = 5;
num;
console.log(num);

// Destructuring with rest
let [,,...arr] = ARRAY;
console.log("Destructuring with rest operator: ", arr);

// Destructuring objet in function call
let data = {
  max: 9,
  min: 5,
  oth: 4,
};
let media = ({max, min}) => ((max + min)/2.0);
console.log("Destructuring objet in function call: func(data): ", media(data));

// Template literals
let template = `Contenido multilinea
      es posible, tiene en cuenta caracteres como Tab en el source. Variable num: ${num}`;
console.log(template);

// Objects simpler sintax (object literal declaration)
const createObj = (name, age, gender) => ({name, age, gender});
let objMe = createObj('Diego', 23, 'M');
console.log(objMe);

// Simpler sintaxis for functions as object members
let bicycle = {
  gear: 3,
  setGear(newGear) {
    this.gear = newGear;
  },
}
bicycle.setGear(5);
console.log(bicycle.gear);

// Object constructor before ES6
let SpaceShuttle = function(targetPlanet){this.targetPlanet = targetPlanet;}; // Arrow function doesnt work as constructor
let kepler = new SpaceShuttle('Saturno');
console.log(kepler.targetPlanet);
// Object constructor ES6 with class syntactic sugar
class SpaceVan {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
let apolo = new SpaceVan('Moon');
console.log(apolo.targetPlanet);

// Recursion
function sumar(arr, n) {
  if( arr.length <= n){
    return "n mayor que # de elementos en arr";
  }else if(n <= 0){
    return arr[0];
  }else {
    return sumar(arr, n - 1) + arr[n];
  }
}
console.log(sumar([2, 3, 4], 1)); // 5

function countdown(n){
  if(n < 1){
    return [];
  }else{
    let arr = countdown(n-1);
    arr.unshift(n);
    console.log(arr);
    return arr;
  }
}
console.log(`On countdown(5): ${countdown(5)}`); // [5, 4, 3, 2, 1]

function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum < 0){
    return [];
  }else{
    let arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
}
console.log(`On rangeOfNumbers(5, 9): ${rangeOfNumbers(5,9)}`); // [5, 6, 7, 8, 9]

// listaNumeros -> nuevaLista con los cuadrados de los enteros positivos de listaNumeros
// Usa map y filter
const squareList = (arr) => {
  // Only change code below this line
  let sqList = arr.filter(
    (num) => (Number.isInteger(num) && num > 0)
  ).map(
    (num) => (Math.pow(num, 2))
  )

  return sqList;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log("SquaredList: ", squaredIntegers);


// Slug maker
let winterComing = "  Winter Is Coming";

function urlSlug(title) {
    return title.split(/\s/)
                .filter(
                    (str) => (/\S/.test(str)) // Devolvemos las substrings que no son espacios
                )
                .join("-")
                .toLowerCase();
}

let winterComingSlug = urlSlug(winterComing); // Should be "winter-is-coming"
console.log("\"Winter Is Coming\" slug: ", winterComingSlug)