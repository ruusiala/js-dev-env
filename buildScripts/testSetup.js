// This file is not transpiled, use CommonJS and ES5

// Register babel to transpile before out tests run.
require('babel-register');

// Disable webpack features that Mocha doens't understand.
require.extensions['.css'] = function() {};