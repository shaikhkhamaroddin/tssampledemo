/**
 * @format
 */
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyBagScreen from '../MyBagScreen';

it('MyBagScreen renders correctly', () => {
  const tree = renderer.create(<MyBagScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
