import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './commonStyle';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Register!</Text>
      </View>
      {/* <Button onPress={()=>navigation.navigate('HomeStack')} /> */}
    </View>
  );
}
