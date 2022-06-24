import 'react-native';
import React from 'react';
import MyAccountScreen from '../MyAccountScreen';
import {store} from '../../sagas/store/store';
import {Provider} from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('MyAccountScreen renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyAccountScreen navigation={{navigate: jest.fn()}} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
