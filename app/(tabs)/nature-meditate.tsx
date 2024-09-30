import AppGradient from '@/components/AppGradient';
import React from 'react';
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { MEDITATION_DATA } from '@/constants/MeditationData';
import  MEDITATION_IMAGES  from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const NatureMeditate = () => {
    return (
        <View className='flex-1'>
            <AppGradient
                colors={["#161B2E", "#0A4D4A", "#766E67"]}
            >
                <View className='mb-6 mx-2'>
                    <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome, Brandon</Text>
                    <Text
                        className='text-indigo-100 text-xl font-md'
                    >
                        Start your meditation practice today
                    </Text>
                </View>
                <View className='mx-2'>
                    <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={MEDITATION_DATA}
                    className='mb-20'
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Pressable 
                        onPress={() => router.push(`/meditate/${item.id}`)}
                        className='h-48 my-3 rounded-md overflow-hidden'>
                            <ImageBackground
                                source={MEDITATION_IMAGES[item.id - 1]}
                                resizeMode='cover'
                                className='flex-1 rounded-lg justify-center'
                            >
                                <LinearGradient
                                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                                    className='flex-1 justify-center items-center'
                                >    
                                    <Text className='text-gray-100 text-3xl font-bold text-center'>{item.title}</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Pressable>
                    )}
                    />
                </View>
            </AppGradient>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default NatureMeditate;
