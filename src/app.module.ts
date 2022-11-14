import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { StripeModule } from './shared/stripe/stripe.module';
import { PaymentModule } from './payment/payment.module';
import { DatabaseModule } from './shared/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWordModule } from './hello-word/hello-word.module';
import { TodoModule } from './todo/todo.module';
import {ApolloServerPluginLandingPageLocalDefault}   from 'apollo-server-core';


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    // DatabaseModule.forRoot(process.env.SERVER_MONGO,process.env.MONGODB,'mongodb',User,true),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: join( process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
        ]
      }),
      TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.SERVER_MONGO,
      database: process.env.MONGODB,
      entities: [User],
      useUnifiedTopology: true,
      synchronize: true,
      // useNewUrlParser: true
    }),  
    StripeModule.forRoot(process.env.STRIPE_SECRET_KEY,{ apiVersion: '2022-08-01' }),
    PaymentModule,
    HelloWordModule,
    TodoModule,

  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}