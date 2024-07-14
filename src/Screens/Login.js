import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Eye from '../../Assets/Svgs/Eye';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigation = useNavigation()




    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+=]{3,30}$/;

    function validateUsername(txt) {
        return usernameRegex.test(txt);
    }
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {

        if (username === '' || password === '') {
            Snackbar.show({
                text: 'Please enter both username and password',
                duration: Snackbar.LENGTH_LONG,
            });
            return;
        }

        if (!validateUsername(username)) {
            Snackbar.show({
                text: 'Invalid username',
                duration: Snackbar.LENGTH_LONG,
            });
            return;
        }

        if (!validateUsername(password)) {
            Snackbar.show({
                text: 'Invalid password',
                duration: Snackbar.LENGTH_LONG,
            });
            return;
        }
        navigation.navigate("HomeScreen");
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../../Assets/Images/Logo.jpg')}
                style={{ width: 80, height: 80, borderRadius: 40, resizeMode: "contain" }}
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={"grey"}
                value={username}
                maxLength={30}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <View style={{
                width: '100%',
                height: 40,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                padding: 8,
                marginBottom: 16,
                backgroundColor: '#fff',
                justifyContent: "center"


            }}>
                <TextInput
                    style={styles.passwordStyle}
                    placeholder="Password"
                    value={password}
                    maxLength={30}
                    placeholderTextColor={"grey"}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={{ position: "absolute", right: 5 }}
                    onPress={togglePasswordVisibility}>
                    <Eye size={20} active={!isPasswordVisible} color='grey' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                disabled={username === '' || password === ''}
                style={[styles.button, { backgroundColor: username === '' || password === '' ? "grey" : '#007BFF' }]} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // backgroundColor: '#f5f5f5',
        backgroundColor: '#ADD8E6',
    },
    title: {
        fontSize: 32,
        marginVertical: 20,
        color: "#000"
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
        color: "#000"
    },
    passwordStyle: {
        height: 40,
        color: "#000"
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Login;
