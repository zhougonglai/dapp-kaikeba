import NextLink from 'next/link'
import { useEffect } from 'react';
import { Container, Heading, Button, Flex, useColorModeValue, LinkOverlay, LinkBox, Spacer } from '@chakra-ui/react'
import { metaMask, hooks } from '../../hooks/metamask';
import Status from './Status';

const { useChainId, useAccount, useProvider, useENSNames, useAccounts, useError, useIsActive, useIsActivating } = hooks

export default function Header() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  useEffect(() => {
    metaMask.connectEagerly()
  }, [])

  const navigator = (child) => {
    if(isActive) {
      return (
        <NextLink href="/account">
        {child}
        </NextLink>
      )
    } else{
      return (
        <NextLink href="/login">
          {child}
        </NextLink>
      )
    }
  }

  return (
    <Flex as="header" bg={useColorModeValue('gray.100', 'gray.900')} p={4} alignItems="center">
      <Container maxW="container.xl" display="flex" alignItems='center'>
        <LinkBox>
          <NextLink href="/" passHref>
            <LinkOverlay>
              <Heading size="md">Dapp</Heading>
            </LinkOverlay>
          </NextLink>
        </LinkBox>
        <Spacer />
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <Button ml="2">
          {navigator(<ion-icon name="wallet"></ion-icon>)}
        </Button>
      </Container>
    </Flex>
  )
}
