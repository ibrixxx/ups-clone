import React, {useLayoutEffect} from 'react';
import {useTailwind} from 'tailwind-rn';
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {Text, TouchableOpacity, View} from "react-native";
import {OrderScreenNavigationProp} from "./OrdersScreen";
import {RootStackParamList} from "../navigation";
import DeliveryCard from "../components/DeliveryScreen";

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>

const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrderScreenNavigationProp>()
    const {params: { order }} = useRoute<OrderScreenRouteProp>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: '#EB6A7C',
            headerTitleStyle: {color: 'black'},
            headerBackTitle: 'Deliveries'
        })
    }, [order])

    return (
        <View style={tw('-mt-2')}>
            <DeliveryCard order={order} fullwidth/>
        </View>
    );
};

export default OrderScreen;
