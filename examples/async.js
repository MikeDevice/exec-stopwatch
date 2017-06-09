'use strict';

var Stopwatch = require('../lib/stopwatch'),
	helpers = require('./helpers');

var stopwatch = new Stopwatch();

stopwatch.start();

helpers.asyncFunction(function() {
	stopwatch.lap();

	helpers.asyncFunction(function() {
		stopwatch.lap();

		helpers.asyncFunction(function() {
			stopwatch.lap();
			stopwatch.stop();

			console.log(stopwatch.getLapsTime());
			console.log(stopwatch.getElapsedTime());
		});
	});
});
