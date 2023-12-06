import React, { useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Sound from "react-native-sound";

export type KeyProps = {
  label: string;
  isWhite: boolean;
  frequency: number;
};

const tone = require("tonegenerator");
const waveheader = require("waveheader");

const generateNote = (frequency) => {
  const pcmData = tone({
    freq: frequency,
    lengthInSecs: length,
    volume: tone.MAX_16,
    rate: 44100,
    shape: "sine",
    Int16Array: true,
  });

  return pcmData;
};

const playNote = (frequency) => {
  const pcmData = generateNote(frequency);
  const buffer = Buffer.from(pcmData);

  const sound = new Sound(buffer, null, (error) => {
    if (error) {
      console.error("Failed to load sound: ", error);
      return;
    }

    sound.play(() => {
      sound.release();
    });
  });
};

useEffect(() => {
  return () => Sound.setCategory("Ambient");
}, []);

const Key: React.FC<KeyProps> = ({ label, isWhite, frequency }) => {
  const handlePress = () => {
    console.log(label);
    playNote(frequency)
  };

  let keyStyle = () => {
    //E and F are whiteonwhite so have different styling.
    switch (label) {
      case "E":
        return styles.noMarginRight;
      case "F":
        return styles.noMarginLeft;
      default:
        return isWhite ? styles.whiteKeyContainer : styles.blackKeyContainer;
    }
  };

  return (
    <View style={keyStyle()}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && isWhite && styles.whitePressed,
          pressed && !isWhite && styles.blackPressed,
        ]}
        onPress={handlePress}
      >
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
    alignItems: "center",
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
    marginLeft: "-4.5%",
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
    marginRight: "-4.5%",
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
    backgroundColor: "#434343",
  },
});

export default Key;
