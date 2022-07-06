import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);

  const postDetails = (files) =>{};

  const submitHandler = () =>{};

  return (
    <VStack spacing='5px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter Your Name'
          onChange={(e)=> setName(e.target.value)}
        />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          placeholder='Enter Your Email Address'
          onChange={(e)=> setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show?"text":"password"}
            placeholder='Enter Password'
            onChange={(e)=> setPassword(e.target.value)}
            />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={()=>setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <FormControl id='confirm-password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show?"text":"password"}
            placeholder='Confirm Password'
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={()=>setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          p={2}
          type="file"
          accept='image/'
          onChange={(e)=> postDetails(e.target.files[0])}
          />
      </FormControl>

      <Button 
        w="100%" 
        colorScheme="blue"
        style={{marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup