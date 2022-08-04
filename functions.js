// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hola, amigo!")
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function interpolator(word) {
  console.log(`Function, will you please add this ${word} to my sentence?`)
}
console.log('pencil');

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function payRange(company, lowEnd, highEnd) {
  console.log(`${company} has a ${highEnd-lowEnd} dollar range for this position.`)
}
payRange('Walmart', 30000, 50000);
payRange('Amazon', 60000, 80000);
payRange('IBM', 40000, 50000);



// 4: Write a function that satifies the following interaction pattern:



function checkStock(qty, item) {
  if (qty > 3) {
    console.log(`${item} is stocked!`)
  } else if (qty > 0 && qty <4) {
    console.log(`${item} - running LOW!`)
  } else {
    console.log(`${item} - OUT of stock!`)
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
