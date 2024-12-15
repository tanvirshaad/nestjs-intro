import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./DTOs/create-user.dto";
import { GetUsersParamDto } from "./DTOs/get-users-param.dto";
import { UsersService } from "./Providers/users.service";


@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}
    @Get('/:id?')
    public getUsers(@Param() getUserParamDto:GetUsersParamDto | undefined, 
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:any) {
        console.log(getUserParamDto);
        console.log(limit);
   
        

        return this.usersService.findAll(getUserParamDto, limit);
    }

    @Post()
    public createUser(@Body() createUSerDto:CreateUserDto) {
        return this.usersService.createUser(createUSerDto);
    }
}