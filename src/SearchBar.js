import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Buscar Producto"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BC1E32',
    height: 130,
    justifyContent: 'flex-end',
    padding: 15
  },
  search: {
    borderRadius: 10,
    marginHorizontal: 10,
  }
});
export default SearchBar;