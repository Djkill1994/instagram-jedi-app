import React, { useState } from "react";
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
import { ROUTE_PATHS } from "../../../../../common/components/App/App";

interface LoginFormState {
  password: string;
  email: string;
  showPassword: boolean;
}

export const CustomForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<LoginFormState>({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
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
            onChange={handleChange("email")}
            size="small"
            autoComplete="email"
            name="email"
            fullWidth
            id="email"
            label="Mobile Number or Email"
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
        <Grid item xs={12} className={s.qwe}>
          <LoadingButton
            className={s.loadingButton}
            loading={loading}
            disabled={!values.password || !values.email}
            loadingPosition="center"
            variant="contained"
            href={ROUTE_PATHS.Content}
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
