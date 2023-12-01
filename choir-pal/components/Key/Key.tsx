import React from 'react';
import { Linking, Button, Text } from 'react-native';

export type KeyProps = {
  label: string;
  url: string;
};

const Key: React.FC<KeyProps> = ({ label, url }) => {
  const handlePress = () => {
    console.log(url)
  };

  return (
    <Button title={label} onPress={handlePress} />
  );
};

export default Key;