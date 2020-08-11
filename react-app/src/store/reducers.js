import { combineReducers } from 'redux'

function currencySymbol(state = '$', action) {
  switch (action.type) {
    case 'CHANGE_SYMBOL':
      return action.symbol
    default:
      return state
  }
}

function subTotal(state = 0, action) {
  switch (action.type) {
    case 'ADD_SUBTOTAL':
      return action.result + state
    default:
      return state
  }
}

function existingItems(state = [1], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      return state.splice(1)
    default:
      return state
  }
}

function printMode(state = false, action) {
  switch (action.type) {
    case 'CHANGE_PRINT_MODE':
      return !state
    default:
      return state
  }
}

const allReducers = combineReducers({
  currencySymbol,
  subTotal,
  existingItems,
  printMode
})

export default allReducers