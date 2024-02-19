import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';

const Lista = ({ productosSeleccionados, dispatch }) => {
  const productosPorSupermercado = productosSeleccionados.reduce((acc, producto) => {
    const supermercado = producto.Supermercado || 'Sin Supermercado';
    if (!acc[supermercado]) {
      acc[supermercado] = {
        productos: [],
        sumaPrecio: 0,
      };
    }
    acc[supermercado].productos.push(producto);
    acc[supermercado].sumaPrecio += parseFloat(producto.Precio);
    return acc;
  }, {});

  const eliminarProducto = (producto) => {
    Alert.alert(
      '¿Desea eliminar este producto de la lista?',
      'Esta acción no se puede deshacer',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => dispatch({ type: 'ELIMINAR_PRODUCTO', producto }),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {productosSeleccionados.length === 0 && (
        <Text style={styles.noListaText}>No hay listas disponibles</Text>
      )}

      <ScrollView style={styles.listaContainer}>
        {productosSeleccionados.length > 0 &&
          Object.entries(productosPorSupermercado).map(([supermercado, datosSupermercado]) => (
            <Card key={supermercado} style={styles.cardBack}>
              <View style={styles.contenedorTitulo}>
                <Text style={styles.tituloCard}>{supermercado}</Text>
                <Text style={styles.sumaPrecio}>Total: ${datosSupermercado.sumaPrecio.toFixed(2)}</Text>
              </View>
              <ScrollView>
                {datosSupermercado.productos.map((producto, index) => (
                  <View key={index} style={styles.contenedorProducto}>
                    <Text style={styles.nombreProducto}>{producto.nombreProducto}</Text>
                    <Text style={styles.precioProducto}>${parseFloat(producto.Precio).toFixed(2)}</Text>
                    <TouchableOpacity style={styles.eliminarProductoButton} onPress={() => eliminarProducto(producto)}>
                      <Text style={styles.eliminarProductoText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </Card>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#BC1E32',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  headerButtonText: {
    color: '#BC1E32',
    fontWeight: 'bold',
  },
  listaContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardBack: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 15,
  },
  contenedorTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloCard: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  sumaPrecio: {
    fontSize: 23,
    fontWeight: '500',
  },
  contenedorProducto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: '600',
    flex: 3
  },
  precioProducto: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1
  },
  eliminarProductoText: {
    fontSize: 14,
    flex: 1,
    color: 'red'
  },
  noListaText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#BC1E32',
    marginTop: 30,
  },
});

const mapStateToProps = (state) => ({
  productosSeleccionados: state.productosSeleccionados,
});

export default connect(mapStateToProps)(Lista);
