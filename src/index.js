import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './hooks/auth';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import HomePage from './pages/HomePage';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AppPages() {
  return (
    <AppStack.Navigator 
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#282A32' },
      }}
    >
      <AppStack.Screen name="HomePage" component={HomePage} />
    </AppStack.Navigator>
  );
}


function AuthPages() {
  return (
    <AuthStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
            name="LoginPage"
            component={LoginPage}
        />
      <AuthStack.Screen
          name="RegisterPage"
          component={RegisterPage}
      />
    </AuthStack.Navigator>
  );
}

export default function IssuesTrackerApp() {
  const auth = useAuth();
  if(auth.initialLoading){
    return null;
  }
  if(auth.user){
    return <AppPages />
  }

  return <AuthPages />
}
