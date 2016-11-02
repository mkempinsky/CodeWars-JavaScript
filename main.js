
function solution(number){
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
  return sum;
}