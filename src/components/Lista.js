import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Lista = ({ productosSeleccionados }) => {
  // Organiza los productos por supermercado y calcula la suma del precio
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

  return (
    <ScrollView style={styles.listaContainer}>
      {Object.entries(productosPorSupermercado).map(([supermercado, datosSupermercado]) => (
        <Card key={supermercado} style={styles.cardBack}>
          <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloCard}>{supermercado}</Text>
            <Text style={styles.sumaPrecio}>Total: ${datosSupermercado.sumaPrecio.toFixed(2)}</Text>
          </View>
          <ScrollView>
            {datosSupermercado.productos.map((producto, index) => (
              <View key={index} style={styles.contenedorTexto}>
                <Text style={styles.nombreProducto}>{producto.nombreProducto}</Text>
                <Text style={styles.precioProducto}>${parseFloat(producto.Precio).toFixed(2)}</Text>
              </View>
            ))}
          </ScrollView>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardBack: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 15
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
  contenedorTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: '500',
  },
  precioProducto: {
    fontSize: 16,
    fontWeight: '400',
  },
});

const mapStateToProps = (state) => ({
  productosSeleccionados: state.productosSeleccionados,
});

export default connect(mapStateToProps)(Lista);
