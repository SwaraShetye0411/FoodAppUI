import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Fontisto
  } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
   
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from "./ChatScreen";
import StatusScreen from "./StatusScreen";
import CallsScreen from "./CallsScreen";


const Stack = createStackNavigator();
const MainTab = createMaterialTopTabNavigator();

const ChatRoomScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            /> */}
            <View style={{
                height: 70,
                backgroundColor: COLORS.tint,
                display: 'flex',
            }}>
                <View style={{
                    marginTop: 30,
                    marginLeft: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text 
                        style={{
                            fontSize: SIZES.h2,
                            lineHeight: 22,
                            color: '#fff'
                        }}
                    >WhatsApp</Text>

                    <View 
                        style={{
                            flexDirection: 'row',
                            width: 60,
                            justifyContent: 'space-between',
                            marginRight: 10
                        }}
                    >
                        <Octicons name="search" size={22} color="white" />
                        <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                    </View>
                </View>
            </View>
            <MainTab.Navigator
                initialRouteName="Chats"
                tabBarOptions={{
                    activeTintColor: COLORS.white,
                    style:{
                        backgroundColor: COLORS.tint
                    },
                    indicatorStyle: {
                        backgroundColor: COLORS.white,
                        height: 4
                    },
                    labelStyle: {
                        fontWeight: 'bold'
                    },
                    showIcon: true
                }}
            >
                <MainTab.Screen 
                    name="Camera"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18}/>,
                        tabBarLabel: () => null,
                    }}
                   
                />
                <MainTab.Screen 
                    name="Chats"
                    component={ChatScreen}
                />
                <MainTab.Screen 
                    name="Status"
                    component={StatusScreen}
                />
                <MainTab.Screen 
                    name="Calls"
                    component={CallsScreen}
                />
            </MainTab.Navigator>

            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        paddingTop: SIZES.padding2*2
        
    },
})

export default ChatRoomScreen;