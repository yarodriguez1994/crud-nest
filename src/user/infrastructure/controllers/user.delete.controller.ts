import { Controller, Delete, Param } from '@nestjs/common';
import { UserDeleteService } from '../../application/delete/user.delete.service';

@Controller('user')
export class UserDeleteController {

    constructor( private readonly deleteUserService:UserDeleteService) {}

    @Delete(':id')
    remove( @Param('id') id){
        return this.deleteUserService.execute(id);
    }


}