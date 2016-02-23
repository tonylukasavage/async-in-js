let co = require('co'),
	data = require('../../lib/data'),
	denodeify = require('denodeify'),
	User = require('../../lib/user');

let compare = denodeify(require('bcrypt').compare);

module.exports = function(username, password) {
	let user = new User(username);
	return co(function* () {
		yield user.read();
		if (!(yield compare(password, user.get('password')))) {
			throw new Error('invalid user/pass');
		}
		yield user.update({ last_login: new Date().getTime() });
		let values = yield ['Foo', 'Bar', 'Quux'].map((t) => data[`query${t}`]());
		user.set({
			foo: values[0],
			bar: values[1],
			quux: values[2]
		});
		return user;
	});
};