import { Controller, Patch, ParseIntPipe, Param, Body} from '@nestjs/common';
import { UserUpdateService } from 'src/user/application/update/user.update.service';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('user')
export class UserPatchUpdateController {
    constructor(        
        private readonly updateService:UserUpdateService
    ){}

    @Patch(':id')
    update(
        @Param('id') id,
        @Body() updateUser:UpdateUserDto
    ){
        
        return this.updateService.execute(id, updateUser);
    }

}
