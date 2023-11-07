import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EmailValidator } from './validator/email.validator';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmailValidator
  ]
})
export class UserModule { }
