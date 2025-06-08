// firebase/config.js
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  //   apiKey: 'YOUR_API_KEY',
  projectId: 'abkgami-dapp',
  appId: '1:482805579676:android:91bbf9d9fe7f6eee3b9259',
  //   authDomain: 'your-app.firebaseapp.com',
  //   storageBucket: 'your-app.appspot.com',
  //   messagingSenderId: 'your-messaging-sender-id',
};

const app = initializeApp(firebaseConfig);

export default app;
