import { Injectable, Inject } from '@nestjs/common';
import Stripe from 'stripe';
import { CheckoutItem } from './checkout.model';

@Injectable()
export class PaymentService {
    constructor(@Inject('STRIPE_CLIENT') private readonly stripe:Stripe){}

    listProducts(){
        return this.stripe.products.list();
    }
    
    listCustomers(){
        return this.stripe.customers.list();
    }

    async checkout(checkoutItem:CheckoutItem):Promise<any> {
        console.log(checkoutItem);
        // return this.stripe.paymentIntents.create({
            // amount:'5',
            // currency.checkoutItem.currency,
            // payment_method_types:['card']

        // })        

    }

}
