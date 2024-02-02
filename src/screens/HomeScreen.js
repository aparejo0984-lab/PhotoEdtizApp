import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
                style={styles.loginButton}
                titleStyle={styles.loginButtonText}
            />
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Button
                title="Sign up"
                onPress={() => {
                    navigation.navigate('CreateAccount');
                }}
                style={styles.signupButton}
                titleStyle={styles.signupButtonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    loginButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    signupText: {
        marginTop: 20,
        fontSize: 16,
    },
    signupButton: {
        marginTop: 10,
    },
    signupButtonText: {
        color: '#3498db', // You can choose a color that fits your design
    },
});

export default HomeScreen;
