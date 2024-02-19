import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';



const Usuario = ({ formularioVisible, setFormularioVisible, loginVisible, setLoginVisible, terminos, setTerminos }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.perfil}>
                <Image
                    style={styles.imagen}
                    source={require('../../assets/morintin.png')}
                />
            </View>
            <View style={styles.btncontenedor}>
                <Pressable
                    style={[styles.btn, styles.btnborde]}
                    onPress={() => {
                        setLoginVisible(!loginVisible)
                    }}
                >
                    <Text style={styles.btnTexto}>Iniciar Sesión</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        setFormularioVisible(!formularioVisible)
                    }}
                    style={[styles.btn, styles.btnborde]}
                >
                    <Text style={styles.btnTexto}>Registrar usuario nuevo</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        setTerminos(!terminos)
                    }}
                >
                    <Text style={styles.btnTexto}>Términos y condiciones</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    perfil: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 30
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    usuarioTexto: {
        fontSize: 20,
        fontWeight: '600',
    },
    btncontenedor: {
        marginHorizontal: 40,
        marginTop: 70
    },
    btnborde: {
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
        padding: 10
    },
    btn: {
        marginVertical: 15,
        padding: 5,
    },
    btnTexto: {
        fontSize: 25,
        fontWeight: '600',
    }
})

export default Usuario;
