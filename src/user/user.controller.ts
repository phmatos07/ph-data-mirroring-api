import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiError } from "../models/api-error";
import { ApiSuccess } from "../models/api-success";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserEntity } from "./models/user.entity";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {

  constructor(
    private service: UserService
  ) { }

  @Post()
  async create(@Body() request: CreateUserDTO): Promise<ApiSuccess> {
    return this.service.create(request);
  }

  @Get('/:id')
  async consult(@Param('id') id: string): Promise<UserEntity | ApiError> {
    return this.service.consult(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() request: UpdateUserDTO): Promise<ApiSuccess | ApiError> {
    return this.service.update(id, request);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string):Promise<ApiSuccess | ApiError> {
    return this.service.delete(id);
  }

  @Get('')
  async consultAll(): Promise<UserEntity[]> {
    return this.service.consultAll();
  }
}
