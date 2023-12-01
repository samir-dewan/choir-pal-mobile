import { Linking, Button, Text } from 'react-native';

const Link = ({ label, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <Button title={label} onPress={handlePress}>
      <Text>{label}</Text>
    </Button>
  );
};

export default Link;