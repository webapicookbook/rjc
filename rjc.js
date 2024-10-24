#!/usr/bin/env node

var rjc = require('./rjc-lib.js');

var job = rjc.job();
var task = rjc.task();

console.log("");
console.log("** RESTful Job Control Template**");
console.log("");

console.log('Job:');
console.log(job);
console.log("");

console.log('Task:');
console.log(task);
console.log("");


// EOF
