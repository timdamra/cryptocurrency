const axios = require('axios')

/** 
 * ASYNC GENERATOR PATTERN FOR THIS PROJECT
 * 
 * - define generator function
 * - ** every 'next' invocation on iterator gets subsequent 'yield' in generator **
 * - ** 'yield' returns object with 'value' and 'done' properties **
 * - after definition, generator is initialized (initGenerator)
 * - invoking first 'next' will result in 'value' evaluating to a pending promise (if asynchronous)
 * - pending promise is resolved
 * - in the 'then' of promise another 'next' call is made and can be passed with the 'data' returned from promise
 * 
 * */ 

function *generateData() {
    const data = yield axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?tsym=USD&limit=10&page=1&api_key=7cd938d1d242099bbb0eb708a1374dfed42f074339a86e03c39d23041dcf4f87')

    // 'data' which is being passed to console.log() is a reference to the 'data' argument passed in from resolveFetchedData.value.then
    console.log(data)
}

// this returns object which contains 'next' method - does NOT begin fetch process (only initializes generator)
const initGenerator = generateData()

// calling the next method here begins fetch process, but returns a 'pending' promise in resolveFetchedData.value
const resolveFetchedData = initGenerator.next()
// console.log(resolveFetchedData)  // resolveFetchedData is returned iterable object

resolveFetchedData.value.then(data => {
    initGenerator.next(data)
})
.catch(err => {
    console.log(err)
})
