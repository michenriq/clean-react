import { InvalidFieldError } from '@/validation/errors'
import { MinLenghtValidation } from './min-lenght-validation'

describe('MinLenghtValidation', () => {
  test('Should return error if valid is invalid', () => {
    const sut = new MinLenghtValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
  test('Should return falsy if value is valid', () => {
    const sut = new MinLenghtValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toBeFalsy()
  })
})
