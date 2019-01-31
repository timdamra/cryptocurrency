const axios = require('axios')
const query = require('../queries')
const asyncRequest = require('../utils/async_requests')

const { createAsyncGenerator, createCompareStream } = asyncRequest

const { 
    cryptoCompare: {
      url,
      apiKey,
      queries: {
        singleSymbol,
        multiSymbol,
        multiSymbolFullData,
        customAvg,
        topList: {
            twentyFourHour_Volume
        },
        OHLCV: { daily, hourly, minute }
      },
      queryKeys: {
        keyQuery,
        fiat,
        fiatList,    
        crypto,
        cryptoList,
        limit,
        page
      }
    }
} = query

module.exports = {
    handleSingleSymbol: async (req, res) => {
        const { fsym, tsyms } = req.query       
        const requestUrl = `${url}${singleSymbol}${crypto}=${fsym}&${fiatList}=${tsyms}&${keyQuery}=${apiKey}`  

        try {            
            const queriedData = await axios.get(requestUrl)  

            res.send(queriedData.data)
        } catch (e) {
            res.status(404).send('NOT FOUND')
        }        
    },
    handleMultiSymbol: async (req, res) => {
        const { fsyms, tsyms } = req.query        
        const requestUrl = `${url}${multiSymbol}${cryptoList}=${fsyms}&${fiatList}=${tsyms}&${keyQuery}=${apiKey}`        

        try {            
            const queriedData = await axios.get(requestUrl)            

            res.send(queriedData.data)
        } catch (e) {
            res.status(404).send('NOT FOUND')
        } 
    },
    handleAvg: async (req, res) => {
        const { fsym, tsym } = req.query        
        const requestUrl = `${url}${customAvg}${crypto}=${fsym}&${fiat}=${tsym}&e=Kraken&${keyQuery}=${apiKey}`        

        try {            
            const queriedData = await axios.get(requestUrl)            

            res.send(queriedData.data)
        } catch (e) {
            res.status(404).send('NOT FOUND')
        } 
    },
    handleOHLCV: {
        daily: (req, res) => {
            res.send('RESPONSE FROM DAILY')
        },
        hourly: (req, res) => {
            res.send('RESPONSE FROM HOURLY')
        },
        minute: (req, res) => {
            res.send('RESPONSE FROM MINUTE')
        }
    },
    handleTopList: async (req, res) => {
        const { tsym, reqLimit = 10, reqPageNumber = 1 } = req.query
        const requestUrl = `${url}${twentyFourHour_Volume}${fiat}=${tsym}&${limit}=${reqLimit}&${page}=${reqPageNumber}&${keyQuery}=${apiKey}`
        
        try {
            const queriedData = await axios.get(requestUrl)

            res.send(queriedData.data)
        } catch (e) {
            res.status(410).send(e)
        }
    },
    handleCompareCrypto: (req, res) => {
        const { fsym1, fsym2, tsyms } = req.query
        const requestUrl1 = `${url}${singleSymbol}${crypto}=${fsym1}&${fiatList}=${tsyms}&${keyQuery}=${apiKey}` 
        const requestUrl2 = `${url}${singleSymbol}${crypto}=${fsym2}&${fiatList}=${tsyms}&${keyQuery}=${apiKey}`

        let dataFromFirstCoin

        // initializes generator object and fetches the request argument (which will not be yielded until next is invoked)
        const compareStream = createCompareStream(requestUrl1)
        
        // yields the fetched data from requestUrl1 (when generator was initialized)
        // next is called on generator instance (compareStream)
        const firstCoinData = compareStream.next().value       

        firstCoinData
        .then(returnedData => {            
            dataFromFirstCoin = returnedData.data
            
            // passes in 2nd request (requestUrl2) which generator fetches and immediately returns pending promise
            const resData = compareStream.next(requestUrl2).value

            // resData is a pending promise which needs to be resolved
            return resData
        })
        .then(secondReturnedData => {
            // promise from 2nd request (resData) resolves here
            const dataFromSecondCoin = secondReturnedData.data
                        
            res.send([dataFromFirstCoin, dataFromSecondCoin])
        })
        .catch(err => {
            res.status(410).send(err)
        })
    }
}
