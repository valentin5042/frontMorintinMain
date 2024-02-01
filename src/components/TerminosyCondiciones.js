import React from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, View, ScrollView, Pressable } from 'react-native'

const TerminosyCondiciones = ({ terminos, setTerminos }) => {
  return (
    <Modal
        animationType='slide'
        visible={terminos}
    >
        <SafeAreaView style={styles.contenedor}>
            <ScrollView>
                <Text style={styles.textoPrincipal}>Bienvenido a Morintin. Estos términos y condiciones de uso ("Términos") rigen tu acceso y uso de la aplicación móvil Morintin ("la Aplicación"), así como cualquier contenido, funcionalidad y servicio disponible a través de la misma.</Text>
                    <View style={styles.contenedorText}>
                        <View style={styles.campo}>
                            <Text style={styles.titulo}>1. Aceptación de los Términos</Text>
                            <Text>Al acceder o utilizar la Aplicación, aceptas cumplir y quedar legalmente vinculado por estos Términos. Si no estás de acuerdo con alguno de estos términos, no debes utilizar la Aplicación.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>2. Uso de la Aplicación</Text>
                            <Text>a. La Aplicación es proporcionada únicamente para uso personal y no comercial. No debes utilizar la Aplicación de manera que viole cualquier ley aplicable o los derechos de terceros.</Text>
                            <Text>b. No puedes sublicenciar, transferir, vender o distribuir la Aplicación o cualquier contenido o funcionalidad de la misma sin nuestro consentimiento previo por escrito.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>3. Contenido de Usuario</Text>
                            <Text>a. La Aplicación puede permitirte enviar, publicar o compartir contenido, como comentarios, imágenes o información personal ("Contenido de Usuario"). Al enviar Contenido de Usuario, garantizas que tienes derecho a hacerlo y que el Contenido de Usuario no infringe los derechos de terceros.</Text>
                            <Text>b. Nos reservamos el derecho de eliminar o modificar cualquier Contenido de Usuario que consideremos inapropiado o que viole estos Términos.</Text>
                        </View>

                        
                        <View style={styles.campo}>
                            <Text style={styles.titulo}>4. Propiedad Intelectual</Text>
                            <Text>a. La Aplicación y todo el contenido y la propiedad intelectual relacionada con la misma son propiedad de Morintin o de sus licenciantes y están protegidos por las leyes de derechos de autor y otras leyes aplicables.</Text>
                            <Text>b. No se te otorga ningún derecho de propiedad sobre la Aplicación o su contenido, excepto por el derecho limitado a usar la Aplicación de acuerdo con estos Términos.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>5. Limitación de Responsabilidad</Text>
                            <Text>En la máxima medida permitida por la ley aplicable, no seremos responsables de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso de la Aplicación.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>6. Modificaciones de los Términos</Text>
                            <Text>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier modificación entrará en vigor al ser publicada en la Aplicación. Es tu responsabilidad revisar periódicamente estos Términos para estar al tanto de cualquier cambio.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>7. Ley Aplicable</Text>
                            <Text>Estos Términos se regirán e interpretarán de acuerdo con las leyes del país o jurisdicción en el que operemos.</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.titulo}>8. Contacto</Text>
                            <Text>Si tienes alguna pregunta sobre estos Términos, contáctanos en morintin1789@hotmail.com.</Text>
                        </View>

                        <View>
                            <Text>Fecha de entrada en vigor: 01-01-24</Text>
                        </View>
                    </View>

                    <View style={styles.contenedorBtn}>
                        <Pressable 
                            onPress={() => setTerminos(!terminos)}
                            style={[styles.btn, styles.btnRechazar]}
                        >
                            <Text style={[styles.btnTexto, styles.cancelarTexto]}>Rechazar</Text>
                        </Pressable>

                        <Pressable style={[styles.btn, styles.btnAceptar]}>
                            <Text style={[styles.btnTexto, styles.aceptarTexto]}>Aceptar</Text>
                        </Pressable>
                    </View>

            </ScrollView>
        </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        marginHorizontal: 25
    },
    textoPrincipal: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '800',
        marginBottom: 20

    },
    contenedorText: {
        padding: 10,
    },
    campo: {
        marginVertical: 15
    },
    titulo: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 5
    },
    contenedorBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    btn: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#45BF00'
    },
    btnRechazar: {
        backgroundColor: '#B9ADAD'
    },
    btnTexto: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '400'
    },
    aceptarTexto: {
        color: '#fff',
        fontWeight: '700'
    }
})

export default TerminosyCondiciones