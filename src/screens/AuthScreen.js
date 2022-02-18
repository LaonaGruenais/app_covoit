import { Box, Center, Image, Text } from "native-base";
import React from "react";
import LoginForm from "../components/forms/LoginForm";
import Images from '../images/Images';

function AuthScreen() {
    return (
        <Box style={{height: 500}}>
            <Center>
            <Text style={{color: '#000'}}>
                AUTH SCREEN
                </Text>
                <Image source={Images.logoLight} size='2xl' resizeMode='contain' alt='App Logo'/>
                <LoginForm />
            </Center>
        </Box>
    )
}

export default AuthScreen