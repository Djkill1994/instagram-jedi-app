import React from "react";
import s from "./Registration.module.scss";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

export const Registration: React.FC = () => {
  return (
    <div className={s.registrationWrapper}>
      <div className={s.registrationWindow}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};
