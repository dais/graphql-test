import { Controller, Get, Post, Delete, Patch, Res, Req, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }

  @Get(':userId')
  getUser(@Param('userId') id: string): string {
    return `userId: ${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    res.status(HttpStatus.CREATED).send();
  }
}
