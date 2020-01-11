import React from "react"
import st from './Item.module.css'
import avatar from '../../../../img/avatar.jpg'

export default props => (
  <div className={st.item}>
    <img className={st.avatar} src={avatar} alt="avatar" />
    <span className={st.text}>{props.text}</span>
    <input type="button" value="Удалить" onClick={props.onDelete} className={st.btn}/>
  </div>
)