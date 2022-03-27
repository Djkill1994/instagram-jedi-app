import React, { useState } from "react";
import s from "./LogInForm.module.scss";
import { LoadingButton } from "@mui/lab";
import { DecorationBorder } from "../../DecorationBorder";
import Box from "@mui/material/Box";
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
import { Link } from "react-router-dom";

interface StateProps {
  password: string;
  showPassword: boolean;
  email: string;
}

export const LogInForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = React.useState<StateProps>({
    password: "",
    showPassword: false,
    email: "",
  });

  const handleClick = () => {
    setLoading(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    handleClick();
  };

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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <div className={s.sendBtnWrapper}>
          <LoadingButton
            className={s.loadingButton}
            loading={loading}
            disabled={!values.password || !values.email}
            loadingPosition="center"
            variant="contained"
            href={"content"}
            fullWidth
            type="submit"
          >
            Log in
          </LoadingButton>
        </div>
      </Box>
      <div className={s.decorationBorderWrapper}>
        <DecorationBorder />
      </div>
      <div className={s.loginOnFacebookWrapper}>
        <Link to="#" className={s.loginFbButton}>
          <img
            alt={"FB"}
            src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          />
          Log in with facebook
        </Link>
      </div>
      <div className={s.errorWindow}>ERROR</div>
      <div className={s.forgotYourPasswordWrapper}>
        <Link to="#" className={s.forgotPasswordBtn}>
          Forgot password?
        </Link>
      </div>
    </div>
  );
};
