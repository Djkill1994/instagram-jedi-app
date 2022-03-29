import React from "react";
import { Link } from "@mui/material";

interface ComponentLinkPropsType {
  url: string;
  title: string;
}

export const ComponentLink: React.FC<ComponentLinkPropsType> = ({
  url,
  title,
}) => {
  return (
    <Link href={url} underline="none" target="_blank">
      {title}
    </Link>
  );
};
