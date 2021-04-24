import React from 'react';
import {View, Text, Button, StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'



const SigninScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const textInputChange = (val) => {
        if(val.length !== 0) {
            setData({
                ...data,
                email: val,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                email: val,
                check_textInputChange: false
            })
        }
    }
    const handlePasswordChange =(val) => {
        setData({
            ...data,
            password: val
        })
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor = {COLORS.peach} barStyle="light-content"/>
        <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
        animation= "fadeInUpBig"
        style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
        <FontAwesome
        name = "user-o"
        color= {COLORS.black}
        size = {20}
        />
        <TextInput
            placeholder = "Your Email"
            style = {styles.textInput}
            autoCapitalize= "none"
            onChangeText={(val)=>textInputChange(val)}
        />
        { data.check_textInputChange ? 
        <Animatable.View animation="bounceIn">
        <Feather
            name="check-circle"
            color={COLORS.darkgreen}
            size={20}
        />
        </Animatable.View>
        : null      }
        </View>
        <Text style={[styles.text_footer,{marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
        <Feather
        name = "lock"
        color= {COLORS.black}
        size = {20}
        />
        <TextInput
            placeholder = "Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style = {styles.textInput}
            autoCapitalize= "none"
            onChangeText={(val)=>handlePasswordChange(val)}

        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ? 
        <Feather
            name="eye-off"
            color={COLORS.darkgray}
            size={20}
        /> :
        <Feather
            name="eye"
            color={COLORS.darkgray}
            size={20}
        />
        }
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <LinearGradient 
        colors = {[COLORS.blue, COLORS.darkblue]}
        style={styles.signIn}
        >
            <Text style={[styles.textSign,{color: COLORS.white}]}>
            Sign In
            </Text>
        </LinearGradient>
        <TouchableOpacity 
        style={[styles.signIn,{
            borderColor: COLORS.peach,
            borderWidth: 1,
            marginTop: 15,
            width: 350
        }]}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={[styles.textSign,{color: COLORS.peach}]}>Sign up</Text>
        </TouchableOpacity>
        </View>
        </Animatable.View>
        </View>
    )
}
export default SigninScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: COLORS.peach
        },
        header: {
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingBottom: 50
        },
        footer: {
            flex: 3,
            backgroundColor: COLORS.white,
            fontWeight: 'bold',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30
        },
        text_header:{
            color: COLORS.white,
            fontWeight: 'bold',
            fontSize: 30
        },
        text_footer: {
            color: COLORS.black,
            fontSize: 18
        },
        action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray,
            paddingBottom: 5
        },
        textInput: {
            flex: 1,
            marginTop: Platform.OS == "ios" ? 0 : -12,
            paddingLeft: 10,
            color: COLORS.blue
        },
        button: {
            alignItems: 'center',
            marginTop: 50
        },
        signIn :{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        textSign: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
)