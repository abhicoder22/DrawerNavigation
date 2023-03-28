import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetail from './ResultDetail';

const ResultList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.text}
        renderItem={({item}) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultList;
