
/* ------------------------------------------------------------/
            FUNCTION FOR EXERCISE ONE
 -----------------------------------------------------------*/
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

/* ------------------------------------------------------------/
            FUNCTION FOR EXERCISE TWO
 -----------------------------------------------------------*/

function isValidWalk(walk) {
    // create an empty array to contain the walking directions
    walk = [];
    // generate a random number between 1 - 15, this will be the amount of directions pushed to the walk array
    var randomLength = Math.floor(Math.random() * 15) + 1;
    console.log('random length = ' + randomLength);

    // create a for loop that runs through the 'randomLength' varialbe depending on how many directions are given
    // each time the loop runs it generates a random number between 1-4
    // assign each letter(ie. 'n' for north, 'e' for east) to a 1, 2, 3, or 4 depending on what the number is
    // push each letter to the 'walk' array

    for( var i= 0; i < randomLength; i++ ){
      var j = Math.floor(Math.random() * 4) + 1;
      console.log('j = ' + j);
      if (j === 1){
        walk.push('n');
      } else if (j === 2){
        walk.push('s');
      } else if (j === 3){
        walk.push('e');
      } else if (j === 4){
        walk.push('w');
      }
    }
    console.log(walk + '<--- this is the new walk');

    // now that we have our random list of directions via our 'walk' array, we can test if it is a valid walk
    // start a counter at 0
    var counter = 0;
    var results = true;
    // check if the length of 'walk' array is 10. MUST be exactly 10. If it were greater than 10 you would be late
    // if it were less than 10 you would be too early

    if(walk.length !== 10){
        // so this function should automatically return 'false' if the walk array length is not equal to 10
       results = false;
       console.log(results);
        return results;
      } else {
        // now we want to test if that random list of directions will bring us back to the start or not
      for(var k = 0; k < walk.length; k++ ){
          // since we are working with a grid, each direction value is assigned a positive or negative of 1
          // each block takes 1 minute to walk 
          if(walk[k] === 'n'){
            // 'n' or north will be +1
          counter++;
            console.log(counter);
          } else if(walk[k] === 's'){
            // 's' or south will be -1
          counter--;
            console.log(counter);
          } else if(walk[k] === 'w'){
            // 'w' or west will be +1
          counter++;
            console.log(counter);
          } else if(walk[k] === 'e'){
            // 'e' or east will be -1
          counter--;
            console.log(counter);
          }
      }
    }
    // if the counter is equal to 0 that means the directions have brought you back to where you started exactly 10min
    if(counter === 0){
      console.log(counter);
      console.log(results);
        // so we return the results of true! 
         return results;
    } 
}







