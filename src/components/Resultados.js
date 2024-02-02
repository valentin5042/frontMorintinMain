import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const diccionarioImg = {
  manzana: require('./Productos/manzana.png'),
  manzanaVerde: require('./Productos/manzanaVerde.jpg'),
  manzanaAmarilla: require('./Productos/manzanaamarilla.jpg')
}

const Resultados = ({ resultados, busqueda }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        {resultados.map((producto, index) => (
          <Card key={index} style={styles.cardBack}>
            <View>
              <Text style={styles.tituloCard}>{producto.nombreProducto}</Text>
            </View> 
            <Card.Cover style={styles.img} source={{uri: producto.imagen}} />
            <Card.Content>
              <Text style={styles.textCard}>{producto.nombreProducto}</Text>
              <Text style={styles.textoInfo}>{`Precio: $${producto.Precio}`}</Text>
              <Text style={styles.textoInfo}>{`Supermercado: ${producto.Supermercado}`}</Text>
              <Pressable style={styles.btnAgregar}>
                <Text style={styles.btnAgregarTexto}>Agregar a la lista</Text>
              </Pressable>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  cardBack: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    height: 480,
    borderRadius: 20
  },
  img: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  tituloCard: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'uppercase',
  },
  textCard: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  textoInfo: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 13
  },
  btnAgregar: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
  },
  btnAgregarTexto: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Resultados;
