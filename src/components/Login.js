import React, { useState } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ loginVisible, setLoginVisible, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  // Función para manejar el inicio de sesión
const iniciarSesion = async () => {
  // Validación de campos
  if (!email.trim() || !password.trim()) {
    setErrorMessage('Todos los campos son obligatorios');
    setShowError(true);
    return;
  }

  // Validación del formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setErrorMessage('Correo electrónico no válido');
    setShowError(true);
    return;
  }

  // Validación de la longitud de la contraseña
  if (password.length < 6) {
    setErrorMessage('La contraseña debe tener al menos 6 caracteres');
    setShowError(true);
    return;
  }

  try {
    // Realizar la solicitud de inicio de sesión al servidor
    console.log('Intentando iniciar sesión con:', { email, password }); // Nuevo registro de consola
    const response = await axios.post('http://192.168.0.3:3000/api/usuarios/login', { email, password });
    console.log('Respuesta del servidor:', response.data); // Nuevo registro de consola
    
    // Manejar la respuesta del servidor
    if (response.data && response.data.token) {
      // Almacenar el token en AsyncStorage
      await AsyncStorage.setItem('token', response.data.token);
      // Cerrar el modal de inicio de sesión
      setLoginVisible(false);
      handleLogin(email, password); // Pasar email y password a handleLogin
    } else {
      // Mostrar mensaje de credenciales incorrectas si no se recibe el token
      setErrorMessage('Correo y/o contraseña incorrectos');
      setShowError(true);
    }
  } catch (error) {
    // Manejar errores de conexión o del servidor
    console.error('Error al intentar iniciar sesión:', error); // Nuevo registro de consola
    setErrorMessage('Ocurrió un error al intentar iniciar sesión');
    setShowError(true);
  }
};

  // Función para ocultar el teclado al tocar fuera del campo de entrada
  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  return (
    <Modal
      animationType='slide'
      visible={loginVisible}
    >
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <SafeAreaView style={styles.contenedor}>
          <View style={styles.campoTitulo}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
          </View>


          {showError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
          )}


          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu correo electrónico'
              placeholderTextColor={'#666'}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu contraseña'
              placeholderTextColor={'#666'}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize='none'
              secureTextEntry={true}
            />
          </View>

          {/* Botón para iniciar sesión */}
          <Pressable style={styles.btnIniciar} onPress={iniciarSesion}>
            <Text style={styles.btnIniciarTexto}>Iniciar Sesión</Text>
          </Pressable>

          {/* Enlaces para recuperar contraseña y cancelar inicio de sesión */}
          <View style={styles.btnContenedor}>
            <Pressable>
              <Text style={[styles.btnrecuperar, styles.btnLink]}>¿Olvidaste tu contraseña?</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.btnNuevoU}
            onPress={() => {
              setLoginVisible(!loginVisible);
            }}
          >
            <Text style={styles.cerrarTexto}>Cancelar</Text>
          </Pressable>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
  },
  cerrarTexto: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500'
  },
  titulo: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  campoTitulo: {
    marginBottom: 70
  },
  campo: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 10,
  },
  btnIniciar: {
    backgroundColor: '#45BF00',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 15
  },
  btnContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnIniciarTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 22
  },
  btnLink: {
    fontSize: 15,
    fontWeight: '600',
    color: '#B9ADAD'
  },
  btnNuevoU: {
    backgroundColor: '#F1F1F1',
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 10,
    marginTop: 90
  },
  errorContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
  },
});

export default Login;
