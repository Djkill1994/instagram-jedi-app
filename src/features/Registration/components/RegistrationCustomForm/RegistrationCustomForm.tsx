import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styles from "./RegistrationCustomForm.module.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRegistrationMutation } from "../../api/registration.api";
import { useNavigate } from "react-router-dom";

interface RegistrationFormState {
  password: string;
  showPassword: boolean;
  email: string;
  fullName: string;
  userName: string;
}

export const RegistrationCustomForm: React.FC = () => {
  const [values, setValues] = useState<RegistrationFormState>({
    password: "",
    showPassword: false,
    email: "",
    fullName: "",
    userName: "",
  });
  const [registerUser, { isSuccess }] = useRegistrationMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser({
      password: values.password,
      email: values.email,
      fullName: values.fullName,
      userName: values.userName,
    });
  };

  const handleChange =
    (prop: keyof RegistrationFormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/", { replace: true });
    }
  }, [isSuccess, navigate]);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
      className={styles.formWrapper}
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <TextField
            onChange={handleChange("email")}
            size="small"
            autoComplete="email"
            name="email"
            id="email"
            label="Mobile Number or Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange("fullName")}
            size="small"
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
              className={styles.passwordWrapper}
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={
              !values.password ||
              !values.email ||
              !values.userName ||
              !values.fullName
            }
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            className={styles.signUpBtn}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
