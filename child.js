const cp = require('child_process');

const pr = cp.exec('ls');

pr.stdout.on('data', console.log);
