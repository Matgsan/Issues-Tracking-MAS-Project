import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/auth';
import { firestore } from '../config/firebaseConfig';

import {getRepositoriesIssues} from '../services/githubService';

const FirebaseRepoItem = ({repo}) => {
  const navigation = useNavigation();
  const [issues, setIssues] = useState([])

  useEffect(() => {
    async function fetch(){
      const issuesResponse = await getRepositoriesIssues(repo.repoOwner, repo.repoName);
      setIssues(issuesResponse);
    }
    fetch();
  }, []);
  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      console.log(issues.length);
      navigation.navigate('IssuesListPage', {issues})
    }}>
      <Text style={styles.text}>{repo.repoName} - {issues.length}</Text>
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

export default FirebaseRepoItem;