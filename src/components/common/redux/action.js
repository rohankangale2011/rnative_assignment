/** Action constants for the common components */
export const COMMON_ACTIONS = {
  SET_LOADER_VISIBILITY: 'SET_LOADER_VISIBILITY',
  SET_SNACKBAR_MESSAGE: 'SET_SNACKBAR_MESSAGE'
}

/**
 * Function setting loader's visibility
 * @param {boolean} isVisible
 */
export const setLoaderVisibility = (isVisible) => ({
  type: COMMON_ACTIONS.SET_LOADER_VISIBILITY,
  payload: isVisible
});