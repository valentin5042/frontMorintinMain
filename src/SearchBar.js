import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import axios from 'axios';

const SearchBar = ({ onSearchChange, busqueda, setBusqueda, productos, setProductos, resultados, setResultados }) => {
  const apiUrl = "http://192.168.0.3:3000/api/productos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const productosConImagen = response.data.map(producto => ({
          ...producto,
          imagenURL: producto.imagen // Asumiendo que tu columna se llama 'imagen'
        }));
        setProductos(productosConImagen);
        setResultados(productosConImagen);
      } catch (error) {
        console.error("Error al obtener datos del servidor: ", error);
      }
    };
  
    fetchData();
  }, []);

  const onChangeSearch = (query) => {
    setBusqueda(query);
    onSearchChange(query);

    const busquedaMinusculas = query.trim().toLowerCase();

    // Filtra y ordena los resultados en base a la búsqueda
    const filtrarResultados = busquedaMinusculas !== ''
      ? productos
          .filter(producto =>
            producto.nombreProducto &&
            producto.nombreProducto.toLowerCase().includes(busquedaMinusculas)
          )
          .sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio))
          .slice(0, 3)
      : [];

    setResultados(filtrarResultados);
  };

  return (
    <SafeAreaView style={[styles.container, Platform.OS === 'ios' && styles.iosContainer, Platform.OS === 'android' && styles.androidContainer]}>
      <Searchbar
        style={[styles.search, Platform.OS === 'ios' && styles.iosSearch, Platform.OS === 'android' && styles.androidSearch]}
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
  },
  iosContainer: {
    paddingTop: 20,
  },
  androidContainer: {
    paddingTop: 45, // Ajusta según tus necesidades para evitar la superposición con la cámara en Android
  },
  search: {
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  }
});

export default SearchBar;
