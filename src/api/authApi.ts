import auth from '@react-native-firebase/auth';

const register = async (email: string, password: string) =>
  auth().createUserWithEmailAndPassword(email, password);

const logOut = async () => auth().signOut();

export const authApi = { register, logOut };
