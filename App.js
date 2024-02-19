import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, SafeAreaView, Text, Platform, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/store';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';



import SearchBar from './src/SearchBar';
import BuscandoProducto from './src/components/BuscandoProducto';
import Home from './src/components/Home';
import Camara from './src/components/Camara';
import Lista from './src/components/Lista';
import Usuario from './src/components/Usuario';
import SesionIniciada from './src/components/SesionIniciada';
import Resultados from './src/components/Resultados';
import Login from './src/components/Login';
import FormularioRegistro from './src/components/FormularioRegistro';
import TerminosyCondiciones from './src/components/TerminosyCondiciones';

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


const Perfil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
          console.log('Token encontrado. Usuario está logueado.');
        } else {
          console.log('Token no encontrado. Usuario no está logueado.');
        }
      } catch (error) {
        console.error('Error al obtener el token:', error);
      }
    };

    checkToken();
  }, []); 


  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://192.168.0.3:3000/api/usuarios/login', { email, password });
      if (response.data && response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        
        // Después de guardar el token, realizar una solicitud GET para obtener el nombre de usuario
        const userResponse = await axios.get('http://192.168.0.3:3000/api/usuarios/nombre', {
          headers: {
            Authorization: `Bearer ${response.data.token}` // Agregar el token en el encabezado de autorización
          }
        });
        
        // Guardar el nombre de usuario en AsyncStorage
        await AsyncStorage.setItem('nombreUsuario', userResponse.data.nombreUsuario);
        
        setIsLoggedIn(true);
        setLoginVisible(false);
      } else {
        setErrorMessage('Correo y/o contraseña incorrectos');
        setShowError(true);
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      setErrorMessage('Ocurrió un error al intentar iniciar sesión');
      setShowError(true);
    }
  };
  
  
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
      console.log('Logout exitoso'); // Agregamos este console.log para verificar si se ejecuta el logout correctamente
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
 


  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <SesionIniciada
          terminos={terminos}
          setTerminos={setTerminos}
          onLogout={handleLogout}
        />
      ) : (
        <Usuario
          formularioVisible={formularioVisible}
          setFormularioVisible={setFormularioVisible}
          onLogin={handleLogin}
          terminos={terminos}
          setTerminos={setTerminos}
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
          showError={showError}
          errorMessage={errorMessage}
        />
      )}
        <Login
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
          handleLogin={handleLogin}
        />
        <FormularioRegistro
          formularioVisible={formularioVisible}
          setFormularioVisible={setFormularioVisible}
        />

        <TerminosyCondiciones
            terminos={terminos}
            setTerminos={setTerminos}
        />
    </SafeAreaView>
  );
};


const App = () => {
  const tabBarHeight = Platform.OS === 'android' ? 59 : '10%';
  const headerHeight = Platform.OS === 'android' ? 80 : 90;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión

  // Verificar el estado de inicio de sesión al cargar la aplicación
  useEffect(() => {
    const checkLoginStatus = async () => {
      // Obtener el estado de inicio de sesión almacenado en AsyncStorage
      const sessionToken = await AsyncStorage.getItem('sessionToken');
      setIsLoggedIn(!!sessionToken); // Establecer isLoggedIn a true si hay un token de sesión, de lo contrario, establecerlo a false
    };

    checkLoginStatus();
  }, []);

  const limpiarLista = () => {
    Alert.alert(
      '¿Desea limpiar la lista de productos?',
      'Esto removerá todos los productos agregados a la lista',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => store.dispatch({ type: 'LIMPIAR_LISTA' }),
        },
      ],
      { cancelable: false }
    );
  };


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
              headerRight: () => (
                <TouchableOpacity onPress={limpiarLista} style={{ marginRight: 15 }}>
                  <Text style={{ color: '#fff' }}>Limpiar Lista</Text>
                </TouchableOpacity>
              )
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
