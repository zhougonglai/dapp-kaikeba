import { Flex, Box, VStack, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hooks, metaMask } from '../hooks/metamask'

const { useIsActive } = hooks;

export default function LoginPage() {
  const router = useRouter()
  const isActive = useIsActive();

  useEffect(() => {
    if(isActive) {
      router.replace('/account')
    }
  },[isActive])

  const connect = async () => {
    const data = await metaMask.activate()
    console.log(data)
  }

  return (
    <main>
      <Box boxShadow="base" _hover={{ boxShadow: 'lg'}}
      cursor="pointer" rounded="lg" border="1px" borderColor="gray.300">
        <VStack >
          <Flex p={2} alignItems={'center'} w="100%" onClick={connect}>
            <img src="https://opensea.io/static/images/logos/metamask-fox.svg" width={40} height={40} />
            <Text fontSze="lg" ml={2}>MetaMask</Text>
          </Flex>
        </VStack>
      </Box>
    </main>
  )
}
