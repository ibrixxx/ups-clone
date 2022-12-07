import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./TabNavigator";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
    Main: undefined,
    Modal: {userId: string, name: string}
    Order: {order: any}
}

const RootNavigator: React.FC = () => {

    return (
        // @ts-ignore
        <RootStack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Main">
            {// @ts-ignore
                <RootStack.Group>
                    <RootStack.Screen name={'Main'} component={TabNavigator}/>
                </RootStack.Group>
            }
        </RootStack.Navigator>
    );
};

export default RootNavigator;

