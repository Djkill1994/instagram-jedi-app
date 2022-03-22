import React from "react";
import s from "./Navbar.module.scss";

export const Navbar: React.FC = () => (
  <div className={s.nav}>
    <div>nav 1</div>
    <div>nav 2</div>
    <div>nav 3</div>
    <input placeholder="Search" />
  </div>
);
