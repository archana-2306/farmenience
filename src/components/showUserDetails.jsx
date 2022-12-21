import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function ShowUserDetails(props) {
  // const [address, setAddress] = useState(props.userAddress);
  // const addressHandler = (event) => {
  //   let newAddress = event.target.value;
  //   setAddress(newAddress);
  // };

  // const [name, setName] = useState(props.userName);
  // const nameHandler = (event) => {
  //   let newName = event.target.value;
  //   setName(newName);
  // };

  // const [number, setNumber] = useState(props.userNumber);
  // const numberHandler = (event) => {
  //   let newNumber = event.target.value;
  //   setNumber(newNumber);
  // };

  // props.onDataHandler(name, address, number);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "8px 0px",
        borderRadius: "4px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "600",
          alignSelf: "center",
        }}
      >
        consumer details
      </Typography>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5px",
          // alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", columnGap: "20px", margin: "5px 0px" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            fullname
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              width: "70%",
            }}
          >
            {props.userName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", columnGap: "20px", margin: "5px 0px" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            phone number
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              width: "70%",
            }}
          >
            {props.userNumber}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", columnGap: "20px", margin: "5px 0px" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            residential address
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "18px",
              overflow: "auto",
              width: "80%",
            }}
          >
            {props.userAddress}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShowUserDetails;
