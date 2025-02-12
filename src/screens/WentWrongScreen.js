import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { mainStyles } from '../contants/StyleSheet';

const WentWrongScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={mainStyles.safeAreaViewStyle}>
            <View style={mainStyles.mainViewStyle}>
                <Image
                    style={{ width: 100, height: 100, marginBottom: 32 }}
                    source={require('../assets/alert.png')}
                    resizeMode={'contain'}
                />
                <Text style={mainStyles.textStyle}>Something went wrong.</Text>
                <Text style={mainStyles.textStyle2}>An unexpected error has occurred. Please try again later. If this problem persists, kindly reach out to our technical support team.</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    style={mainStyles.tryBtnStyle}
                    onPress={() => navigation.replace('Splash')}>
                    <Text style={mainStyles.tryTextBtnStyle}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default WentWrongScreen;