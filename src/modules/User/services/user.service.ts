import { Injectable } from '@nestjs/common';
import UserRepository from "../repositories/user.repository";
import User from "../entities/User";


@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async findOne(id: string): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

}
