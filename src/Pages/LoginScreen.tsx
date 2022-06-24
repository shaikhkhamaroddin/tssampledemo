import * as React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button} from 'react-native';
import {styles} from './commonStyle';
import {loginVerify, logout} from '../sagas/Login/actions';
import {RootState} from '../sagas/Login/reducers';

function LoginScreenClass(props: {}) {
  const {navigation, loginVerify, logout, message} = props;
  let btnFunction: Function = loginVerify;
  let btnTitle: string = 'Login';
  if (message == 'User') {
    btnFunction = logout;
    btnTitle = 'Logout';
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello {message}</Text>
      </View>
      <Button onPress={btnFunction} title={btnTitle} />
      <Text></Text>
      <Button onPress={() => navigation.navigate('AppStack')} title="Back" />
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  message: state?.login?.message,
});

const mapDispatchToProps = {loginVerify: loginVerify, logout: logout};

const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreenClass);

export default LoginScreen;
