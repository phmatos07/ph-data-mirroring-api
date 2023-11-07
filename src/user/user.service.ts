import { Injectable } from "@nestjs/common";
import { CODE_001, CODE_002, CODE_003 } from "src/models/all-codes.const";
import { ZERO } from "src/models/default-values.const";
import { v4 as uuid } from "uuid";
import { ApiError } from "../models/api-error";
import { ApiSuccess } from "../models/api-success";
import { UserBuilder } from "./builder/user.builder";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { DELETED_USER, REGISTRATION_MADE, UNREGISTERED_USER, UPDATED_USER } from "./models/api-messages.const";
import { UserEntity } from "./models/user.entity";

@Injectable()
export class UserService {

  private users = new Array<UserEntity>();

  async create(user: CreateUserDTO): Promise<ApiSuccess> {
    const userEntity = new UserBuilder(user).upadateId(uuid()).user;
    this.users.push(userEntity);
    return new ApiSuccess(userEntity.id, REGISTRATION_MADE);
  }

  async consult(email: string): Promise<UserEntity | ApiError> {
    const index = this.consulIndex(email);

    if (index >= ZERO) {
      return this.users[index];
    }
    return new ApiError(CODE_001, UNREGISTERED_USER);
  }

  async update(id: string, user: UpdateUserDTO): Promise<ApiSuccess | ApiError> {

    const index = this.consulIndex(id);
    const _user = new UserBuilder(user).user;

    if (index >= ZERO) {
      Object.keys(_user).forEach((key) => {
        if (key === 'id') return;
        this.users[index][key as keyof UserEntity] = _user[key as keyof UserEntity];
      });
      return new ApiSuccess(id, UPDATED_USER);
    }
    return new ApiError(CODE_002, UNREGISTERED_USER);
  }

  async delete(id: string): Promise<ApiSuccess | ApiError> {

    const index = this.consulIndex(id);

    if (index >= ZERO) {
      return new ApiSuccess(id, DELETED_USER);
    }
    return new ApiError(CODE_003, UNREGISTERED_USER);
  }

  // TODO: Reformular ou remover esse método para trazer apenas informações necessárias
  async consultAll(): Promise<UserEntity[]> {
    return this.users;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }

  private consulIndex(idOrEmail: string): number {
    return this.users.findIndex(user => user.id === idOrEmail || user.email === idOrEmail);
  }
}
