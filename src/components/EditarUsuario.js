import React from 'react'
import { View, SafeAreaView, StyleSheet, Modal, TouchableWithoutFeedback, TextInput, Text, Pressable, Keyboard } from 'react-native'

const EditarUsuario = ({ editar, setEditar }) => {

    const ocultarTeclado = () => {
        Keyboard.dismiss();
      };
  return (
    <Modal
        animationType='slide'
        visible={editar}
    >
        <TouchableWithoutFeedback onPress={ocultarTeclado}>
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.campoTitulo}>
            <Text style={styles.titulo}>Editar Usuario</Text>
            </View>

            <View style={styles.campo}>
            <TextInput
               style={styles.input}
            />
            </View>
            <View style={styles.campo}>
            <TextInput
              style={styles.input}
            />
            </View>
            <View style={styles.campo}>
            <TextInput
              style={styles.input}
            />
            </View>

            <View style={styles.campo}>
            <TextInput
              style={styles.input}
            />
            </View>
            
            <View style={styles.btnContenedor}>
                <Pressable 
                    style={[styles.btn, styles.btnCancelar]}
                    onPress={() => {
                        setEditar(!editar)
                    }}
                >
                <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable>

                <Pressable style={styles.btn}>
                <Text style={[styles.btnTexto, styles.guardarTexto]}>Guardar</Text>
                </Pressable>
            </View>

        </SafeAreaView>
        </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '700',
        color: '#BC1E32',
        marginBottom: 30
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
      btnContenedor: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 30,
        marginTop: 40
      },
      btn: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#45BF00',
        flex: 1
    },
    btnCancelar: {
        backgroundColor: '#E6E3E3',
        borderRadius: 10,
        marginRight: 20
    },
    btnTexto: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '400'
    },
    guardarTexto: {
        color: '#fff',
        fontWeight: '700'
    }
})

export default EditarUsuario