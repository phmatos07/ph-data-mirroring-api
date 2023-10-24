import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { Error0001, Error0002, ErrorObject } from './../models/error-object';
import { UserDTO } from "./dto/user.dto";
import { UserEntity } from "./models/user.entity";
import { UserBuilder } from "./user.builder";

@Injectable()
export class UserService {

  private users = new Array<UserEntity>();

  create(user: UserDTO): ErrorObject {
    const userEntity = new UserBuilder(user).upadateId(uuid()).user;
    this.users.push(userEntity);
    return Error0001;
  }

  consult(email: string): UserEntity | ErrorObject {
    const user = this.users.find(user => user.email === email);

    if (user) {
      return user;
    }
    return Error0002;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    return this.users.find(user => user.email === email) !== undefined;
  }

  consultAll(): UserEntity[] {
    return this.users;
  }
}
