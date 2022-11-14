interface Checkout {
    amount: string,
    currency: string,
    payment_method?:number,
    description?: string,
}

export type CheckoutItem = Checkout[]; 