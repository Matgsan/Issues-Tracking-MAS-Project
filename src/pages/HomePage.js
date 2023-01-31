import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { collection, query, where, getDocs} from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { useAuth } from '../hooks/auth';
import FirebaseRepoItem from '../components/FirebaseRepoItem';

function HomePage() {
  const auth = useAuth();
  const [repos, setRepos] = useState();

  useFocusEffect(useCallback(() => {
    const q = query(collection(firestore, "repos"), where("userId", "==", auth.user.uid));
    const querySnapshot = getDocs(q).then(res => setRepos(res.docs)).catch(err => console.error(err));
  }, [auth.user.uid]));

  return (
    <View style={styles.container}>
      <FlatList 
        ListHeaderComponent={<Text style={styles.listHeader}>Your Saved Repos</Text>}
        contentContainerStyle={{padding: 20}}
        data={repos || []}
        renderItem={({item}) => <FirebaseRepoItem repo={item.data()} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default HomePage;