// GETTING UUID
function uuid() {
  var url = location.href;
  var lastSlash = url.lastIndexOf("/");
  return url.substring(lastSlash+1, url.length);
}

var uuid = uuid();
// console.log(uuid);

var dbResultsInsert = {};
var dataToUse = {};


// get result from db
// form question-list
// answer
// uploadResults
// thankyou page


// grab results
$.getJSON('/getresults', function(resultsObj, textStatus) {
	// console.log("resultsObj = ", resultsObj);
		
		// find result entry
		for (var i = 0; i < resultsObj.length; i++) {
				if (resultsObj[i].userUuid == uuid) {
					// console.log("personal quest., this entry! = ", resultsObj[i]);
					dbResultsInsert = jQuery.extend({}, resultsObj[i]);
				}
				else if (resultsObj[i].packUuid == uuid) {
					// console.log("group quest., this entry! = ", resultsObj[i]);
					dbResultsInsert = jQuery.extend({}, resultsObj[i]);
				}
				else {
					// console.log("user with UUID + " + uuid + " not found!");
				}
			}

	// grab packs
	$.getJSON('/getpacks', function(packObj, textStatus) {
		// console.log("packObj = ", packObj);
	
						// find result entry
		for (var i = 0; i < packObj.length; i++) {
			if (packObj[i].userUuid == uuid) {
				// console.log("personal quest., this entry! = ", packObj[i]);
				dataToUse = jQuery.extend({}, packObj[i]);
			}
			else if (packObj[i].packUuid == uuid) {
				// console.log("group quest., this entry! = ", packObj[i]);
				dataToUse = jQuery.extend({}, packObj[i]);
			}
			else {
				// console.log("user with UUID + " + uuid + " not found!");
			}
		}

		// grab tests
		$.getJSON('/gettests', function(testObj, textStatus) {
			console.log("testObj = ", testObj);
			// var i = 1;
			// var j = dataToUse.testCounts;
			
			// while (i <= j) {
			// 	var tempKey = 'test' + i;
			// 		console.log('tempKey= ', tempKey);
			// 	if (testObj[i].name == dataToUse[tempKey]) {
					
			// 		console.log('hurra', testObj[i]);
			// 		console.log('tk', dataToUse[tempKey]);

			// 	}
			// 	i++;
			// }
			// var i = 1;
			var k=1;
			var j = dataToUse.testCounts;
		while (k <= j) {
			var tempKey = 'test' + j;

			for (var i = 0; i < testObj.length; i++) {
				if (testObj[i].name == dataToUse[tempKey]) {
					// console.log("personal quest., this entry! = ", testObj[i]);
					dataToUse = jQuery.extend({}, testObj[i]);
					console.log("FE!!!");
				}
			}
		k++;
		}


			// update result (OLD) ajaxPut(ajaxData[1][0], updatedInfo0, ajaxData[1][1]); 
			// ajaxPut(ajaxData[1][0], dbAddValuesRes, ajaxData[1][1]);
			console.log("dbResultsInsert = ", dbResultsInsert);
			console.log("dataToUse = ", dataToUse);

		});
	});
});


// $.getJSON('/tests/questions', function(json1, textStatus) {
// 	console.log(json1);
// });







//-- offtop -------------------------

// add new result
// ajaxPost(addResult, updatedInfo0, 'dbAddResult');
// update result
// ajaxPut(updateResult, updatedInfo0, 'dbResultsUpdate'); 