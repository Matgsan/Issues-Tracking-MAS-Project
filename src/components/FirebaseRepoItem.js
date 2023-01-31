import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/auth';
import { firestore } from '../config/firebaseConfig';

import {getRepositoriesIssues} from '../services/githubService';

const FirebaseRepoItem = ({repo}) => {
  const navigation = useNavigation();
  const [issues, setIssues] = useState([])
  //TODO: Style
  //TODO: Show different style if pull_request property is present and not null (which means is a PR)
  
  useEffect(() => {
    async function fetch(){
      const issuesResponse = await getRepositoriesIssues(repo.repoOwner, repo.repoName);
      setIssues(issuesResponse);
    }
    fetch();
  }, []);
  return (
    <TouchableOpacity onPress={() => {
      console.log(issues.length);
      navigation.navigate('IssuesListPage', {issues})
    }}>
      <Text>{repo.repoName} - {issues.length}</Text>
    </TouchableOpacity>
  );
}

export default FirebaseRepoItem;