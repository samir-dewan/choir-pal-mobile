import React from 'react';
import { Linking, Button, Text } from 'react-native';
import Key from '../Key/Key';
import noteFreq from '../../data/noteFreq.json';

//upon being given an octave
//will return a series of keys, from C to B, in that octave

//for key in noteFreq:
// return (
//<Key name={key.name} frequency={key.frequency} 

export type OctaveProps = {
    octave: string;
}

const Octave: React.FC<OctaveProps> = ({octave}) => {
  const handlePress = () => {
    console.log(octave);
  };

  return (
    <Button title={octave} onPress={handlePress} />
  );
};

export default Octave;