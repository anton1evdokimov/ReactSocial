import React from "react"
import st from './Item.module.css'
import avatar from '../../../../img/avatar.jpg'
export default props =>
  <div>
    <img className={st.avatar} src={avatar} alt="avatar" />
    {props.text}
  </div>;