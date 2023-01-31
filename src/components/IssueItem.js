import * as Linking from 'expo-linking';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const IssueItem = ({issue}) => {
  return (
    <TouchableOpacity style={styles.button(issue.pull_request != null)} onPress={async () => await Linking.openURL(issue.html_url)}>
      <Text style={styles.text}>{issue.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: (isPullRequest) => {
    const backgroundColor = isPullRequest ? '#c946ef' : '#f7be10';
    return {
      alignItems: 'left',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginVertical: 4,
      borderRadius: 8,
      backgroundColor: backgroundColor,
    }
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
});


export default IssueItem;