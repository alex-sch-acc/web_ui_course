var express = require('express');
var router = express.Router();

/*** C O M M O N  F U N C T I O N S ****/

// UPDATING document
function updateDocument (query, collection, newData) {
  collection.update(query, newData);
}


// LOOKING for and UPDATING needed collection (dependent on packUuidVal and userUuidVal)
function user_packUuidFindUpdate (packUuidVal, userUuidVal, usedFunction, collection, newData) {
  if (packUuidVal == 'none') {
      usedFunction( { userUuid: { $eq: userUuidVal } } , collection , newData);  
  }
  else {
      usedFunction( { packUuid: { $eq: packUuidVal } } , collection , newData);
  }
}



/***************************************/

/* GET HOME page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    // var db = req.db;
    // var collection = db.get('tests');
    // 	  collection.find({},{},function(e,docs){
    //     res.json(docs);
    // });
});


/* GET a UUID-TEST page */
router.get('/test/:assembly_uid', function(req, res, next) {
  res.render('test', { title: req.params.assembly_uid });
});


/* GET test values by title */
router.get('/tests/:name', function(req, res, next) {
  var collection = req.db.get('tests');
  // console.log(req.params.name);
  collection.distinct(req.params.name, function(err, result) {
    if (err) {res.send("There was an error finding user"); } 
    else {res.send(result);}
  });
});


/* GET all tests */
router.get('/gettests', function(req, res, next) {
  var collection = req.db.get('tests');
  // console.log(req.params.name);
  collection.find({}, function(err, result) {
    if (err) {res.send("There was an error finding user"); } 
    else {res.send(result);}
  });
});

// db.get('tests').find({email: req.params.id}, function(err, result) {






/* GET THANK YOU page */
router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', { title: 'Thank you for participation' });
});

/*** A D M I N *************************/

/* GET ADMIN page */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Creating a test assembly' });
});

/***************************************/


// ADDING a new result document to results collection
router.post('/addPack', function(req, res) {
  var db = req.db;
  var collection = db.get('packs');
  collection.insert(req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});


/* GET (GRAB) all packs */
router.get('/getpacks', function(req, res, next) {
  var collection = req.db.get('packs');
  // console.log(req.params.name);
  collection.find({}, function(err, result) {
    if (err) {res.send("There was an error finding user"); } 
    else {res.send(result);}
  });
});




/*** R E S U L T S *********************/

/* GET RESULTS page */
router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Results page' });
});


/* GET (GRAB) all results */
router.get('/getresults', function(req, res, next) {
  var collection = req.db.get('results');
  // console.log(req.params.name);
  collection.find({}, function(err, result) {
    if (err) {res.send("There was an error finding user"); } 
    else {res.send(result);}
  });
});


// ADDING a new result document to results collection
router.post('/addResult', function(req, res) {
  var db = req.db;
  var collection = db.get('results');
  collection.insert(req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});


// UPDATING existing result document with a new info in results collection
router.put('/updateResult', function(req, res) {
  var db = req.db;
  var collection = db.get('results');
  res.json(req.body);
  var packUuidVal = req.body.packUuid,
      userUuidVal = req.body.userUuid;
  
// Looking for and updating needed collection
user_packUuidFindUpdate(packUuidVal, userUuidVal, updateDocument, collection, req.body);
});



















/***************************************/

module.exports = router;