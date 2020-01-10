import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiCode from '../components/API_code';

export default function Produit(code) {
  return (
    <View style={styles.container}>
      <ApiCode code={code.navigation.state.params.code}></ApiCode>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

