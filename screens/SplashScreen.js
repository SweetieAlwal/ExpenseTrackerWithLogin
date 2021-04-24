import React from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Animatable.Image
        animation="bounceIn"
        duration= {1500}
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode='contain'
        />
        </View>
        <Animatable.View style={styles.footer}
        animation = "fadeInUpBig">
        <Text style={styles.title}>ORganize your tasks!</Text>
        <Text style={styles.text}>Sign in with your account</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <LinearGradient 
            colors={[COLORS.blue, COLORS.darkblue]}
            style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons
                    name = "navigate-next"
                    color = {COLORS.white}
                    size = {20}
                />
            </LinearGradient>
        </TouchableOpacity>
        </View>
        </Animatable.View>
        </View>
    )
}
export default SplashScreen;
const {height} = Dimensions.get("screen");
const height_logo = height*0.10;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: COLORS.peach
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 1,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30
        },
        logo: {
            width: height_logo,
            height: height_logo
        },
        title: {
            color: COLORS.darkblue,
            fontSize: 30,
            fontWeight: 'bold'
        },
        text: {
            color: COLORS.black,
            marginTop: 5
        },
        button: {
            alignItems: 'flex-end',
            marginTop: 30
        },
        signIn: {
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
        },
        textSign: {
            color: COLORS.white,
            fontWeight: 'bold'
        }
    }
)