import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({})
export class DatabaseModule {

    static forRoot(urlConnect: string, database: string , typeDatabase: any, entity: any, synchronize: boolean ) : DynamicModule{

        TypeOrmModule.forRoot ({
            type: typeDatabase,
            url: urlConnect,
            database: database,
            entities: [entity],
            useUnifiedTopology: true,
            synchronize: synchronize
        })
    
        return {
            module: DatabaseModule,
            providers: [TypeOrmModule],
            exports: [TypeOrmModule],
            global: true
        }

    }

}
