import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-paper';


const Lista = () => (

  <View>
    <ScrollView>
    <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>WALMART  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
      <Text style={styles.textCard}>Agua: <Text>200</Text></Text>
      <Text style={styles.textCard}>Papel: <Text>300</Text></Text>
      <Text style={styles.textCard}>Leche: <Text>250</Text></Text>
      <Text style={styles.textCard}>Tocino: <Text>200</Text></Text>
      <Text style={styles.textCard}>Croquetas: <Text>300</Text></Text>
      <Text style={styles.textCard}>Jamon: <Text>250</Text></Text>
      <Text style={styles.textCard}>Pavo: <Text>200</Text></Text>
      <Text style={styles.textCard}>Detergente: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cobija: <Text>250</Text></Text>
      <Text style={styles.textCard}>Jabon: <Text>200</Text></Text>
      <Text style={styles.textCard}>Asador: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cubiertos: <Text>250</Text></Text>

    </ScrollView>

  </Card>

  <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>SORIANA  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
    <Text style={styles.textCard}>Croquetas: <Text>300</Text></Text>
      <Text style={styles.textCard}>Jamon: <Text>250</Text></Text>
      <Text style={styles.textCard}>Pavo: <Text>200</Text></Text>
      <Text style={styles.textCard}>Detergente: <Text>300</Text></Text>
    </ScrollView>

  </Card>

  <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>SAMS  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
    <Text style={styles.textCard}>Croquetas: <Text>300</Text></Text>
      <Text style={styles.textCard}>Jamon: <Text>250</Text></Text>
      <Text style={styles.textCard}>Pavo: <Text>200</Text></Text>
      <Text style={styles.textCard}>Detergente: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cobija: <Text>250</Text></Text>
      <Text style={styles.textCard}>Jabon: <Text>200</Text></Text>
      <Text style={styles.textCard}>Asador: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cubiertos: <Text>250</Text></Text>

    </ScrollView>
  </Card>

  <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>Alsuper  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
      <Text style={styles.textCard}>Agua: <Text>200</Text></Text>
      <Text style={styles.textCard}>Cubiertos: <Text>250</Text></Text>

    </ScrollView>
  </Card>

  <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>s-mart  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
      <Text style={styles.textCard}>Jamon: <Text>250</Text></Text>
      <Text style={styles.textCard}>Pavo: <Text>200</Text></Text>
      <Text style={styles.textCard}>Detergente: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cobija: <Text>250</Text></Text>
      <Text style={styles.textCard}>Jabon: <Text>200</Text></Text>
      <Text style={styles.textCard}>Asador: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cubiertos: <Text>250</Text></Text>

    </ScrollView>
  </Card>

  <Card style={styles.cardBack}>
      <View style={styles.divTitulo}>
        <Text style={styles.tituloCard}>costco  <Text style={styles.suma}>$$$</Text>
      </Text>
        
        </View>

    <ScrollView style={styles.producto}>
      <Text style={styles.textCard}>Agua: <Text>200</Text></Text>
      <Text style={styles.textCard}>Papel: <Text>300</Text></Text>
      <Text style={styles.textCard}>Leche: <Text>250</Text></Text>
      <Text style={styles.textCard}>Asador: <Text>300</Text></Text>
      <Text style={styles.textCard}>Cubiertos: <Text>250</Text></Text>

    </ScrollView>

  </Card>

  </ScrollView>
 </View> 

);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    divTitulo: {
      marginVertical: 20,
    },
    cardBack: {
      backgroundColor: '#fff',
      marginHorizontal: 15,
      marginTop: 10,
      height: 385,
      borderRadius: 20,
  },
    textCard: {
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    tituloCard: {
      fontSize: 35,
      fontWeight: '700',
      textTransform: 'uppercase',
      marginHorizontal: 15,
      
    },
    suma: {
      fontWeight: '400',
      
    },
    producto: {
      marginLeft: 15,
      marginTop: 10
    }
  });

export default Lista;