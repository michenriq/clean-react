import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'
import faker from 'faker'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={ { state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}
describe('Input Component', () => {
  it('should begin with readOnly', () => {
    const inputFieldName = faker.database.column()
    const sut = makeSut(inputFieldName)
    const input = sut.getByTestId(inputFieldName) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
  it('should remove readOnly on focus', () => {
    const inputFieldName = faker.database.column()
    const sut = makeSut(inputFieldName)
    const input = sut.getByTestId(inputFieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
