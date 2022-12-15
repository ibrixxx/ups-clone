import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, SafeAreaView, ScrollView, Image, View, ActivityIndicator} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigation/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation";
import useOrders from "../hooks/useOrders";
import {Button} from "@rneui/themed";
import OrderCard from "../components/OrderCard";

export type OrderScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, 'Orders'>,
    NativeStackNavigationProp<RootStackParamList>
>

const OrdersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrderScreenNavigationProp>()
    const {loading, error, orders} = useOrders()
    const [asc, setAsc] = useState<boolean>(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        console.log(orders)
    }, [orders])

    if(loading)
        return <ActivityIndicator color={'firebrick'} style={tw('items-center')} />

    return (
        <ScrollView style={{backgroundColor: '#EB6A7C', paddingTop: 10}}>
            <Image
                source={{uri: 'https://links.papareact.com/m51'}}
                style={tw('w-full h-64 pt-5')}
            />

            <View>
                <Button
                    color={'pink'}
                    titleStyle={{color: 'gray', fontWeight: '400'}}
                    style={[tw('py-2 px-5')]}
                    onPress={() => setAsc(val => !val)}
                >
                    {asc? 'Showing: Oldest first':'Showing: Most recent first'}
                </Button>
            </View>

            {
                orders?.sort((a, b) => {
                    if (asc) {
                        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
                    }
                    return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
                }).map(order => <OrderCard key={order.trackingId} item={order}/>)
            }
        </ScrollView>
    );
};

export default OrdersScreen;
