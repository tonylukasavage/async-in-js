/* eslint-disable max-nested-callbacks,no-shadow */

let bcrypt = require('bcrypt'),
	data = require('../../lib/data'),
	User = require('../../lib/user');

module.exports = function(username, password, callback) {
	let user = new User(username);

	user.read(function(err) {
		if (err) { return callback(err); }

		bcrypt.compare(password, user.get('password'), function(err, isValid) {
			if (err) { return callback(err); }
			if (!isValid) { return callback(new Error('invalid user/pass')); }

			user.update({ last_login: new Date().getTime()}, function(err) {
				if (err) { return callback(err); }

				let funcs = ['Foo', 'Bar', 'Quux'],
					counter = funcs.length,
					results = {},
					failed = false;

				funcs.forEach(function(func) {
					data[`query${func}`](function(err, result) {
						counter--;
						if (!failed) {
							if (err) {
								failed = true;
								return callback(err);
							} else {
								results[func.toLowerCase()] = result;
							}
							if (counter <= 0) {
								user.set(results);
								return callback(null, user);
							}
						}
					});
				});
			});
		});
	});
}
