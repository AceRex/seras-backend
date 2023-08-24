import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateUserDto } from './users.dto';
import { LoginDto } from './userslogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private userModel: mongoose.Model<Users>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<Users[]> {
    const AllUsers = await this.userModel.find();
    return AllUsers;
  }

  async createNewUser(newUser: Users): Promise<{ token: string }> {
    const res = await this.userModel.create(newUser);
    const token = this.jwtService.sign({
      user: newUser.FirstName.concat(newUser.LastName),
    });
    return { token };
  } 

  async signin(loginDto: LoginDto): Promise<Users> {
    const res = await this.userModel.findOne(loginDto);
    if (!res) {
      throw new UnauthorizedException('!Invalid email or password');
    }
    return res;
  }

  async deleteUser(id: string): Promise<Users> {
    const res = await this.userModel.findByIdAndDelete(id);
    return res;
  }

  async updateUser(id: string, user: CreateUserDto): Promise<Users> {
    const res = await this.userModel.findByIdAndUpdate(id, user, { new: true });
    return res;
  }
}
