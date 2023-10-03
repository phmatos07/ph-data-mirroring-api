import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserService } from './../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {

  constructor(
    private service: UserService
  ) { }

  async validate(email: string, validationArguments?: ValidationArguments | undefined): Promise<boolean> {
    const isEmail = await this.service.checkEmailExists(email);
    return !isEmail;
  }
}

export const IsEmailExists = (options: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [],
      validator: EmailValidator
    });
  }
}
