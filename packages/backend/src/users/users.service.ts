import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(): string {
    return 'Hello World!';
  }

  findAll(): string {
    return 'Hello World!';
  }
}
