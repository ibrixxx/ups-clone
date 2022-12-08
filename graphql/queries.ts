import {gql} from "@apollo/client";

export const GET_CUSTOMERS = gql`
    query MyQuery   {
        getCustomers {
            name
            value {
                email
                name
            }
        }
    }
`;

export const GET_ORDERS = gql`
    query MyQuery   {
        getOrders {
            value {
                Address
                City
                Lat
                Lng
                carrier
                createdAt
                shippingCost
                trackingId
                trackingItems {
                    items {
                        name
                        item_id
                        price
                        quantity
                    }
                    customer_id
                }
            }
            name
        }
    }
`;
