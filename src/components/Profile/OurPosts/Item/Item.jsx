import React from "react"
import st from './Item.module.css'
import avatar from '../../../../img/avatar.jpg'
const Item = (props) =>          
              <div>
                <img className={st.avatar} src={avatar} alt="avatar"/>
                {props.text}
              </div>;

export default Item