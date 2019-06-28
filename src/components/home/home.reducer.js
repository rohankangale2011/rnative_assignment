import {HOME_ACTIONS} from './home.action';

/** Initial state for home reducer */
const initialState = {
  nyData: []
};

/**
 * Function handing/responsible for updating home component's state
 * @param {object} state 
 * @param {object} action 
 */
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_DATA:
        return {
          ...state,
          nyData: action.payload
        }
    default:
      return state;
  }
}