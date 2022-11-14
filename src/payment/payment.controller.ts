import { Body, Controller,Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';


@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService){}

    @Get('products')
    listProducts(){
        return this.paymentService.listProducts();
    }

    @Get('customers')
    listCustomers(){
        return this.paymentService.listCustomers();
    }

    @Post('checkout')
    checkout(@Body() checkoutItem ){
        return this.paymentService.checkout(checkoutItem);
    }

}
