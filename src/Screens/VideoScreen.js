import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import ImageVideo from '../Components/ImageVideo';
import Header from '../Components/Header';

const VideoScreen = () => {


    return (
        <ScrollView style={{}}>
            <View style={styles.container}>
                <Header width={'90%'} />

                <View style={styles.section}>
                    <Text style={styles.title}>LIVE Alert</Text>
                    <ImageVideo />
                </View>


                <View style={styles.section}>
                    <Text style={styles.title}>Actioned Alert</Text>
                    <ImageVideo />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
        paddingVertical: 10

    },
    section: {
        width: '90%',
        marginBottom: 20,
    },
    media: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: "cover"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: "left",
        color: "red"
    },

});

export default VideoScreen;

