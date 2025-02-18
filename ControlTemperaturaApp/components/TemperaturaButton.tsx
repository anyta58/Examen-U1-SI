import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  backgroundColor?: string;
  duobleSize?: boolean;
  onPress: () => void;
}

const TemperaturaButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  backgroundColor = Colors.darkGray,
  duobleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: backgroundColor,
          opacity: pressed ? 0.8 : 1,
          width: duobleSize ? 180 : 80,
        },
      ]} 
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: blackText ? 'black' : 'white',
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...globalStyles.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40, 
    margin: 5, 
  },
  buttonText: {
    ...globalStyles.buttonText,
    fontSize: 24, 
    fontWeight: 'bold', 
  },
});

export default TemperaturaButton;