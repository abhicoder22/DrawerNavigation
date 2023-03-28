import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 200, height: 180}}>
        <Text style={styles.resultStyle}>{result.text}</Text>
        <Text style={styles.authorStyle}>{result.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  authorStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultDetail;
