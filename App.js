import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchBar from './src/SearchBar';
import Home from './src/Screens/Home';
import Lista from './src/Screens/Lista';
import Modal from './src/Screens/Modal'





const Tab = createBottomTabNavigator();

const Inicio = () => (
  <View>
    <Home/>
  </View>
);

const ListaProducto = () => (
  <View>
    <Lista/>
  </View>
);

const Camara = () => (
  <View>
    <Text>estas en la camara</Text>
  </View>
);

const Perfil = () => (
  <View>
    <Modal/>
  </View>
);

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
      <SearchBar/>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
                backgroundColor: '#BC1E32'
              },
              headerTintColor: '#fff',
              
          }}
        >

          <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            headerShown: false
            }}
          />

            <Tab.Screen
                name="Camara"
                component={Camara}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="camera-alt" color={color} size={size} />
                ),
                headerShown: false
                }}
            />

          <Tab.Screen
            name="Lista"
            component={ListaProducto}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" color={color} size={size} />
              ),
              headerShown: false
            }}
          />

          <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} />
              ),
              headerShown: false
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};





export default App;
