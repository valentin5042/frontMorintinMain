import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchBar from './src/SearchBar';
import Home from './src/components/Home';
import Lista from './src/components/Lista';
import Usuario from './src/components/Usuario';

const Tab = createBottomTabNavigator();



const Inicio = () => (
  <SafeAreaView style={styles.container}>
    <Home />
  </SafeAreaView>
);

const ListaProducto = () => (
  <SafeAreaView style={styles.container}>
    <Lista />
  </SafeAreaView>
);

const Camara = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.texto}>ESTAMOS EN LAS PRUEBAS AUN, ESTA VISTA NO FUNCIONA XD</Text>
  </SafeAreaView>
);

const Perfil = () => (
  <SafeAreaView style={styles.container}>
    <Usuario />
  </SafeAreaView>
);

const App = () => {

  const [ inicio, setInicio ] = useState();

  return (

      <NavigationContainer>
        <SearchBar />
        <Tab.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#BC1E32',
            },
            headerTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#BC1E32', // Cambiar a tu color deseado
              height: 85
            },
          }}
        >
          <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>Inicio</Text>
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Camara"
            component={Camara}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="camera-alt" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>Camara</Text>
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Lista"
            component={ListaProducto}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>Lista</Text>
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>Perfil</Text>
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#BC1E32'
  }

});

export default App;
