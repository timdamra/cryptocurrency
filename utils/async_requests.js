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

function *createCompareStream(coin) {    
    const getFirstCoin = yield axios.get(coin)
    
    yield axios.get(getFirstCoin)    
}

module.exports = { fetchStream, createAsyncGenerator, createCompareStream }


/** 
 * const initGenerator = createAsyncGenerator(requestUrl)
        const resolveFetchedData = initGenerator.next()

        resolveFetchedData
        .value
        .then(recievedData => {
            const resolvedData = initGenerator.next(recievedData.data)

            res.send(resolvedData)
        })
        .catch(err => {
            res.status(505).send(err)
        })
 * 
 * */ 