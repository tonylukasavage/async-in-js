function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

let data = require('../../lib/data'),
    denodeify = require('denodeify'),
    User = require('../../lib/user');

let compare = denodeify(require('bcrypt').compare);

module.exports = function () {
	var ref = _asyncToGenerator(function* (username, password) {
		let user = new User(username);
		yield user.read();
		if (!(yield compare(password, user.get('password')))) {
			throw new Error('invalid user/pass');
		}
		yield user.update({ last_login: new Date().getTime() });
		let values = yield Promise.all(['Foo', 'Bar', 'Quux'].map(function (t) {
			return data[`query${ t }`]();
		}));
		user.set({
			foo: values[0],
			bar: values[1],
			quux: values[2]
		});
		return user;
	});

	return function login(_x, _x2) {
		return ref.apply(this, arguments);
	};
}();
