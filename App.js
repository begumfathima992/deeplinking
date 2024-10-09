import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Linking} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import linking from './src/screens/Linking';

const App = () => {
  React.useEffect(() => {
    // Function to handle the deep link
    const handleDeepLink = event => {
      const url = event.url;
      console.log('Deep link received:', url);

      // Check if the deep link is for JWT.io and open the browser
      if (url.includes('example.com/jwt')) {
        Linking.openURL('https://jwt.io');
      } else {
        // Handle other in-app links (e.g., profile/:id)
        const route = url.split('://')[1]; // Get "profile/123"
        const [screen, id] = route.split('/');
        if (screen === 'profile') {
          navigationRef.current?.navigate('Profile', {id});
        }
      }
    };

    // Add an event listener for deep links while the app is running
    Linking.addEventListener('url', handleDeepLink);

    // Handle initial deep link when the app is launched
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({url});
      }
    });

    return () => {
      // Clean up the event listener
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
