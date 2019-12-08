import types from '../types'

const initialState = {
    color: 'red'
}

export const common = (state = initialState, action) => {
    switch (action.type) {
      case 'COMMON':
        return {
          ...state,
          color: action.color,
        }
      default:
        return state
    }
}