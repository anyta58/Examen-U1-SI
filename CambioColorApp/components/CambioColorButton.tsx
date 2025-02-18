import { View, Text, Pressable } from "react-native";
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

const CambioColorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  backgroundColor = Colors.darkGray,
  duobleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable 
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: duobleSize ? 180 : 80,
      })} 
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CambioColorButton;
