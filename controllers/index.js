const axios = require('axios')
const query = require('../queries')
const asyncRequest = require('../utils/async_requests')

const { createAsyncGenerator } = asyncRequest

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
    handleTopList: (req, res) => {
        const { tsym, reqLimit = 10, reqPageNumber = 1 } = req.query
        const requestUrl = `${url}${twentyFourHour_Volume}${fiat}=${tsym}&${limit}=${reqLimit}&${page}=${reqPageNumber}&${keyQuery}=${apiKey}`
        
        const initGenerator = createAsyncGenerator(requestUrl)
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
    }
}
