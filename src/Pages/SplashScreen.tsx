import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './commonStyle';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('AppStack');
  }, 2000);

  return (
    <View style={styles.container}>
      <View>
        <Text>SplashScreen</Text>
      </View>
    </View>
  );
}
