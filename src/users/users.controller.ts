import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { UserService } from './users.service';
  import { CreateUserDto } from './users.dto';
  import { Users } from './users.schema';
import { LoginDto } from './userslogin.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly users: UserService) {}
  
    @Get()
    async findAll(): Promise<Users[]> {
      return this.users.findAll();
    }
  
    @Post()
    async createNewUser(
      @Body()
      newUser: CreateUserDto,
    ): Promise<Users> {
      const createdUser = await this.users.createNewUser(newUser);
      return createdUser;
    }
  
    @Get('/login')
    async signin(
      @Body()
      loginDto: LoginDto,
    ): Promise<Users> {
      return this.users.signin(loginDto);
    }
  
    @Delete(':id')
    async deleteUser(
      @Param('id')
      id: string,
    ): Promise<Users> {
      return this.users.deleteUser(id);
    }
  
    @Put(':id')
    async updateUser(
      @Param('id') id: string,
      @Body() user: CreateUserDto,
    ): Promise<Users> {
      return this.users.updateUser(id, user);
    }
  }
  