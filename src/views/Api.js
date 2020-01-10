import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiFood from '../components/API_food';

export default function Api({navigation}) {
  return (
    <View style={styles.container}>
      <ApiFood test = {navigation}></ApiFood>
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

