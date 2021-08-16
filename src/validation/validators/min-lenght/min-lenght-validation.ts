import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-valitation'

export class MinLenghtValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLenght: number) {}

  validate (value: string): Error {
    return value.length >= this.minLenght ? null : new InvalidFieldError()
  }
}
