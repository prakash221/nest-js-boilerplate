import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const createdUser = await this.usersService.createUser(createUserDto);
    return createdUser;
  }

  @Put(':id')
  async update(
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    @Param('userId') userId: string,
  ) {
    const updatedUser = await this.usersService.updateUser(
      userId,
      updateUserDto,
    );
    return updatedUser;
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}
