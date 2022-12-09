import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useTailwind} from 'tailwind-rn';


const CustomerOrdersScreen: React.FC = () => {
    const tw = useTailwind();

    return (
            <SafeAreaView>
                <Text style={tw('text-red-500')}>Customers Screen</Text>
        </SafeAreaView>
    );
};

export default CustomerOrdersScreen;
