import { RequiredFieldValidation, EmailValidation } from '@/validation/validators'
import { MinLenghtValidation } from '../min-lenght/min-lenght-validation'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('Validation Builder', () => {
  test('Should return required field validation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })
  test('Should return email field validation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })
  test('Should return email min-lenght validation', () => {
    const field = faker.database.column()
    const number = faker.datatype.number()
    const validations = sut.field(field).min(number).build()
    expect(validations).toEqual([new MinLenghtValidation(field, number)])
  })
  test('Should return a list validations', () => {
    const field = faker.database.column()
    const number = faker.datatype.number()
    const validations = sut.field(field).required().email().min(number).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLenghtValidation(field, number)
    ])
  })
})
