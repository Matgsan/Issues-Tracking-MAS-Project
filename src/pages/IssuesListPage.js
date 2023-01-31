import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text } from 'react-native';
import IssueItem from '../components/IssueItem';

const IssuesListPage = () => {
  const {params} = useRoute();
  return (
    <FlatList
      data={params.issues || []}
      renderItem={({item}) => <IssueItem issue={item}/>}
    />
  );
}

export default IssuesListPage;