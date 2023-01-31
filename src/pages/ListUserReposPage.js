import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SaveRepoItemButton from '../components/SaveRepoItemButton';


const ListUserReposPage = () => {
  const {params} = useRoute();
  return (
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={{padding: 20}}
        data={params && params.repos ? params.repos : []}
        renderItem={({item}) => <SaveRepoItemButton repo={item} />}
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