'use strict';

function defaultFormatter(time) {
	return time;
}

var Stopwatch = function(options) {
	options = options || {};

	this.formatter = options.formatter || defaultFormatter;
};

Stopwatch.prototype.start = function() {
	this.startTime = process.hrtime();
	this.lapsTime = [];
};

Stopwatch.prototype.lap = function() {
	var lapTime = process.hrtime(this.lapStartTime || this.startTime);

	this.lapsTime.push(lapTime);
	this.lapStartTime = process.hrtime();

	return this._getTime(lapTime);
};

Stopwatch.prototype.stop = function() {
	this.elapsedTime = process.hrtime(this.startTime);
};

Stopwatch.prototype._getTime = function(time) {
	time = time[0] * 1e9 + time[1];

	return this.formatter(time);
};

Stopwatch.prototype.getElapsedTime = function() {
	return this._getTime(this.elapsedTime);
};

Stopwatch.prototype.getLapsTime = function() {
	return this.lapsTime.map(this._getTime, this);
};

module.exports = Stopwatch;
