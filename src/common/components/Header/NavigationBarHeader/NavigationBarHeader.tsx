import { ReactComponent as HomeActive } from "../../../../assets/svg/homeActive.svg";
import { ReactComponent as MessageActive } from "../../../../assets/svg/messageActive.svg";
import { ReactComponent as NewPost } from "../../../../assets/svg/newPost.svg";
import { ReactComponent as FindPeople } from "../../../../assets/svg/findPeople.svg";
import { ReactComponent as WatsNews } from "../../../../assets/svg/watsNews.svg";
import { Avatar, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../App/App";
import React from "react";

export const NavigationBarHeader = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <button onClick={() => navigate("/content", { replace: true })}>
        <HomeActive />
      </button>
      <button onClick={() => navigate("/messages", { replace: true })}>
        <MessageActive />
      </button>
      <NewPost />

      <FindPeople />

      <WatsNews />

      <Link to={ROUTE_PATHS.Login}>
        <Avatar sx={{ width: 26, height: 26 }} />
      </Link>
    </Stack>
  );
};
