import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserFindAllService } from '../../application/findAll/user.findAll.service';
import { UserFindOneService } from '../../application/findOne/user.findOne.service';

@Controller('user')
export class UserGetController {
    constructor(private readonly findAllService:UserFindAllService,
                private readonly userFindOneService:UserFindOneService ){}

    @Get('all')
    findAll() { 
        return this.findAllService.execute();
    }

                    
    @Get(':id')
    findOne( @Param('id') id ) {
        return this.userFindOneService.execute(id);
    }


}
