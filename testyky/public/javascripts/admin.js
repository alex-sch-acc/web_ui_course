// GET URL for test
var testUrl = testUrl();


/*** F U N C T I O N S ***********/


// GENERATING URL for test
function testUrl () {
	return domainName + 'test/' + uuid.v1();
}


/*********************************/












console.log('testUrl =', testUrl);

$(".genTestLink").text(testUrl);



// $(".submitNewTest").onClick() {

// };