/**
 * 
 * docs: https://min-api.cryptocompare.com/documentation
 * 
 * @param fsym, fiat symbol
 * @param fsyms, comma seperated list of fiat symbols 
 * @param tsyms, comma seperated list of cryptocurrency symbols
 * 
 * - toplist:
 * @param limit, number of coins to return in the toplist, default 10, min 10, max 100
 * @param page, for pagination
 * 
 *  */ 

module.exports = {
    cryptoCompare: {
        url: 'https://min-api.cryptocompare.com/data/',
        queries: {
            singleSymbol: 'price?',
            multiSymbol: 'pricemulti?',
            multiSymbolFullData: 'pricemultifull?',
            customAvg: 'generateAvg?',
            OHLCV: {
                daily: 'histoday?',
                hourly: 'histohour?',
                minute: 'histominute?'
            },
            topList: {
                twentyFourHour_Volume: 'top/totalvolfull?'
            }
        },
        queryKeys: {
            keyQuery: 'api_key',
            fiat: 'tsym',
            fiatList: 'tsyms',            
            crypto: 'fsym',
            cryptoList: 'fsyms',
            limit: 'limit',
            page: 'page'
        },
        apiKey: process.env.apiKey || '7cd938d1d242099bbb0eb708a1374dfed42f074339a86e03c39d23041dcf4f87'
    }
}
