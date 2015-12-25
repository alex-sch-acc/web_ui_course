// GET URL for test
var testUrl = testUrl();
var Uuid;

// just vars
var dbPacksInsert = {
	"projectName": "",
	"prefilledForm": "1",	
	"neededForm": "0",
	"formType": "0",
	"testCounts": "",
	"neededThankyou": "1"
};

var dbResultsInsert = {
	"packUuid": "",
	"userUuid": "",
	"projectName": "",
	"name": "",
	"surname": "",
	"email": ""
};

var testsAddValue = [];
var dbAddValues = jQuery.extend({}, dbPacksInsert);
var dbAddValuesRes = jQuery.extend({}, dbResultsInsert);



/*** F U N C T I O N S ***********/


// GENERATING URL for test
function testUrl () {
	Uuid = uuid.v1();
	return domainName + 'test/' + Uuid;
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


// update pauseDuration label
$('fieldset.testSelectSet fieldset input').on('change', function(event) {
	var toChange = $(this).val();
	$(this).prev().text(toChange);
});


// get request to get test Objects
$.getJSON('/gettests', function(json, textStatus) {
	console.log(json);

	// form the tests list
	var i = 1, testListArray = [];
	while (i <= json.length) {
		$('.testCount').append('<option value="' + i + '">' + i + '</option>');
    testListArray.push('<option value="' + json[i-1].name + '">' + json[i-1].name + '</option>');
    i++;
	}
	

	// appending list of test to testList
	$('.testList').append(testListArray);


	// adding tests setup fields
	var counter = 0;
	$('.testCount').change(function(event) {
			var i=0;

		// if there are too much fieldsets - elliminate;
		if (counter > $(this).val()) {
			
			while (counter > $(this).val()) {
				var tempVal = '.testSelect_' + counter;
				$(tempVal).hide('fast');
				counter--;
			}
		}			

		else {
			while (i <= $(this).val() && counter <= $(this).val()) {
				var tempVal2 = '.testSelect_' + counter;
				$(tempVal2).show('fast');			
				var tempVal3 = tempVal2 + ' legend';
				$(tempVal3).text('Тест ' + counter);			
				i++; counter++;
			}
		}		
	});

});


// set testCount to the dbobject
$('.testCount').on('change', function(event) {
	dbAddValues.testCounts = $(this).val();
});


// Submitting info to db
$('.submitNewTest').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */

	// check errors

	// set testCount! to obj


	// set amount of tests to obj
	dbAddValues.testCounts = $('.testCount').val();

	// get values
	var que = function(el) {
		$(el).val();
	};


	if ($('select.examinationType').val() == "Індивідуальне") {

		dbAddValuesRes.projectName = $('input[name=projectName]').val();
		dbAddValuesRes.packUuid = "none";
		dbAddValuesRes.userUuid = Uuid;
		dbAddValuesRes.name = $('input[name=name]').val();
		dbAddValuesRes.surname = $('input[name=surname]').val();
		dbAddValuesRes.email = $('input[name=mail]').val();
	}
	else {
		dbAddValuesRes.projectName = que('input[name=projectName]');
		dbAddValuesRes.packUuid = Uuid;
		dbAddValuesRes.userUuid = "none";
	}

	// results table
	for (var i = 1; i <= dbAddValues.testCounts; i++) {
		var testName = 'test' + i;
		var testPauseName = testName + 'Pause';
		var testCompletedName = testName + 'Completed';
		
		var selectedItemValue = '.testSelect_' + i + ' select';

		dbAddValues[testName] = $(selectedItemValue).val();
		dbAddValues[testPauseName] = $('label.pauseDuration_' + i).text();
		
		// results table
		dbAddValuesRes[testCompletedName] = "0";
	}

	console.log('dbAddValues obj:', dbAddValues);
	console.log('dbAddValuesRes obj:', dbAddValuesRes);

	// double entry error



	// update URL input
	$('.linkToGo input').val(testUrl);


	// dbAddValues


	// update db
	// add new result
	ajaxPost(ajaxData[0][0], dbAddValues, ajaxData[0][1]);
	ajaxPost(ajaxData[4][0], dbAddValuesRes, ajaxData[4][1]);

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