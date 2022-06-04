import { Container } from '@chakra-ui/react'
import Header from "./Header";


export default function (props) {
  return <>
    <Header />
    <Container maxW="container.xl" py='8'>
      {props.children}
    </Container>
  </>
}
