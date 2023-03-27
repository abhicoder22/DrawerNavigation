import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../component/SearchBar';
import useResults from '../Hooks/useResults';

export default function SearchApi() {
  const [term, setTerm] = useState('');
  const [results, getData] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => getData()}
      />
      <Text style={{fontSize: 20, marginStart: 12}}>
        we have found {results.length} results
      </Text>
    </View>
  );
}
