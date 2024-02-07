import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, SafeAreaView, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import Icon from 'react-native-vector-icons/MaterialIcons';


import SearchBar from './src/SearchBar';
import BuscandoProducto from './src/components/BuscandoProducto';
import Home from './src/components/Home';
import Camara from './src/components/Camara';
import Lista from './src/components/Lista';
import Usuario from './src/components/Usuario';
import Resultados from './src/components/Resultados';

const Tab = createBottomTabNavigator();

const Inicio = () => {
  const [ resultado, setResultado ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ searching, setSearching ] = useState(false);
  const [ busqueda, setBusqueda ] = useState('');
  const [ productos, setProductos ] = useState([]);
  const [ resultados, setResultados ] = useState([]);

  useEffect(() => {
    let borrarBusqueda;

    if (searchQuery) {
      setSearching(true);

      borrarBusqueda = setTimeout(() => {
        setResultado(true);
        setSearching(false);
      }, 2000);
    } else {
      setResultado(false);
      setSearching(false);
    }

    return () => clearTimeout(borrarBusqueda);
  }, [searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <View
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <SearchBar 
        onSearchChange={handleSearchChange} 
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        productos={productos}
        setProductos={setProductos}
        setResultados={setResultados}
      />
      {searching ? (
        <BuscandoProducto />
      ) : resultado ? (
        <View style={styles.container}>
          <Resultados 
            resultados={resultados}
            busqueda={busqueda}
          />
        </View>
      ) : (
        <Home />
      )}
    </View>
  );
};

const ListaProducto = () => {
  return(
    <SafeAreaView style={styles.container}>
    <Lista 
      
    />
  </SafeAreaView>
  )
};

const Escaner = () => (
  <SafeAreaView style={styles.container}>
    <Camara />
  </SafeAreaView>
);

const Perfil = () => (
  <SafeAreaView style={styles.container}>
    <Usuario />
  </SafeAreaView>
);

const App = () => {
  const tabBarHeight = Platform.OS === 'android' ? 59 : '10%';
  const headerHeight = Platform.OS === 'android' ? 80 : 90;

  return (

     <Provider store={store}>
       <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Inicio"
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: '#BC1E32',
              height: headerHeight,
            },
            headerTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#BC1E32',
              height: tabBarHeight,
              padding: 10,
            },
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: '500',
            },
            headerTitleAlign: 'right',
          })}
        >
          <Tab.Screen
            name="Inicio"
            component={Inicio}
            initialParams={{ showDifferentView: false }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>{focused ? 'Inicio' : 'Inicio'}</Text>
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Escaner"
            component={Escaner}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="camera-alt" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>{focused ? 'Camara' : 'Camara'}</Text>
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
                <Text style={{ color: focused ? '#fff' : '#000' }}>{focused ? 'Lista' : 'Lista'}</Text>
              ),
              headerShown: true,
            }}
          />
          <Tab.Screen
            name="Usuario"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} style={{ color: '#fff' }} />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#fff' : '#000' }}>{focused ? 'Perfil' : 'Perfil'}</Text>
              ),
              headerShown: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
     </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});


export default App;
