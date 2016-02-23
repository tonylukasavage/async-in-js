let bcrypt = require('bcrypt'),
	data = require('../../lib/data'),
	User = require('../../lib/user');

module.exports = function(username, password, _) {
	let user = new User(username);
	user.read(_);
	if (!bcrypt.compare(password, user.get('password'), _)) {
		throw new Error('invalid user/pass');
	};
	user.update({ last_login: new Date().getTime() }, _);

	let results = {};
	['Foo', 'Bar', 'Quux'].forEach_(_, function(_, func) {
		results[func.toLowerCase()] = data[`query${func}`](_);
	});
	user.set(results);

	return user;
}
