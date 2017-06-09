'use strict';

var Stopwatch = require('../lib/stopwatch'),
	helpers = require('./helpers');

var stopwatch = new Stopwatch();

stopwatch.start();

for (var i = 0; i < 10; i++) {
	helpers.syncFunction();
	stopwatch.lap();
}

stopwatch.stop();

console.log(stopwatch.getLapsTime());
console.log(stopwatch.getElapsedTime());
