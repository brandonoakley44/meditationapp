import AppGradient from '@/components/AppGradient';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

const Affirmations = () => {
    return (
        <View className='flex-1'>
            <AppGradient
                colors={["#2e1f58", "#54426b", "#a790af" ]}
            >
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    <Text className="text-zinc-50 text-3xl font-bold">Change your beliefs with affirmations</Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery key={g.title} title={g.title} previews={g.data} />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Affirmations;
