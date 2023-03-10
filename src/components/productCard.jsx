import React from "react";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  InputAdornment,
  FormControl,
  FilledInput,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";

function ProductCard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <Box
        style={{
          width: "700px",
          border: "8px solid green",
          padding: "30px",
          borderRadius: "5px",
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          backgroundColor: "lightgreen",
        }}
      >
        <Box style={{ position: "sticky" }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                name of the product
              </Typography>
            </InputLabel>
            <FilledInput
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              style={{
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
              inputProps={{ 
                minLength: 1,
                maxLength: 30 
              }}
            />
          </FormControl>
        </Box>
        <Box style={{ position: "sticky" }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                price
              </Typography>
            </InputLabel>
            <FilledInput
              endAdornment={
                <InputAdornment position="end">
                  <CurrencyRupeeIcon style={{ color: "darkgreen" }} />
                </InputAdornment>
              }
              onChange={(event) => {
                if(event.target.value >= 1 && event.target.value <= 2000)
                  setPrice(event.target.value);
                else {
                  alert('Invalid Price')
                }
              }}
              style={{
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            />
          </FormControl>
        </Box>
        <Box style={{ position: "sticky" }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                quantity required
              </Typography>
            </InputLabel>
            <FilledInput
              endAdornment={
                <InputAdornment position="end">
                  <Typography
                    variant="h6"
                    style={{
                      textTransform: "uppercase",
                      color: "darkgreen",
                      fontWeight: "600",
                    }}
                  >
                    kg
                  </Typography>
                </InputAdornment>
              }
              onChange={(event) => {
                if(event.target.value >= 1 && event.target.value <= 50)
                  setQty(event.target.value);
                else {
                  alert('Invalid Quantity')
                }  
              }}
              style={{
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            />
          </FormControl>
        </Box>
        <Box style={{ position: "sticky" }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                specific type
              </Typography>
            </InputLabel>
            <FilledInput
              type="text"
              onChange={(event) => {
                if(event.target.value == "Fruit" || event.target.value == "Vegetable" || event.target.value == "Grain" || event.target.value == "Millet")
                  setType(event.target.value);
                else {
                  alert('Invalid Type');
                }
              }}
              style={{
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            />
          </FormControl>
        </Box>
        <Box style={{ position: "sticky" }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                location
              </Typography>
            </InputLabel>
            <FilledInput
              type="text"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              style={{
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
              inputProps={{ 
                minLength: 1,
                maxLength: 40 
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
