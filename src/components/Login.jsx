import React from "react";
import "./Login.css";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AccessContext } from "../contexts/AccessContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useContext(AccessContext);

  const handleSubmit = async () => {
    try {
      const apiUrl =
        "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_id: loginId,
          password: password,
        }),
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        // access token
        console.log("Access token generated at login page:", data.access_token);
        setAccessToken(data.access_token);
        // console.log(response);
        toast({
          title: `User Authenticated`,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/view-customers");
        }, 1500);
      } else {
        // handling invalid input/non-json response
        const textData = await response.text();
        console.log("Error:", textData);
        toast({
          title: `Invalid User`,
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

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
          onChange={(e) => setLoginId(e.target.value)}
        />
        <div className="password">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="submit-button">
          <Button colorScheme="blue" size="sm" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
