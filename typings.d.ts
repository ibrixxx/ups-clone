type Customer = {
    email: string
    name:  string
}

type Order = {
    Address: string,
    City: string,
    Lat: number,
    Lng: number,
    carrier: string,
    createdAt: string,
    shippingCost: number,
    trackingId: string,
    trackingItems: TrackingItem
}

type Item = {
    item_id: number,
    name: string,
    price: number,
    quantity: number
}

type TrackingItem = {
    customer_id: string
    items: Item[]
    customer: Customer
}

type OrderResponse = {
    value: Order
}

type CustomerResponse = {
    name: ID,
    value: Customer
}
