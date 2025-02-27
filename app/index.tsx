import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {StatusBar } from 'expo-status-bar'

import { LinearGradient } from 'expo-linear-gradient';
import AppGradient from '@/components/AppGradient';

import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';

const Index = () => {

  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className='flex-1'
      >
        
        <AppGradient
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
            <SafeAreaView className='flex-1 px-2 mb-4 justify-between'>
                <View>
                  <Text className="text-center text-white font-bold text-4xl">Simple meditation</Text>
                  <Text className='text-center text-white text-regular text-2xl mt-3'>
                    Simplifying meditation for everyone
                  </Text>
                </View>
                <View className='px-3'>
                <CustomButton
                    onPress={() => router.push('/nature-meditate')}
                    title="Get Started"
                />
                </View>
          
                <StatusBar style="light" />
          
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>

    </View>
  );
}


export default Index;
