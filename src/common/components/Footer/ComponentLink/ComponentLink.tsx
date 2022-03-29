import React from "react";
import { Link } from "@mui/material";

interface ComponentLinkProps {
  url: string;
  title: string;
}

export const ComponentLink: React.FC<ComponentLinkProps> = ({ url, title }) => {
  return (
    <Link href={url} underline="none" target="_blank">
      {title}
    </Link>
  );
};
