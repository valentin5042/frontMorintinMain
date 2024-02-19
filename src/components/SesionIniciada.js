import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

import TerminosyCondiciones from './TerminosyCondiciones';

const SesionIniciada = ({ terminos, setTerminos, onLogout }) => {
  const handleLogout = async () => {
    // Elimina el token de sesión al cerrar sesión
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Error al eliminar el token de sesión:', error);
    }

    // Llama a la función onLogout para actualizar el estado de isLoggedIn
    onLogout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.perfil}>
        <Text style={styles.usuarioNombre}>NombreUsuario</Text>
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

          <TerminosyCondiciones 
           terminos={terminos}
           setTerminos={setTerminos}
          />
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
