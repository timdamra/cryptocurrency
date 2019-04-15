import { combineReducers } from 'redux'

import { singleSymbolReducer } from 'reducers/single_symbol_reducer'
import { topListReducer } from 'reducers/top_list_reducer'
import { historicalDataReducer } from 'reducers/historical_data_reducer'

const rootReducer = combineReducers({
  singleSymbol: singleSymbolReducer,
  topList: topListReducer,
  historicalData: historicalDataReducer
})

export default rootReducer
