import React from 'react'
import { View, Text, Modal, SafeAreaView, ScrollView, StyleSheet, TextInput, Pressable } from 'react-native'

const Formulario = ({ formularioVisible, setFormularioVisible }) => {



  return (
    <Modal
        animationType='slide'
        visible={formularioVisible}
    >
        <SafeAreaView style={styles.contenido}>

                <View style={styles.campoTitulo}>
                    <Text style={styles.titulo}>Registro Usuario</Text>
                </View>

                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu nombre'
                    placeholderTextColor={'#666'}
                    ></TextInput>
                </View>
            
                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu correo'
                    placeholderTextColor={'#666'}
                    ></TextInput>
                </View>

                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='confirma tu correo'
                    placeholderTextColor={'#666'}
                    ></TextInput>
                </View>

                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu contraseña'
                    placeholderTextColor={'#666'}
                    ></TextInput>
                </View>

                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='confirma tu contraseña'
                    placeholderTextColor={'#666'}
                    ></TextInput>
                </View>

                <View style={styles.contenedorBotones}>

                    <Pressable 
                    style={[styles.btnCancelar, styles.btn]}
                    onPress={() => setFormularioVisible(!formularioVisible)}
                    >
                        <Text style={styles.btnTexto}>Cancelar</Text>
                    </Pressable>

                    <Pressable style={[styles.btnRegistrar, styles.btn]}>
                        <Text style={[styles.btnTexto, styles.btnRegistrarTexto]}>Registrar</Text>
                    </Pressable>

                </View>



        </SafeAreaView>
    </Modal>
  )
}

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
        justifyContent:'space-between',
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
})

export default Formulario