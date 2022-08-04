// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


    //Ex 3 and Ex 4 both had to be changed to run the code without errors. See those exercises for what I changed.

    // EX 1:
    //Old code
    // function nameQuestion() {
    //   console.log("Hello, what is your name?")
    // }

    // nameQuestion()
    //New Code: I realize that my console question doesn't actually make sens because you wouldn't ask someone their name if you already knew it. But I couldn't really find any issues beside the fact that this function didn't use any parameters, so it was hard coded. I added the string interpolation to make it more flexible, albeit a bit nonsensical.
    function nameQuestion(name) {
      console.log(`Hello, ${name}, what is your name?`)
    }
    nameQuestion('stranger')

    // EX 2:
    //For this one I only had to add a semicolon to the end of the variable assignment statement. The var assignment and console statement we both indented. Curly brace un-indented for proper formatting.
    function addThreeNums(first, second, third) {
      var sum = first + second + third;
      console.log(sum);
    }

    addThreeNums(1, 2, 3);
    addThreeNums(4, 2, 7);


    // EX 3:
    //The function below needed 'func' changed to 'function' to clear SyntaxError: Unexpected identifier. The closing curly brace was also moved to its own line for proper formatting.
    function makeFreshPesto(){
      console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
      console.log("Pulse basil and pine nuts");
      console.log("Add garlic and cheeses");
      console.log("Slowly pour in oil");
      console.log("Season");
    }
    makeFreshPesto();


    //  EX 4:
    //The period in the console statement had to be moved inside the closing back tick to clear the error: SyntaxError: Unexpected token ')'. I also moved the opening curly brace up to the end of the function declaration, deleted the extra line between the variable assignment statement and the console statement, and capitalized the T in the console statement. Then called the function.
    function average(num1, num2) {
    var sum = num1 + num2;
        var avg = sum / 2;
        console.log(`The average is: ${avg}.`);
      }
    average(2, 10);
