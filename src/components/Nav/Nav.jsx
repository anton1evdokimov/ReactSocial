import React from "react"
import st from './Nav.module.css'
import { NavLink } from 'react-router-dom';

export default () =>
  <nav className={st.nav}>
    <NavLink to="/Profile" className={st.point} activeClassName={st.current}> Profile </NavLink>
    <NavLink to="/Messages" className={st.point} activeClassName={st.current}> Messages </NavLink>
    <NavLink to="/Users" className={st.point} activeClassName={st.current}> Users </NavLink>
    <NavLink to="/Music" className={st.point} activeClassName={st.current}> Music </NavLink>
    <NavLink to="/Settings" className={st.point} activeClassName={st.current}> Settings </NavLink>
  </nav>;