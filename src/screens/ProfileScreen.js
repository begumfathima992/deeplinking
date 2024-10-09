import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = ({route}) => {
  const {id} = route.params;

  return (
    <View>
      <Text>Profile Screen for User: {id}</Text>
    </View>
  );
};

export default ProfileScreen;
