'use strict';

var Stopwatch = function() {};

Stopwatch.prototype.start = function() {
	this.startTime = process.hrtime();
	this.lapsTime = [];
};

Stopwatch.prototype.lap = function() {
	var lapTime = process.hrtime(this.lapStartTime || this.startTime);

	this.lapsTime.push(lapTime);
	this.lapStartTime = process.hrtime();

	return getTime(lapTime);
};

Stopwatch.prototype.stop = function() {
	this.elapsedTime = process.hrtime(this.startTime);
};

function getTime(time) {
	return time[0] * 1e9 + time[1];
}

Stopwatch.prototype.getElapsedTime = function() {
	return getTime(this.elapsedTime);
};

Stopwatch.prototype.getLapsTime = function() {
	return this.lapsTime.map(getTime);
};

module.exports = Stopwatch;
