import React, { useEffect, useState } from "react";
import s from "./CustomForm.module.scss";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useLoginMutation } from "../../../api/login.api";
import { setAuth, setUserData } from "../../../slices/login.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  password: string;
  email: string;
  showPassword: boolean;
}

export const CustomForm: React.FC = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<LoginFormState>({
    password: "",
    email: "",
    showPassword: false,
  });
  // получить data
  const [login, { isLoading, isSuccess, data, isError }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      password: values.password,
      email: values.email,
    });
  };

  const handleChange =
    (prop: keyof LoginFormState) =>
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
      dispatch(setAuth(true));
      navigate("/content", { replace: true });
    }
  }, [dispatch, isSuccess, navigate]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data));
    }
  }, [isSuccess]);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
      className={s.wrapperLoginForm}
    >
      <Grid container spacing={1.2}>
        <Grid item sm={12}>
          <TextField
            className={s.emailWrapper}
            onChange={handleChange("email")}
            size="small"
            autoComplete="email"
            name="email"
            fullWidth
            id="email"
            label="Mobile Number or Email"
            error={isError}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            variant="outlined"
            size="small"
            className={s.passwordWrapper}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange("password")}
              error={isError}
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
          <LoadingButton
            className={s.loadingButton}
            loading={isLoading}
            disabled={!values.password || !values.email}
            loadingPosition="center"
            variant="contained"
            fullWidth
            type="submit"
          >
            Log in
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};
