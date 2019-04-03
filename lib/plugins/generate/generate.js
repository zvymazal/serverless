'use strict';

const createEvent = require('aws-event-mocks');
const BbPromise = require('bluebird');

class Generate {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options || {};

    this.commands = {
      'generate-event': {
        usage: 'Generate event',
        lifecycleEvents: ['generate-event'],
        options: {
          type: {
            usage: 'Specify event type. HTTP, SNS, SQS are supported.',
            shortcut: 't',
            required: true
          },
          body: {
            usage: 'Specify the HTTP body.',
            shortcut: 'b'
          },
          message: {
            usage: 'Specify the SNS/SQS Message.',
            shortcut: 'm'
          }
        }
      }
    }
    this.hooks = {
      'generate-event:generate-event': () => BbPromise.bind(this).then(this.generateEvent)
    }
  }

  generateEvent() {
    let e
    switch (this.options.type.toLowerCase()) {
      case 'http':
        e = createEvent({
          template: 'aws:apiGateway',
          merge: {
            body: JSON.parse(this.options.body)
          }
        })
        break
      case 'sns':
        e = createEvent({
          template: 'aws:sns',
          merge: {
            Records: [
              {
                Sns: {
                  Message: this.options.message
                }
              }
            ]
          }
        })
        break
    }
    // The intention here is to allow redirection from stdout
    // eslint-disable-next-line no-console
    return console.log(JSON.stringify(e))
  }
}
module.exports = Generate;
