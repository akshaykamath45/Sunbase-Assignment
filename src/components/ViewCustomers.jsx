import React, { useContext, useEffect, useState } from "react";
import { AccessContext } from "../contexts/AccessContext";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "./ViewCustomers.css";

const ViewCustomers = () => {
  const { accessToken } = useContext(AccessContext);
  const [customerList, setCustomerList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl =
      "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";

    const fetchCustomerList = async () => {
      try {
        const response = await fetch(`${apiUrl}?cmd=get_customer_list`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCustomerList(data);
        } else {
          console.error("Error fetching customer list:", response.status);
        }
      } catch (error) {
        console.error("Error during customer list fetch:", error);
      }
    };

    fetchCustomerList();
  }, [accessToken]);

  const handleNavigation = () => {
    navigate("/add-customer");
  };
  return (
    <div>
      <h1 className="header">Customers Data</h1>
      <Button
        colorScheme="blue"
        size="sm"
        style={{ marginBottom: "15px" }}
        onClick={handleNavigation}
      >
        Add Customer
      </Button>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Street</Th>
            <Th>Address</Th>
            <Th>City</Th>
            <Th>State</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customerList.map((customer, index) => (
            <Tr key={index}>
              <Td>{customer.first_name}</Td>
              <Td>{customer.last_name}</Td>
              <Td>{customer.street}</Td>
              <Td>{customer.address}</Td>
              <Td>{customer.city}</Td>
              <Td>{customer.state}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td>
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="red" size="sm">
                    Delete
                  </Button>
                  <Button colorScheme="linkedin" size="sm">
                    Edit
                  </Button>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ViewCustomers;
