import React from 'react'
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper';


const Resultados = () => {
  return (

        <SafeAreaView>

            <ScrollView>
                <Card style={styles.cardBack}>
                    <View><Text style={styles.tituloCard}>Manzana</Text></View>
                    <Card.Cover style={styles.img} source={require('./supermercados/manzana.png')} />
                    <Card.Content>
                    <View>
                    <Text style={styles.textCard}>SAMS: 20</Text>
                    <Text style={styles.textCard}>WALMART: 30</Text>
                    <Text style={styles.textCard}>SORIANA: 25</Text>
                    </View>
                    </Card.Content>
                </Card>

                <Card style={styles.cardBack}>
                    <View><Text style={styles.tituloCard}>Producto</Text></View>
                    <Card.Cover style={styles.img} source={require('./supermercados/manzana.png')} />
                    <Card.Content>
                    <View>
                    <Text style={styles.textCard}>SAMS: 200</Text>
                    <Text style={styles.textCard}>WALMART: 300</Text>
                    <Text style={styles.textCard}>SORIANA: 250</Text>
                    </View>
                    </Card.Content>
                </Card>

                <Card style={[styles.cardBack, styles.cardFin]}>
                    <View><Text style={styles.tituloCard}>Producto</Text></View>
                    <Card.Cover style={styles.img} source={require('./supermercados/manzana.png')} />
                    <Card.Content>
                    <View>
                    <Text style={styles.textCard}>SAMS: 200</Text>
                    <Text style={styles.textCard}>WALMART: 300</Text>
                    <Text style={styles.textCard}>SORIANA: 250</Text>
                    </View>
                    </Card.Content>
                </Card>
            </ScrollView>


        </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    cardBack: {
      backgroundColor: '#fff',
      marginHorizontal: 15,
      marginTop: 20,
      height: 450,
      borderRadius: 20,
  },
    img:{
      marginHorizontal: 30,
      marginVertical: 30
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
    },
    cardFin: {
      marginBottom: 140
    }
  });

export default Resultados