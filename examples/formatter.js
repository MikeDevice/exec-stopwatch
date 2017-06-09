'use strict';

var Stopwatch = require('../lib/stopwatch'),
	helpers = require('./helpers');

var stopwatch = new Stopwatch({
	formatter: function(time) {
		return (time / 1e6).toFixed(4) + ' ms';
	}
});

stopwatch.start();
helpers.syncFunction();
stopwatch.stop();

console.log(stopwatch.getElapsedTime());
