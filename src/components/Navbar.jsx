import { Box, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <Flex direction={'row'} p={8}>
        <Image src={logo} borderRadius='full' boxSize='xxs'/>
        <Text color='orange.800'>Don Romolo</Text>
        <Spacer/>
        <Box> hola que tal</Box>

    </Flex>
  )
}

export default Navbar