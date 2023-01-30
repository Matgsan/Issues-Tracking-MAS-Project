import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { getUserReposistories } from '../services/githubService';


const SearchUserPage = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const search = useCallback(async () => {
   const repos = await getUserReposistories(text);
   navigation.navigate('ListUserReposPage', {
    repos,
   });
  }, [text]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a GitHub user</Text>
      <View style={styles.content}>
        <TextInput style={styles.input} 
          onChangeText={e => setText(e)}
          value={text}
          placeholder='Username'
          placeholderTextColor='gray'
          autoCapitalize='none'   
        />
        <TouchableOpacity style={styles.button} onPress={search}><Text style={styles.buttonText}>Find Repositories</Text></TouchableOpacity>
      </View>
    </View>
  );
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
    marginTop: 30,
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
});

export default SearchUserPage;