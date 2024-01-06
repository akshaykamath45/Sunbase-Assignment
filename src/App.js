import "./App.css";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

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

      const data = await response.json();
      if (response.ok) {
        // For simplicity, this example logs the access token to the console
        console.log("Access Token:", data.access_token);
        console.log(response);
      } else {
        // Handle authentication error
        console.error("Authentication failed:", data.error);
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
}

export default App;
