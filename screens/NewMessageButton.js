import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const NewMessageButton = () => {
    const navigation = useNavigation();
    return (
        
            <View
                style={{
                    backgroundColor: COLORS.tint,
                    width: 50, 
                    height: 50, 
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('ContactsScreen')}
                >
                    <MaterialCommunityIcons  name="message-reply-text" size={28} color="white" />
                </TouchableOpacity>
                
            </View>
        
    )
}

export default NewMessageButton;