/**
 * @format
 */
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SplashScreen from '../SplashScreen';

it('SplashScreen renders correctly', () => {
  const tree = renderer
    .create(<SplashScreen navigation={{navigate: jest.fn()}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
