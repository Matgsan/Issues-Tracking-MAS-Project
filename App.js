import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import IssuesTrackerApp from './src';
import { AuthProvider } from './src/hooks/auth';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
        <AuthProvider>
          <IssuesTrackerApp />
        </AuthProvider>
    </NavigationContainer>
  );
}

export default App;