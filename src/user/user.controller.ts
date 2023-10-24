import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get('/:id')
  consult(@Param('id') id: string): UserDTO | ErrorObject {
    return this.service.consult(id);
  }

  @Get('')
  consultAll() {
    return this.service.consultAll();
  }
}
