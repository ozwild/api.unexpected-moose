export default {
    plugin: require('good'),
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