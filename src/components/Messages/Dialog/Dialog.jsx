import React from "react"
import { NavLink } from 'react-router-dom';
import st from './Dialog.module.css'

const Dialog = props => <NavLink className={st.item} to={"/Messages/" + props.id}>{props.name}</NavLink>

export default Dialog