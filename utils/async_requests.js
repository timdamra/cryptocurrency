const axios = require('axios')

function *fetchStream(...args) {
    for (let i = 0; i < args.length; i++) {
        yield args[i]
    }
}

function *createAsyncGenerator(url) {
    const getData = yield axios.get(url)    
    
    for (item of getData.Data) {
        yield item
    }
}

module.exports = { fetchStream, createAsyncGenerator }
