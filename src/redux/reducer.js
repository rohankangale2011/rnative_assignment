import { combineReducers } from 'redux';
import {homeReducer} from '../components/home/home.reducer';
import {commonReducer} from '../components/common/redux/reducer';

const rootReducer = combineReducers({
  home: homeReducer, // reducer for home component/screen
  common: commonReducer // reducer for common components
});

export default rootReducer;