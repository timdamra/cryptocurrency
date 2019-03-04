import actions from 'actions'

const { SINGLE_SYMBOL_SUCCESS, SINGLE_SYMBOL_FAILURE } = actions

export const singleSymbolReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_SYMBOL_SUCCESS:

      return action.payload
    case SINGLE_SYMBOL_FAILURE:

      return action.payload
    default:
      return state
  }
}
