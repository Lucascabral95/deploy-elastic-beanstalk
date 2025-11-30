import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import * as usersService_1 from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: usersService_1.UsersService) {}

  @Get()
  getAll(): usersService_1.User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): usersService_1.User {
    const user = this.usersService.findOne(Number(id));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  create(
    @Body()
    body: {
      name: string;
      email: string;
    },
  ): usersService_1.User {
    return this.usersService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      email?: string;
    },
  ): usersService_1.User {
    const user = this.usersService.update(Number(id), body);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: string): { deleted: boolean } {
    const deleted = this.usersService.remove(Number(id));
    if (!deleted) {
      throw new NotFoundException('User not found');
    }
    return { deleted };
  }
}
