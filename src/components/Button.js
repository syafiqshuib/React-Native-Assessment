import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { mainStyles } from '../contants/StyleSheet';
import { Color } from '../contants/Color';

export const CustomShortButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={{ ...mainStyles.defaultBtn2, width: '48%', borderColor: Color.black }} >
            <Text style={{ ...mainStyles.defaultTextBtn2, color: Color.black }}>{title}</Text>
        </TouchableOpacity>
    );
};

export const CustomShortButton1 = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={{ ...mainStyles.defaultBtn2, width: '48%', backgroundColor: Color.blue, borderColor: Color.blue }} >
            <Text style={{ ...mainStyles.defaultTextBtn2, color: Color.white }}>{title}</Text>
        </TouchableOpacity>
    );
};
