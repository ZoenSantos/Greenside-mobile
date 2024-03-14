import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Calendar from './Calendar';
import Person from './Person';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text style={[styles.heading, { fontSize: 34 }]}>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function CadastroScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.inputContainer, { backgroundColor: 'green' }]}>
      <Text style={[styles.heading, { backgroundColor: 'green' }]}>Bem vindo ao greenside</Text>
      <TextInput placeholder="Nome" style={[styles.input, { marginTop: 100 }]} />
      <TextInput placeholder="Sobrenome" style={[styles.input, { marginTop: 1 }]} />
      <TextInput placeholder="CPF" style={[styles.input, { marginTop: 3 }]} />
      <TextInput placeholder="Senha" secureTextEntry={true} style={[styles.input, { marginTop: 5 }]} />
      <TextInput placeholder="Confirmar Senha" secureTextEntry={true} style={[styles.input, { marginTop: 7 }]} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginForm')}>
        <Text style={styles.buttonText}>Ir para Tela de Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoginFormScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.heading, { backgroundColor: 'green' }]}>Bem vindo ao greenside</Text>
      <TextInput placeholder="E-mail" style={[styles.input, { marginTop: 100 }]} />
      <TextInput placeholder="Senha" secureTextEntry={true} style={[styles.input, { marginTop: 1 }]} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Ir para Tela de Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continuar para o Greenside</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState('Cadastro');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentScreen}>
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="LoginForm" component={LoginFormScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Inicio} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Person" component={Person} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'green',
    padding: 70,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#00c21d',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
