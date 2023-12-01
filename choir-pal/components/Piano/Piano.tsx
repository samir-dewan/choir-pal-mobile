import React from "react";
import { View, Text, StyleSheet } from "react-native";
import noteFreq from "../../data/noteFreq.json";
import Key from "../Key/Key";

const Piano: React.FC = () => {
  return (
    <View style={styles.container}>
      {noteFreq.map((oct) => (
        <View key={oct.octave} style={styles.octaveContainer}>
          {oct.notes.map((note) => (
            <Key key={note.frequency} label={note.label} isWhite={note.isWhite}/>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000000"
  },
  octaveContainer: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 200
  }
})
export default Piano;
