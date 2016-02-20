'use strict';
require('use-strict');

module.exports = function main(grunt) {
	grunt.initConfig({
		clean: { all: ['tmp'] },
		env: { all: { TEST: '1' } },
		eslint: { all: [ 'runner', '*.js', 'lib/**/*.js', 'methods/**/*.js', 'test/**/*.js' ] },
		mochaTest: { src: ['test/test.js'] }
	});

	// Load grunt plugins for modules
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-mocha-test');

	// default test task
	grunt.registerTask('default', [ 'clean', 'eslint', 'env', 'mochaTest' ]);
};
