import React, {useState, useRef} from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text, TextInput } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Button, SocialIcon  } from 'react-native-elements';

import Header from '../components/Header';
import { colors, parameters, title } from '../../../global/styles';


export default function SignInScreen({navigation}) {

    const [ txtInput2Focus, setTxtInput2Focus] = useState();

    const txtInput1 = useRef(1);
    const txtInput2 = useRef(2);

    return(
        <View style={styles.container}>
            <Header title = "My Account" type="arrowleft" navigation = {navigation}/>

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
            
            <View style={{marginHorizontal: 20, marginVertical: 30}}>
                <Button
                    title="Sign In"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={navigation.navigate('HomeScreen')}
                />
            </View>

            <View style = {{alignItems: 'center'}}>
                <Text style = {{ ...styles.text1, textDecorationLine: "underline" }} >Forgot Password?</Text>
            </View>

            <View style = {{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}> OR </Text>
            </View>

            <View style={{marginHorizontal: 20, marginVertical: 30}}>
                <SocialIcon
                    title='Sign In with Facebook'
                    button
                    type='facebook'
                    style = {parameters.styledButtonFB}
                    onPress = {() => {
                        
                    }}
                />
            </View>

            <View style={{marginHorizontal: 20, marginVertical: 3}}>
                <SocialIcon
                    title='Sign In with Google'
                    button
                    type='google'
                    style = {parameters.styledButtonG}
                    onPress = {() => {

                    }}
                />
            </View>

            <View style = {{margin: 10, marginLeft: 20 }}>
                <Text style = {{ ...styles.text2}} >New on Northern Delivery Services?</Text>
            </View>

            <View style = {{alignItems: 'flex-end', marginRight: 30}}>
                <Button
                    title="Create an Account"
                    buttonStyle = {parameters.styledButtonCreate}
                    titleStyle = {parameters.buttonTitleCreate}
                />
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
    text2: {
        color: colors.grey4,
        fontSize: 12 
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