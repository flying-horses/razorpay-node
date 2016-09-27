const API = require('./api')

class Razorpay {
  constructor({ key_id, key_secret }) {
    if (!key_id) {
      throw new Error('`key_id` is mandatory')
    }

    if (!key_secret) {
      throw new Error('`key_secret` is mandatory')
    }

    this.api = new API({
      hostUrl: 'https://api.razorpay.com/v1/',
      key_id,
      key_secret
    })
    this.addResources()
  }

  addResources() {
    Object.assign(this, {
      payments: require('./resources/payments')(this.api)
      refunds: require('./resources/refunds')(this.api)
      orders: require('./resources/orders')(this.api)
    })
  }
}

module.exports = Razorpay