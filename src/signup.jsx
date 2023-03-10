import "./css/signup.css";
import { useState, useRef } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom/dist";
import {
  Box,
  Button,
  Typography,
  Input,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

function Signup() {
  const captchaRef = useRef(null);
  const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const navigate = useNavigate();
  const [type, setType] = useState("Farmer");
  const [signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    confpass: "",
    name: "",
    phone: "",
    aadhar: "",
    addr1: "",
    addr2: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    utype: "",
  });

  const handleChange = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    //const token = captchaRef.current.getValue();
    //captchaRef.current.reset();
    let emailChk = 0;
    let passChk = 0;

    if (validator.isEmail(signupdata.email)) emailChk = 1;

    if (signupdata.password === signupdata.confpass) passChk = 1;

    if (!emailChk) {
      alert("Invalid Email Address");
      return;
    }
    if (!passChk) {
      alert("Passwords donot match");
      return;
    }

    alert("Validation successful");

    if (
      signupdata.phone.length == 10 &&
      signupdata.password === signupdata.confpass
    ) {
      Axios.post("http://localhost:5000/signup", {
        name: signupdata.name,
        phoneno: signupdata.phone,
        aadhaarno: signupdata.aadhar,
        addline1: signupdata.addr1,
        addline2: signupdata.addr2,
        city: signupdata.city,
        district: signupdata.district,
        state: signupdata.state,
        pincode: signupdata.pincode,
        email: signupdata.email,
        password: signupdata.password,
        typeOfAcc: type,
      })
        .then((response) => {
          if (response.data.message == "Success") {
            navigate("/login");
          }
        })
        .catch((res, err) => {
          alert(res.response.data.message);
        });
    } else {
      alert("Signup not correct !");
    }
  };

  const [selection, setSelection] = useState("");
  const selectionChange = (event) => {
    setSelection(event.target.innerText);
    console.log(event.target.innerText);
  };

  return (
    <Box
      sx={{
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "40px",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          signup page
        </Typography>
      </Box>
      <form style={{ width: "450px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            name
          </Typography>
          <Input
            type="text"
            name="name"
            value={signupdata.name}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            phone number
          </Typography>
          <Input
            type="tel"
            name="phone"
            value={signupdata.phone}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            adhaar number
          </Typography>
          <Input
            type="text"
            name="aadhar"
            value={signupdata.aadhar}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            address line 1
          </Typography>
          <Input
            type="text"
            name="addr1"
            value={signupdata.addr1}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            address line 2
          </Typography>
          <Input
            type="text"
            name="addr2"
            value={signupdata.addr2}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            city / town
          </Typography>
          <Input
            type="text"
            name="city"
            value={signupdata.city}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            district
          </Typography>
          <Input
            type="text"
            name="district"
            value={signupdata.district}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            state
          </Typography>
          <Input
            type="text"
            name="state"
            value={signupdata.state}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            pincode
          </Typography>
          <Input
            type="text"
            name="pincode"
            value={signupdata.pincode}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            email
          </Typography>
          <Input
            type="email"
            name="email"
            value={signupdata.email}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            password
          </Typography>
          <Input
            type="password"
            name="password"
            value={signupdata.password}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            confirm password
          </Typography>
          <Input
            type="password"
            name="confpass"
            value={signupdata.confpass}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
          >
            account type
          </Typography>

          <FormControl variant="standard" sx={{ width: "200px" }}>
            <Select value={selection} onClick={selectionChange}>
              <MenuItem value="Farmer">
                <Typography style={{ textTransform: "capitalize" }}>
                  farmer
                </Typography>
              </MenuItem>
              <MenuItem value="Volunteer">
                <Typography style={{ textTransform: "capitalize" }}>
                  volunteer
                </Typography>
              </MenuItem>
              <MenuItem value="Retailer">
                <Typography style={{ textTransform: "capitalize" }}>
                  retailer
                </Typography>
              </MenuItem>
              <MenuItem value="Job Seeker">
                <Typography style={{ textTransform: "capitalize" }}>
                  job seeker
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>
      <Button
        variant="contained"
        type="submit"
        onClick={submit}
        style={{ backgroundColor: "green", fontWeight: "600" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Signup;
