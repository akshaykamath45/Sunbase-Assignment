import "./AddCustomer.css";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AccessContext } from "../contexts/AccessContext";
import { useNavigate } from "react-router";

const AddCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const toast = useToast();

  const { accessToken } = useContext(AccessContext);
  useEffect(() => {
    console.log("Access token received on customer page:", accessToken);
  }, [accessToken]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl =
      "https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, 
        },

        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          street: street,
          address: address,
          city: city,
          state: state,
          email: email,
          phone: phone,
        }),
      });

      if (response.ok) {
        console.log("Customer created successfully");
        toast({
          title: `Customer created successfully`,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/view-customers");
        }, 1000);
      } else {
        console.error("Error creating customer:", response.status);
        console.log(response);
        toast({
          title: `Error creating customer`,
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error during customer creation:", error);
    }
  };

  const handleNavigation = () => {
    navigate("/view-customers");
  };

  return (
    <div>
      <Button
        colorScheme="blue"
        size="sm"
        onClick={handleNavigation}
        style={{ marginBottom: "15px" }}
      >
        View Customers
      </Button>
      <h1 className="header" style={{marginBottom:"20px"}}>Add Customer</h1>

      <form onSubmit={handleSubmit}>
        <Input
          variant="outline"
          placeholder="First Name"
          htmlSize={40}
          width="auto"
          onChange={(e) => setFirstName(e.target.value)}
          isRequired
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="Last Name"
          htmlSize={40}
          width="auto"
          onChange={(e) => setLastName(e.target.value)}
          isRequired
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="Street"
          htmlSize={40}
          width="auto"
          onChange={(e) => setStreet(e.target.value)}
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="Address"
          htmlSize={40}
          width="auto"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="City"
          htmlSize={40}
          width="auto"
          onChange={(e) => setCity(e.target.value)}
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="State"
          htmlSize={40}
          width="auto"
          onChange={(e) => setState(e.target.value)}
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="Email"
          htmlSize={40}
          width="auto"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <Input
          variant="outline"
          placeholder="Phone"
          htmlSize={40}
          width="auto"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /> <br />
        <Button
          colorScheme="blue"
          size="sm"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCustomer;
