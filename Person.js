import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Person() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSubtitle}>Nome</Text>
      <Text style={styles.text}>Ana Camargo Drumond</Text>
      <Text style={styles.textSubtitle}>CPF</Text>
      <Text style={styles.text}>737.835.678-66</Text>
      <Text style={styles.textSubtitle}>Email</Text>
      <Text style={styles.text}>anacamargo@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
    margin: 25,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  textSubtitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Person;