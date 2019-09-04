import React from "react"
import st from './Header.module.css'
import image from '../../img/gerb.png'
import { NavLink } from 'react-router-dom'

export default props => {
    return <header className={st.header}>
        <img src={image} alt="Герб России" />
        {
            props.account.isAuth ?
            <NavLink to="/Profile" className={st.account}>{props.account.login}</NavLink> :
            <NavLink to="/Login" className={st.account}>Login</NavLink>
        }
    </header>;
}