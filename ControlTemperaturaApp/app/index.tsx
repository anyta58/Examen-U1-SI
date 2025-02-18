import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '@/components/ThemeText';
import TemperaturaButton from '@/components/TemperaturaButton';
import { Colors } from '@/constants/Colors';

const ControlTemperaturaApp = () => {
  const [temperatura, setTemperatura] = useState(20); 

  const aumentarTemperatura = () => {
    setTemperatura(prevTemp => prevTemp + 1);
  };

  const disminuirTemperatura = () => {
    setTemperatura(prevTemp => prevTemp - 1);
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Display de Temperatura */}
      <View style={styles.temperatureDisplay}>
        <ThemeText variant='h1'>{temperatura}°C</ThemeText>
      </View>

      {/* Botones para controlar la temperatura */}
      <View style={globalStyles.row}>
        <TemperaturaButton 
          label='-' 
          color={Colors.lightGray} 
          backgroundColor={Colors.orange}
          onPress={disminuirTemperatura} 
        />
        <TemperaturaButton 
          label='+' 
          color={Colors.lightGray} 
          backgroundColor={Colors.orange}
          onPress={aumentarTemperatura} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperatureDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default ControlTemperaturaApp;