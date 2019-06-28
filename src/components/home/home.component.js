import React, {Component} from 'react';
import {FlatList,Text,View,StyleSheet,StatusBar} from 'react-native';
import {STATUS_BAR_COLOR} from '../../constant/color';
import {Loader} from '../common/loader';
import {Toast} from '../common/toaster';
import {ListItem} from './list-item/list-item';

/**
 * HomeComponent: Root component for home screen
 */
class HomeComponent extends Component {
  componentDidMount() {
    this.props.getNYData();
  }
  render() {
    const {isLoaderVisible,isSnackVisible,nyData,snackMessage} = this.props;
    return (
      <>
        <Loader isVisible={isLoaderVisible} />
        <Toast 
          visible={isSnackVisible} 
          message={snackMessage}
        />
        <View style={styles.homecontainer}>
          <StatusBar backgroundColor={STATUS_BAR_COLOR} />
          <FlatList
            data={nyData}
            renderItem={({item}) => (
                <ListItem 
                  title={item.title} 
                  byline={item.byline} 
                  publishedDate={item.published_date} 
                />
              )
            }
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1
  }
});

export default HomeComponent;