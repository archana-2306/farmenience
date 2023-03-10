import React from "react";
import Menubar from "../components/menubar";
import ImageSlider from "../components/imageSlider";
import Card from "@mui/material/Card";
import {
  CardContent,
  Typography,
  CssBaseline,
  Box,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const orders = [
  {
    id: 1,
    items: ["onions", "tomato"],
  },
  {
    id: 2,
    items: ["potato", "ginger"],
  },
  {
    id: 3,
    items: ["garlic", "cucumber"],
  },
  {
    id: 4,
    items: ["garlic", "cucumber"],
  },
  {
    id: 5,
    items: ["garlic", "cucumber"],
  },
  {
    id: 6,
    items: ["garlic", "cucumber"],
  },
];

function PageM9() {
  return (
    <Box style={{ boxSizing: "borderBox" }}>
      <CssBaseline />
      <Menubar />
      <Card
        sx={{
          display: "flex",
          padding: "30px",
          columnGap: "30px",
          flexDirection: "row",
        }}
      >
        <CardContent
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            border: "3px solid #000",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "400px",
            overflow: "auto",
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            orders placed
          </Typography>
          <Divider style={{ width: "90%", alignSelf: "center" }} flexItem />

          {orders.map((order, index) => {
            return (
              <CardContent
                key={index}
                style={{
                  padding: "15px 5px",
                  marginTop: "15px",
                  backgroundColor: " #eeeeee",
                  width: "90%",
                  margin: "10px 0px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  order id :
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {order.id}
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "600",
                    width: "55%",
                    textTransform: "uppercase",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  items :
                  <Typography
                    variant="h5"
                    style={{
                      textTransform: "lowercase",
                    }}
                  >
                    {order.items.toString()} etc.
                  </Typography>
                </Typography>
              </CardContent>
            );
          })}
        </CardContent>

        <Divider orientation="vertical" flexItem />
        <ImageSlider />
      </Card>
    </Box>
  );
}

export default PageM9;
