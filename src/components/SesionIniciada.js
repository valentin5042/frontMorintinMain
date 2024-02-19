import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TerminosyCondiciones from './TerminosyCondiciones';

const SesionIniciada = ({ terminos, setTerminos, onLogout }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');

  useEffect(() => {
    const obtenerNombreUsuario = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Hacer una solicitud al backend para obtener el nombre de usuario usando el token
          const response = await axios.get('http://192.168.0.3:3000/api/usuarios/nombre', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Si la solicitud es exitosa, establece el nombre de usuario en el estado
          if (response.data && response.data.nombreUsuario) {
            setNombreUsuario(response.data.nombreUsuario);
          }
        }
      } catch (error) {
        console.error('Error al obtener el nombre de usuario:', error);
      }
    };

    obtenerNombreUsuario();
  }, []);

  const handleLogout = async () => {
    try {
      // Elimina tanto el token como el nombre de usuario de AsyncStorage al cerrar sesión
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('username'); // Cambiar 'nombreUsuario' a 'username'
    } catch (error) {
      console.error('Error al eliminar datos de sesión:', error);
    }

    // Llama a la función onLogout para actualizar el estado de la aplicación
    onLogout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.perfil}>
        <Text style={styles.usuarioNombre}>{nombreUsuario}</Text>
      </View>
      <View style={styles.btnContenedor}>
        <Pressable style={[styles.btn, styles.btnBorde]}>
          <Text style={styles.btnTexto}>Configuración</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, styles.btnBorde]}
          onPress={() => {
            setTerminos(!terminos);
          }}
        >
          <Text style={styles.btnTexto}>Términos y condiciones</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={handleLogout}>
          <Text style={styles.btnTexto}>Cerrar Sesión</Text>
        </Pressable>

        <TerminosyCondiciones terminos={terminos} setTerminos={setTerminos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  perfil: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 30,
  },
  usuarioNombre: {
    fontSize: 25,
    fontWeight: '700',
  },
  btnContenedor: {
    marginHorizontal: 40,
    marginTop: 70,
  },
  btnBorde: {
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    padding: 10,
  },
  btn: {
    marginVertical: 15,
    padding: 5,
  },
  btnTexto: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default SesionIniciada;
