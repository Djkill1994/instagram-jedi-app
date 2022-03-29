import React from "react";
import s from "./Footer.module.scss";
import { FormControl, NativeSelect, Stack } from "@mui/material";
import { ComponentLink } from "./ComponentLink";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Stack spacing={0.5} justifyContent="center" alignItems="center">
        <Stack className={s.sectionOne} direction="row" spacing={2}>
          <ComponentLink
            url={"https://about.facebook.com/meta"}
            title={"Meta"}
          />
          <ComponentLink url={"https://about.instagram.com/"} title={"About"} />
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
        <Stack spacing={2}>
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
          <Stack
            className={s.barTwo}
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <FormControl className={s.formControl}>
              <NativeSelect className={s.nativeSelect}>
                <option>English</option>
                <option>Русский</option>
              </NativeSelect>
            </FormControl>
            <span>© 2022 Instagram from Meta</span>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  );
};
