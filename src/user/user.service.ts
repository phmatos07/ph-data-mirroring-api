import { Injectable } from "@nestjs/common";
import { Error0001, Error0002 } from "src/models/error-object.const";
import { ErrorObject } from "../models/error-object";
import { UserDTO } from "../models/user.dto";

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

  consultAll(): UserDTO[] {
    return this.users;
  }
}
