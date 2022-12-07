import React, {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigation/TabNavigator";
import {RootStackParamList} from "../navigation";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Image} from "@rneui/themed";
import {Input} from "@rneui/base";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, 'Customers'>,
    NativeStackNavigationProp<RootStackParamList>
    >

const CustomersScreen: React.FC = () => {
    const navigation = useNavigation<CustomerScreenNavigationProp>()
    const tw = useTailwind();
    const [search, setSearch] = useState<string>('')

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerShown: false
            }
        )
    }, [])

    return (
        <ScrollView style={{backgroundColor: '#59C1cc', paddingHorizontal: '5%'}}>
            <Image
                source={{uri: 'https://links.papareact.com/3jc'}}
                containerStyle={tw('w-full h-64')}
                PlaceholderContent={<ActivityIndicator />}
            />
            {
            // @ts-ignore
            <Input
                placeholder={'Search by customer'}
                value={search}
                onChangeText={setSearch}
                containerStyle={tw('bg-white pt-5 pb-0 px-5 rounded-xl')}
            />
            }
        </ScrollView>
    );
};

export default CustomersScreen;
