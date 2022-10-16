import { Envelope, Lock } from 'phosphor-react'
import { Logo } from './assets/Logo'
import { Button } from './components/Button/Button'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { TextInput } from './components/TextInput/TextInput'
import { SignIn } from './pages/SignIn'

import './styles/global.css'

export function App() {
  return (
    <SignIn />
  )
}
