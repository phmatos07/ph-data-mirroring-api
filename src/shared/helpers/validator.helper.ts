import { ValidationOptions } from "class-validator";

export class ValidatorHelper {

  static validationMessage(fieldProperty: string, message: string): ValidationOptions {
    return { message: `[${fieldProperty}]: ${message}` };
  }
}
