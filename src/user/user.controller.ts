import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ErrorObject } from './../models/error-object';
import { UserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {

  constructor(
    private service: UserService
  ) { }

  @Post()
  create(@Body() request: UserDTO): ErrorObject {
    return this.service.create(request);
  }

  @Get('')
  consult(@Query('email') request: string): UserDTO | ErrorObject {
    return this.service.consult(request);
  }

  @Get('/consultar-todos')
  consultAll(): UserDTO[] {
    return this.service.consultAll();
  }
}
