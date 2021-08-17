import { FieldValidation } from '@/validation/protocols/field-valitation'
import { RequiredFieldValidation, EmailValidation, MinLenghtValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor (private readonly fieldName: string, private readonly validations: FieldValidation[]) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (lenght: number): ValidationBuilder {
    this.validations.push(new MinLenghtValidation(this.fieldName, lenght))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
