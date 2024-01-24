import React from 'react'
import { View, Text, Modal, SafeAreaView, StyleSheet, TextInput, Pressable  } from 'react-native'



const Login = ({ loginVisible, setLoginVisible }) => {

  return (
    <Modal
    animationType='slide'
    visible={loginVisible}
    
    >
        <SafeAreaView style={styles.contenedor}>

                <View style={styles.campoTitulo}>
                    <Text style={styles.titulo}>Iniciar Sesión</Text>
                </View>

                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu nombre'
                    placeholderTextColor={'#666'}
                    >Ingresa tu Correo</TextInput>
                </View>
            
                <View style={styles.campo}>
                    <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu nombre'
                    placeholderTextColor={'#666'}
                    >Ingresa tu Contraseña</TextInput>
                </View>

                <Pressable style={styles.btnIniciar}>
                        <Text style={styles.btnIniciarTexto}>Iniciar Sesión</Text>
                </Pressable>
            
            <View style={styles.btnContenedor}>
                    <Pressable >
                        <Text style={[styles.btnrecuperar, styles.btnLink]}>¿Olvidaste tu contraseña?</Text>
                    </Pressable>
            </View>

            <Pressable 
                style={styles.btnNuevoU}
                onPress={() => {
                    setLoginVisible(!loginVisible)
                }}
                >
                    <Text style={styles.cerrarTexto}>Cancelar</Text>
            </Pressable>
            
            

        </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center'
    },
    cerrar: {
        
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
    btnRegistro: {
        textAlign: 'center',
        marginTop: 30
    },
    btnRegistrarTexto: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        
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
    }
})

export default Login