import {initializeApp} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// Firebase config from the JSON you shared
const firebaseConfig = {
  apiKey: 'AIzaSyDf4Hz61KmWNw-zPotcNQY9sJM7fowEnuI',
  authDomain: 'astute-strategy-437308-r0.firebaseapp.com',
  projectId: 'astute-strategy-437308-r0',
  storageBucket: 'astute-strategy-437308-r0.appspot.com',
  messagingSenderId: '185914268640',
  appId: '1:185914268640:android:01851ce93171561160e985',
  clientId:
    '185914268640-ofpfrehjjo8h6169icghebv53lg5im64.apps.googleusercontent.com',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    '185914268640-ofpfrehjjo8h6169icghebv53lg5im64.apps.googleusercontent.com', // Web client ID from the Firebase project
  offlineAccess: true, // If you need to access the refresh token
});

// You can now use `auth` and `GoogleSignin` in your project
export {auth, GoogleSignin};
