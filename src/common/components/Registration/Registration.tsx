import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import s from "./Registration.module.scss";
import iconFb from "../../../assets/icon/facebook-icon.png";
import { DecorationBorder } from "../DecorationBorder";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BarInstallApps } from "../BarInstallApps";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import { AgreementPolicy } from "./AgreementPolicy";

interface StateProps {
  password: string;
  showPassword: boolean;
  email: string;
  fullName: string;
  userName: string;
}

export const Registration: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      fullName: data.get("fullName"),
      userName: data.get("userName"),
    });
  };

  const [values, setValues] = React.useState<StateProps>({
    password: "",
    showPassword: false,
    email: "",
    fullName: "",
    userName: "",
  });

  const handleChange =
    (prop: keyof StateProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <div>
      <Container component="main">
        <CssBaseline />
        <Box className={s.wrapperBox}>
          <img alt={"Logo"} src={logo} />
          <h2 className={s.titleSignUp}>
            Sign up to see photos and videos from your friends.
          </h2>
          <div className={s.buttonSignInFbWrapper}>
            <Button href={"#"} className={s.buttonSignInFb}>
              <img alt={"iconFacebook"} src={iconFb} />
              Log in with Facebook
            </Button>
            <div className={s.decorationBorder}>
              <DecorationBorder />
            </div>
          </div>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  onChange={handleChange("email")}
                  size="small"
                  autoComplete="email"
                  name="email"
                  fullWidth
                  id="email"
                  label="Mobile Number or Email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  onChange={handleChange("fullName")}
                  size="small"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange("userName")}
                  size="small"
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    className={s.passwordWrapper}
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              disabled={
                !values.password ||
                !values.email ||
                !values.userName ||
                !values.fullName
              }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              className={s.signUpBtn}
            >
              Sign Up
            </Button>
          </Box>
          <AgreementPolicy />
        </Box>
      </Container>
      <div className={s.bottomContent}>
        <div className={s.signInWrapper}>
          <span>Have an account?</span>
          <Link to="/">Log in</Link>
        </div>
        <BarInstallApps />
        <Footer />
      </div>
    </div>
  );
};
