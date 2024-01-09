import * as React from 'react';
import { View, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-paper';


const Usuario = () => (
    <View style={styles.container}>
    <Text style={styles.Texto}>
        Hola desde la seccion usuario
    </Text>
    </View>
);

const styles = StyleSheet.create({
    Texto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',

    }
  });

export default Usuario;