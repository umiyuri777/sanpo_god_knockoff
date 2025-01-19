import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import styles from '../styles/App.css'
import Title from './Title'
import Roulette from './Roulette'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <Title />
        <Roulette />
      </div>
    </ChakraProvider>
  )
}

export default App