var config = {
    server: {
      port: process.env.PORT || 3000
    },
    routes: {
      cors: {
        origin: ['*'] // change for production
      }
    }
  };
/*
 *  Config for different environments
 */
if (process.env.NODE_ENV == 'pro') {
  config = {
    server: {
      port: process.env.PORT || 3000
    },
    routes: {
      cors: {
        origin: ['https://students-client.herokuapp.com'] // change for production
      }
    }
  }
}
if (process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV) {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3010
    },
    routes: {
      cors: {
        origin: ['http://0.0.0.0:8080','http://localhost:8080'] 
      }
    }
  }
}
if (process.env.NODE_ENV == 'test') {
  config = {
    server: {
      host: 'localhost', // change for test server
      port: process.env.PORT || 3020
    },
    routes: {
      cors: {
        origin: ['http://0.0.0.0:8080','http://localhost:8080'] // change for test
      }
    }
  }
}

module.exports = config