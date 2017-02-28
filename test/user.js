let Lab = require('lab')
let lab = exports.lab = Lab.script()
let code = require('code');
let server = require('../app')

lab.experiment('Test for Student RESTFUL services', () {
  lab.test('GET students', (done) => {
    let options = {
      method: 'GET',
      url: '/students'
    }
    server.inject(options, (response) => {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      done()
    })
  })
})










/* Others test for all crud operations of students

    lab.test('GET students/:id', function(done) {
      let options = {
        method: 'GET',
        url: '/students/1'
      }
      server.inject(options, function(response) {
        let result = response.result
        code.expect(response.statusCode).to.equal(200)
        code.expect(result.statusCode).to.equal(0)
        done()
      })
    })

    lab.test('POST students 1', function(done) {
      let options = {
        method: 'POST',
        url: '/students',
        payload: {
          id: 1234,
          name:"Carlos",
          active: true,
          grades: [4.3, 4.5, 3.0],
          yearsOld:27,
          color:"blue"
        }
      }
      server.inject(options, function(response) {
        let result = response.result
        code.expect(response.statusCode).to.equal(200)
        code.expect(result.statusCode).to.equal(0)
        done()
      })
    })

    lab.test('POST students 2', function(done) {
      let options = {
        method: 'POST',
        url: '/students',
        payload: {
          id: 5678,
          name:"Carlos",
          active: true,
          grades: [2.3, 4.5, 3.4],
          yearsOld:27,
          color:"blue"
        }
      }
      server.inject(options, function(response) {
        let result = response.result
        code.expect(response.statusCode).to.equal(200)
        code.expect(result.statusCode).to.equal(0)
        done()
      })
    })


    lab.test('PUT students', function(done) {
      let options = {
        method: 'PUT',
        url: '/students/1234',
        payload: {
          id: 1234,
          name:"Carlos",
          active: true,
          grades: [4.3, 4.5, 3.0],
          yearsOld:27,
          color:"blue"
        }
      }
      server.inject(options, function(response) {
        let result = response.result
        code.expect(response.statusCode).to.equal(200)
        code.expect(result.statusCode).to.equal(0)
        done()
      })
    })


    lab.test('DELETE students', function(done) {
      let options = {
        method: 'DELETE',
        url: '/students/1234'
      }
      server.inject(options, function(response) {
        let result = response.result
        code.expect(response.statusCode).to.equal(200)
        code.expect(result.statusCode).to.equal(0)
        done()
      })
    })
  */