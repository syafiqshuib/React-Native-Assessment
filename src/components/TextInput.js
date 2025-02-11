import React from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { Color } from '../contants/Color';
import { mainStyles } from '../contants/StyleSheet';

export const SearchInput = ({ searchText, handleSearch, handleClearText, hideClearIcon }) => {
    return (
        <View style={mainStyles.defaultInputContainer}>
            <TextInput
                mode="outlined"
                label="Search Repositories"
                value={searchText}
                onChangeText={handleSearch}
                onSubmitEditing={Keyboard.dismiss}
                autoCapitalize="none"
                style={mainStyles.defaultInput}
                outlineStyle={{ borderRadius: 10 }}
                outlineColor={Color.border}
                activeOutlineColor={Color.borderActive}
                left={<TextInput.Icon icon="magnify" />}
            />
            {hideClearIcon && (
                <Feather
                    style={mainStyles.icon}
                    name="x"
                    size={20}
                    color={Color.black}
                    onPress={handleClearText}
                    suppressHighlighting={true}
                />
            )}
        </View>
    );
};

