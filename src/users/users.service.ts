import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll() {
    const allUsers = await this.userModel.find().select('-password');
    return allUsers;
  }

  async findOne(_id: string) {
    const user = await this.userModel.findById(_id).select('-password');
    return user;
  }

  async findByName(name: string) {
    const user = await this.userModel.findOne({ name: name });
    return user;
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(_id, updateUserDto);
    const updatedUser = await this.userModel.findById(_id).select('-password');
    return updatedUser;
  }

  async remove(_id: string) {
    const deletedUser = await this.userModel
      .findByIdAndDelete(_id)
      .select('-password');
    return deletedUser;
  }
}
