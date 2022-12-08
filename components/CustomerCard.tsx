import React from 'react';
import {useTailwind} from 'tailwind-rn';
import useCustomerOrders from "../hooks/useCustomerOrders";
import {useNavigation} from "@react-navigation/native";
import {CustomerScreenNavigationProp} from "../screens/CustomersScreen";
import {Text, TouchableOpacity, View} from "react-native";
import {Card, Icon} from "@rneui/themed";
import {CardTitle} from "@rneui/base/dist/Card/Card.Title";
import {CardFeaturedSubtitle} from "@rneui/base/dist/Card/Card.FeaturedSubtitle";

type Props = {
    email: string,
    name: string,
    userId: string
}

const CustomerCard = ({email, name, userId}: Props) => {
    const tw = useTailwind();
    const {loading, error, orders} = useCustomerOrders(userId)
    const navigation = useNavigation<CustomerScreenNavigationProp>()

    return (
        <TouchableOpacity >
            <Card containerStyle={tw('p-5')}>
                <View style={tw("flex-row justify-between")}>
                    <View>
                        <CardTitle style={tw('text-2xl font-bold ')}>
                            {name}
                        </CardTitle>
                        <View style={tw('items-center')}>
                        <CardFeaturedSubtitle style={{color: 'gray'}}>
                            ID: {' '}
                            <CardFeaturedSubtitle style={{color: 'dodgerblue'}}>
                                {userId}
                            </CardFeaturedSubtitle>
                        </CardFeaturedSubtitle>
                        <Text style={{color: 'gray'}}>
                            {email}
                        </Text>
                        </View>
                    </View>

                    <View style={tw('justify-center items-center')}>
                        <Icon
                            name={'package'}
                            color={'aqua'}
                            type={'feather'}
                            size={33}
                            style={tw('mb-3')}
                        />
                        <Text style={{color: 'black'}}>{loading? 'loading...':orders.length.toString().concat(' x')}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

export default CustomerCard;
