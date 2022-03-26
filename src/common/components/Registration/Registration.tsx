// import React from "react";
// import s from "./Registration.module.scss";
// import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
//
// export const Registration: React.FC = () => {
//   return (
//     <div className={s.registrationWrapper}>
//       <div className={s.registrationWindow}>
//         <FormControl>
//           <InputLabel htmlFor="my-input">Email address</InputLabel>
//           <Input id="my-input" aria-describedby="my-helper-text" />
//           <FormHelperText id="my-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//       </div>
//     </div>
//   );
// };

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const theme = createTheme();

export const Registration = () => {
  //object Form
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

  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box className={s.wrapperBox}>
          <img alt={"Logo"} src={logo} />
          <h2 className={s.titleSignUp}>
            Sign up to see photos and videos from your friends.
          </h2>
          <div className={s.buttonSignInFbWrapper}>
            <Button href={"#"} className={s.buttonSignInFb}>
              <img alt={"gds"} src={iconFb} />
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
                    value={values.password}
                    name="password"
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              className={s.signUpBtn}
            >
              Sign Up
            </Button>
          </Box>
          <div className={s.titleDocumentation}>
            <p>
              By signing up, you agree to our
              <Link href={"https://help.instagram.com/581066165581870"}>
                Terms
              </Link>
              ,
              <Link
                href={
                  "https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
                }
              >
                Data
              </Link>
              ,
              <Link
                href={
                  "https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
                }
              >
                Policy
              </Link>
              and
              <Link href={"https://help.instagram.com/1896641480634370?ref=ig"}>
                Cookies Policy
              </Link>
              .
            </p>
          </div>
        </Box>
      </Container>
      <div className={s.bottomContent}>
        <div className={s.signInBtn}>
          <span>Have an account?</span>
          <Link>Log in</Link>
        </div>
        <BarInstallApps />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
