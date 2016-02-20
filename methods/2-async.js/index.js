let async = require('async'),
	bcrypt = require('bcrypt'),
	data = require('../../lib/data'),
	User = require('../../lib/user');

module.exports = function(username, password, callback) {
	let user;

	async.series([
		function(cb) {
			user = new User(username);
			user.read(cb);
		},
		function(cb) {
			bcrypt.compare(password, user.get('password'), function(err, isValid) {
				if (err) { return cb(err); }
				return cb(isValid ? null : new Error('invalid user/pass'));
			});
		},
		function(cb) {
			user.update({ last_login: new Date().getTime()}, cb);
		},
		function(cb) {
			let results = {};
			let funcs = ['Foo', 'Bar', 'Quux'].map(function(type) {
				return function(cb2) {
					data[`query${type}`](function(err, result) {
						if (err) { return cb2(err); }
						results[type.toLowerCase()] = result;
						return cb2();
					});
				}
			});
			async.parallel(funcs, function(err) {
				if (err) { return cb(err); }
				user.set(results);
				return cb();
			});
		}
	], function(err) {
		return callback(err, err ? null : user);
	});
}
