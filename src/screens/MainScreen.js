import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, RefreshControl, Keyboard, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchDataRequest, fetchDataClear, fetchDataSearchRequest } from "../redux/actions/mainAction";
import { Color } from "../contants/Color";
import { SearchInput } from "../components/TextInput";
import { mainStyles } from "../contants/StyleSheet";
import { LanguageBottomSheet, SortBottomSheet } from "../components/BottomSheet";

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { data, loading, hasMoreList, dataFiltered, loadingFiltered } = useSelector((state) => state.main);
    const [isMounted, setIsMounted] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [hideClearIcon, setHideClearIcon] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const handleFocus = () => {
            setTimeout(() => {
                getData();
                setIsMounted(true);
            }, 0);
        }
        const handleBlur = () => {
            setIsMounted(false);
        }
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        const unsubscribeBlur = navigation.addListener('blur', handleBlur);
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
        };
    }, [dispatch, navigation]);

    const getData = (value) => {
        if (value === 'reset') {
            dispatch(fetchDataClear());
        }
        dispatch(fetchDataRequest({ sort: "pushed", direction: 'desc' }));
    }

    const handleLanguageBottomSheet = (itemValue) => {
        dispatch(fetchDataClear());
        if (itemValue) {
            setIsSearching(true);
            dispatch(fetchDataSearchRequest({ language: itemValue }));
        } else {
            setIsSearching(false);
            getData();
        }
    }

    const handleSortBottomSheet = (itemValue) => {
        dispatch(fetchDataClear());
        setIsSearching(false);
        if (itemValue) {
            dispatch(fetchDataRequest({ sort: itemValue.sort, direction: itemValue.direction }));
        } else {
            getData();
        }
    }

    const handleClearText = useCallback(() => {
        dispatch(fetchDataClear());
        Keyboard.dismiss();
        setIsSearching(false);
        setSearchText("");
        setHideClearIcon(false);
        setTimeout(getData, 0);
    }, [dispatch, getData]);

    const handleSearch = useCallback((text) => {
        dispatch(fetchDataClear());
        const trimmedQuery = text.trim();
        setSearchText(text);
        setHideClearIcon(trimmedQuery !== "");
        if (trimmedQuery === "") {
            setIsSearching(false);
            getData();
        } else {
            setIsSearching(true);
            dispatch(fetchDataSearchRequest({ query: trimmedQuery }));
        }
    }, [dispatch, getData]);

    const debouncedFetchData = useDebouncedCallback(() => {
        getData();
    }, 0);

    const handleScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
        if (isMounted) {
            const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
            if (isEndReached && !loading && !isSearching) {
                debouncedFetchData();
            }
        }
    };

    const ItemView = ({ item }) => {

        let colorCode = Color.black;
        switch (item.language) {
            case "TypeScript":
                colorCode = Color.blue
                break;
            case "JavaScript":
                colorCode = Color.yellow
                break;
            case "Java":
                colorCode = Color.brown
                break;
            case "C++":
                colorCode = Color.red
                break;
            case "Shell":
                colorCode = Color.green
                break;
            case "Dockerfile":
                colorCode = Color.lime
                break;
            default:
                break;
        }

        function formatNumber(num) {
            if (num <= 999) return num.toString();
            return (num / 1000).toFixed(1) + 'K';
        }

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Detail', { item })}
                style={mainStyles.touchableOpacity}>
                <Text style={mainStyles.name}>{item.name}</Text>
                <Text style={mainStyles.description} numberOfLines={2}>{item.description || '-'}</Text>
                <View style={mainStyles.row}>
                    <MaterialCommunityIcons name='star' size={20} color={Color.star} suppressHighlighting={true} />
                    <Text style={mainStyles.count2}>{formatNumber(item.stargazers_count)}</Text>
                    {item.language &&
                        <>
                            <View style={[mainStyles.round, { backgroundColor: colorCode }]} />
                            <Text style={mainStyles.languageText2}>{item.language}</Text>
                        </>
                    }
                </View>
            </TouchableOpacity >
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View style={mainStyles.separator} />
        );
    };

    const renderListFooter = () => {
        const showFooter = data.length > 0 && !hasMoreList;
        if (!showFooter && !isSearching) {
            return (
                <View style={mainStyles.loaderContainer}>
                    <ActivityIndicator size="large" color={Color.black} />
                </View>
            )
        }
        if (data.length > 0 || dataFiltered.length > 0) {
            return (
                <View style={mainStyles.lineContainer}>
                    <View style={mainStyles.line} />
                    <Text style={mainStyles.textFooter}>End of the repositories</Text>
                    <View style={mainStyles.line} />
                </View>
            );
        }
        return (
            <View style={mainStyles.lineContainer}>
                <View style={mainStyles.line} />
                <Text style={mainStyles.textFooter}>There aren't any repositories</Text>
                <View style={mainStyles.line} />
            </View>
        );
    };

    return (
        <SafeAreaView style={mainStyles.safeAreaView}>
            <SearchInput searchText={searchText} handleSearch={handleSearch} handleClearText={handleClearText} hideClearIcon={hideClearIcon} />
            <View style={mainStyles.mainChipContainer}>
                <LanguageBottomSheet onItemSelect={handleLanguageBottomSheet} />
                <SortBottomSheet onItemSelect={handleSortBottomSheet} />
            </View>
            <ItemSeparatorView />

            {loading || loadingFiltered ? (
                <View>
                    <View style={mainStyles.touchableOpacity}>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item marginTop={2} width={200} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} width={350} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={6} marginBottom={4} width={270} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} marginBottom={4} width={150} height={14} borderRadius={5} />
                        </SkeletonPlaceholder>
                    </View>
                    <ItemSeparatorView />
                    <View style={mainStyles.touchableOpacity}>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item marginTop={4} width={200} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} width={350} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={6} marginBottom={2} width={270} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} marginBottom={4} width={150} height={14} borderRadius={5} />
                        </SkeletonPlaceholder>
                    </View>
                    <ItemSeparatorView />
                    <View style={mainStyles.touchableOpacity}>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item marginTop={6} width={200} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} width={350} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={6} marginBottom={2} width={270} height={14} borderRadius={5} />
                            <SkeletonPlaceholder.Item marginTop={12} marginBottom={4} width={150} height={14} borderRadius={5} />
                        </SkeletonPlaceholder>
                    </View>
                </View>
            ) : (
                <FlatList
                    data={isSearching ? dataFiltered : data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    onScroll={({ nativeEvent }) => handleScroll(nativeEvent)}
                    refreshControl={
                        <RefreshControl onRefresh={handleClearText} />
                    }
                    ListFooterComponent={renderListFooter}
                />
            )}
        </SafeAreaView >
    );
};

export default MainScreen;
