import auth from '@react-native-firebase/auth';

const register = async (email: string, password: string) =>
  auth().createUserWithEmailAndPassword(email, password);

export const authApi = { register };
