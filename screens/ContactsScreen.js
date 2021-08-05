import React from 'react';
import {View, Text, SafeAreaView,Image,FlatList} from "react-native";
import users from "../data/Users";
import {COLORS, SIZES,icons} from "../constants"
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Fontisto
  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContactsScreen = ({navigation}) => {
    const users = [{
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        status: "Hello there, how are you"
      }, {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        status: "Hello there, how are you"
      }, {
        id: 'u3',
        name: 'Daniil',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
        status: "Hello there, how are you"
      }, {
        id: 'u4',
        name: 'Alex',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        status: "Hello there, how are you"
      }, {
        id: 'u5',
        name: 'Vlad',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
        status: "Hello there, how are you"
      }, {
        id: 'u6',
        name: 'Elon Musk',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
        status: "Hello there, how are you"
      }, {
        id: 'u7',
        name: 'Adrian',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
        status: "Hello there, how are you"
      }, {
        id: 'u8',
        name: 'Borja',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
        status: "Hello there, how are you"
      }, {
        id: 'u9',
        name: 'Mom',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
        status: "Hello there, how are you"
      }, {
        id: 'u10',
        name: 'Angelina Jolie',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
        status: "Hello there, how are you"
      }]

    const [userData, setUserData] = React.useState(users);

    // console.log(userData)

    function renderContactHeader(){
        return (
            <SafeAreaView>
                <View 
                    style={{
                        height: 70,
                        backgroundColor: COLORS.tint,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <View 
                        style={{
                            marginTop: 10,
                            marginLeft: 15,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',  
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Image 
                                    source={icons.back}
                                    style={{
                                        width:20,
                                        height:20,
                                        tintColor:'white',
                                        marginRight: 25
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View 
                           
                        >
                            <Text 
                                style={{
                                    fontSize: SIZES.h2,
                                    lineHeight: 22,
                                    color: '#fff'
                                }}
                            >Select Contact</Text>
                            <Text style={{color: 'white'}}>{userData.length} Contacts</Text>
                        </View>
                    </View>
                    <View 
                        style={{
                            flexDirection: 'row',
                            width: 60,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginRight: 10,
                            marginTop: 10
                        }}
                    >
                        <Octicons name="search" size={22} color="white" />
                        <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    function renderContactList() {
        const renderItem =({item}) => (
            <SafeAreaView
                
            >
                <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image 
                  source={{uri: item.imageUri}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50
                  }}
                />
                <View
                  style={{
                    marginLeft: 15,
                    justifyContent: 'space-around'
                  }}
                >
                  <Text 
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16
                    }}
                  >{item.name}</Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      color: 'grey'
                    }}
                  >{item.status}</Text>
                </View>
              </View>
            </View>

            </SafeAreaView>
            
        )
        return(
            <FlatList 
                data={userData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightGray4,
                paddingTop: SIZES.padding2*2
            }}
        >
            {renderContactHeader()}
            {renderContactList()}
        </SafeAreaView>
    )
}

export default ContactsScreen;