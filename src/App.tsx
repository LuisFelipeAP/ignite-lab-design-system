import { Envelope, Lock } from 'phosphor-react'
import { Logo } from './assets/Logo'
import { Button } from './components/Button/Button'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { TextInput } from './components/TextInput/TextInput'

import './styles/global.css'

export function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10 px-4'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='******' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col items-center mt-8 gap-4'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm' className='gap-1 text-gray-400 hover:text-gray-200'>
          <div className='m-0 p-0 flex flex-row'>
            Não possui conta?
            <a className='underline cursor-pointer'>Crie uma agora!</a>
          </div>
        </Text>
      </footer>
    </div>
  )
}
