import {useQuery} from "@apollo/client";
import {GET_ORDERS} from "../graphql/queries";
import {useEffect, useState} from "react";

const useCustomerOrders = (userId: string) => {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if(!data) return
        const newOrders: Order[] = data.getOrders.map(({value}: OrderResponse) =>
            ({
                ...value
            })
        )
        const filteredOrders = newOrders.filter(order => order.trackingItems.customer_id === userId)
        setOrders(filteredOrders)
    }, [data, userId])

    return {loading, error, orders}
}

export default useCustomerOrders
