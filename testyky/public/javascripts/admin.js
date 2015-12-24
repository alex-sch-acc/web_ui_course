// GET URL for test
var testUrl = testUrl();


/*** F U N C T I O N S ***********/


// GENERATING URL for test
function testUrl () {
	return domainName + 'test/' + uuid.v1();
}


/*********************************/

// Checking  examinationType + hide/unhide newUserData
$(".examinationType select").on( "click", function() {
		var someVal = $(".examinationType select").val();

		if (someVal == "Індивідуальне") {
			$('.newUserData').show("fast");
		}
		else {
			$('.newUserData').hide("fast");	
		}
});


// update pauseDuration
$('.testSelect input').on('change', function(event) {
	event.preventDefault();
		var toChange = $(this).val();
		$(this).prev().text(toChange);
		console.log($(this).prev().text());
});


// get db names + form test list







$('.submitNewTest').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var dbAddValues = [];

	// check errors

	// double entry error

	// get values

	// genarate link

	// form insert

	// update db

	// update URL input
	$('.linkToGo input').val(testUrl);
});


// copy link to Clipboard
$('.linkToGo input').on('click', function() {
	event.preventDefault();
	/* Act on the event */
	$(this).select();
});























// console.log('testUrl =', testUrl);
// $(".genTestLink").text(testUrl);



// $(".submitNewTest").onClick() {

// };