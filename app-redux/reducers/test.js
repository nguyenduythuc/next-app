import types from '../types'

const initialState = {
    color: 'red'
}

export const test = (state = initialState, action) => {
    switch (action.type) {
      case types.COLOR:
        return {
          ...state,
          color: action.color,
        }
      default:
        return state
    }
}