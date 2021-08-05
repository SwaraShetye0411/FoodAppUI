import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
  } from '@expo/vector-icons';
import {
    View,
    Text,
    ColorSchemeName
} from "react-native";
import {ChatRoomScreen} from "./ChatRoomScreen";
import {Restaurant} from "./Restaurant";


const Tab = createStackNavigator();

const OrderDelivery = () => {

    return (
        
            <View>
                <Text>OrderDelivery</Text>
            </View>
      
    )
}

export default OrderDelivery;