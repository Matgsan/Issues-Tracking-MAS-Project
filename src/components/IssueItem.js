import * as Linking from 'expo-linking';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const IssueItem = ({issue}) => {
  //TODO: Style
  //TODO: Show different style if pull_request property is present and not null (which means is a PR)
  return (
    <TouchableOpacity onPress={async () => await Linking.openURL(issue.html_url)}>
      <Text>{issue.title}</Text>
    </TouchableOpacity>
  )
}

export default IssueItem;