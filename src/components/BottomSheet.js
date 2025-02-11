import React, { useCallback, useRef, useState, useMemo } from 'react';
import { View, Text, Keyboard } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Chip, Checkbox } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Color } from '../contants/Color';
import { mainStyles } from '../contants/StyleSheet';
import { CustomShortButton, CustomShortButton1 } from './Button';

export const LanguageBottomSheet = ({ onItemSelect }) => {

    const [selectedValue, setSelectedValue] = useState();
    const [selectedCheck, setSelectedCheck] = useState();
    const bottomSheetRef = useRef(null);
    const snapPointsLeave = useMemo(() => ["75%"], []);

    const dropDownData = [
        { lang: 'JavaScript', color: Color.yellow },
        { lang: 'TypeScript', color: Color.blue },
        { lang: 'Java', color: Color.brown },
        { lang: 'C++', color: Color.red },
        { lang: 'Shell', color: Color.green },
        { lang: 'Dockerfile', color: Color.lime },
    ]

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );

    const openBottomSheet = () => {
        Keyboard.dismiss();
        setTimeout(() => {
            bottomSheetRef.current?.present();
        }, 0);
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current?.dismiss();
    };

    const handleItemPress = () => {
        setSelectedValue(selectedCheck);
        onItemSelect(selectedCheck);
        closeBottomSheet();
    };

    const handleResetPress = () => {
        setSelectedValue(null);
        setSelectedCheck(null);
    }

    const renderItem = useCallback(
        (item, index, data) => (
            <View key={index} style={mainStyles.itemStyle}>
                <View style={mainStyles.row}>
                    <View style={[mainStyles.round, { backgroundColor: item.color, marginRight: 10 }]} />
                    <Text style={{ color: Color.black }}>{item.lang}</Text>
                </View>
                <Checkbox
                    status={selectedCheck === item.lang ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedCheck(item.lang)}
                />
            </View >
        ),
        [selectedCheck]
    );

    return (
        <View >
            <Chip style={mainStyles.chip} onPress={openBottomSheet} textStyle={{ color: Color.black }} icon={() => <MaterialCommunityIcons name="chevron-down" size={24} color={Color.icon} />}>{selectedValue || `Language`}</Chip>
            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={snapPointsLeave}
                enableDynamicSizing={false}
                backgroundStyle={{ backgroundColor: 'white' }}
                backdropComponent={renderBackdrop}>
                <View style={[mainStyles.row, { justifyContent: 'space-between', padding: 16 }]}>
                    <Text style={{ fontSize: 16 }}>Filter Language</Text>
                    <Feather
                        name="x"
                        size={25}
                        color={Color.black}
                        onPress={closeBottomSheet}
                        suppressHighlighting={true}
                    />
                </View>
                <View style={mainStyles.separator} />
                <BottomSheetScrollView style={mainStyles.bottomSheetViewStyle}>
                    {dropDownData.map(renderItem)}
                </BottomSheetScrollView>
                <View style={mainStyles.separator} />
                <View style={mainStyles.bottomContainerStyle}>
                    <CustomShortButton title="Reset" onPress={handleResetPress} />
                    <CustomShortButton1 title="Apply" onPress={handleItemPress} />
                </View>
            </BottomSheetModal>
        </View>
    );
};

export const SortBottomSheet = ({ onItemSelect }) => {

    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedCheck, setSelectedCheck] = useState(null);
    const bottomSheetRef = useRef(null);
    const snapPointsLeave = useMemo(() => ["50%"], []);

    const dropDownData = [
        { name: 'Recently pushed', sort: 'pushed', direction: 'desc' },
        { name: 'Least Recently pushed', sort: 'pushed', direction: 'asc' }
    ]

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );

    const openBottomSheet = () => {
        Keyboard.dismiss();
        setTimeout(() => {
            bottomSheetRef.current?.present();
        }, 0);
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current?.dismiss();
    };

    const handleItemPress = () => {
        setSelectedValue(selectedCheck?.name);
        onItemSelect(selectedCheck);
        closeBottomSheet();
    };

    const handleResetPress = () => {
        setSelectedValue(null);
        setSelectedCheck(null);
    }

    const renderItem = useCallback(
        (item, index, data) => (
            <View key={index} style={mainStyles.itemStyle}>
                <View style={mainStyles.row}>
                    <Text style={{ color: Color.black }}>{item.name}</Text>
                </View>
                <Checkbox
                    status={selectedCheck?.name === item.name ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedCheck(item)}
                />
            </View >
        ),
        [selectedCheck]
    );

    return (
        <View>
            <Chip style={mainStyles.chip} onPress={openBottomSheet} textStyle={{ color: Color.black }} icon={() => <MaterialCommunityIcons name="chevron-down" size={24} color={Color.icon} />}>{selectedValue || "Sort"}</Chip>
            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={snapPointsLeave}
                enableDynamicSizing={false}
                backgroundStyle={{ backgroundColor: 'white' }}
                backdropComponent={renderBackdrop}>
                <View style={[mainStyles.row, { justifyContent: 'space-between', padding: 16 }]}>
                    <Text style={{ fontSize: 16 }}>Sort by</Text>
                    <Feather
                        name="x"
                        size={25}
                        color={Color.black}
                        onPress={closeBottomSheet}
                        suppressHighlighting={true}
                    />
                </View>
                <View style={mainStyles.separator} />
                <BottomSheetScrollView style={mainStyles.bottomSheetViewStyle}>
                    {dropDownData.map(renderItem)}
                </BottomSheetScrollView>
                <View style={mainStyles.separator} />
                <View style={mainStyles.bottomContainerStyle}>
                    <CustomShortButton title="Reset" onPress={handleResetPress} />
                    <CustomShortButton1 title="Apply" onPress={handleItemPress} />
                </View>
            </BottomSheetModal>
        </View>
    );
};