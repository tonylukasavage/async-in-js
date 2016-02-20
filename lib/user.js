let config = require('config');

class User {
	constructor(user) {
		this.fields = { user };
	}

	get(field) {
		return this.fields[field];
	}

	set(field, value) {
		if (typeof field === 'string') {
			this.fields[field] = value;
		} else {
			Object.assign(this.fields, field);
		}
	}

	read(callback) {
		Object.assign(this.fields, config.get('user'));
		return !callback ? Promise.resolve() : callback();
	}

	update(fields, callback) {
		Object.assign(this.fields, fields);
		return !callback ? Promise.resolve() : callback();
	}
}

module.exports = User;