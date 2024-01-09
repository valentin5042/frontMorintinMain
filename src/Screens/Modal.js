import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';


const Modal = () => (
  <ScrollView>
    <Card style={styles.cardBack}>
      <View><Text style={styles.tituloCard}>Producto</Text></View>
    <Card.Cover style={styles.img} source={require('./supermercados/walmart.png')} />
    <Card.Content>
    <View>
      <Text style={styles.textCard}>SAMS: 200</Text>
      <Text style={styles.textCard}>WALMART: 300</Text>
      <Text style={styles.textCard}>SORIANA: 250</Text>
    </View>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
      <View><Text style={styles.tituloCard}>Producto</Text></View>
    <Card.Cover style={styles.img} source={require('./supermercados/soriana.png')} />
    <Card.Content>
    <View>
      <Text style={styles.textCard}>SAMS: 200</Text>
      <Text style={styles.textCard}>WALMART: 300</Text>
      <Text style={styles.textCard}>SORIANA: 250</Text>
    </View>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
      <View><Text style={styles.tituloCard}>Producto</Text></View>
    <Card.Cover style={styles.img} source={require('./supermercados/costco.png')} />
    <Card.Content>
    <View>
      <Text style={styles.textCard}>SAMS: 200</Text>
      <Text style={styles.textCard}>WALMART: 300</Text>
      <Text style={styles.textCard}>SORIANA: 250</Text>
    </View>
    </Card.Content>
  </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    cardBack: {
      backgroundColor: '#fff',
      marginHorizontal: 15,
      marginTop: 20,
      height: 400,
      borderRadius: 20,
  },
    img:{
      marginHorizontal: 20,
      marginVertical: 20
  },
    textCard: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 10
    },
    tituloCard: {
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 20,
      textTransform: 'uppercase'
    }
  });

export default Modal;