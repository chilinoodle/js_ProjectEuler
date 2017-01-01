//problem 2
var fibonacci = [1,2];
var x = fibonacci[0];
var y = fibonacci[1];
var totalEvensInSeq = 0;
var notFourMillions = true;

while (notFourMillions) {
  var i = x + y;
  if ( i < 4000000 ) {
    fibonacci.push(i);
    x = y;
    y = i;
      if (i % 2 === 0) {
        totalEvensInSeq += i;
      }
  }
  else {
    notFourMillions = false;
  }
}

console.log(totalEvensInSeq);

