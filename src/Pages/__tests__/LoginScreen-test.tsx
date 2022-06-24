/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import LoginScreen from '../LoginScreen';
 import {store} from '../../sagas/store/store';
 import {Provider} from 'react-redux';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('LoginScreen renders correctly', () => {
   const tree = renderer
     .create(
       <Provider store={store}>
         <LoginScreen />
       </Provider>,
     )
     .toJSON();
   expect(tree).toMatchSnapshot();
 });
 