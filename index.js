// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

beforeEach(function (cats) {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

// Function to append a cat to the end of the 'cats' array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the 'cats' array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the 'cats' array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the 'cats' array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to a copy of the 'cats' array and return the new array
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

// Function to prepend a cat to a copy of the 'cats' array and return the new array
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

// Function to remove the last cat from a copy of the 'cats' array and return the new array
function removeLastCat() {
  const newCats = [...cats];
  newCats.pop();
  return newCats;
}

// Function to remove the first cat from a copy of the 'cats' array and return the new array
function removeFirstCat() {
  const newCats = [...cats];
  newCats.shift();
  return newCats;
}