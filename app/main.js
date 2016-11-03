
// FUNCTION FOR EXERCISE ONE
function solution(number){
    // get the number from the user
    number = document.getElementById('exOneNumber').value; 

    console.log(number);
    // create an array containing all numbers less than given number
    var lessThanNumber = [];
    // create an array for containing all numbers less than given number that are divisable by 3 or 5
    var newArray = [];
    // create a variable for the sum of all the numbers less than given number tat are divisable by 3 or 5
    var sum; 
    // create counter variable
    var i; 
    // create a for loop to go through all numbers less than given number
    for(i = 0; i < number; i++){
      // push all numbers less than given number to 'lessThanNumber array'
      lessThanNumber.push(i);
      // find if any of the numbers in 'lessThanNumber array' are divisable by either 3 OR 5
      if ((i % 5) === 0 || (i % 3) === 0){
        // if a number is divisable by either 3 OR 5 push it to 'newArray'
        newArray.push(i);
        }
      }
    console.log(lessThanNumber);
    console.log(newArray);
    
    // find the sum of all of the numbers in 'newArray' by using the .reduce method
    sum = newArray.reduce(function(a, b){
      return a + b; 
    });
    console.log('sum = ' + sum);

    // print the solution to the html for the user
    document.getElementById("exerciseOneResult").innerHTML = 
    'There are <span class="number">' + newArray.length + 
    '</span> numbers less than <span class="number">' + number + 
    '</span> that are divisable by either 3 or 5. The sum of these numbers is <span class="number"> ' + sum + 
    '</span>!';

    // return the sum to the function
    return sum;
  
}





