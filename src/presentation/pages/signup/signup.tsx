import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'
import { Header, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}
const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    emailError: '',
    nameError: 'Campo obrigatório',
    passwordError: '',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)

    })
  }, [state.name, state.email, state.password])
  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={ { state, setState }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type="email" name="email" placeholder="Digite seu email"/>
          <Input type="text" name="name" placeholder="Digite seu nome"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha"/>
          <button data-testid="submit" disabled className={Styles.submit}type="submit">Entrar</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
