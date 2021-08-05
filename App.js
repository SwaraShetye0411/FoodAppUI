import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import {Home, Restaurant, OrderDelivery, ChatRoomScreen, ChatRoom, ChatMessage, ContactsScreen} from "./screens";

// import { withAuthenticator } from 'aws-amplify-react-native';

// import Amplify from 'aws-amplify';
// import config from './src/aws-exports';
// Amplify.configure(config);
// import Amplify from 'aws-amplify'
// import config from './src/aws-exports'
// Amplify.configure(config)


const Stack = createStackNavigator();

function App () {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          {/* <Stack.Screen 
            name="ChatRoomScreen" 
            component={ChatRoomScreen}  
          />
          <Stack.Screen 
            name="ChatRoom" 
            component={ChatRoom}  
            options={{title: 'Chat Room'}}
          />
          <Stack.Screen 
            name="ChatMessage" 
            component={ChatMessage}  
            options={{title: 'Chat Message'}}
          />
          <Stack.Screen 
            name="ContactsScreen" 
            component={ContactsScreen}  
            options={{title: 'Contacts'}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// export default withAuthenticator(App);
export default App;