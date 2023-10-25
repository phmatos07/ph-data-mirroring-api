import { Injectable } from "@nestjs/common";
import { ZERO } from "src/models/default-values.const";
import { v4 as uuid } from "uuid";
import { Error0001, Error0002, ErrorObject } from './../models/error-object';
import { UserBuilder } from "./builder/user.builder";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserEntity } from "./models/user.entity";

@Injectable()
export class UserService {

  private users = new Array<UserEntity>();

  create(user: CreateUserDTO): ErrorObject {
    const userEntity = new UserBuilder(user).upadateId(uuid()).user;
    this.users.push(userEntity);
    return Error0001;
  }

  consult(email: string): UserEntity | ErrorObject {
    const index = this.consulIndex(email);

    if (index >= ZERO) {
      return this.users[index];
    }
    return Error0002;
  }

  update(id: string, user: UpdateUserDTO) {

    const index = this.consulIndex(id);
    const _user = new UserBuilder(user).user;

    if (index >= ZERO) {
      Object.keys(_user).forEach((key) => {
        if (key === 'id') return;
        this.users[index][key as keyof UserEntity] = _user[key as keyof UserEntity];
      });
      return this.users;
    }
    return Error0002;
  }

  delete(id: string) {

    const index = this.consulIndex(id);

    if (index >= ZERO) {
      return this.users.splice(index, 1);
    }
    return Error0002;
  }

  consultAll(): UserEntity[] {
    return this.users;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }

  private consulIndex(idOrEmail: string): number {
    return this.users.findIndex(user => user.id === idOrEmail || user.email === idOrEmail);
  }
}
