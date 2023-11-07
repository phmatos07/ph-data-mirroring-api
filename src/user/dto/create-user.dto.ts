import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { ValidatorHelper } from "src/shared/helpers/validator.helper";
import { EMAIL_EXISTS_MESSAGE, EMAIL_MESSAGE, NAME_MESSAGE, NOT_EMPTY_MESSAGE, STRONG_PASSWORD_MESSAGE } from '../../models/default-message.const';
import { UserEntity } from "../models/user.entity";
import { IsEmailExists } from "../validator/email.validator";

export class CreateUserDTO implements Partial<UserEntity> {

  @IsNotEmpty(ValidatorHelper.validationMessage('name', NOT_EMPTY_MESSAGE))
  @IsString(ValidatorHelper.validationMessage('name', NAME_MESSAGE))
  name!: string;

  @IsNotEmpty(ValidatorHelper.validationMessage('email', NOT_EMPTY_MESSAGE))
  @IsEmail(undefined, ValidatorHelper.validationMessage('email', EMAIL_MESSAGE))
  @IsEmailExists(ValidatorHelper.validationMessage('email', EMAIL_EXISTS_MESSAGE))
  email!: string;

  @IsNotEmpty(ValidatorHelper.validationMessage('password', NOT_EMPTY_MESSAGE))
  @IsStrongPassword(undefined, ValidatorHelper.validationMessage('password', STRONG_PASSWORD_MESSAGE))
  password!: string;
}
