import { Platform, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import StackNavigation from './src/Navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import {
  checkNotifications,
  requestNotifications,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
const App = () => {

  useEffect(() => {
    const requestUserPermission = async () => {
      if (Platform.OS === 'ios') {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);
        } else {
          Alert.alert('Permission denied', 'You need to enable notifications to receive alerts.');
        }
      } else if (Platform.OS === 'android') {
        const { status } = await checkNotifications();
        if (status === RESULTS.DENIED) {
          const { status: newStatus } = await requestNotifications(['alert', 'badge', 'sound']);
          if (newStatus === RESULTS.GRANTED) {
            console.log('Notification permission granted.');
          } else {
            Alert.alert(
              'Notification Permission Denied',
              'You have disabled notifications. Please enable them from settings.',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'Open Settings',
                  onPress: () => openSettings(),
                },
              ],
            );
          }
        }
      }
    };

    requestUserPermission();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})