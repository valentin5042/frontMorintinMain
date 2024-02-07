import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import { connect } from 'react-redux';

const Resultados = ({ resultados, dispatch }) => {
  const [showMessage, setShowMessage] = useState(false);

  const agregarALista = (producto) => {
    dispatch({ type: 'AGREGAR_A_LISTA', producto });
    setShowMessage(true);

    // Iniciar temporizador para ocultar el mensaje después de 2 segundos
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        {resultados.map((producto, index) => (
          <Card key={index} style={styles.cardBack}>
            <View>
              <Text style={styles.tituloCard}>{producto.nombreProducto}</Text>
            </View>
            <Card.Cover style={styles.img} source={{ uri: producto.imagen }} />
            <Card.Content>
              <Text style={styles.textCard}>{producto.nombreProducto}</Text>
              <Text style={styles.textoInfo}>{`Precio: $${producto.Precio}`}</Text>
              <Text style={styles.textoInfo}>{`Supermercado: ${producto.Supermercado}`}</Text>
              <Pressable
                style={styles.btnAgregar}
                onPress={() => agregarALista(producto)}
              >
                <Text style={styles.btnAgregarTexto}>Agregar a la lista</Text>
              </Pressable>
            </Card.Content>
          </Card>
        ))}

        {/* Componente de mensaje */}
        {showMessage && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageContent}>
              <Icon name="check" size={30} color="#4CAF50" /> {/* Icono de palomita */}
              <Text style={styles.messageText}>Producto agregado a la lista exitosamente</Text>
            </Text>
          </View>
        )}
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
  messageContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default connect()(Resultados);
