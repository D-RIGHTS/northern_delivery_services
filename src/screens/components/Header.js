import React from 'react';

import { View, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native'
import { colors, parameters } from '../../../global/styles';

import { AntDesign } from '@expo/vector-icons';




export default function Header ({title, type, navigation}) {

    return (
        <SafeAreaView style ={styles.header}>
            <View style = {styles.arrow}>
                <AntDesign 
                    name={type} 
                    size={30} 
                    color="white"
                    onPress={() => {navigation.goBack()}}/>
            </View>
            
            <Text style ={styles.headerText}>
                {title}
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText: {
        color: colors.headerText,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 80,
    },
    arrow: {
        marginLeft: 10
}
})