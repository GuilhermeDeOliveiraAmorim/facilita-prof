import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ListQuestionProvider } from '../context/list-question'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ListQuestionProvider>
        <Component {...pageProps} />
      </ListQuestionProvider>
    </ChakraProvider>)
}

export default MyApp
