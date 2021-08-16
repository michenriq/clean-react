import { InvalidFieldError } from '@/validation/errors'
import { MinLenghtValidation } from './min-lenght-validation'
import faker from 'faker'

const makeSut = (): MinLenghtValidation => new MinLenghtValidation(faker.database.column(), 5)

describe('MinLenghtValidation', () => {
  test('Should return error if valid is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError())
  })
  test('Should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
