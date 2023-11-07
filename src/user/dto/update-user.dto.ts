import { IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { ValidatorHelper } from "src/shared/helpers/validator.helper";
import { EMAIL_EXISTS_MESSAGE, EMAIL_MESSAGE, NAME_MESSAGE, STRONG_PASSWORD_MESSAGE } from '../../models/default-message.const';
import { UserEntity } from "../models/user.entity";
import { IsEmailExists } from "../validator/email.validator";

export class UpdateUserDTO implements Partial<UserEntity> {

  @IsOptional()
  @IsString(ValidatorHelper.validationMessage('name', NAME_MESSAGE))
  name?: string;

  @IsOptional()
  @IsEmail(undefined, ValidatorHelper.validationMessage('email', EMAIL_MESSAGE))
  @IsEmailExists(ValidatorHelper.validationMessage('email', EMAIL_EXISTS_MESSAGE))
  email?: string;

  @IsOptional()
  @IsStrongPassword(undefined, ValidatorHelper.validationMessage('password', STRONG_PASSWORD_MESSAGE))
  password?: string;
}
