import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import VideoScreen from '../Screens/VideoScreen';
import Login from '../Screens/Login';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const StackNavigation = () => {
    const Stack = createStackNavigator();

    PushNotification.configure({
        onRegister: function (token) {
            // console.log("TOKEN:", token);
        },

        onNotification: function (notification) {
            // console.log("NOTIFICATION opened:", notification);
        },
        onAction: function (notification) {
        },

        onRegistrationError: function (err) {
            console.error(err.message, err);
        },

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
    });

    PushNotification.createChannel(
        {
            channelId: "Remainder",
            channelName: "Remainder",
            channelDescription: "A default channel",
            soundName: "default",
            importance: 4,
            vibrate: true,
        },
        // (created) => console.log(`createChannel returned '${created}'`)
    );

    // Handle foreground messages
    messaging().onMessage(async remoteMessage => {
        // console.log('A new FCM message arrived!', remoteMessage);

        // Function to trigger a local notification
        PushNotification.localNotification({
            /* Android Only Properties */
            channelId: 'Remainder',
            ticker: "My Notification Ticker",
            showWhen: true,
            autoCancel: true,
            largeIcon: "ic_launcher",
            color: "red",
            vibrate: true,
            vibration: 300,
            groupSummary: false,
            ongoing: false,
            priority: "high",
            visibility: "private",
            ignoreInForeground: false,
            shortcutId: "shortcut-id",
            onlyAlertOnce: false,

            when: null,
            usesChronometer: false,
            timeoutAfter: null,

            messageId: "google:message_id",
            actions: ["Yes", "No"],
            invokeApp: true,

            /* iOS and Android properties */
            id: 0,
            title: remoteMessage?.notification?.title,
            message: remoteMessage.notification.body,
            picture: remoteMessage?.notification?.android?.imageUrl,
            userInfo: {},
            soundName: "default",
            number: 10,
        });
    });
    // Handle background messages
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        // console.log('Message handled in the background!', remoteMessage);
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: " ",
            }}
        >
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})