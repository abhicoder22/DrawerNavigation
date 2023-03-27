import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <TextInput
        style={{fontSize: 20}}
        placeholder="Search here"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#CBC3E3',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default SearchBar;
