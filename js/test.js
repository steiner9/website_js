'use strict';

let exec = require('child_process').exec;
exec('ls -l', function(err, stdout, stderr) {
    if (err) { console.log(err);}
});

