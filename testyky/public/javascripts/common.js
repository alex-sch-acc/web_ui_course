var domainName = 'http://localhost:3000/';

var ajaxData = [
		['/addResult' , 'dbAddResult'], 
		['/updateResult', 'dbResultsUpdate'],
		['/getTests', 'dbGetTests'],
		['/tests/name', 'dbGetTests'],
		['/addPack', 'dbAddValuesRes']
];

/*** C O M M O N  F U N C T I O N S ***/

// AJAX - PUT (update)
function ajaxPut(route, updatedInfo, consoleFuncName) {

	$.ajax({
		url: route,
		type: 'PUT',
		dataType: 'json',
		data: updatedInfo
	})
	.done(function() {	
		console.log(consoleFuncName + '.success');
	})
	.fail(function() {
		console.log(consoleFuncName + '.error');
	})
	.always(function() {
		console.log(consoleFuncName + '.complete');
	});

}

// AJAX - POST (add)
function ajaxPost(route, newInfo, consoleFuncName) {

	$.ajax({
		url: route,
		type: 'POST',
		dataType: 'json',
		data: newInfo,
	})
	.done(function() {
		console.log(consoleFuncName + '.success');
	})
	.fail(function() {
		console.log(consoleFuncName + '.error');
	})
	.always(function() {
		console.log(consoleFuncName + '.complete');
	});
}

/**************************************/


// BACKGROUND for the whole site
$.backstretch(domainName + "./images/tall_houses.jpg");