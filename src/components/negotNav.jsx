import React from "react";
import "../css/negotNav.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton, Typography, Box, CssBaseline } from "@mui/material";

function NegotNav() {
  return (
    <Box
      sx={{
        bgcolor: "#41d93e",
        padding: "5px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",

        position: "relative",
      }}
    >
      <CssBaseline />
      <Box sx={{ position: "absolute", left: "20px ", top: "7px" }}>
        <IconButton color="success">
          <ArrowBackIosIcon style={{ color: "#ffffff" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "block",
        }}
      >
        <Typography
          variant="h4"
          color="#ffffff"
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            marginTop: "7px",
          }}
        >
          My negotiation
        </Typography>
      </Box>
    </Box>
  );
}
export default NegotNav;
