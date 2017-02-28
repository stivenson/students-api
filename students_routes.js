var student = require('./students.js');

exports.init = function (server) {
  
  server.route({
    method: 'GET',
    path: '/students',
    handler: (request, reply) => {
      reply({
        statusCode: 0,
        list: student.getList()
      }).header('Content-Type','application/json, text/plain, */*')
    }
  })

  // Other Crud operations that are not in this test.

}