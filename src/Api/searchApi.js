import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import SearchBar from '../component/SearchBar';
import useResults from '../Hooks/useResults';
import ResultList from '../component/ResultList';

export default function SearchApi() {
  const [term, setTerm] = useState('');
  const [results, getData] = useResults();

  const filterResults = author => {
    return results.filter(result => {
      return result.author === author;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => getData()}
      />
      {/* <Text style={{fontSize: 20, marginLeft: 15}}>
        we have found {results.length} results
      </Text> */}
      <ScrollView>
        <ResultList results={filterResults('Thomas Edison')} title="First" />
        <ResultList results={filterResults('Yogi Berra')} title="Second" />
        <ResultList results={filterResults('Abraham Lincoln')} title="Third" />
        <ResultList results={filterResults('Napoleon Hill')} title="Fourth" />
      </ScrollView>
    </>
  );
}
