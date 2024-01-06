import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import react from "react";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="App">
      <h1 className="header">Sunbase Assignment</h1>
      <div id="login-page">
        <Input
          variant="outline"
          placeholder="login id"
          htmlSize={40}
          width="auto"
          className="login-id"
        />
        <div className="password">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className='submit-button'>
        <Button colorScheme="blue" size="sm" >
          Submit
        </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
