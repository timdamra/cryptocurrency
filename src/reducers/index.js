import { combineReducers } from 'redux';

import { singleSymbolReducer } from './single_symbol_reducer'

const rootReducer = combineReducers({
  singleSymbol: singleSymbolReducer
});

export default rootReducer;