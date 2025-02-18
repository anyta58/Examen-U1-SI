import { View, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import CambioColorButton from '@/components/CambioColorButton';
import { Colors } from '@/constants/Colors';

const CambioColorApp = () => {
  const cambiarColor = () => {
    console.log('Color cambiado');
  };

  return (
    <View style={styles.container}>
      <CambioColorButton 
        label='Cambiar Color' 
        color={Colors.lightGray} 
        backgroundColor={Colors.orange}
        onPress={cambiarColor} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CambioColorApp;
