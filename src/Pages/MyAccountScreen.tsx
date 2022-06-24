import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from './commonStyle';
export default function MyAccountScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MyAccount!</Text>
      <Button onPress={() => navigation.navigate('LoginStack')} title="Login Page" />
    </View>
  );
}
