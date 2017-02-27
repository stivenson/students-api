'use strict';
var fs = require('fs');
var Student = {};
Student.getList = () => fs.readFileSync('students.json', 'utf8');
module.exports = Student;