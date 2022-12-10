import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, View, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {CompositeNavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigation/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation";
import {Icon} from "@rneui/themed";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryScreen";

type ModalScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, 'Modal'>>

type ModalScreenRootProp = RouteProp<RootStackParamList, 'Modal'>

const CustomerOrdersScreen: React.FC = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>()
    const {params: {userId, name}} = useRoute<ModalScreenRootProp>()
    const {loading, error, orders} = useCustomerOrders(userId)

    return (
            <SafeAreaView style={tw('mt-5')}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw('top-5 right-5 z-10 absolute')}>
                    <Icon name={'closecircle'} type={'antdesign'} />
                </TouchableOpacity>

                <View style={{marginTop: 10}}>
                    <View style={{paddingHorizontal: 5, borderBottomWidth: 1, borderBottomColor: 'dodgerblue', paddingBottom: 15}}>
                        <Text style={[tw('text-center text-xl font-bold'), {color: 'dodgerblue'}]}>{name}</Text>
                        <Text style={tw('text-center italic text-sm')}>deliveries</Text>
                    </View>
                </View>

                <FlatList
                    contentContainerStyle={{paddingBottom: 20}}
                    data={orders}
                    keyExtractor={order => order.trackingId}
                    renderItem={({item: order}) => <DeliveryCard order={order} />}
                />
            </SafeAreaView>
    );
};

export default CustomerOrdersScreen;
