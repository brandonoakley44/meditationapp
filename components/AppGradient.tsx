import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './Content';

const AppGradient = ({
     children,
     colors }: { 
     children: any
     colors: string[] }) => {
    return (
        <LinearGradient colors={colors} className='flex-1'>
            <Content>{children}</Content>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({})

export default AppGradient;
