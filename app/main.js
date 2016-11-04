
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

// FUNCTION FOR EXERCISE TWO
function makeWalk(){
    var walk = [];
    var randomLength = Math.floor(Math.random() * 15) + 1;
    console.log('random length = ' + randomLength);

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
  console.log(walk);
  return walk; 
}
function isValidWalk(newWalk) {
  var counter = 0;
  var results = true;
  if(newWalk.length !== 10){
     results = false;
      return results;
    } else {
    for(var k = 0; k < newWalk.length; k++ ){
        
        if(newWalk[k] === 'n'){
        counter++;
          console.log(counter);
        } else if(newWalk[k] === 's'){
        counter--;
          console.log(counter);
        } else if(newWalk[k] === 'w'){
        counter++;
          console.log(counter);
        } else if(newWalk[k] === 'e'){
        counter--;
          console.log(counter);
        }
    }
  }
  if(counter === 0){
    console.log(counter);
       return results;
  } 
  console.log('if your random array of directions is ' + newWalk + 'the result is ' );
}






