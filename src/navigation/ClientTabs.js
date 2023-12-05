import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

import { colors } from '../../global/styles';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (

        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor: colors.buttons
            }}
            >

            {/* Start Home Screen */}

            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel : "Home",
                        tabBarIcon: ({color, size}) =>(
                            <Icon 
                                name = "home"
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                         
                    }
                }
            />

            {/* End Home Screen */}

            {/* Start Search Screen */}

            <ClientTabs.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon: ({color, size}) =>(
                            <Icon 
                                name = "search"
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                         
                    }
                }
            />

            {/* End Search Screen */}

            {/* Start My Orders */}

            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color, size}) =>(
                            <Icon 
                                name = "view-list"
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                         
                    }
                }
            />

            {/* End My Orders */}

            {/* Start My Orders */}

            <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color, size}) =>(
                            <Icon 
                                name = "person"
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                         
                    }
                }
            />

            {/* End My Orders */}

           
        </ClientTabs.Navigator>
    )
}