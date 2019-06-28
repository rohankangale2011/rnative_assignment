 /** Action constants for home view */
export const HOME_ACTIONS = {
  GET_DATA: 'GET_DATA',
  SET_DATA: 'SET_DATA'
};

/**
 * Function initiating get nytimes api
 */
export const getNYData = () => ({
  type: HOME_ACTIONS.GET_DATA
});