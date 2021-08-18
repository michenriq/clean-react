import { FieldValidation } from '@/validation/protocols/field-valitation'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null

  constructor (readonly field: string) {}

  validate (value: string): Error {
    return this.error
  }
}