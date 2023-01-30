import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

const RegisterPage = ({navigation}) => {
  const auth = useAuth();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='black'/>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.content}>
        <TextInput style={styles.input} 
          onChangeText={e => setName(e)}
          value={name}
          placeholder='Name'
          placeholderTextColor='gray'
        />
        <TextInput style={[styles.input, {marginTop: 16}]} 
          onChangeText={e => setEmail(e)}
          value={email}
          placeholder='Email'
          placeholderTextColor='gray'
        />
        <TextInput style={[styles.input, {marginVertical: 16}]} 
          onChangeText={e => setPassword(e)}
          value={password}
          placeholder='Password' 
          placeholderTextColor='gray'
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => auth.signUp(name, email, password)}><Text style={styles.buttonText}>Create Account</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={styles.forgotPasswordText}>Already have an account? Log In here</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
  },
  content: { 
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    color: "#282A32",
    fontWeight: "bold",
    marginBottom: 32,
    justifyContent: "center",
  },
  input: {
    height: 40,
    backgroundColor: '#282A32',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: 'white',
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#282A32",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    color: '#FFF'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  forgotPasswordText: {
    alignSelf: "center",
    marginTop: 16,
    color: '#282A32'
  }
})

export default RegisterPage;