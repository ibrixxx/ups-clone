import {useQuery} from "@apollo/client";
import {GET_ORDERS} from "../graphql/queries";
import {useEffect, useState} from "react";

const useOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if(!data) return
        const newOrders: Order[] = data.getOrders.map(({value}: OrderResponse) =>
            ({
                ...value
            })
        )
        setOrders(newOrders)
    }, [data])

    return {loading, error, orders}
}

export default useOrders
