'use strict';
var fs = require('fs');
var Student = {};

Student.getList = () => filterActive(JSON.parse(fs.readFileSync('students.json', 'utf8')).students);

var filterActive = (arr) => arr.filter( (i) => i.active ); 

module.exports = Student;