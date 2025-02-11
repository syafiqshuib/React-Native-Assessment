import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Color } from '../contants/Color';
import { mainStyles } from '../contants/StyleSheet';

const MainDetailScreen = ({ navigation, route }) => {

    const { item } = route.params;

    useEffect(() => {
        const handleFocus = () => { }
        const handleBlur = () => { }
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        const unsubscribeBlur = navigation.addListener('blur', handleBlur);
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
        };
    }, [navigation]);

    return (
        <SafeAreaView style={[mainStyles.safeAreaView, { padding: 16 }]}>
            <View style={mainStyles.orgRow}>
                <Image style={mainStyles.tinyLogo}
                    resizeMode='contain'
                    source={{
                        uri: item.owner.avatar_url,
                    }}
                />
                <Text style={mainStyles.orgDetail}>{item.owner.login}</Text>
            </View>
            <Text style={mainStyles.nameDetail}>{item.name}</Text>
            <Text style={mainStyles.descriptionDetail}>{item.description || '-'}</Text>
            <View style={mainStyles.rowDetail}>
                <MaterialCommunityIcons name='star-outline' size={20} color={Color.icon} suppressHighlighting={true} />
                <Text style={mainStyles.count}>{item.stargazers_count}</Text>
                <Text style={mainStyles.title}>stars</Text>
            </View>
            <View style={mainStyles.rowDetail}>
                <Octicons name='repo-forked' size={20} color={Color.icon} suppressHighlighting={true} />
                <Text style={mainStyles.count}>{item.forks_count}</Text>
                <Text style={mainStyles.title}>forks</Text>
            </View>
            <View style={mainStyles.rowDetail}>
                <MaterialCommunityIcons name='eye-outline' size={20} color={Color.icon} suppressHighlighting={true} />
                <Text style={mainStyles.count}>{item.watchers_count}</Text>
                <Text style={mainStyles.title}>watchers</Text>
            </View>
            {item.language &&
                <View style={mainStyles.rowDetail}>
                    <MaterialCommunityIcons name='code-tags' size={20} color={Color.icon} suppressHighlighting={true} />
                    <Text style={mainStyles.languageText}>{item.language}</Text>
                </View>
            }
        </SafeAreaView>
    );
};

export default MainDetailScreen;