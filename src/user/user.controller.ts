import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ErrorObject } from './../models/error-object';
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {

  constructor(
    private service: UserService
  ) { }

  @Post()
  create(@Body() request: CreateUserDTO): ErrorObject {
    return this.service.create(request);
  }

  @Get('/:id')
  consult(@Param('id') id: string): CreateUserDTO | ErrorObject {
    return this.service.consult(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() request: CreateUserDTO) {
    return this.service.update(id, request);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get('')
  consultAll() {
    return this.service.consultAll();
  }
}
