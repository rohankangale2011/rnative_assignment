import React from 'react';
import {StyleSheet} from 'react-native';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreenContainer from '../components/home/home.container';
import {LIGHT_TEXT_COLOR,PRIMARY_COLOR} from '../constant/color';

/**
 * Component for rendering icon
 * @param {string} styleOf
 * @param {string} name
 */
function IconComponent({styleOf, name}) {
  return (
    <Icon
      name={name}
      color={LIGHT_TEXT_COLOR}
      size={25}
      style={[styles.icon,styles[styleOf]]}
    />
  )
}

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreenContainer,
    navigationOptions: () => {
      return {
        title: 'Xebia',
        headerRight: (
          <>
            <IconComponent 
              styleOf="search" 
              name="md-search" 
            />
            <IconComponent 
              styleOf="more" 
              name="md-more" 
            />
          </>
        ),
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle
      }
    }
  }
}, {
  initialRouteName: 'Home'
}));

const styles = StyleSheet.create({
  icon: {
    color: LIGHT_TEXT_COLOR
  },
  search: {
    padding: 10
  },
  more: {
    padding: 20
  },
  headerTitleStyle: {
    color: LIGHT_TEXT_COLOR,
    paddingLeft: 20,
    fontSize: 20
  },
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
    elevation: 4
  }
})

export default AppNavigator;