import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { useAuth } from './hooks/auth';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import HomePage from './pages/HomePage';
import SearchUserPage from './pages/SearchUserPage';
import { MaterialIcons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import ListUserReposPage from './pages/ListUserReposPage';


const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AppPages() {
  const navigation = useNavigation();
  const auth = useAuth();
  return (
    <AppStack.Navigator 
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#282A32' },
        headerBackTitleVisible: false,
        headerRight: () => (
          <TouchableOpacity onPress={() => auth.signOut()}>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        )
      }}
    >
    <AppStack.Screen name="HomePage" component={HomePage} 
      options={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SearchUserPage')}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        )
      }}
    />
    <AppStack.Screen name="SearchUserPage" component={SearchUserPage} />
    <AppStack.Screen name="ListUserReposPage" component={ListUserReposPage} />
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
