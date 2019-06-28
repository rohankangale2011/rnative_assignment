import {COMMON_ACTIONS} from './action';

/** Initial state for common reducer */
const initialState = {
  isLoaderVisible: false,
  isSnackVisible: false,
  snackMessage: ''
};

/**
 * Function handing/responsible for updating various common component's state
 * @param {object} state 
 * @param {object} action 
 */
export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMON_ACTIONS.SET_LOADER_VISIBILITY:
        return {
          ...state,
          isLoaderVisible: action.payload
        }
    case COMMON_ACTIONS.SET_SNACKBAR_MESSAGE:
      const {isVisible, message} = action.payload;
      return {
        ...state,
        isSnackVisible: isVisible,
        snackMessage: message
      }
    default:
      return state;
  }
}