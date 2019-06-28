import React from 'react';
import {ToastAndroid} from 'react-native';

/**
 * Toaster component(function)
 * @param {string} message
 * @param {boolean} visible
 */
export const Toast = React.memo(({message,visible}) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
});