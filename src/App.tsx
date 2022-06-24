import React from 'react';
import {View} from 'react-native';
import NavigationStack from './NavigationStack/NavigationStack';
import {Provider} from 'react-redux';
import {store} from './sagas/store/store';
import {styles} from './Pages/commonStyle';
const App = () => {
  return (
    <View style={styles.flex1}>
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    </View>
  );
};

export default App;
