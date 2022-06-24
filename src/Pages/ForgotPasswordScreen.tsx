import * as React from 'react';
import { useState } from 'react';
import { Text, View,TextInput,Button } from 'react-native';

export default function ForgotPasswordScreen() {
  const [password,setPassword] = useState("");
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
      <Text>ForgotPassword!</Text>
      </View>
      {/* <Button onPress={()=>navigation.navigate('HomeStack')} /> */}
    </View>
  );
}
