import React, {useState} from 'react'
import { View, Text, Modal, SafeAreaView, StyleSheet, TextInput, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import axios from 'axios'

const Formulario = ({ formularioVisible, setFormularioVisible }) => {
  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ confirmarEmail, setConfirmarEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmarPassword, setConfirmarPassword ] = useState('');

  const forRegistro = () => {
    // Validación de campos
    if (!nombre || !email || !confirmarEmail || !password || !confirmarPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Validación de correo electrónico
    if (email !== confirmarEmail) {
      Alert.alert('Error', 'Los correos electrónicos no coinciden.');
      return;
    }

    // Validación de contraseña
    if (password !== confirmarPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Realizar la solicitud HTTP al servidor
    axios.post('http://192.168.0.3:3000/api/usuarios', 
    { nombre: nombre, 
      email: email, 
      password: password 
    })
      .then(response => {
        setFormularioVisible(!formularioVisible);
      })
      .catch(error => {
      });
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }


  return (
    <Modal
      animationType='slide'
      visible={formularioVisible}
    >
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <SafeAreaView style={styles.contenido}>
          <View style={styles.campoTitulo}>
            <Text style={styles.titulo}>Registro Usuario</Text>
          </View>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu nombre'
              placeholderTextColor={'#666'}
              onChangeText={setNombre}
            />
          </View>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu correo'
              autoCapitalize='none'
              placeholderTextColor={'#666'}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Confirma tu correo'
              autoCapitalize='none'
              placeholderTextColor={'#666'}
              onChangeText={setConfirmarEmail}
            />
          </View>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu contraseña'
              autoCapitalize='none'
              placeholderTextColor={'#666'}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.campo}>
            <TextInput
              style={styles.input}
              placeholder='Confirma tu contraseña'
              autoCapitalize='none'
              placeholderTextColor={'#666'}
              onChangeText={setConfirmarPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.contenedorBotones}>
            <Pressable
              style={[styles.btnCancelar, styles.btn]}
              onPress={() => setFormularioVisible(!formularioVisible)}
            >
              <Text style={styles.btnTexto}>Cancelar</Text>
            </Pressable>

            <Pressable style={[styles.btnRegistrar, styles.btn]} onPress={forRegistro}>
              <Text style={[styles.btnTexto, styles.btnRegistrarTexto]}>Registrar</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  campoTitulo: {
    marginBottom: 50
  },
  campo: {
    marginVertical: 15,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  btnCancelar: {
    backgroundColor: '#B9ADAD'
  },
  btnRegistrar: {
    backgroundColor: '#45BF00'
  },
  btnTexto: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '400'
  },
  btnRegistrarTexto: {
    color: '#fff',
    fontWeight: '700'
  }
});

export default Formulario;
