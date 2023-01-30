import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepoItem from '../components/RepoItem';


const ListUserReposPage = () => {
  const {params} = useRoute();
  console.log(params)
  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{padding: 20}}
        data={params && params.repos ? params.repos : []}
        renderItem={({item}) => <RepoItem repo={item} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListUserReposPage;