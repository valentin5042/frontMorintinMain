import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native' 

const BuscandoProducto = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
        <Text style={styles.texto}>Buscando Producto...</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
      },
      texto: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#BC1E32',
      }
})

export default BuscandoProducto