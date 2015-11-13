var path = require('path');
var util = require('util');

var Jasmine = require('jasmine');
var jasmineReporters = require('jasmine-reporters');
var jasmine = new Jasmine();

//Load configuration from a file or from an object.
jasmine.loadConfigFile('./jasmine.json');

jasmine.onComplete(function(passed) {
    if (passed) {
        console.log('All specs have passed');
    } else {
        console.log('At least one spec has failed');
    }
});

var terminalReporter = new jasmineReporters.TerminalReporter({
	verbosity: 3,
	color: true,
	showStack: false
});
jasmine.addReporter(terminalReporter);

jasmine.execute();
