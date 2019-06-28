import React from 'react';
import {StyleSheet,View,ActivityIndicator} from 'react-native';
import {PRIMARY_TEXT_COLOR} from '../../constant/color';

/**
 * Loader component(function)
 * @param {boolean} isVisible 
 */
export const Loader = React.memo(({ isVisible }) => (
  isVisible ? (
    <View style={styles.container}>
      <ActivityIndicator 
        size="large" 
        color={PRIMARY_TEXT_COLOR}
        style={styles.loader} 
      />
    </View>
    ) : null
));

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#333',
    zIndex: 99999,
    // opacity: 0.5,
    top: -160
  },
  loader: {
    padding: 10,
    borderRadius: 4,
    top: 50
  }
})