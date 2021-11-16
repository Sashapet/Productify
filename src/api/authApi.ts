import auth from '@react-native-firebase/auth';

const register = async (email: string, password: string) =>
  auth().createUserWithEmailAndPassword(email, password);

const logOut = async () => auth().signOut();

const login = async (email: string, password: string) =>
  auth().signInWithEmailAndPassword(email, password);

export const authApi = { register, logOut, login };
