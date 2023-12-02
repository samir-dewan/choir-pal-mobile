import React, {useState} from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export type KeyProps = {
  label: string;
  isWhite: boolean;
};

const Key: React.FC<KeyProps> = ({ label, isWhite }) => {

  const handlePress = () => {
    console.log(label);
  };

  let keyStyle = () => { //E and F are whiteonwhite so have different styling.
    switch (label) {
        case "E":
            return styles.noMarginRight;
        case "F":
            return styles.noMarginLeft;
        default:
            return isWhite ? styles.whiteKeyContainer : styles.blackKeyContainer
    }
  }
  return (
    <View style={keyStyle()}>
      <Pressable style={({pressed}) => [styles.buttonContainer, (pressed && isWhite) && styles.whitePressed, (pressed && !isWhite) && styles.blackPressed]} onPress={handlePress}>
        <Text style={isWhite ? styles.whiteKeyText : styles.blackKeyText}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center"
    },
  whiteKeyContainer: {
    backgroundColor: "#fff",
    width: "14%",
    height: "100%",
    borderColor: "#000000",
    borderWidth: 1,
    zIndex: 1,
    marginLeft: "-4.5%",
    marginRight: "-4.5%",
  },
  noMarginKey: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "14%",
    height: "100%",
    borderColor: "#000000",
    borderWidth: 1,
    zIndex: 1,
  },
  noMarginRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "14%",
    height: "100%",
    borderColor: "#000000",
    borderWidth: 1,
    zIndex: 1,
    marginLeft: "-4.5%"
  },
  noMarginLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "14%",
    height: "100%",
    borderColor: "#000000",
    borderWidth: 1,
    zIndex: 1,
    marginRight: "-4.5%"
  },
  whiteKeyText: {
    color: "#000000",
    zIndex: 1,
    alignSelf: "center",
  },
  blackKeyContainer: {
    backgroundColor: "#000000",
    height: "66%",
    width: "9%",
    zIndex: 2,
  },
  blackKeyText: {
    color: "#fff",
    zIndex: 2,
  },
  whitePressed: {
    backgroundColor: "#b3c0ba",
  },
  blackPressed: {
    backgroundColor: "#434343"
  }
});

export default Key;
