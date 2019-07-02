import React from 'react';
// import {ToastAndroid} from 'react-native';
import {shallow} from 'enzyme';
import {Toast} from './toaster';

const ToastAndroid = {
  showWithGravity: jest.fn(),
  showWithGravityAndOffset: jest.fn(),
};

describe('Toaster component rendering', () => {
  it('should render loader component', () => {
    const wrapper = shallow(<Toast />)
    expect(wrapper.exists()).toBe(true);
  });

  it('should not render toaster initially', () => {
    const wrapper = shallow(<Toast />)
    expect(wrapper.find(ToastAndroid).exists()).toBe(false);
    expect(wrapper.find(ToastAndroid).length).toBe(0);
  });

});