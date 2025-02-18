import { View, Text, TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant = "h2", ...rest }: Props) => {
  return (
    <View>
      <Text
        style={[
          { color: "white", fontFamily: "NunitoSans" },
          variant === "h1" && globalStyles.mainResult,
          variant === "h2" && globalStyles.subResult,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
        >{children}
      </Text>
    </View>
  );
};

export default ThemeText;
