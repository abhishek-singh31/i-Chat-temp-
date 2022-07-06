import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
  
  
    const submitHandler = () =>{};
  
    return (
      <VStack spacing='5px'>
  
        <FormControl id='email' isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder='Enter Your Email Address'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </FormControl>
  
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show?"text":"password"}
              placeholder='Enter Password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={()=>setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        
       
        <Button 
          w="100%" 
          colorScheme="blue"
          style={{marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>

        <Button 
          w="100%" 
          colorScheme="red"
          style={{marginTop: 10 }}
          onClick={()=>{
              setEmail("guest@example.com");
              setPassword("123456");
          }}
        >
          Get Guest User Credentials
        </Button>

      </VStack>
    )
}

export default Login