////////////////////////////////////
//	Minimum
////////////////////////////////////


// function min (val1, val2) {
// 	if (val1<val2)
//  		 return val1;
// 	else return val2;
// }

// a = prompt ('Enter A:');
// b = prompt ('Enter B:');

// console.log(min(a,b));


////////////////////////////////////
//	Recursion
////////////////////////////////////


// function isEven(value) {
// 	if (value === 0) {
// 		return console.log ('is even:', true);
// 	}
// 	else if (value === 1) {
// 		return console.log ('is even:', false);
// 	}
// 	else {
// 		value-=2;
// 		isEven(value);
// 	}
// }

// var userData = parseInt(prompt('Enter a whole number"));

// if (typeof(userData) !== 'number') {
// 	console.log("Enter a valid integer");
// }
// else 
// 	isEven(Math.abs(userData));


////////////////////////////////////
//	Bean counting
////////////////////////////////////


// function countBs(elem, letter) {
// 	for (var i = 0; i < elem.length; i++) { 
// 		if (userData.charAt(i) == letter) {
// 			letterCount++;
// 		}		
// 	}
// 	return letterCount;
// }

// var letterCount = 0, userData = prompt('Enter a string'), userSearchLetter = prompt('Enter a letter to find');
// console.log(countBs(userData, userSearchLetter));