# exec-stopwatch
Simple stopwatch for execution time measurement.

## Installation
```
$ npm install exec-stopwatch
```

## Usage
```js
var Stopwatch = require('exec-stopwatch');

var stopwatch = new Stopwatch();

stopwatch.start();

syncFunction();
stopwatch.lap();

syncFunction();
stopwatch.lap();

syncFunction();
stopwatch.lap();

stopwatch.stop();

console.log(stopwatch.getLapsTime());
console.log(stopwatch.getElapsedTime());
```

## Examples
You can find examples [here](./examples)

## Options
You can pass `options` object to `Stopwatch` constructor with follow fields:
* `formatter(time)` — function for transforming `time` before returning from `getLapsTime` and `getElapsedTime` functions.

## Methods
* `.start()` — runs stopwatch;
* `.lap()` — saves elapsed time of current lap. Returns this time in nanoseconds;
* `.stop()` — stops stopwatch;
* `.getLapsTime()` — returns times for each lap;
* `.getElapsedTime()` — returns time, elapsed from the moment of `start` method call until `stop` method call.
