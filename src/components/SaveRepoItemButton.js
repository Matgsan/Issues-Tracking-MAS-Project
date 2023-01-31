import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/auth';
import { firestore } from '../config/firebaseConfig';

const SaveRepoItemButton = ({repo}) => {
  const navigation = useNavigation();
  const auth = useAuth();
  const submit = useCallback(async () => {
    try {
      const docRef = await addDoc(collection(firestore, "repos"), {
        repoOwner: repo.owner.login,
        repoName: repo.name,
        userId: auth.user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", e);
    }
    navigation.navigate('HomePage')
  }, [repo, auth, navigation])
  return (
    <TouchableOpacity style={styles.button} onPress={submit}>
      <Text style={styles.text}>{repo.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'left',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#76b5c5',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default SaveRepoItemButton;