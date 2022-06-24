/**
 * @format
 */
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ShopScreen from '../ShopScreen';

it('ShopScreen renders correctly', () => {
  const tree = renderer.create(<ShopScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
