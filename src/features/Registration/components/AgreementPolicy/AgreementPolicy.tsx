import React from "react";
import { Link, Stack } from "@mui/material";
import s from "./AgreementPolicy.module.scss";

export const AgreementPolicy: React.FC = () => {
  return (
    <Stack
      justifyContent="center"
      flexWrap="wrap"
      spacing={0.3}
      alignItems="center"
      direction="row"
      fontSize={10}
      className={s.titleDocumentation}
    >
      <p>By signing up, you agree to our</p>
      <Link target="_blank" href={"https://help.instagram.com/581066165581870"}>
        Terms
      </Link>
      ,
      <Link
        target="_blank"
        href={
          "https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
        }
      >
        Data
      </Link>
      ,
      <Link
        target="_blank"
        href={
          "https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
        }
      >
        Policy
      </Link>
      <p>and</p>
      <Link
        target="_blank"
        href={"https://help.instagram.com/1896641480634370?ref=ig"}
      >
        Cookies Policy
      </Link>
      .
    </Stack>
  );
};
