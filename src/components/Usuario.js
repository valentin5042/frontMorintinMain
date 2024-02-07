import * as React from 'react';
import { useState } from 'react'
import { View,Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';

import FormularioRegistro from './FormularioRegistro.js'
import Login from './Login.js'
import TerminosyCondiciones from './TerminosyCondiciones.js';


const Usuario = () => {

    const [ formularioVisible, setFormularioVisible ] = useState(false)
    const [ loginVisible, setLoginVisible ] = useState(false)
    const [ terminos, setTerminos ] = useState(false)


    return(
        <SafeAreaView style={styles.contenedor}>

            <View style={styles.perfil}>

           
                    <Image 
                    style={styles.imagen}
                    source={require('../../assets/morintin.png')}
                    /> 
             

               
            </View>
           
            
            <View style={styles.btncontenedor}>
                <View>
                    <Pressable 
                    style={[styles.btn, styles.btnborde]}
                    onPress={() => {
                        setLoginVisible(!loginVisible)
                    }}
                    >
                        <Text style={styles.btnTexto}>Iniciar Sesión</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable 
                    onPress={() => {
                        setFormularioVisible(!formularioVisible)
                    }}
                    style={[styles.btn, styles.btnborde]}
                    
                    >
                        <Text style={styles.btnTexto}>Registrar usuario nuevo</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable 
                        style={styles.btn}
                        onPress={() => {
                            setTerminos(!terminos)
                        }}
                        
                    >
                        <Text style={styles.btnTexto}>Términos y condiciones</Text>
                    </Pressable>
                </View>

            
                <FormularioRegistro 
                    formularioVisible={formularioVisible}
                    setFormularioVisible={setFormularioVisible}
                />
    
                <Login 
                    loginVisible={loginVisible}
                    setLoginVisible={setLoginVisible}
                />
                
                <TerminosyCondiciones 
                    terminos={terminos}
                    setTerminos={setTerminos}
                />

            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center'
    },
    perfil: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 30
    },
    imagen:{
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