// ------------
// Exercise 1 (a)
// ------------

for (var output = "", brick = "#", counter = 0; counter < 7; counter++) {
	output = output + brick;
    console.log(output);
}

// ------------
// Exercise 1 (b)
// ------------
	var output = "", brick = "#";
	do {
		output = output + brick;
		console.log(output);
	} while (output.length <7);

// not ready

// ------------
// Exercise 2
// ------------

for (var counter=1; counter<101; counter++) {
	if (counter % 15 == 0)
    	console.log("FizzBuzz"); 
    else if (counter % 5 == 0)
    	console.log("Buzz");
    else if (counter % 3 == 0)
    	console.log("Fizz");
	else
    	console.log(counter);
}

// ------------
// Exercise 3
// ------------

var string="", size=8, space=" ", hash="#";

if (size % 2 == 0)     // even = true (white first); odd = false (black first)
	modifier = true;
else
	modifier = false;

for (var counterY=0, string=""; counterY<size; counterY++) {
	if (modifier == true) 
        modifierX=false;			// modifierX 	true (black first); false (white first)
    else 
		modifierX=true;				

	for (var counterX=0; counterX<size; counterX++ ) {
			if (modifierX == true) 
				string = string + hash;
			else
				string = string + space;
			modifierX = !modifierX;
	}
	console.log(" ");
	console.log(string);
	string="";
	modifier = !modifier;
}