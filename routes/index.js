const express = require('express')

const controllers = require('../controllers/index.js')
const router = express.Router()

const {
    handleSingleSymbol,
    handleMultiSymbol,
    handleAvg,
    handleOHLCV,
    handleTopList
} = controllers

const { daily, hourly, minute } = handleOHLCV

/* GET home page. */
router.get('/', (req, res) => res.send('Hello World!'))

// Single Symbol
router.route('/api/ssym')
.get(handleSingleSymbol)

// Multi Symbol
router.route('/api/msym')
.get(handleMultiSymbol)

// Handle Average
router.route('/api/avg')
.get(handleAvg)

// Handle OHLCV
router.route('/api/ohlcv/:time')
.get((req, res) => {
    const { time } = req.params   

    switch(time) {
        case 'minute':            
            return minute(req, res)
        case 'hourly':
            return hourly(req, res)
        default:
            return daily(req, res)
    }
})

// Handle Top List
router.route('/api/toplist')
.get(handleTopList)

module.exports = router;
