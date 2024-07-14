import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Header from '../Components/Header';

const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const navigation = useNavigation()
    const tabs = [
        { id: 1, title: 'Camera 1' },
        { id: 2, title: 'Camera 2' },
        { id: 3, title: 'Camera 3' },
        { id: 4, title: 'Camera 4' },
    ];

    const tabImages = [
        {
            id: 1,
            title: 'Camera 1',
            videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4'
        },
        {
            id: 2,
            title: 'Camera 2',
            videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
        },
        {
            id: 3,
            title: 'Camera 3',
            videoUrl: 'https://videos.pexels.com/video-files/3195443/3195443-uhd_2560_1440_25fps.mp4'
        },
        {
            id: 4,
            title: 'Camera 4',
            // videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4'
        },
    ];
    const goToVideo = (item) => {
        if (item.id == tabs.length) {
            navigation.navigate("VideoScreen")
            // return
        }
        setSelectedTab(item.id)
    }


    return (
        <ScrollView
            nestedScrollEnabled
            style={{ backgroundColor: '#ADD8E6', }}>
            <View style={styles.container}>
                <Header />
                <View style={{ marginVertical: 15 }}>
                    <Text style={styles.sideTextStyle}>Network :</Text>
                    <Text style={styles.sideTextStyle}>Server :</Text>
                    <Text style={styles.sideTextStyle}>Camera :  {tabImages[selectedTab - 1]?.title}</Text>
                </View>

                <FlatList
                    data={tabs}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.tab,
                                selectedTab === item.id && styles.selectedTab,
                                index % 2 === 0 && styles.tabLeft,
                            ]}
                            onPress={() => goToVideo(item)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    selectedTab === item.id && styles.selectedTabText,
                                ]}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <Video
                    source={{ uri: tabImages[selectedTab - 1]?.videoUrl }}
                    style={styles.media}
                    resizeMode="cover"
                    controls={true}
                />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        padding: 16,
        backgroundColor: '#ADD8E6',
        flex: 1
    },
    tab: {
        width: '42%',
        margin: 8,
        padding: 16,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#880808',
        borderColor: "#E0115F"
    },
    tabLeft: {
        marginRight: '5%',
    },
    selectedTab: {
        backgroundColor: 'green',
        borderColor: "#7CFC00"
    },
    tabText: {
        fontSize: 16,
        color: '#fff',
    },
    selectedTabText: {
        color: '#fff',
    },
    media: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: "cover",
        marginVertical: 30
    },
    sideTextStyle: {
        fontSize: 16,
        color: '#000',
        marginVertical: 10
    }
});

export default HomeScreen;
