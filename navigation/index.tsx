import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./TabNavigator";
import CustomerOrderScreen from "../screens/CustomerOrderScreen";
import OrderScreen from "../screens/OrderScreen";

export type RootStackParamList = {
    Main: undefined,
    Modal: {userId: string, name: string}
    Order: {order: Order}
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {

    return (
        // @ts-ignore
        <RootStack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Main">
            {// @ts-ignore
                <RootStack.Group>
                    <RootStack.Screen name={'Main'} component={TabNavigator}/>
                </RootStack.Group>
            }
            {// @ts-ignore
                <RootStack.Group screenOptions={{presentation: 'Modal'}}>
                    <RootStack.Screen options={{headerShown: false}} name={'Modal'} component={CustomerOrderScreen}/>
                </RootStack.Group>
            }

            {// @ts-ignore
                <RootStack.Group>
                    <RootStack.Screen options={{headerShown: false}} name={'Order'} component={OrderScreen}/>
                </RootStack.Group>
            }
        </RootStack.Navigator>
    );
};

export default RootNavigator;

