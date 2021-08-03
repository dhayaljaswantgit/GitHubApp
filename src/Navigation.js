import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import FollowersPage from './pages/FollowersPage';
import RepoListingPage from './pages/RepoListingPage';
import ProfilePage from './pages/ProfilePage';

const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={DetailsPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Followers"
          component={FollowersPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Repositories"
          component={RepoListingPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfilePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
