import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchBar from './src/SearchBar';
import Home from './src/components/Home';
import Lista from './src/components/Lista';
import Usuario from './src/components/Usuario';
import Resultados from './src/components/Resultados';

const Tab = createBottomTabNavigator();

const Inicio = ({ showDifferentView }) => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(false);

  useEffect(() => {
    if (showDifferentView !== undefined) {
      if (showDifferentView) {
        setLoading(true);
        setTimeout(() => {
          setResultado(showDifferentView);
          setLoading(false);
        }, 3000); // Ajusta el valor en milisegundos según tus necesidades
      } else {
        setResultado(false);
        setLoading(false);
      }
    }
  }, [showDifferentView]);

  return (
    <View style={styles.container}>
      <SearchBar onSearchChange={(query) => setResultado(!!query)} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text>Cargando...</Text>
        </View>
      ) : (
        <View>
          {resultado ? (
            <Resultados />
          ) : (
            <Home />
          )}
        </View>
      )}
    </View>
  );
};

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
  const [resultado, setResultado] = useState(false);

  return (
    <NavigationContainer>
      
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#BC1E32',
          },
          headerTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#BC1E32',
            padding: 3
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} style={{ color: '#fff' }} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#fff' : '#000' }}>Inicio</Text>
            ),
            headerShown: false,
          }}
        >
          {() => <Inicio showDifferentView={resultado} />}
        </Tab.Screen>
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
            headerShown: true,
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
            headerShown: true,
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
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#BC1E32',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
