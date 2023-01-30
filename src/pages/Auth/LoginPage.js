import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

const LoginPage = ({navigation}) => {
  const auth = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Log In</Text>
      <View style={styles.content}>
        <TextInput style={styles.input} 
          onChangeText={e => setEmail(e)}
          value={email}
          placeholder='Email'
          placeholderTextColor='gray'
          autoCapitalize='none'
        />
        <TextInput style={[styles.input, {marginVertical: 16}]} 
          onChangeText={e => setPassword(e)}
          value={password}
          placeholder='Password' 
          placeholderTextColor='gray'
          secureTextEntry
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={() => auth.signIn(email, password)}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.forgotPasswordText}>Forgot your password?</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}><Text style={styles.forgotPasswordText}>Don't have an account? Create an account now.</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
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
    color: 'white'
  },
  forgotPasswordText: {
    alignSelf: "center",
    marginTop: 16,
    color: '#282A32'
  }
})

export default LoginPage;