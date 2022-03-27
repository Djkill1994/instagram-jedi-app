import React from "react";
import { Link } from "@mui/material";
import s from "./AgreementPolicy.module.scss";

export const AgreementPolicy: React.FC = () => {
  return (
    <div className={s.titleDocumentation}>
      <p>
        By signing up, you agree to our
        <Link
          target="_blank"
          href={"https://help.instagram.com/581066165581870"}
        >
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
        and
        <Link
          target="_blank"
          href={"https://help.instagram.com/1896641480634370?ref=ig"}
        >
          Cookies Policy
        </Link>
        .
      </p>
    </div>
  );
};
