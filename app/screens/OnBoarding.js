import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            showSkip={false}
            onSkip={() => navigation.replace("StartScreen")}
            onDone={() => navigation.navigate("StartScreen")}
            titleStyles={{ fontWeight: 'bold' }}
            containerStyles={{overflow: 'hidden', flex: 1, alignItems: 'center', justifyContent: 'center'}}
            pages={[
                {
                    backgroundColor: '#2a93d5',
                    image: <Image source={require('../assets/images/circle.png')} />,
                    title: 'Screen 1',
                    subtitle: 'Screen 1 description',
                },
                {
                    backgroundColor: '#2176ab',
                    image: <Image source={require('../assets/images/circle.png')} />,
                    title: 'Screen 2',
                    subtitle: 'Screen 2 description',
                },
                {
                    backgroundColor: '#1d6a99',
                    image: <Image source={require('../assets/images/circle.png')} />,
                    title: 'Screen 3',
                    subtitle: 'Screen 3 description',
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
