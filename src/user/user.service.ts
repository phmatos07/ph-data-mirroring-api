import { Injectable } from "@nestjs/common";
import { Error0001, Error0002, ErrorObject } from './../models/error-object';
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {

  private users = new Array<UserDTO>();

  create(user: UserDTO): ErrorObject {
    this.users.push(user);
    return Error0001;
  }

  consult(email: string): UserDTO | ErrorObject {
    const user = this.users.find(user => user.email === email);

    if (user) {
      return user;
    }
    return Error0002;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    return this.users.find(user => user.email === email) !== undefined;
  }

  consultAll(): UserDTO[] {
    return this.users;
  }
}
