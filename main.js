  function solution(number){
    var number = document.getElementById('exOneNumber').value; 

    if (number === undefined){
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
    
    var sum = newArray.reduce(function(a, b){
      return a + b; 
    });
    console.log('sum = ' + sum);
    document.getElementById("returnedSum").innerHTML = sum;
    document.getElementById("countLessThanNumber").innerHTML = newArray.length;
    document.getElementById("number").innerHTML = number;

    return sum;
  }
  }
