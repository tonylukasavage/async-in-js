'use strict';
require('use-strict');

module.exports = function main(grunt) {
	grunt.initConfig({
		babel: {
			options: {
				plugins: ['transform-async-to-generator']
			},
			dist: {
				files: {
					'methods/5-async-await/index.js': 'methods/5-async-await/index.src.js'
				}
			}
		},
		clean: { all: ['tmp'] },
		env: { all: { TEST: '1' } },
		eslint: {
			all: [
				'runner',
				'**/*.js',
				'!node_modules',
				'!methods/5-async-await/*.js' // TODO: use babel-eslint
			]
		},
		mochaTest: { src: ['test/test.js'] }
	});

	// Load grunt plugins for modules
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-mocha-test');

	// default test task
	grunt.registerTask('default', [ 'clean', 'eslint', 'env', 'babel', 'mochaTest' ]);
};
