import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { Icon } from '@rneui/themed';

export type TabStackParamList ={
    Customers: undefined,
    Orders: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC = () => {

    return (
        // @ts-ignore
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarActiveTintColor: 'darkkhaki',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused, color, size}) => {
                if(route.name === 'Customers')
                    return (
                        <Icon
                            name='users'
                            type='font-awesome'
                            color={focused? 'darkkhaki':'gray'}
                        />
                    )
                else if(route.name === 'Orders')
                    return (
                        <Icon
                            name='box-open'
                            type='font-awesome-5'
                            color={focused? 'darkkhaki':'gray'}
                        />
                    )
            }
        })}>
            <Tab.Screen name={'Customers'} component={CustomersScreen} />
            <Tab.Screen name={'Orders'} component={OrdersScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

