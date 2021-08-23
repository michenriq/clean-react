import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import SignUp from './signup'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <SignUp />
  )
  return {
    sut
  }
}

const testChildCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisable = (sut: RenderResult, fieldName: string, isDisable: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisable)
}

const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('SignUp Component', () => {
  test('should start with initial state params', () => {
    const { sut } = makeSut()
    const validationError = 'Campo obrigatório'
    testChildCount(sut, 'error-wrap', 0)
    testButtonIsDisable(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
