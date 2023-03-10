import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import Page10Nav from "../components/page10Nav";

const data = [
  {
    sellerName: "full name",
    storeName: "some store",
    places: ["place1", "place2"],
    rate: 2.5,
    profile: "",
    content: "sellers description",
  },
];

const PageM10b = () => {
  const location = useLocation();

  return (
    <Container
      style={{
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
      }}
    >
      <CssBaseline />
      <Box>
        <Page10Nav
          title={location.state ? location.state.from : "Market Name"}
        />
      </Box>
      <CardActions
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "2px solid #555555",
        }}
      >
        <FormControl
          style={{
            width: "100%",
            height: "48px",
          }}
        >
          <Input
            style={{ height: "40px", fontSize: "25px" }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "green", fontSize: "35px" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <MicIcon style={{ color: "green", fontSize: "35px" }} />
                </IconButton>
                <IconButton>
                  <PhotoCameraIcon
                    style={{ color: "green", fontSize: "35px" }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardActions>

      <CardActions
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "0px",
        }}
      >
        <CardActionArea style={{ width: "100%" }}>
          <Button
            style={{
              display: "flex",
              columnGap: "20px",
              color: "green",
              width: "100%",
              alignItems: "center",
            }}
          >
            <SortIcon />
            <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
              sort
            </Typography>
          </Button>
        </CardActionArea>
        <CardActionArea style={{ width: "100%" }}>
          <Button
            style={{
              display: "flex",
              columnGap: "20px",
              color: "green",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FilterListIcon />
            <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
              filter
            </Typography>
          </Button>
        </CardActionArea>
      </CardActions>
      <Card
        style={{
          backgroundColor: "#86fe9ede",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          height: "500px",
          overflow: "auto",
          padding: "20px 15px",
          borderRadius: "5px",
          border: "3px solid #000000",
        }}
      >
        {(location.state ? location.state.marketData : data).map(
          (val, index) => {
            return (
              <CardContent
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "50%",
                    padding: "0px 20px",
                  }}
                >
                  <Box style={{ display: "flex" }}>
                    <Typography
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "22px",
                      }}
                    >
                      name of the seller:
                    </Typography>
                    {
                      <Typography
                        style={{
                          fontWeight: "400",
                          textTransform: "uppercase",
                          fontSize: "22px",
                          paddingLeft: "20px",
                        }}
                      >
                        {val.sellerName}
                      </Typography>
                    }
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <Typography
                      variant="boby1"
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        display: "flex",
                      }}
                    >
                      name of the store:
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "400",
                        textTransform: "uppercase",
                        fontSize: "22px",
                        paddingLeft: "28px",
                      }}
                    >
                      {val.storeName}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 20px",
                  }}
                >
                  <Rating value={val.rate} max={5} precision={0.5} readOnly />
                </Box>

                <Box
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "green", padding: "12px" }}
                  >
                    <Link
                      to="/M10c"
                      state={{
                        from: val.sellerName,
                        branches: val.places,
                        store: val.storeName,
                        profile: val.profile,
                        content: val.content,
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        view details
                      </Typography>
                    </Link>
                  </Button>
                </Box>
              </CardContent>
            );
          }
        )}
      </Card>
    </Container>
  );
};
export default PageM10b;
