import React from 'react';
import { FlatList } from 'react-native';
import {shallow} from 'enzyme';
import HomeComponent from './home.component';
import {Loader} from '../common/loader';
import {ListItem} from './list-item/list-item';

const mockCall = jest.fn();
const nyData = [
  {
    id: '001000',
    title: 'test title',
    byline: 'test byline',
    published_date: '2019-06-06'
  },
  {
    id: '101000',
    title: 'test title',
    byline: 'test byline',
    published_date: '2019-06-06'
  }
];

describe('Home component rendering', () => {
  const wrapper = shallow(<HomeComponent getNYData={mockCall} nyData={nyData} />)
  it('should render home component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render home components child components', () => {
    expect(wrapper.find(Loader).exists()).toBe(true);
    expect(wrapper.find(Loader).length).toBe(1);
    expect(wrapper.find(FlatList).length).toBe(1);
  });

});