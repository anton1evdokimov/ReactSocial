import React from "react"
import { NavLink } from 'react-router-dom';
import st from './Dialog.module.css'

export default props => <NavLink className={st.item} to={"/Messages/" + props.id}>{props.name}</NavLink>