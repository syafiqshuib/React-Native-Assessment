import { StyleSheet, Dimensions } from 'react-native';
import { Color } from './Color';

const windowWidth = Dimensions.get('window').width;

export const mainStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Color.white,
        width: windowWidth,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
    },
    logoStyle: {
        aspectRatio: 0.4,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 32,
        paddingHorizontal: 32
    },
    textFooter: {
        paddingHorizontal: 16,
        color: Color.black
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'grey',
    },
    touchableOpacity: {
        padding: 16,
        backgroundColor: Color.white
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        color: Color.black,
        marginBottom: 4
    },
    description: {
        color: Color.black,
        fontSize: 16,
        marginBottom: 8
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Color.separator
    },
    loaderContainer: {
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    defaultInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 16
    },
    defaultInput: {
        fontSize: 15,
        backgroundColor: Color.white,
        color: Color.black,
        width: '100%'
    },
    icon: {
        position: 'absolute',
        right: 14,
        top: 20,
        zIndex: 1
    },
    rowDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28
    },
    nameDetail: {
        fontSize: 24,
        color: Color.black,
        fontWeight: 'bold',
        marginBottom: 24
    },
    orgDetail: {
        fontSize: 18,
        color: Color.black1,
    },
    descriptionDetail: {
        fontSize: 18,
        color: Color.black,
        marginBottom: 28
    },
    orgRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 25,
        height: 25,
        marginRight: 8,
        borderRadius: 5
    },
    count: {
        fontSize: 18,
        color: Color.black,
        fontWeight: '500',
        marginHorizontal: 8
    },
    count2: {
        fontSize: 16,
        color: Color.black,
        fontWeight: '500',
        marginLeft: 6,
        marginRight: 16
    },
    title: {
        fontSize: 18,
        color: Color.black1
    },
    languageText: {
        fontSize: 18,
        color: Color.black,
        fontWeight: '500',
        marginHorizontal: 8
    },
    languageText2: {
        fontSize: 16,
        color: Color.black1,
        fontWeight: '500',
        marginHorizontal: 8
    },
    round: {
        height: 12,
        width: 12,
        borderRadius: 12 / 2
    },

    mainChipContainer: {
        marginVertical: 16,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    chipContainer: {
        paddingLeft: 16,
        paddingRight: 10
    },
    chip: {
        marginRight: 14,
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderColor: Color.chipBorder,
        borderWidth: 0.5,
        borderRadius: 15,
    },
    defaultTextBtn2: {
        color: Color.black,
        fontSize: 14,
    },
    defaultBtn2: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: Color.white,
        borderColor: Color.black,
        borderWidth: 1,
    },
    bottomSheetViewStyle: {
        padding: 16
    },
    itemStyle: {
        marginBottom: 16,
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomContainerStyle: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

