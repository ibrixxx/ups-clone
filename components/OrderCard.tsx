import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from "@react-navigation/native";
import {Text, TouchableOpacity, View} from "react-native";
import {Card, Icon} from "@rneui/themed";
import {OrderScreenNavigationProp} from "../screens/OrdersScreen";

type Props = {
    item: Order,
}

const OrderCard = ({item}: Props) => {
    const tw = useTailwind();
    const navigation = useNavigation<OrderScreenNavigationProp>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Order', {order: item})}>
            <Card containerStyle={tw('p-5')}>
                <View style={tw("flex-row justify-between items-center")}>
                    <View>
                        <Icon
                            name={'truck-delivery'}
                            color={'firebrick'}
                            type={'material-community'}
                        />
                        <Text style={{fontSize: 10, color: 'gray'}}>
                            {new Date(item.createdAt).toLocaleDateString()}
                        </Text>
                    </View>

                    <View>
                        <Text style={{fontSize: 10, color: 'gray'}}>{item.carrier} - {item.trackingId}</Text>
                        <Text style={tw('text-gray-500 text-lg')}>{item.trackingItems?.customer?.name}</Text>
                    </View>

                    <View style={tw('flex-row items-center')}>
                        <Text style={[tw('text-sm'), {color: 'firebrick'}]}>
                            {item.trackingItems.items.length} x
                        </Text>
                        <Icon style={tw('ml-2')} name={'box'} type={'feather'} />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

export default OrderCard;
