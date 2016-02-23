let config = require('config'),
	exec = require('child_process').exec,
	fs = require('fs'),
	path = require('path'),
	should = require('should');

const FIELDS = Object.assign(
	{},
	config.get('user'),
	{ foo: config.get('foo') },
	{ bar: config.get('bar') },
	{ quux: config.get('quux') }
);

describe('[runner]', function() {

	it('errors when given no method', function(done) {
		exec('./runner', function(err) {
			err.toString().should.containEql('must specify a method');
			return done();
		});
	});

	// run tests for each method
	fs.readdirSync(path.resolve('./methods')).forEach(function(dir) {
		describe(dir, function() {

			let cmd = dir.indexOf('streamline') !== -1 ? './runner-streamline ' : `./runner "${dir}" `;

			it('runs with default params', function(done) {
				exec(cmd , function(err, stdout) {
					should.not.exist(err);
					let result = JSON.parse(stdout);
					result.fields.should.have.properties(FIELDS);
					result.fields.should.have.property('last_login');
					return done();
				});
			});

			it('shows error on bad password', function(done) {
				exec(`${cmd} badpass`, function(err, stdout, stderr) {
					should.not.exist(err);
					stderr.should.containEql('invalid user/pass');
					return done();
				});
			});

		});
	});
});