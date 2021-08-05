import React from "react";
import {
    View,
    Text,
    FlatList,Image,
    TouchableWithoutFeedback
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons, SIZES } from "../constants";
import ChatListItem from "./ChatRoom";
import NewMessageButton from "./NewMessageButton";
import { SafeAreaView } from "react-native";


const ChatScreen = ({navigation}) => {

  const chatRooms = [{
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
    lastMessage: {
      id: 'm1',
      content: 'Well done this sprint, guys!',
      createdAt: '2020-10-03T14:48:00.000Z',
    }
  }, {
    id: '2',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u3',
      name: 'Daniil',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    }],
    lastMessage: {
      id: 'm2',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '3',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u4',
      name: 'Alex',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    }],
    lastMessage: {
      id: 'm3',
      content: 'Hi, Vadim.',
      createdAt: '2020-10-02T14:48:00.000Z',
    }
  }, {
    id: '4',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u5',
      name: 'Vlad',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    }],
    lastMessage: {
      id: 'm4',
      content: 'Can you review my last merge',
      createdAt: '2020-09-29T14:48:00.000Z',
    }
  }, {
    id: '5',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u6',
      name: 'Elon Musk',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    }],
    lastMessage: {
      id: 'm5',
      content: 'I would be happy',
      createdAt: '2020-09-30T14:48:00.000Z',
    }
  }, {
    id: '6',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u7',
      name: 'Adrian',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    }],
    lastMessage: {
      id: 'm6',
      content: 'I have a solution',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '7',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u8',
      name: 'Borja',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    }],
    lastMessage: {
      id: 'm7',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    }
  }, {
    id: '8',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u9',
      name: 'Mom',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
    }],
    lastMessage: {
      id: 'm8',
      content: 'Dear, did you eat?',
      createdAt: '2020-09-27T15:40:00.000Z',
    }
  }, {
    id: '9',
    users: [{
      id: 'u1',
      name: 'Vadim',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    }, {
      id: 'u10',
      name: 'Angelina Jolie',
      imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
    }],
    lastMessage: {
      id: 'm9',
      content: 'Meet me at the same place',
      createdAt: '2020-09-25T15:40:00.000Z',
    },
  }]
      const [chatrooms, setChatrooms] = React.useState(chatRooms);

      function renderChatList(){
        const navigation = useNavigation();
        
        const renderItem = ({item}) => (

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ChatRoom', {item})}
          >
            <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                flex: 1,
                padding: 10
              }}
            >
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image 
                  source={{uri: item.users[1].imageUri}}
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
                  >{item.users[1].name}</Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      color: 'grey'
                    }}
                  >{item.lastMessage.content}</Text>
                </View>
              </View>
              
              <Text
                style={{
                  fontSize: 16,
                  color: 'grey'
                }}
              >{moment(item.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
            </View>
            
          </TouchableWithoutFeedback>
        )

        
        return (
          
            <FlatList 
            data={chatrooms}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          
          />
          

          
          
            
        )
      }

      
    

    return (
        <View 
          
        >
          
          {renderChatList()}
          <NewMessageButton />

        </View>
          
          
          
          
            
        
    )
}

export default ChatScreen;