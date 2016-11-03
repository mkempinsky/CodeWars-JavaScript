
// FUNCTION FOR EXERCISE ONE
function solution(number){
    number = document.getElementById('exOneNumber').value; 

    if (number === null){
      alert('please enter a number first!');
    } else {
    console.log(number);
    var lessThanNumber = [];
    var newArray = [];
    var sum; 
    var i; 
    for(i = 0; i < number; i++){
      lessThanNumber.push(i);
      if ((i % 5) === 0 || (i % 3) === 0){
        newArray.push(i);
        }
      }
    console.log(lessThanNumber);
    console.log(newArray);
    
    sum = newArray.reduce(function(a, b){
      return a + b; 
    });
    console.log('sum = ' + sum);
    document.getElementById("exerciseOneResult").innerHTML = 
    'There are <span class="number">' + newArray.length + 
    '</span> numbers less than <span class="number">' + number + 
    '</span> that are divisable by either 3 or 5. The sum of these numbers is <span class="number"> ' + sum + 
    '</span>!';

    return sum;
  }
}





