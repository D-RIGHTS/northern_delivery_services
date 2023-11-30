import React, {useState, useRef} from 'react';
import { View, StyleSheet, Dimensions, Text, Image, SafeAreaView } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Button, SocialIcon  } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import { colors, parameters, title } from '../../../global/styles';
import benz from '../../../assets/benz.jpeg';
import bentley from '../../../assets/bentley.jpeg';
import audi from '../../../assets/audi.jpeg';
import bmw from '../../../assets/bmw.jpg';

export default function SignInWelcomeScreen({navigation}) {

    
    return (
        <SafeAreaView style ={{flex: 1}}>

            <View style = {{ flex: 3, alignItems: 'center', paddingTop: 20}}>
                <Text style = {{fontSize: 26, color: "orange"}}>Discover Deals in your</Text>
                <Text style = {{fontSize: 26, color: "orange"}}>area</Text>
            </View>

            <View style = {{flex: 4, justifyContent: "center", alignItems: "center"}}>
                <Swiper autoplay={true}>

                    <View style = {styles.slide1}>
                        <Image source={bentley} alt="bentley" style={{height: "100%", width: "100%"}}/>
                    </View>

                    <View style = {styles.slide1}>
                        <Image source={benz} alt="benz" style={{height: "100%", width: "100%"}}/>
                    </View>

                    <View style = {styles.slide1}>
                        <Image source={audi} alt="audi" style={{height: "100%", width: "100%"}}/>
                    </View>

                    <View style = {styles.slide1}>
                        <Image source={bmw} alt="bmw" style={{height: "100%", width: "100%"}}/>
                    </View>
                </Swiper>
            </View>

            <View style={{flex:4, justifyContent: "flex-end"}}>

                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                    <Button
                        title="Sign In"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress = {() => {
                             navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style={{marginHorizontal: 20, marginVertical: 10}}>
                    <Button
                        title="Create your Account"
                        buttonStyle = {parameters.styledButtonCreate1}
                        titleStyle = {parameters.buttonTitleCreate1}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
        
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
})