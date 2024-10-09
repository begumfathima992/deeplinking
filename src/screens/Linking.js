const linking = {
  prefixes: ['notion://', 'https://www.example.com'], // Custom scheme and web URLs
  config: {
    screens: {
      Home: 'home',
      Profile: {
        path: 'profile/:id', // Dynamic route with ID
        parse: {
          id: id => `${id}`, // Parse ID from the URL
        },
      },
      Settings: 'settings', // Static route for settings
    },
  },
};

export default linking;
