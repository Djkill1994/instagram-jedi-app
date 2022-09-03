import { ReactComponent as HomeActive } from "../../../../assets/svg/homeActive.svg";
import { ReactComponent as MessageActive } from "../../../../assets/svg/messageActive.svg";
import { ReactComponent as NewPost } from "../../../../assets/svg/newPost.svg";
import { ReactComponent as FindPeople } from "../../../../assets/svg/findPeople.svg";
import { ReactComponent as WatsNews } from "../../../../assets/svg/watsNews.svg";
import { Avatar, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../App/App";
import React from "react";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../../features/Login/slices/login.slice";
import styles from "./NavigationBarHeader.module.scss";
import Button from "@mui/material/Button";

export const NavigationBarHeader = () => {
  const navigate = useNavigate();
  const userData = useSelector(loginSelector);

  return (
    <Stack direction="row" spacing={2} className={styles.navBar}>
      <Button
        variant="text"
        disableTouchRipple={true}
        onClick={() => navigate("/content", { replace: true })}
      >
        <HomeActive />
      </Button>
      <Button
        variant="text"
        disableTouchRipple={true}
        onClick={() => navigate("/messages", { replace: true })}
      >
        <MessageActive />
      </Button>
      <NewPost />

      <FindPeople />

      <WatsNews />

      <Link to={ROUTE_PATHS.Login}>
        <Avatar
          sx={{ width: 26, height: 26 }}
          src={userData.authUser?.userAvatar}
        />
      </Link>
    </Stack>
  );
};
