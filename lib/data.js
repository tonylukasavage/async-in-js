let config = require('config');

// create some "asynchronous" data retrieval functions
module.exports = {
	queryFoo(callback) {
		let val = config.get('foo');
		return callback ? callback(null, val) : Promise.resolve(val);
	},
	queryBar(callback) {
		let val = config.get('bar');
		return callback ? callback(null, val) : Promise.resolve(val);
	},
	queryQuux(callback) {
		let val = config.get('quux');
		return callback ? callback(null, val) : Promise.resolve(val);
	}
};