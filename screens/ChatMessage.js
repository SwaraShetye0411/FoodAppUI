import React from 'react';
import {
    Text,
    View,
    FlatList,
    ImageBackground
} from "react-native";
import moment from "moment";
import {COLORS, FONTS, SIZES, images} from '../constants';
import InputBox from './InputBox';


const ChatMessage = () => {
    const chats = {
        id: '1',
        users: [{
          id: 'u1',
          name: 'Vadim',
          imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }, {
          id: 'u2',
          name: 'Lukas',
          imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }],
        messages: [{
          id: 'm1',
          content: 'How are you, Lukas!',
          createdAt: '2020-10-10T12:48:00.000Z',
          user: {
            id: 'u1',
            name: 'Vadim',
          },
        }, {
          id: 'm2',
          content: 'I am good, good',
          createdAt: '2020-10-03T14:49:00.000Z',
          user: {
            id: 'u2',
            name: 'Lukas',
          },
        }, {
          id: 'm3',
          content: 'What about you?',
          createdAt: '2020-10-03T14:49:40.000Z',
          user: {
            id: 'u2',
            name: 'Lukas',
          },
        }, {
          id: 'm4',
          content: 'Good as well, preparing for the stream now.',
          createdAt: '2020-10-03T14:50:00.000Z',
          user: {
            id: 'u1',
            name: 'Vadim',
          },
        }, {
          id: 'm5',
          content: 'How is your uni going?',
          createdAt: '2020-10-03T14:51:00.000Z',
          user: {
            id: 'u1',
            name: 'Vadim',
          },
        }, {
          id: 'm6',
          content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
          createdAt: '2020-10-03T14:49:00.000Z',
          user: {
            id: 'u2',
            name: 'Lukas',
          },
        }, {
          id: 'm7',
          content: 'Big Data is really interesting. Cannot wait to go through all the material.',
          createdAt: '2020-10-03T14:53:00.000Z',
          user: {
            id: 'u1',
            name: 'Vadim',
          },
        }]
      }
    const [chatData, setChatData] = React.useState(chats.messages);

    

    function renderMessage() {
        
        const renderItem =({item}) => (
            <View 
                style={{
                    padding: 10
                }}
            >
                <View
                    style={{
                        backgroundColor: item.user.id === 'u1' ? '#DCF8C5':'white',
                        marginLeft: item.user.id === 'u1' ? 50 : 0,
                        marginRight: item.user.id === 'u1' ? 0 : 50,
                        borderRadius: 5,
                        padding: 10
                    }}
                >
                    {!(item.user.id === 'u1') && 
                        <Text
                            style={{
                                color: COLORS.primary,
                                fontWeight: 'bold',
                                marginBottom: 5
                            }}
                        >
                            {item.user.name}
                        </Text>
                    }
                    <Text>{item.content}</Text>
                    <Text style={{ alignSelf: 'flex-end', color: 'grey'}}>{moment(item.createdAt).fromNow()}</Text>
                </View>

            </View>
            
        )
        
        return (
            <ImageBackground
                source={images.bg_image}
                style={{
                    width:'100%',
                    height: '100%' 
                }}
            >
                <FlatList 
                    data={chatData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    inverted
                />
                

            </ImageBackground>
            
        )
    }
    return(
        <View>
            {renderMessage()}
            
        </View>

    )
}

export default ChatMessage;