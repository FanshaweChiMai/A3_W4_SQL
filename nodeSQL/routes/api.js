var express = require('express');
var connection = require('../utils/sqlConnect');
var router = express.Router();

router.get('/:id', (req, res) => {
	// do a request for json data here
	let currentCar = req.params.dataID;
	console.log(req.params.id);

	connection.query(`SELECT * FROM mainmodel WHERE model="${req.params.id}"`, (err, result, fields) => {
		if (err) {
			throw err; console.log(err);
		} else {
			res.json({
				mainheading : result[0].modelName,
				carData : result
			});
		}
	});
});

// router.delete('/api/:id', (req, res) => {
// 	console.log('hit the delete route', req.params.id);
//
// 	connection.query(`DELETE from mainmodel WHERE model="${req.params.id}"`, (err, result) => {
// 		if (err) {
// 			throw err; console.log(err);
// 		} else {
// 			res.json(result); // send back whatever this is
// 		}
// 	});
// });

module.exports = router;
