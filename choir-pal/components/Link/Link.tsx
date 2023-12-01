import React from 'react';
import { Linking, Button, Text } from 'react-native';

export type LinkProps = {
  label: string;
  url: string;
};

const Link: React.FC<LinkProps> = ({ label, url }) => {
  const handlePress = () => {
    console.log(url)
  };

  return (
    <Button title={label} onPress={handlePress} />
  );
};

export default Link;