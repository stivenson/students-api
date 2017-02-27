var student = require('./students.js');

exports.init = function (server) {
  
  server.route({
    method: 'GET',
    path: '/students',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        list: JSON.parse(student.getList()).students
      })
    }
  })

  // Other Crud operations that are not in this test.

}