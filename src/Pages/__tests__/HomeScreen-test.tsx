/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {store} from '../../sagas/store/store';
import {Provider} from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('HomeScreen renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
