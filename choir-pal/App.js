import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Linking, StyleSheet } from 'react-native';
import Link from './components/Link/Link';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hey babe I love you</Text>
      <Text>places to try for a sequinny dress to show that:</Text>
      <Text>you're better than them at their job AND</Text>
      <Text>you're hotter than them</Text>
      <View style={styles.container}>
      <Link label="New Look - cheap and seems to get the job done" url="https://www.newlook.com/uk/womens/sequins/c/uk-collections-womens-sequins?extcam=UK_PPC_DSA_WW0622_Google_DV_c&gad_source=1&_cclid=Google_Cj0KCQiAgqGrBhDtARIsAM5s0_k4kDxVcjPFWi-viO_0-KOuRb1y7StRbC6k94rN1lemBcXn6HgJTN0aAnx-EALw_wcB&gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_k4kDxVcjPFWi-viO_0-KOuRb1y7StRbC6k94rN1lemBcXn6HgJTN0aAnx-EALw_wcB"/>
      <Link label="Phase Eight - around 100 quid awoo" url="https://www.phase-eight.com/" />
      <Link label="No Angel - pretty cheap and looks good but faar" url="https://www.no-angel.co.uk/product-category/shop-all/dresses/" />
      <Link label="Monsoon - expensive but actually nice" url="https://www.monsoon.co.uk/sale/womens-sale/occasionwear-sale/" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
