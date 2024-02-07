import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';

const Camara = () => {
  const [permisoCamara, setPermisoCamara] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camara, setCamara] = useState(false);
  const [tomarFoto, setTomarFoto] = useState(false);
  const camaraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermisoCamara(status === 'granted');
    })();
  }, []);

  const abrirCamara = () => {
    setCamara(!camara);
  };

  const tomarCaptura = async () => {
    if (camaraRef.current) {
      setTomarFoto(true);
      const photo = await camaraRef.current.takePictureAsync();
      setTomarFoto(false);
      console.log('Foto tomada:', photo);


      // Cierra automáticamente la cámara después de tomar la foto
      setCamara(false);
    }
  };

  //validacion para los permisos de la cámara
  if (permisoCamara === null) {
    return <View />;
  }
  if (permisoCamara === false) {
    return <Text>No se permitio el acceso a tu cámara</Text>;
  }

  return (
    <View style={styles.contenedor}>
      {!camara ? (
        <Pressable style={styles.btnTomarFoto} onPress={abrirCamara}>
          <Text style={styles.btnTomarFotoTexto}>Abrir Cámara</Text>
        </Pressable>
      ) : (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={camaraRef}>
            <View
              style={styles.camaraView}
            >
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={abrirCamara}
              >
                <Text style={styles.btncancelarTexto}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  
                }}
                onPress={tomarCaptura}
                disabled={tomarFoto}
              >
                <Entypo name="camera" size={40} color="#fff" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
  },
  btnTomarFoto: {
    backgroundColor: '#BC1E32',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 50,
  },
  camaraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  btnTomarFotoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btncancelarTexto: {
    fontSize: 25,
    color: '#fff'
  }
});

export default Camara;
