import React from "react";
import s from "./Footer.module.scss";
import { FormControl, Link, NativeSelect, Stack } from "@mui/material";

interface ComponentLinkPropsType {
  url: string;
  title: string;
}

const ComponentLink: React.FC<ComponentLinkPropsType> = ({ url, title }) => {
  return (
    <Link href={url} underline="none" className={s.Link}>
      {title}
    </Link>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={s.wrapperWindow}>
        <div className={s.barOne}>
          <Stack className={s.sectionOne} direction="row" spacing={2}>
            <ComponentLink
              url={"https://about.facebook.com/meta"}
              title={"Meta"}
            />
            <ComponentLink
              url={"https://about.instagram.com/"}
              title={"About"}
            />
            <ComponentLink
              url={"https://about.instagram.com/blog"}
              title={"Blog"}
            />
            <ComponentLink
              url={"https://about.instagram.com/about-us/careers"}
              title={"Jobs"}
            />
            <ComponentLink url={"https://help.instagram.com/"} title={"Help"} />
            <ComponentLink
              url={"https://developers.facebook.com/docs/instagram"}
              title={"API"}
            />
            <ComponentLink
              url={
                "https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
              }
              title={"Privacy"}
            />
            <ComponentLink
              url={"https://help.instagram.com/581066165581870"}
              title={"Terms"}
            />
            <ComponentLink
              url={"https://www.instagram.com/directory/profiles/"}
              title={"Top Accounts"}
            />
            <ComponentLink
              url={"https://www.instagram.com/directory/hashtags/"}
              title={"Hashtags"}
            />
            <ComponentLink
              url={"https://www.instagram.com/explore/locations/"}
              title={"Locations"}
            />
            <ComponentLink
              url={"https://www.instagram.com/web/lite/"}
              title={"Instagram Lite"}
            />
          </Stack>
          <Stack className={s.sectionTwo} direction="row" spacing={2}>
            <ComponentLink
              url={"https://www.instagram.com/topics/dance-and-performance/"}
              title={"Dance"}
            />
            <ComponentLink
              url={"https://www.instagram.com/topics/food-and-drink/"}
              title={"Food & Drink"}
            />
            <ComponentLink
              url={"https://www.instagram.com/topics/home-and-garden/"}
              title={"Home & Garden"}
            />
            <ComponentLink
              url={"https://www.instagram.com/topics/music/"}
              title={"Music"}
            />
            <ComponentLink
              url={"https://www.instagram.com/topics/visual-arts/"}
              title={"Visual Arts"}
            />
          </Stack>
        </div>
        <Stack className={s.barTwo} direction="row" spacing={1}>
          <div className={s.selectLeague}>
            <FormControl className={s.formControl}>
              <NativeSelect className={s.nativeSelect}>
                <option>English</option>
                <option>Русский</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div>© 2022 Instagram from Meta</div>
        </Stack>
      </div>
    </footer>
  );
};
