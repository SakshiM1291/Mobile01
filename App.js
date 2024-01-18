// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from 'src\Profile.js'; // Import your Profile component
import appColors from 'C:\Users\Shreyash\EmployeeProfile\theme\appColors.js';
import { AppProvider } from '@App';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Profile"
          drawerContent={(props) => <Profile {...props} />}
          drawerStyle={{
            backgroundColor: appColors.drawerBackground,
          }}
        >
          {/* Add other screens/components/routes here */}
          {/* For example, <Drawer.Screen name="Home" component={HomeScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
