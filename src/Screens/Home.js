import * as React from 'react';
import { View, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-paper';


const Home = () => (
  <ScrollView>
    <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/walmart.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/soriana.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/costco.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/sams.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/alsuper.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
    </Card.Content>
  </Card>

  <Card style={styles.cardBack}>
    <Card.Cover style={styles.img} source={require('./supermercados/smart.png')} />
    <Card.Content>
    <Card.Actions>
      <Pressable style={styles.btnPressable}>
        <Text style={styles.btnText}>Ver ofertas</Text>
      </Pressable>
    </Card.Actions>
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
      marginTop: 10,
      height: 330,
      borderRadius: 20,
  },
    img:{
      marginHorizontal: 20,
      marginVertical: 23
  },
    btnText: {
      fontSize: 20,
      fontWeight: '600',
      textTransform: 'none',
      textAlign: 'center',
      textTransform: 'uppercase'
      
    },
    btnPressable: {
      borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: 30,
      height: 60,
      width: 250,
      justifyContent:'center'
    }
  });

export default Home;