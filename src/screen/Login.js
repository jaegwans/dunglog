import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Login = () => {
    return (
        <StyledLogin>
            <Text>Login</Text>
        </StyledLogin>
    );
};

const StyledLogin = styled.SafeAreaView`
    justify-content: center;
    align-self: center;
    height: 100%;
`;
export default Login;
