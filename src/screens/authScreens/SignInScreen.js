import React, {useState, useRef} from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text, TextInput } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import Header from '../components/Header';
import { colors, parameters } from '../../../global/styles';


export default function SignInScreen() {

    const [ txtInput2Focus, setTxtInput2Focus] = useState();

    const txtInput1 = useRef(1);
    const txtInput2 = useRef(2);

    return(
        <View style={styles.container}>
            <Header title = "My Account" type="arrowleft"/>

            <View>
                <Text style = {styles.title}>Sign In</Text>
            </View>

            <View style={{alignItems: "center", marginTop:10}}>
                <Text style={styles.text1}> Please enter the email and password below</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>

            <View style={{marginTop:20}}>
                <TextInput placeholder='Email' ref={txtInput1} style = {styles.TextInput1} />
            </View>

            <View style = {styles.TextInput2} >
                <Animatable.View animation={txtInput2Focus?"":"fadeInRight"} duration={400}>
                    <AntDesign name="lock" size={20} color={colors.grey4} />
                </Animatable.View>

                    <TextInput 
                        placeholder='Password' 
                        ref={txtInput2} 
                        style={{width: '80%'}}
                        onFocus={() => {
                            setTxtInput2Focus(false)
                        }}
                        onBlur={() => {
                            setTxtInput2Focus(true)
                        }}
                    />
               
                <Animatable.View animation={txtInput2Focus?"":"fadeInLeft"} duration={400}>
                    <Ionicons name="eye-off-outline" size={20} color={colors.grey4} />
                </Animatable.View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grey4,
        fontSize: 15 
    },
    title: {
        color: '#ff8c52',
        fontSize: 20,
        padding: 10
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        padding: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: 15
    }
})