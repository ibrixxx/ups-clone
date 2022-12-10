import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Card, Divider, Icon} from "@rneui/themed";
import MapView, {Marker} from "react-native-maps";

type DeliveryProps = {
    order: Order
}

const DeliveryCard = ({order}: DeliveryProps) => {
    const tw = useTailwind();

    return (
        <Card containerStyle={[
            tw('rounded-lg my-2'),
            {
                padding: 0,
                paddingTop: 15,
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                backgroundColor: '#59C1CC'
            }
        ]}>
            <View>
                <Icon
                    type={'entypo'}
                    name={'box'}
                    size={50}
                    color={'white'}
                />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', marginBottom: 5, fontWeight: 'bold'}}>
                        {order.carrier} - {order.trackingId}
                    </Text>
                    <Text style={{color: 'white', marginBottom: 10, fontSize: 18}}>
                        Expected delivery: {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                </View>

                <Divider style={tw('my-2')} color='white' />

                <View style={tw('mx-auto')}>
                    <Text style={tw('text-base text-center text-white')}>
                        Address
                    </Text>
                    <Text style={tw('text-sm text-center text-white')}>
                        {order.Address}, {order.City}
                    </Text>
                    <Text style={tw('text-sm text-center italic text-white')}>
                        Shipping Const: ${order.shippingCost}
                    </Text>
                </View>

                <Divider style={tw('my-2')} color='white' />

                <View style={tw('p-5')}>
                    {order.trackingItems.items.map((item) => (
                        <View key={item.item_id} style={tw('flex-row justify-between items-center')}>
                            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
                            <Text style={tw('text-xl text-white')}>{item.quantity} x</Text>
                        </View>
                    ))}
                </View>

                {
                // @ts-ignore
                <MapView
                    initialRegion={{
                        latitude: order.Lat,
                        longitude: order.Lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    style={[tw('w-full'), {height: 200}]}
                >
                    {
                        (order.Lat && order.Lng) ?
                            // @ts-ignore
                            <Marker
                                coordinate={{
                                    latitude: order.Lat,
                                    longitude: order.Lng
                                }}
                                title={'Delivery location'}
                                description={order.Address}
                                identifier={'destination'}
                            /> : null
                    }
                </MapView>
                }
            </View>
        </Card>
    );
};

export default DeliveryCard;
