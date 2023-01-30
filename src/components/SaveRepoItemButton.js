import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
    <TouchableOpacity onPress={submit}>
      <Text>{repo.name}</Text>
    </TouchableOpacity>
  );
}

export default SaveRepoItemButton;