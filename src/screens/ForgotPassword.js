import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');

    const handleResetPassword = () => {
        // Implement your password reset logic here

        // For this example, you can navigate to a confirmation screen
        // navigation.navigate('PasswordResetConfirmation');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')} // Replace with the path to your logo image
                style={styles.logo}
            />
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>
                Enter your username or email to reset your password.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Username or Email"
                onChangeText={(text) => setUsernameOrEmail(text)}
            />
            <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
});

export default ForgotPasswordScreen;
