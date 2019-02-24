import actions from '../actions'

const {    
    SINGLE_SYMBOL_SUCCESS,
    SINGLE_SYMBOL_FAILURE
} = actions

export const singleSymbolReducer = (state = {}, action) => {
    switch(action.type) {
        case(SINGLE_SYMBOL_SUCCESS):
            console.log(action)
            return action.payload
        case(SINGLE_SYMBOL_FAILURE):
            console.log(action)
            return action.payload
        default:
            return {}
    }
}
