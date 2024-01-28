// SearchBar.js

import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';

const SearchBar = ({ onSearchChange }) => {
  const [busqueda, setBusqueda] = useState('');

  const onChangeSearch = (query) => {
    setBusqueda(query);
    onSearchChange(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Buscar Producto"
        onChangeText={onChangeSearch}
        value={busqueda}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BC1E32',
    height: 120,
    justifyContent: 'flex-end',
  },
  search: {
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15
  },
});

export default SearchBar;
