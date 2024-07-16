import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from '../../Assets/Svgs/BackButton'
import { useNavigation } from '@react-navigation/native'

const Header = ({ width = '100%' }) => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={{ marginBottom: 20 }}>
                <BackButton size={20} />
            </TouchableOpacity>
            <View style={[styles.backArrow, { width: width }]}>
                <Text style={styles.titleStyle}>SYSTEM STATUS</Text>
                <Image
                    source={require('../../Assets/Images/Logo.jpg')}
                    style={styles.imgStyle}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 40,
        resizeMode: "contain"
    },
    titleStyle: {
        fontSize: 16,
        alignSelf: "center",
        color: "#000"
    },
    backArrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 10
    }
})