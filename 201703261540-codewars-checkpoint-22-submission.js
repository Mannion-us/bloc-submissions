
*******************************************************************************

function findOdd(A){
var w = (A);
var x;
var y;
var z;
for (x = 0; x < w.length; x++) {
	y = w[x];
	var count = 0;
	for(z = 0; z < w.length; ++z){
	    if(w[z] == y)
	        count++;
	}
	if (Math.abs(count)% 2  == 1 ) {
	    		return w[x];
	    	}
	}
}
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);

//https://www.codewars.com/kata/reviews/56257b1427e918467e000174/groups/58d7f0c959b7ab63e700018c


*******************************************************************************


*******************************************************************************

var dayPlan = function(hours,tasks,duration) {
	var results = [];
	if (hours === 0 || hours === null || tasks === 0 || tasks === null || duration === 0 || duration === null) {
		return results;
	}
	if (duration * tasks > hours * 60) {
		return "You're not sleeping tonight!";
	} else {
		var totalWorkTime = tasks * duration;
		var totalTimeForBreaks = (hours * 60) - totalWorkTime;
		var breakTime = Math.round(totalTimeForBreaks / (tasks - 1));

		for (var i = 0; i < tasks - 1; i++) {
			results.push(duration, breakTime);
		}

		results.push(duration);

		return results;
	}
};

//https://www.codewars.com/kata/reviews/581de9aa5456504b8a000036/groups/58d2d6f2d5bec6b790000f8c

*******************************************************************************


*******************************************************************************

var uniqueInOrder=function(iterable){
var outPutArray = [];
var x = Array.from(iterable);
for (i = 0; i < x.length; i++) {
  if (x[i] !== x[i-1] ) {
    outPutArray.push(x[i]);
  }
}
return outPutArray;
};

//https://www.codewars.com/kata/reviews/54f080b08a35862d5f000242/groups/58d70cd179e6091ddd000439

*******************************************************************************
