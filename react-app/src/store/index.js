import { createStore } from 'redux'

const INITIAL_STATE = '$'

function currencySymbol(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_SYMBOL':
      return action.symbol
    default:
      return state
  }
}

const store = createStore(currencySymbol)

export default store