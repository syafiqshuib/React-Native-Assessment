import React, { useEffect } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { mainStyles } from '../contants/StyleSheet';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const handleFocus = () => {
            setTimeout(() => {
                navigation.replace('Main');
            }, 1500);
        }
        const handleBlur = () => { }
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        const unsubscribeBlur = navigation.addListener('blur', handleBlur);
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
        };
    }, [navigation]);

    return (
        <SafeAreaView style={mainStyles.container}>
            <Image style={mainStyles.logoStyle}
                resizeMode='contain'
                source={require('../assets/upstack_logo.webp')}
            />
        </SafeAreaView>
    );
};

export default SplashScreen;