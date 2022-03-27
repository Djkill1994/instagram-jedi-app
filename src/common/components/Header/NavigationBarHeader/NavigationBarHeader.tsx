import s from "./NavigationBarHeader.module.scss";
import { ReactComponent as Home } from "../../../../assets/svg/home.svg";
import { ReactComponent as Message } from "../../../../assets/svg/message.svg";
import { ReactComponent as NewPost } from "../../../../assets/svg/newPost.svg";
import { ReactComponent as FindPeople } from "../../../../assets/svg/findPeople.svg";
import { ReactComponent as WatsNews } from "../../../../assets/svg/watsNews.svg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationBarHeader = () => {
  return (
    <div className={s.navigationBar}>
      <div className={s.homeBtn}>
        <Home />
      </div>
      <div className={s.messageBtn}>
        <Message />
      </div>
      <div className={s.newPostBtn}>
        <NewPost />
      </div>
      <div className={s.findPeopleBtn}>
        <FindPeople />
      </div>
      <div className={s.watsNewsBtn}>
        <WatsNews />
      </div>
      <div className={s.userOptions}>
        <Link to="/">
          <Avatar sx={{ width: 26, height: 26 }} />
        </Link>
      </div>
    </div>
  );
};
