export default {
    plugin: require('hapi-auth-jwt'),
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        consoleReporter: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ response: '*', log: '*' }]
          },
          { module: 'good-console' },
          'stdout'
        ]
      }
    }
  };