import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function APIs() {
  const [data, setData] = useState([]);
  const getApi = () => {
    axios({
      method: 'GET',
      url: 'https://type.fit/api/quotes',
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
        APIs
      </Text>
      <Button title="Get data" onPress={getApi} />
      <SafeAreaView>
        <FlatList
          data={data}
          ListEmptyComponent={() => (
            <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
              no data
            </Text>
          )}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 5,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item.text}
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item.author}
              </Text>
            </View>
          )}
          numColumns={3}
          // ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </SafeAreaView>
    </View>
  );
}
