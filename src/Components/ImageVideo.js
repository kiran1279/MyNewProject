import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video'

const ImageVideo = () => {
    const [liveImage, setLiveImage] = useState(true)


    return (

        <View>
            {liveImage ? (
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // Replace with your image URL
                    style={styles.media}
                />)
                :
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    style={styles.media}
                    resizeMode="cover"
                    controls={true}
                />
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.greenTab}>
                    <Text style={styles.buttonText}>Attend</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setLiveImage(false)}
                    style={styles.tab}>
                    <Text style={styles.buttonText}>Video</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageVideo

const styles = StyleSheet.create({
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
        backgroundColor: '#880808',
        borderColor: "#E0115F",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1
    },
    attendButton: {
        backgroundColor: 'green',
        borderColor: "#7CFC00",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    tab: {
        width: '42%',
        margin: 8,
        padding: 13,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#880808',
        borderColor: "#E0115F"
    },
    greenTab: {
        width: '42%',
        margin: 8,
        padding: 13,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'green',
        borderColor: "#7CFC00",
    },
    tabLeft: {
        marginRight: '5%',
    },
})