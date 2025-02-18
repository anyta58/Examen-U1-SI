import { View, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '@/components/ThemeText';
import TemperaturaButton from '@/components/TemperaturaButton';
import { Colors } from '@/constants/Colors';
import  { useTemperatura } from'@/hooks/useTemperatura'; // ERROR EN ESTA LINEA: El módulo ""@/hooks/useTemperatura"" no tiene ningún miembro "useTemperatura" exportado. ¿Pretendía usar "import useTemperatura from "@/hooks/useTemperatura"" en su lugar?ts(2614)

const ControlTemperaturaApp = () => {
    const { temperatura, aumentarTemperatura, disminuirTemperatura, resetTemperatura } = useTemperatura();

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

            {/* Botón para resetear la temperatura */}
            <View style={globalStyles.row}>
                <TemperaturaButton 
                    label='Reset' 
                    color={Colors.lightGray} 
                    backgroundColor={Colors.orange}
                    onPress={resetTemperatura} 
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



