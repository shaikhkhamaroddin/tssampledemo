import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Pages/HomeScreen';
import ShopScreen from '../Pages/ShopScreen';
import MyAccountScreen from '../Pages/MyAccountScreen';
import MyBagScreen from '../Pages/MyBagScreen';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  safeAreaInset: {bottom: 'always', top: 'always'},
  showLabel: true,
  style: {
    backgroundColor: 'lightgray',
    height: 45,
  },
  labelPosition: 'below-icon',
  headerShown: false,
};
// const iconStyle = {
//   marginTop: 4,
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: 32,
//   height: 32,
// };

export default function BottomTabMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={tabBarOptions} />
      <Tab.Screen name="Shop" component={ShopScreen} options={tabBarOptions} />
      <Tab.Screen
        name="Mybag"
        component={MyBagScreen}
        options={tabBarOptions}
      />
      <Tab.Screen
        name="Myaccount"
        component={MyAccountScreen}
        options={tabBarOptions}
      />
    </Tab.Navigator>
  );
}
