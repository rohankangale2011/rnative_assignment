import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {
  BORDER_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  LIGHT_TEXT_COLOR
} from '../../../constant/color';

/**
 * Component for displaying title/subtitle text data
 * @param {string} styleOf 
 * @param {string} text
 */
function TextComponent({styleOf, text}) {
  return (
    <Text 
      style={styles[styleOf]} 
      numberOfLines={2} 
      ellipsizeMode='tail'
    >
      {text}
    </Text>
  )
}

/**
 * Component for displaying icon
 * @param {string} styleOf 
 * @param {string} name
 */
function IconComponent({styleOf,name}) {
  return (
    <Icon
      name={name}
      size={18}
      style={styles[styleOf]}
    />
  )
}

/**
 * List item component(function)
 * @param {string} title 
 * @param {string} byline
 * @param {string} publishedDate
 */
export const ListItem = React.memo(({title,byline,publishedDate}) => (
  <TouchableNativeFeedback>
  <View style={styles.listContainer}>
    <View style={styles.leftViewContainer}>
      <View style={styles.leftViewItem} />
    </View>
    <View style={styles.rightContainer}>
      <TextComponent styleOf="title" text={title} />
      <TextComponent styleOf="subtitle" text={byline} />
      <View style={styles.subtitle}>
        <IconComponent styleOf="icon" name="md-calendar" />
        <Text>{publishedDate}</Text>
      </View>
    </View>
    <View style={styles.navContainer}>
      <IconComponent styleOf="icon" name="ios-arrow-forward" />
    </View>
  </View>
  </TouchableNativeFeedback>
));

const {width} = Dimensions.get('window');
const LEFT_CONTAINER_WIDTH = 80;
const LEFT_ITEM_WIDTH = LEFT_CONTAINER_WIDTH - 30;
const RIGHT_NAV_WIDTH = 25;
const RIGHT_CONTAINER_WIDTH = width - (LEFT_CONTAINER_WIDTH+RIGHT_NAV_WIDTH);

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1, flexDirection: 'row',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    marginRight: 10,
    marginLeft: 10
  },
  leftViewContainer: {
    flex: 1,
    width: LEFT_CONTAINER_WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftViewItem: {
    width: LEFT_ITEM_WIDTH,
    height: LEFT_ITEM_WIDTH,
    borderRadius: LEFT_ITEM_WIDTH,
    backgroundColor: PRIMARY_TEXT_COLOR
  },
  rightContainer: {
    width: RIGHT_CONTAINER_WIDTH,
    paddingRight: 10,
    paddingLeft: 10
  },  
  title: {
    color: PRIMARY_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4
  },
  subtitle: {
    color: SECONDARY_TEXT_COLOR,
    flexDirection: 'row',
    flexWrap: "wrap",
    paddingTop: 4
  },
  icon: {
    paddingRight: 10
  },
  navContainer: {
    width: RIGHT_NAV_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  }
});