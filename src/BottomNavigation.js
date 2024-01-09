import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View>
    {/* Contenido de la pantalla de inicio */}
  </View>
);

const ListScreen = () => (
  <View>
    {/* Contenido de la pantalla de lista */}
  </View>
);

const CameraScreen = () => (
  <View>
    {/* Contenido de la pantalla de cámara */}
  </View>
);

const ProfileScreen = () => (
  <View>
    {/* Contenido de la pantalla de perfil */}
  </View>
);

const BottomNavigation = () => {
  return (

        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#BC1E32'
              },
              headerTintColor: '#fff',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />

            <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="camera-alt" color={color} size={size} />
                ),
                }}
            />

          <Tab.Screen
            name="List"
            component={ListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
 
  );
};



export default BottomNavigation;
