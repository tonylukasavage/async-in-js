let data = require('../../lib/data'),
	denodeify = require('denodeify'),
	User = require('../../lib/user');

let compare = denodeify(require('bcrypt').compare);

module.exports = function(username, password) {
	let user = new User(username);
	return user.read()
		.then(function() {
			return compare(password, user.get('password'));
		})
		.then(function(isValid) {
			if (!isValid) { throw new Error('invalid user/pass'); }
			return user.update({ last_login: new Date().getTime() });
		})
		.then(function() {
			return Promise.all(['Foo', 'Bar', 'Quux'].map((t) => data[`query${t}`]()));
		})
		.then(function(values) {
			user.set({
				foo: values[0],
				bar: values[1],
				quux: values[2]
			});
			return user;
		});
};