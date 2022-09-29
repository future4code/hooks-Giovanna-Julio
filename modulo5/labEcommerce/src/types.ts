export type userReg = {
    id: string,
    name: string,
    email: string,
    password: string
};

export type productReg = {
    id: string,
    name: string,
    price: number,
    image_url: string
};

export type purchaseReg = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: string,
    total_price: number,
};

