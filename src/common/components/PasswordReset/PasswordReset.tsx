import React from "react";
import s from "./PasswordReset.module.scss";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { DecorationBorder } from "../DecorationBorder";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

interface StateProps {
  email: string;
}

export const PasswordReset: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  const [values, setValues] = React.useState<StateProps>({
    email: "",
  });

  const handleChange =
    (prop: keyof StateProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <div className={s.passwordResetWrapper}>
      <header>
        <img alt={"logoInstagram"} src={logo} />
      </header>
      <div className={s.windowContent}>
        <div className={s.iconWrapper}>//img</div>
        <span className={s.titleWindow}>Trouble Logging In?</span>
        <span className={s.text}>
          Enter your email, phone, or username and we'll send you a link to get
          back into your account.
        </span>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          className={s.wrapperPasswordResetForm}
        >
          <TextField
            onChange={handleChange("email")}
            size="small"
            autoComplete="email"
            name="email"
            fullWidth
            id="email"
            label="Mobile Number or Email"
          />
          <Button
            disabled={!values.email}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            className={s.passwordResetBtn}
          >
            Send Login Link
          </Button>
        </Box>
        <div className={s.decorationBorder}>
          <DecorationBorder />
        </div>
        <div className={s.registrationBtn}>
          <Link to="signUp">Create New Account</Link>
        </div>
        <div className={s.bottomWindow}>
          <Link to="/">Back To Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
