import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './home.component';
import {getNYData} from './home.action';

const mapStateToProps = (state) => {
  return {
    nyData: state.home.nyData,
    isLoaderVisible: state.common.isLoaderVisible,
    isSnackVisible: state.common.isSnackVisible,
    snackMessage: state.common.snackMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNYData: () => dispatch(getNYData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);