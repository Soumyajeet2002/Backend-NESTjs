import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(@Body() body: { email: string; password: string; role?: Role }) {
    return this.usersService.create(
      body.email,
      body.password,
      body.role ?? Role.USER,
    );
  }
}
