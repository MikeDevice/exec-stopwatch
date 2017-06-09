'use strict';

exports.asyncFunction = function(callback) {
	setTimeout(function() {
		callback();
	}, 100);
};

exports.syncFunction = function() {
	for (var i = 0; i < 1e8; i++) {}
};
