import React, {useState} from 'react';

import { TouchableOpacity,View, StyleSheet, Dimensions, Text, ScrollView, FlatList, Pressable, Image} from 'react-native'
import { Icon } from 'react-native-elements';

import HomeHeader from './components/HomeHeader';
import { colors, parameters } from '../../global/styles';
import { filterData, restaurantsData } from '../../global/Data';
import FoodCard from './components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({}) {

    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState('0');

    return (
        <View style={styles.container}>
           
                <HomeHeader />

                <ScrollView
                    stickyHeaderIndices ={[0]}
                    showVerticalScrollIndicator = {true}
                >

                    <View>

                        <View>
                            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        setDelivery(true)
                                    }}
                                >
                                    <View  style={{...styles.deliveryButton, backgroundColor: delivery?colors.buttons : colors.grey4}}>
                                        <Text style={styles.deliveryText}>
                                            Delivery
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        setDelivery(false)
                                    }}
                                >
                                    <View  style={{...styles.deliveryButton, backgroundColor: delivery?colors.grey4 : colors.buttons}}>
                                        <Text style={styles.deliveryText}>
                                            Pick Up
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.filterView}>
                            {/* Location Start */}
                            <View style={styles.addressView}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15  }}>
                                    <Icon 
                                        type='material-community'
                                        name='map-marker'
                                        color= {colors.grey1}
                                        size= {26}
                                    />

                                    <Text style={{marginLeft:5}}>
                                        35 Cardinal Dr, SK
                                    </Text>
                                </View>
                            </View>
                            <View style ={styles.clockView}>
                                    <Icon 
                                        type='material-community'
                                        name='clock-time-four'
                                        color= {colors.grey1}
                                        size= {26}
                                    />
                                <Text>
                                    Now
                                </Text>
                            </View>
                        </View>
                        
                        <View>
                        <Icon 
                                        type='material-community'
                                        name='tune'
                                        color= {colors.grey1}
                                        size= {26}
                                    />
                        </View>

                            {/* Location Ends */}
                        </View>

                    </View>

                    <View style ={styles.headerTxtView}>
                        <Text style={styles.headerTxt}>
                            Categories
                        </Text>
                    </View> 

                    <View>
                        <FlatList 
                            horizontal ={true}
                            showsHorizontalScrollIndicator = {false}
                            data = {filterData}
                            keyExtractor={(item) =>item.id}
                            extraData={indexCheck}
                            renderItem={({item, index})=> (
                                <Pressable
                                    onPress={()=> {setIndexCheck(item.id)}}
                                >
                                    <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                        <Image 
                                            style={{height: 60, borderRadius: 30, width: 60}}
                                            source = { item.image}
                                        />
                                        <View>
                                            <Text style={indexCheck === item.id ? {...styles.smallCardTxtSelected} : {...styles.smallCardTxt}}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>  
                    <View style ={styles.headerTxtView}>
                        <Text style={styles.headerTxt}>
                            Free Delivery Now
                        </Text>
                    </View>

                    <View>
                        <FlatList
                            style={{marginTop: 10, marginBottom: 10}}
                            horizontal = {true}
                            data = {restaurantsData}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator = { false}

                            renderItem = {({item})=>(
                                <View style = {{marginRight: 5}}>
                                    <FoodCard 
                                        screenWidth={SCREEN_WIDTH*0.8}
                                        images = {item.images}
                                        restaurantName = {item.restaurantName}
                                        farAway={item.farAway}
                                        businessAddress={item.businessAddress}
                                        averageReview={item.averageReview}
                                        numberOfReview={item.numberOfReviews}
                                    /> 
                                </View>
                            )}
                        />
                    </View>


                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    }, 
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    }, 
    filterView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        margin: 10
    },
    clockView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: 20, 
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20 
    },
    addressView: {
        flexDirection: 'row', 
        backgroundColor: colors.grey5, 
        borderRadius: 15, 
        paddingVertical: 5,
        justifyContent: 'space-evenly', 
        paddingHorizontal: 20
    },
    headerTxt: {
        color: colors.grey2, 
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    headerTxtView: {
        backgroundColor: colors.grey5,
        paddingVertical: 5
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardTxtSelected : {
        fontWeight: 'bold',
        color: colors.cardbackground
    },
    smallCardTxt : {
        fontWeight: 'bold',
        color: colors.grey2
    } 
})