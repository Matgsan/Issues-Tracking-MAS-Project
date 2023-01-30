import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  user = null;

  handlers = {};

  static LOCAL_STORAGE_KEY = '@issues-tracker:user';

  async init(handlers) {
    try {
      const dataOnStorage = await AsyncStorage.getItem(AuthService.LOCAL_STORAGE_KEY);
      this.user = JSON.parse(dataOnStorage || 'null');
      if (handlers) {
        this.handlers = handlers;
      }
      if (this.user) {
        this.addInterceptors();
      }
    }catch(e) {
      console.log(e);
    }
  }

  async _saveUser() {
    await AsyncStorage.setItem(
      AuthService.LOCAL_STORAGE_KEY,
      JSON.stringify(this.user)
    );
  }

  async signUp(name, email, password) {
    const auth = getAuth();
    try {
      const signUp = await createUserWithEmailAndPassword(auth, email, password);
      const user = signUp.user;
      await updateProfile(user, {
        displayName: name
      })
      auth.currentUser?.reload();
      this.user = auth.currentUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
    await this._saveUser();
    if (this.handlers.onLogin) {
      this.handlers.onLogin(this.user);
    }
    return {};
  }


  async signIn(email, password) {
    const auth = getAuth();
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      const user = signIn.user;
      this.user = user
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
    await this._saveUser();
    if (this.handlers.onLogin) {
      this.handlers.onLogin(this.user);
    }
    return {};
  }

  async signOut() {
    this.user = null;
    await AsyncStorage.removeItem(AuthService.LOCAL_STORAGE_KEY);
    await auth.signOut();
    if (this.handlers.onLogout) {
      this.handlers.onLogout();
    }
  }
}

const authService = new AuthService();

export default authService;
