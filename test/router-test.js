var allTests = require('../node_modules/hash-brown-router/test/all-tests')
var sausage = require('../')
require('tap-browser-color')()

allTests(sausage())
