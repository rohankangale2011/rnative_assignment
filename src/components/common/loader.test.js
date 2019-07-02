import React from 'react';
import {ActivityIndicator} from 'react-native';
import {shallow} from 'enzyme';
import {Loader} from './loader';

describe('Loader component rendering', () => {
  it('should render loader component', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.exists()).toBe(true);
  });

  it('should not render activity indicator initially', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.find(ActivityIndicator).exists()).toBe(false);
    expect(wrapper.find(ActivityIndicator).length).toBe(0);
  });

  it('should render activity indicator when set visibility to TRUE', () => {
    const wrapper = shallow(<Loader isVisible={true} />)
    expect(wrapper.find(ActivityIndicator).exists()).toBe(true);
    expect(wrapper.find(ActivityIndicator).length).toBe(1);
  });

});