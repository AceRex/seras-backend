import { Injectable } from '@nestjs/common';
import { Users } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private userModel: mongoose.Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    const AllUsers = await this.userModel.find();
    return AllUsers;
  }

  async createNewUser(newUser: Users): Promise<Users> {
    const res = await this.userModel.create(newUser);
    return res;
  }

  async findUser(id: string): Promise<Users> {
    const res = await this.userModel.findById(id);
    return res;
  }

  async deleteUser(id: string): Promise<Users> {
    const res = await this.userModel.findByIdAndDelete(id);
    return res;
  }

  async updateUser(id: string, user: CreateUserDto): Promise<Users> {
    const res = await this.userModel.findByIdAndUpdate(id, user, {new: true}); 
    return res;
  }
}
