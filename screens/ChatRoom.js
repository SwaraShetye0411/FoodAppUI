import React from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Fontisto
  } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native"
import {icons, COLORS, SIZES, FONTS,images} from "../constants";
import ChatMessage from "./ChatMessage";
import { ScrollView } from "react-native";
import InputBox from "./InputBox"

const ChatRoom =({navigation}) => {

    const route = useRoute();

    // console.log(route.params)
    const [chatrooms, setChatrooms] = React.useState(null);

    React.useEffect(() => {
        let {item} = route.params;

        setChatrooms(item)
    })

    
    return (
        <SafeAreaView style={styles.container}>
                <View 
                    style={{
                    height: 70,
                    backgroundColor: COLORS.tint,
                    }}
                >
               
                    <View style={{
                        marginTop: 10,
                        marginLeft: 15,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() =>navigation.goBack()}
                        >
                            <Image 
                                source={icons.back}
                                style={
                                    {
                                        width:22,
                                        height:22,
                                        tintColor: COLORS.white
                                    }
                                }
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View 
                            style={{
                                flexDirection: 'row',
                                marginLeft: 15,
                                    
                            }}
                        >
                            <Image 
                                source={{uri: chatrooms?.users[1].imageUri}}
                                style={{
                                    width: 50,
                                    height:50,
                                    borderRadius: 50,
                                    marginRight: 15
                                }}
                            />
                                
                                
                            <Text 
                                style={{
                                    fontSize: SIZES.h2,
                                    lineHeight: 22,
                                    color: '#fff',
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}
                            >{chatrooms?.users[1].name}</Text>

                        </View>

                        <View 
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 100,
                                marginLeft: 100,
                                
                                
                                
                            }}
                        >
                            <FontAwesome5 name="video" size={22} color='white' />
                            <MaterialIcons name="call" size={22} color='white' />
                            <MaterialCommunityIcons name="dots-vertical" size={22} color='white' />
                        
                        </View>
                    </View>
                </View>
                
                <ScrollView>
                
                <ChatMessage />
                

                </ScrollView>
                
                <InputBox />
                
                
            
            
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

export default ChatRoom