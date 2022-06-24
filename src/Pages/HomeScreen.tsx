import * as React from 'react';
import {Button, Text, View, FlatList, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';
import {fetchHomeData} from '../sagas/Home/actions';
import {RootState} from '../sagas/Home/reducers';
import {styles} from './commonStyle';
import {HomeState} from '../sagas/Home/types';

function HomeScreenClass(props: RootState) {
  // const {login} = useSelector(state => state);
  // const dispatch = useDispatch();
  const {data, loading} = props;
  console.log('data', props);
  return (
    <View style={styles.textCenter}>
      <Text style={styles.textCenter}>Homepage</Text>
      {loading && <Text>...Loading</Text>}
      <Button
        title="GET DATA"
        onPress={props.fetchHomeData} // can use dispatch({type:'LOGINVERIFY'})
      />
      {data && loadList(data)}
    </View>
  );
}
function loadList(listData) {
  return (
    <View style={styles.list}>
      <Text>User Names:</Text>
      <FlatList
        scrollEnabled={true}
        style={styles.list}
        data={listData}
        renderItem={({item}) => (
          <TouchableHighlight key={item.id}>
            <View style={styles.listItem}>
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state: HomeState) => ({
  data: state.home.data,
  loading: state.home.loading,
});

const mapDispatchToProps = {fetchHomeData: fetchHomeData};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenClass);

export default HomeScreen;
