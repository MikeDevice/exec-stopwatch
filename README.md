# exec-stopwatch
Simple stopwatch for execution time measurement.

## Installation
```
npm install exec-stopwatch
```

## Usage
```js
var Stopwatch = require('exec-stopwatch');

var stopwatch = new Stopwatch();

stopwatch.start();

asyncFunction(function() {
  stopwatch.lap();

  asyncFunction(function() {
    stopwatch.lap();
    syncFunction();
    stopwatch.lap();

    stopwatch.stop();
    stopwatch.getElapsedTime();
  });
});
```

## Methods
* `.start()` — runs stopwatch;
* `.lap()` — saves elapsed time of current lap. Returns this time in nanoseconds;
* `.stop()` — stops stopwatch;
* `.getElapsedTime()` — returns time, elapsed from the moment of `start` method call until `stop` method call.
