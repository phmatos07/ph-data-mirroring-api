import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { ValidatorHelper } from "src/shared/helpers/validator.helper";
import { EMAIL_MESSAGE, NAME_MESSAGE, NOT_EMPTY_MESSAGE, STRONG_PASSWORD_MESSAGE } from './../../models/default-message.const';

export class UserDTO {

  @IsNotEmpty(ValidatorHelper.validationMessage('name', NOT_EMPTY_MESSAGE))
  @IsString(ValidatorHelper.validationMessage('name', NAME_MESSAGE))
  name: string;

  @IsNotEmpty(ValidatorHelper.validationMessage('email', NOT_EMPTY_MESSAGE))
  @IsEmail(undefined, ValidatorHelper.validationMessage('email', EMAIL_MESSAGE))
  email: string;

  @IsNotEmpty(ValidatorHelper.validationMessage('password', NOT_EMPTY_MESSAGE))
  @IsStrongPassword(undefined, ValidatorHelper.validationMessage('password', STRONG_PASSWORD_MESSAGE))
  password: string;
}
